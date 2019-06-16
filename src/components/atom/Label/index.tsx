import * as React from "react";
import './styles.css';

interface Props {
    className?: string
}
// 라벨 컴포넌트
export class Label extends React.Component<Props>{
    render() {
        const {className} = this.props;
        return(
            <div className={['label-wrapper', className].join(' ')}>
                {this.props.children}
            </div>
        );
    }
}

export default Label;