import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { PostCards } from "./components/PostCards/PostCards";
import styles from "./styles/App.module.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <PostCards />
      </div>
    </>
  );
}
