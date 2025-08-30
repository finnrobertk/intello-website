import Image, { ImageProps } from "next/image";
export default function MdxImage(props: ImageProps) {
  // Defaults for nicer look inside prose
  return <Image {...props} sizes={props.sizes ?? "100vw"} className={"rounded-xl " + (props.className ?? "")} />;
}
