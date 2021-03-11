import styled from "styled-components";
import styles from "./styles.css";
import { MainLayout } from "src/layouts";

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
  justify-content: center;
  min-height: 400px;
  width: 100%;
`;
const H1 = styled.h1`
  font-size: 24px;
`;

export function Loading() {
  return (
    <MainLayout title="Loading">
      <Container>
        <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <H1>Loading...</H1>
      </Container>
    </MainLayout>
  );
}
