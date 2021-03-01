import styles from "./styles.css";
import logo from "./logo.svg";

export function Greeting() {
  return (
    <div className={styles.container}>
      <img alt="Theorem logo" className={styles.logo} src={logo} width="100" />
      <div>Hello!</div>
    </div>
  );
}
