import { MyButton } from "../MyButton/MyButton";
import styles from "./PromocionCard.module.css";

interface PromocionCardProps {
  titleProp: string;
  descripcionProp: string;
  imageUrl: string;
}
export function PromocionCard({
  titleProp,
  descripcionProp,
  imageUrl,
}: PromocionCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={titleProp} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{titleProp}</h3>
        <p className={styles.description}>{descripcionProp}</p>
        <div className={styles.actions}>
          <MyButton variant="outline" size="md">
            Ver detalles
          </MyButton>
        </div>
      </div>
    </article>
  );
}
