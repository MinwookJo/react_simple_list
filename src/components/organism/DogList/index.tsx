import {ReactNode} from "react";
import * as React from "react";
import {Dog, fetchDogs} from "../../../api/Pet/Dog";
import DogListItem from "../../molecule/DogListItem";

interface State {
    dogs: Dog[]
}

interface Props {

}

const initialState: State = {
    dogs: []
};

class DogList extends React.Component<Props, State> {
    state = initialState;

    componentWillMount() {
        fetchDogs().then(
            (response: Dog[]) => {
                this.setState({dogs: response})
            }
        ).catch(
            (err) => {
                console.log('NetWorkError', err);
            }
        )
    }

    _renderDogItems = (dogs: Dog[]) => {
        const dogItems:ReactNode[] = [];
        dogs.map(
            (value: Dog, index: number) => {
                dogItems.push(
                    <DogListItem dog={value} key={'dog' + index}/>
                );
            }
        );
        return dogItems;
    };

    render() {
        const {dogs} = this.state;
        return(
            <div>
                {this._renderDogItems(dogs)}
            </div>
        );
    }
}

export default DogList;