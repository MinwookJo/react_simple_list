import * as React from "react";
import {GENDER} from "../../../constant";
import FEMALE from '../.././../assets/image/femail.png';
import MALE from '../.././../assets/image/mail.png';
import ImageBox from "../../atom/ImageBox";
import './styles.css';

interface Props {
    gender: GENDER,
    imageClassName?: string
}

// gender 에 맞게 이미지를 보여주는 컴포넌트
const GenderViewer = (props: Props) => {
    const {gender, imageClassName} = props;
    if (gender === GENDER.FEMAIL) {
        return <ImageBox imageSrc={FEMALE} imageClassName={['gender-viewer-image', imageClassName].join(' ')}/>;
    } else {
        return <ImageBox imageSrc={MALE} imageClassName={['gender-viewer-image', imageClassName].join(' ')}/>;
    }
};

export default GenderViewer;