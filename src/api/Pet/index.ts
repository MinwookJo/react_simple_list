import {GENDER} from "../../constant";

// Cat, Dog 타입 공통에 Pet type
export interface Pet {
    _id: string,
    imageUrl: string,
    age: number,
    name: string,
    gender: GENDER
}
