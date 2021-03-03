import { Greeting } from "../Greeting";
import { MainLayout } from "../layouts";
import "./styles.css";

export function App() {
  return (
    <MainLayout>
      <Greeting />
    </MainLayout>
  );
}
