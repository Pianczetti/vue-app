import { people } from "../storage/people";

export function usePeople() {
  const activePerson = people.find(person => person.isActive);

  return {
    activePerson,
  };
}
