import Axios, {AxiosResponse} from "axios";
import {SERVER_URL} from "../../../constant";
import {Pet} from "../index";

export interface Cat extends Pet{
}

export const fetchCats = async () => {
    return(
        Axios.get(SERVER_URL + '/cats').then(
            (response: AxiosResponse): Cat[] => {
                if (response.data.length < 1) {
                    throw new Error('No Cats');
                }
                return response.data
            }
        ).catch(
            (err) => {
                console.log('Network Error', err);
            }
        )
    );
};
