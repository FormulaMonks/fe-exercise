import styles from "./styles.css";
import { MainLayout } from "src/layouts";

export function Home() {
  return (
    <MainLayout title="Home | Honesto">
      <div className={styles.container}>
        <div>Hello!</div>
      </div>
    </MainLayout>
  );
}
