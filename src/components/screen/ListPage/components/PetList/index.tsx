import * as React from "react";
import {PetType} from "../../index";
import './styles.css';

interface Props {
    currentSelectedPetType: PetType
}

class PetList extends React.Component<Props> {
    render() {
        const {currentSelectedPetType} = this.props;
        return(
            <div className={'pet-list-wrapper'}>
                {currentSelectedPetType}
            </div>
        );
    }
}
export default PetList;