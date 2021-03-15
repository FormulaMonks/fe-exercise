import { Person } from "src/data";
import { View } from "./View";

type Props = {
  person: Person;
  questionId: string;
};

export function State(props: Props) {
  const { person, questionId } = props;
  return (
    <View
      key={[person.id, questionId].join("-")}
      person={person}
      questionId={questionId}
    />
  );
}
