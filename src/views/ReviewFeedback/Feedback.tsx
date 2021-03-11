import styled from "styled-components";
import { Person, useFeedbackFor } from "src/data";
import { FeedbackSection } from "./FeedbackSection";

const Container = styled.div`
  padding: 50px 30px 30px 35px;
`;
const H2 = styled.h2`
  color: gray;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 40px 0;
`;

type Props = { person: Person };

export function Feedback(props: Props) {
  const { person } = props;
  const feedback = useFeedbackFor(person);
  return (
    <Container>
      <H2>Feedback you have provided for {person.name}</H2>
      {feedback === "loading" ? (
        <p>Loading...</p>
      ) : (
        feedback.map((row) => (
          <FeedbackSection
            key={row.question.id}
            question={row.question.text}
            answer={row.answer}
          />
        ))
      )}
    </Container>
  );
}
