import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

// O valor default de hasBorder eh true
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  // se a propriedade nao for nem enviada, ela vai ser diferente de false
  // const hasBorder = props.hasBorder !== false;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
