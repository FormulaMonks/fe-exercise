import { Person, useQuestionsFor } from "src/data";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";
import { View } from "./View";

type Props = {
  person: Person;
  questionId: string;
};

export function State(props: Props) {
  const { person, questionId } = props;
  const questions = useQuestionsFor(person);
  if (questions === "loading") return <Loading />;
  const question = questions.byId(questionId);
  if (!question) return <NotFound />;

  return (
    <View
      key={[person.id, questionId].join("-")}
      person={person}
      question={question}
    />
  );
}
