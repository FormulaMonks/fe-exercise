import { useQuery } from "react-query";
import { getFeedbackFor } from "./fake";
import { Person } from "./types";

export function useFeedbackFor(person: Person) {
  const result = useQuery(["feedback", person.id], () =>
    getFeedbackFor(person)
  );
  if (result.status === "error") throw result.error;
  if (result.status === "idle") throw new Error("Unexpected idle");
  if (result.status === "loading") return "loading";
  return result.data;
}
