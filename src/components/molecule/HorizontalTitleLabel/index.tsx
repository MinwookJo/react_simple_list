import * as React from "react";
import Label from "../../atom/Label";
import './styles.css';

interface Props {
    title: string;
    wrapperClassName?: string;
    titleClassName?: string;
}

// 가로로 타이틀과 라벨이 붙어있는 컴포넌트
class HorizontalTitleLabel extends React.Component<Props> {
    render() {
        return(
            <div className={['display-flex-row', 'horizontal-title-label', this.props.wrapperClassName].join(' ')}>
                <div className={'title'}>{this.props.title}</div>
                <Label>{this.props.children}</Label>
            </div>
        );
    }
}

export default HorizontalTitleLabel;
