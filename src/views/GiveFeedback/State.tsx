import { Person } from "src/data";
import { GiveFeedbackView } from "./View";

type Props = {
  person: Person;
  questionId: string;
};

export function State(props: Props) {
  const { person, questionId } = props;
  return (
    <GiveFeedbackView
      key={[person.id, questionId].join("-")}
      person={person}
      questionId={questionId}
    />
  );
}
