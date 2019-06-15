import * as React from "react";
import {PetType} from "../../index";
import './styles.css';

interface Props {
    onChange: (select: PetType) => void,
    currentSelectedPetType: PetType
}

class PetListHeader extends React.Component<Props> {
    render() {
        const {onChange, currentSelectedPetType} = this.props;
        return(
            <div className={['pet-list-header', 'display-flex-row'].join(' ')}>
                <div onClick={() => onChange(PetType.CAT)}
                     className={currentSelectedPetType === PetType.CAT
                         ? 'selected-header-option-item'
                         : 'header-option-item'}>
                    Cat
                </div>
                <div onClick={() => onChange(PetType.DOG)}
                     className={currentSelectedPetType === PetType.DOG
                         ? 'selected-header-option-item'
                         : 'header-option-item'}>
                    Dog
                </div>
            </div>
        );
    }
}

export default PetListHeader;
