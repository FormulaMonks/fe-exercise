import { useCallback } from "react";
import { getFeedbackFor } from "./fake";
import { Person } from "./types";
import { useAsyncData } from "./useAsyncData";

export function useFeedbackFor(person: Person) {
  return useAsyncData(useCallback(() => getFeedbackFor(person), [person.id]));
}
