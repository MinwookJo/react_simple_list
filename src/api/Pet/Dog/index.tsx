import Axios, {AxiosResponse} from "axios";
import {SERVER_URL} from "../../../constant";
import {Pet} from "../index";

export interface Dog extends Pet{
}

export const fetchDogs = async () => {
    return(
        Axios.get(SERVER_URL + '/dogs').then(
            (response: AxiosResponse): Dog[] => {
                if (response.data.length < 1) {
                    throw new Error('No Dogs');
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
