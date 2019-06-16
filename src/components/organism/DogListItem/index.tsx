import * as React from "react";
import {Dog} from "../../../api/Pet/Dog";
import ImageBox from "../../atom/ImageBox";
import Label from "../../atom/Label";
import GenderViewer from "../../molecule/GenderViewer";
import HorizontalTitleLabel from "../../molecule/HorizontalTitleLabel";
import './styles.css';

interface Props {
    dog: Dog
}
// 강아지에 관한 정보를 보여주는 컴포넌트
class DogListItem extends React.Component<Props> {
    render() {
        const {dog} = this.props;
        return (
            <div className={'dog-list-item'}>
                <ImageBox imageSrc={dog.imageUrl}/>
                <div className={'text-section'}>
                    <HorizontalTitleLabel title={'Id'} titleClassName={'title'} wrapperClassName={'wrapper'}>
                        <div className={['content', 'id'].join(' ')}>{dog._id}</div>
                    </HorizontalTitleLabel>
                    <HorizontalTitleLabel title={'Name'} titleClassName={'title'} wrapperClassName={'wrapper'}>
                        <div className={['content', 'name'].join(' ')}>{dog.name}</div>
                    </HorizontalTitleLabel>
                    <HorizontalTitleLabel title={'Age'} titleClassName={'title'} wrapperClassName={'wrapper'}>
                        <div className={['content', 'age'].join(' ')}>{dog.age}</div>
                    </HorizontalTitleLabel>
                    <HorizontalTitleLabel title={'Gender'} titleClassName={'title'} wrapperClassName={'wrapper'}>
                        <GenderViewer gender={dog.gender} imageClassName={'gender'}/>
                        <Label>{dog.gender}</Label>
                    </HorizontalTitleLabel>
                </div>
            </div>
        );
    }
}

export default DogListItem