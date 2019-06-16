import * as React from "react";
import {Fragment} from 'react';
import CAT_ICON from '../../../../../assets/image/cat.png';
import DOG_ICON from '../../../../../assets/image/dog.png';
import ImageBox from "../../../../atom/ImageBox";
import {PetType} from "../../index";
import './styles.css';

interface Props {
    onChange: (select: PetType) => void,
    currentSelectedPetType: PetType
}
// 고양이 강아지를 선택하는 헤더
// 현재 선택된 고양이 강아지 옵션에 따라 해더 스타일을 변경함
class PetListHeader extends React.Component<Props> {
    render() {
        const {onChange, currentSelectedPetType} = this.props;
        return(
            <div className={['pet-list-header', 'display-flex-row'].join(' ')}>
                <div onClick={() => onChange(PetType.CAT)}
                     className={'header-option-item'}>
                    <div className={currentSelectedPetType === PetType.CAT
                        ? 'selected-label'
                        : 'label'}>고양이</div>
                    { currentSelectedPetType === PetType.CAT
                        ? <ImageBox imageSrc={CAT_ICON} imageClassName={'image'}/>
                        : <Fragment/>}
                </div>
                <div onClick={() => onChange(PetType.DOG)}
                     className={'header-option-item'}>
                    <div className={currentSelectedPetType === PetType.DOG
                        ? 'selected-label'
                        : 'label'}>강아지</div>
                    { currentSelectedPetType === PetType.DOG
                        ? <ImageBox imageSrc={DOG_ICON} imageClassName={'image'}/>
                        : <Fragment/>}
                </div>
            </div>
        );
    }
}

export default PetListHeader;
