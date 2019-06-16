import * as React from "react";
import {Fragment} from 'react';
import Loading from '../../../assets/image/loading.png';
import './styles.css';

interface Props {
    visible: boolean;
}

// visible 에 따라 로딩화면을 보여주는 컴포넌트
class LoadingImage extends React.Component<Props> {
    render() {
        const { visible } = this.props;
        return (
            <Fragment>
                {visible && (
                    <div className={['wait'].join(' ')}>
                        <img
                            className={['loading-img'].join(' ')}
                            src={Loading}
                            alt={''}
                        />
                    </div>
                )}
            </Fragment>
        );
    }
}

export default LoadingImage;
