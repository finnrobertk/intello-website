export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-neutral-500 sm:flex-row sm:px-6 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="font-medium text-neutral-800 dark:text-neutral-200">Intello</span>
          <span>© 2025</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@intello.no"
            className="transition-colors hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
