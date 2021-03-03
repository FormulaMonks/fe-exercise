import styles from "./styles.css";
import { MainLayout } from "../../layouts";

export function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div>Hello!</div>
      </div>
    </MainLayout>
  );
}
