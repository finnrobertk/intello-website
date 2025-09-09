import { NextResponse } from "next/server";
import { listBlog } from "@/lib/blog";
import { SITE } from "@/config/site";

export const runtime = 'nodejs';

/** Map Next locale -> RSS language code */
function mapLanguage(locale: string) {
  switch ((locale || "en").toLowerCase()) {
    case "nb":
    case "no":
    case "nb-no":
      return "nb-NO";
    case "en":
    case "en-us":
    default:
      return "en-US";
  }
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getLocaleFromUrl(req: Request): string {
  try {
    const { pathname } = new URL(req.url);
    // Expect: /<locale>/blog/rss.xml
    const parts = pathname.split('/').filter(Boolean);
    // parts[0] should be locale
    const loc = parts[0] || 'en';
    return loc;
  } catch {
    return 'en';
  }
}

export async function GET(req: Request) {
  const locale = getLocaleFromUrl(req);
  const language = mapLanguage(locale);

  // Hent bloggposter for valgt språk
  const posts = listBlog(locale); // [{title, slug, date, summary, tags?}, ...]

  // Kanal-link (blogg-oversikt)
  const channelLink = `${SITE.url}/${locale}/blog`;

  // Bygg item-listen
  const itemsXml = posts
    .map((p) => {
      const title = escapeXml(p.title);
      const link = `${SITE.url}/${locale}/blog/${p.slug}`;
      const guid = link;
      const description = escapeXml(p.summary || "");
      const pubDate = p.date ? new Date(p.date).toUTCString() : new Date().toUTCString();

      return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <guid isPermaLink="true">${guid}</guid>
          <pubDate>${pubDate}</pubDate>
          ${
            description
              ? `<description>${description}</description>
                 <content:encoded><![CDATA[${p.summary}]]></content:encoded>`
              : ""
          }
        </item>`;
    })
    .join("");

  // Komplett RSS XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
      <title>${escapeXml(SITE.name)} — Blog</title>
      <link>${channelLink}</link>
      <description>${escapeXml(SITE.description)}</description>
      <language>${language}</language>
      <generator>Next.js RSS</generator>
      ${itemsXml}
    </channel>
  </rss>`.trim();

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=600, stale-while-revalidate=86400",
    },
  });
}
