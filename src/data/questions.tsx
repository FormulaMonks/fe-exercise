import { useCallback } from "react";
import { Person, Question } from "./types";
import { getQuestionsFor } from "./fake";
import { useAsyncData } from "./useAsyncData";

export function useQuestionsFor(person: Person) {
  const questions = useAsyncData(
    useCallback(() => getQuestionsFor(person), [person.id])
  );
  if (questions === "loading") return "loading";

  const first = questions[0];
  if (!first) throw new Error("No questions for person " + person.id);
  const indexOf = (question: Question) => {
    const currentIndex = questions.findIndex((q) => q.id === question.id);
    if (currentIndex === -1)
      throw new Error("Did not find question " + question.id);
    return currentIndex;
  };

  return {
    all: questions,
    byId: (questionId: string) => questions.find((q) => q.id === questionId),
    count: questions.length,
    first,
    indexOf,
    next: (question: Question) => questions[indexOf(question) + 1],
    prev: (question: Question) => questions[indexOf(question) - 1],
  };
}
