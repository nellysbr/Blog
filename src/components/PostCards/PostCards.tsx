import styles from "./PostCards.module.css";

export function PostCards() {
  return (
    <main className={styles.mainContainer}>
      <article className={styles.cardContainer}>
        {/* Header */}
        <header className={styles.articleHeader}>
          <div className={styles.author}>
            <div className={styles.imgContainer}>
              <img
                className={styles.avatar}
                src="https://avatars.githubusercontent.com/u/73605907?v=4"
              />
            </div>
            <div className={styles.userInfoContainer}>
              <strong className={styles.userInfo}>Nelson Mello</strong>
              <span className={styles.role}>Web developer</span>
            </div>
          </div>
          <time
            className={styles.publishedTime}
            title="28 de outubro de 2022"
            dateTime="2022-10-22 17:42:00"
          >
            publicado ha 1h
          </time>
        </header>

        {/* Title */}
        <div className={styles.articleTitle}>Fala galera!</div>

        {/* Content */}
        <div className={styles.articleContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            qui repellat architecto pariatur est quis facere quae sunt inventore
            saepe blanditiis, suscipit rem temporibus cumque tempore? Deserunt
            temporibus perferendis modi?
          </p>
        </div>

        {/* Form comentarios */}

        <form className={styles.formContainer}>
          <strong>Deixe o seu comentario</strong>

          <textarea placeholder="deixe o seu comentario" />
          <div className={styles.containerBtn}>
            <button type="submit">Publicar</button>
          </div>
        </form>
      </article>
    </main>
  );
}
