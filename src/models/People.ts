export interface People {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export type PeopleStringField = Omit<
  People,
  "films" | "species" | "starships" | "vehicles"
>;

export const emptyPeople: People = {
  name: "",
  birth_year: "",
  mass: "",
  height: "",
  url: "",
  created: "",
  edited: "",
  eye_color: "",
  hair_color: "",
  gender: "",
  skin_color: "",
  homeworld: "",
  films: [],
  species: [],
  starships: [],
  vehicles: [],
};

const peopleStringFieldsObj: PeopleStringField = {
  name: "",
  birth_year: "",
  mass: "",
  height: "",
  url: "",
  created: "",
  edited: "",
  eye_color: "",
  hair_color: "",
  gender: "",
  skin_color: "",
  homeworld: "",
};

export const PeopleStringFieldKeys = Object.keys(peopleStringFieldsObj);
