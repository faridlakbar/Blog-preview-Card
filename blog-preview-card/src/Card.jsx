import imageArticle from "../../assets/images/illustration-article.svg";
import imageProfile from "../../assets/images/image-avatar.webp";
import styles from "./CardImage.module.css";

export default function Card() {
  const stylesSection = {
    display: "flex",
    alignItems: "center",
  };
  const h1 = {
    fontWeight: 800,
  };
  const h2 = {
    fontWeight: 600,
    fontSize: "16px",
  };

  return (
    <article className={styles.card}>
      <img
        src={imageArticle}
        className={styles.cardImage}
        alt="image article"
      />
      <span className={styles.category}>Learning</span>
      <p>Published 21 Dec 2023</p>
      <h1 style={h1}>HTML & CSS foundations</h1>
      <p className={styles.p}>
        These languages are the backbone of every website, defining structure,
        content and presentation.
      </p>
      <section style={stylesSection}>
        <img
          src={imageProfile}
          className={styles.imageProfile}
          alt="profile image"
        />
        <h2 style={h2}>Greg hooper</h2>
      </section>
    </article>
  );
}
