import * as React from "react";
import PetList from "./components/PetList";
import PetListHeader from "./components/PetListHeader";
import './styles.css';

interface State {
    currentSelectedPetType: PetType,
}

interface Props {}

export enum PetType {
    CAT = 0,
    DOG = 1
}

const initialState: State = {
  currentSelectedPetType: PetType.CAT
};

class ListPage extends React.Component<Props, State> {
    state = initialState;

    onChangeHeaderOption = (select: PetType) => {
        this.setState({currentSelectedPetType: select})
    };

    render() {
        const {currentSelectedPetType} = this.state;
        return(
            <div className={'list-page-container'}>
                <PetListHeader onChange={this.onChangeHeaderOption}
                               currentSelectedPetType={currentSelectedPetType}/>
                <PetList currentSelectedPetType={currentSelectedPetType}/>
            </div>
        );
    }
}

export default ListPage;