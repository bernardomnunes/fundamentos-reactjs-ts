import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

// O valor default de hasBorder eh true
export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  // se a propriedade nao for nem enviada, ela vai ser diferente de false
  // const hasBorder = props.hasBorder !== false;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
