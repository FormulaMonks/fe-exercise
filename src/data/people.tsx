export type Person = {
  avatarUrl: string;
  id: string;
  name: string;
};

const people: Person[] = [
  { name: "John Smith", avatarUrl: "https://i.pravatar.cc/150?img=68" },
  { name: "Martha Liberty", avatarUrl: "https://i.pravatar.cc/150?img=48" },
  { name: "Persephone Woodley" },
  { name: "Gertrude Boyle" },
  { name: "Bertram Patton", avatarUrl: "https://i.pravatar.cc/150?img=53" },
  { name: "Camron Devlin" },
  { name: "Jai Malone" },
  { name: "Ember Mcmillan" },
  { name: "Jeanette Hume" },
  { name: "Harold Hays" },
  { name: "Arianna Lennon" },
  { name: "Anna-Marie Orr" },
].map((p, i) => {
  const id = `p${i}`;
  return {
    avatarUrl: `https://i.pravatar.cc/100?u=${encodeURIComponent(id)}`,
    id,
    ...p,
  };
});

export function usePeople() {
  return people;
}

export function usePersonById(id: string) {
  return people.find((p) => p.id === id);
}
