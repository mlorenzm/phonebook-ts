import { PersonTypes } from "@/types";

interface ListProps {
  people: PersonTypes[];
  filtered: string;
}

const List = ({ people, filtered }: ListProps) => {
  const filteredData = people.filter((el) => {
    if (filtered === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      console.log(el.name.toLowerCase().includes(filtered));
      return el.name.toLowerCase().includes(filtered);
    }
  });
  return (
    <ul>
      {filteredData.map((person) => {
        return (
          <li key={person.id}>
            {person.id}//{person.name} - {person.number}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
