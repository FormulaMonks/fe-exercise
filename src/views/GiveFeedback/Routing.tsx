import { Redirect } from "react-router-dom";
import { Person, usePersonById, useQuestionsFor } from "src/data";
import { NotFound } from "../NotFound";
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
  if (person === "not-found") return <NotFound />;
  if (!questionId) return <RedirectToFirstQuestion person={person} />;
  return <GiveFeedbackView person={person} questionId={questionId} />;
}
