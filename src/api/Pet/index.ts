import {GENDER} from "../../constant";

export interface Pet {
    id: string,
    imageUrl: string,
    age: number,
    name: string,
    gender: GENDER
}
