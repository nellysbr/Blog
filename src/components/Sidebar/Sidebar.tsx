import styles from "./Sidebar.module.css";
import { TiPencil } from "react-icons/ti";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/73605907?v=4" />
        <strong className={styles.userInfo}>Nelson Mello</strong>
        <span className={styles.role}>Web developer</span>
      </div>
      <footer className={styles.btnEditar}>
        <a href="#">
          <TiPencil size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
