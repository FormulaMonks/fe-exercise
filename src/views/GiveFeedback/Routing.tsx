import { Redirect } from "react-router-dom";
import { Person, usePersonById, useQuestionsFor } from "src/data";
import { GiveFeedbackView } from "./View";

function RedirectToFirstQuestion(props: { person: Person }) {
  const { person } = props;
  const questions = useQuestionsFor(person);
  return (
    <Redirect
      to={`/give/${encodeURIComponent(person.id)}/${encodeURIComponent(
        questions.first.id
      )}`}
    />
  );
}

type Props = {
  personId: string;
  questionId?: string;
};

export function GiveFeedback(props: Props) {
  const { personId, questionId } = props;
  const person = usePersonById(personId);
  if (!person) throw new Error("Person not found");
  if (!questionId) return <RedirectToFirstQuestion person={person} />;
  return <GiveFeedbackView person={person} questionId={questionId} />;
}
