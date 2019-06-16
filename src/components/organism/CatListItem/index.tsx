import * as React from "react";
import {Cat} from "../../../api/Pet/Cat";
import ImageBox from "../../atom/ImageBox";
import Label from "../../atom/Label";
import GenderViewer from "../../molecule/GenderViewer";
import HorizontalTitleLabel from "../../molecule/HorizontalTitleLabel";
import './styles.css';

interface Props {
    cat: Cat
}
// 고양이에 관한 정보를 보여주는 컴포넌트
class CatListItem extends React.Component<Props>{
    render() {
        const {cat} = this.props;
        return(
            <div className={'cat-list-item'}>
                <ImageBox imageSrc={cat.imageUrl}/>
                <div className={'text-section'}>
                    <HorizontalTitleLabel title={'Id'} titleClassName={'title'} wrapperClassName={'wrapper'}>
                        <div className={['content', 'id'].join(' ')}>{cat._id}</div>
                    </HorizontalTitleLabel>
                    <HorizontalTitleLabel title={'Name'} titleClassName={'title'} wrapperClassName={'wrapper'}>
                        <div className={['content', 'name'].join(' ')}>{cat.name}</div>
                    </HorizontalTitleLabel>
                    <HorizontalTitleLabel title={'Age'} titleClassName={'title'} wrapperClassName={'wrapper'}>
                        <div className={['content', 'age'].join(' ')}>{cat.age}</div>
                    </HorizontalTitleLabel>
                    <HorizontalTitleLabel title={'Gender'} titleClassName={'title'} wrapperClassName={'wrapper'}>
                        <GenderViewer gender={cat.gender} imageClassName={'gender'}/>
                        <Label>{cat.gender}</Label>
                    </HorizontalTitleLabel>
                </div>
            </div>
        );
    }
}

export default CatListItem