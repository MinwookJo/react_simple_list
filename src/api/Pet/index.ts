import {GENDER} from "../../constant";

export interface Pet {
    _id: string,
    imageUrl: string,
    age: number,
    name: string,
    gender: GENDER
}
