export interface Pokedex {

  name: string;
  id: number;
  height: number;
  weight: number;

  abilities: {

  ability:{
    name:string;
  }

  }[];

  types: {
    type: {
      name:string;

    }
  }[];

}
