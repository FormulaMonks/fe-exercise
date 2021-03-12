import { Person, Question } from "./types";

const questions: Question[] = [
  { text: "How much do you trust $name to deliver high quality work?" },
  { text: "Is $name up to date with the latest accounting regulations?" },
  {
    text: "How well does $name understand the technical domain of our product?",
  },
  {
    text:
      "Have there been any situations where $name could have managed their emotions better? What happened?",
  },
  {
    text:
      "Does $name care about our users and treats customer support as a high priority?",
  },
  {
    text:
      "What would you like $name to work on the most during the next month, to enable their continued growth?",
  },
  {
    text: "How transparent and clear are $namePossessive plans and work tasks?",
  },
  {
    text: "How well does $name understand our business goals and roadmap?",
  },
  { text: "Is there anything else you’d like to share with $name?" },
].map((q, i) => {
  return { ...q, id: "q" + i };
});

const possessive = (name: string) =>
  name.endsWith("s") ? `${name}‘` : `${name}‘s`;
const questionsForPerson = (person: Person): Question[] =>
  questions.map((q) => ({
    ...q,
    text: q.text
      .replace(/\$namePossessive/g, possessive(person.name))
      .replace(/\$name/g, person.name),
  }));

export function useQuestionsFor(person: Person) {
  const questions = questionsForPerson(person);
  const first = questions[0];
  if (!first) throw new Error("No questions for person " + person.id);
  const indexOf = (question: Question) => {
    const currentIndex = questions.findIndex((q) => q.id === question.id);
    if (currentIndex === -1)
      throw new Error("Did not find question " + question.id);
    return currentIndex;
  };

  // Dummy condition to infer a possible return type
  if (first.id === "zzz") return "loading";
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
