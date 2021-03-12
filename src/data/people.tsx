import { getPeople } from "./fake";
import { Person } from "./types";
import { useAsyncData } from "./useAsyncData";

export function usePeople(): Person[] | "loading" {
  return useAsyncData(getPeople);
}

export function usePersonById(id: string): Person | "loading" | "not-found" {
  const people = usePeople();
  if (people === "loading") return "loading";
  return people.find((p) => p.id === id) || "not-found";
}
