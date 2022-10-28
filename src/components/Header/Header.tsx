import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="./logo.png" alt="logo" />
        <h1 className={styles.appTitle}>Feed de noticias</h1>
      </div>
    </header>
  );
}
