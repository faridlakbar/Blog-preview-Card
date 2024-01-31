import imageArticle from "../../assets/images/illustration-article.svg";
import imageProfile from "../../assets/images/image-avatar.webp";
import styles from "./CardImage.module.css";

export default function Card() {
  const stylesSection = {
    display: "flex",
  };

  return (
    <article className={styles.card}>
      <img
        src={imageArticle}
        className={styles.cardImage}
        alt="image article"
      />
      <span>Learning</span>
      <p>Published 21 Dec 2023</p>
      <h1>HTML & CSS foundations</h1>
      <p>
        These languages are the backbone of every website, defining structure,
        content and presentation.
      </p>
      <section style={stylesSection}>
        <img src={imageProfile} alt="profile image" />
        <h2>Greg hooper</h2>
      </section>
    </article>
  );
}
