import Image, { ImageProps } from "next/image";

export default function MdxImage({ alt, className, sizes, ...rest }: ImageProps) {
  // Defaults for nicer look inside prose. Provide explicit alt to satisfy a11y.
  return (
    <Image
      alt={alt ?? ""}
      sizes={sizes ?? "100vw"}
      className={"rounded-xl " + (className ?? "")}
      {...rest}
    />
  );
}
