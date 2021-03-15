import { useState } from "react";
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

  // Map from quesion id to answers
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());

  const questions = useQuestionsFor(person);
  if (questions === "loading") return <Loading />;
  const question = questions.byId(questionId);
  if (!question) return <NotFound />;

  return (
    <View
      defaultValue={answers.get(question.id) || ""}
      key={[person.id, questionId].join("-")}
      onChange={(newAnswer) =>
        setAnswers((prev) => {
          // Create a copy to avoid mutation
          const result = new Map(prev);
          result.set(question.id, newAnswer);
          return result;
        })
      }
      onSubmit={() => {}}
      person={person}
      question={question}
    />
  );
}
