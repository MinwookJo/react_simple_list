import * as React from "react";
import './styles.css';

interface Props {
    imageSrc: string;
    imageClassName?: string
}
// 이미지 컴포넌트
const ImageBox = (props: Props) => {
    const {imageSrc, imageClassName} = props;
  return(
      <img alt={''} src={imageSrc} className={['image-wrapper', imageClassName].join(' ')}/>
  );
};

export default ImageBox;
