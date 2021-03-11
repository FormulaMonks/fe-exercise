import styles from "./styles.css";
import { MainLayout } from "src/layouts";
import { usePeople } from "src/data";
import { Line } from "./Line";

export function Home() {
  const people = usePeople();
  return (
    <MainLayout title="Home | Honesto">
      <h1 className={styles.heading}>Give Feedback</h1>
      <div className={styles.card}>
        {people.map((person) => (
          <Line key={person.id} person={person} />
        ))}
      </div>
    </MainLayout>
  );
}
