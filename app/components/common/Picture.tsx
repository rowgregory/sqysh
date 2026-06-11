import Image from "next/image";
import { ComponentRef, FC, MouseEventHandler, Ref } from "react";

interface PictureProps {
  src: string;
  className: string;
  alt?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  imgRef?: Ref<ComponentRef<typeof Image>>;
  onClick?: MouseEventHandler<HTMLImageElement>;
  style?: any;
  fill?: any;
}

const Picture: FC<PictureProps> = ({
  src,
  alt = "",
  className,
  priority = false,
  width = 0,
  height = 0,
  imgRef,
  onClick,
  style,
  fill,
}) => (
  <Image
    onClick={onClick}
    ref={imgRef}
    src={src}
    alt={alt}
    width={width}
    height={height}
    sizes={width ? undefined : "100vw"}
    className={className}
    priority={priority}
    style={style}
    fill={fill}
  />
);

export default Picture;
