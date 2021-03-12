import { Person } from "../types";
import { getQuestionsFor } from "./questions";

export async function getFeedbackFor(person: Person) {
  const dummyAnswer1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const dummyAnswer2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.";

  const questions = await getQuestionsFor(person);
  return questions.map((question, i) => {
    return {
      question,
      answer: i % 2 === 1 ? dummyAnswer1 : dummyAnswer2,
    };
  });
}
