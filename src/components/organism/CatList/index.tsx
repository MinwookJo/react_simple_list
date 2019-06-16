import {ReactNode} from "react";
import * as React from "react";
import {Cat, fetchCats} from "../../../api/Pet/Cat";
import Label from "../../atom/Label";
import LoadingImage from "../../molecule/LoadingImage";
import CatListItem from "../CatListItem";

interface State {
    cats: Cat[],
    visible: boolean
}

interface Props {

}

const initialState: State = {
    cats: [],
    visible: false
};

// 고양이 리스트
class CatList extends React.Component<Props, State> {
    state = initialState;

    // 렌더링 전 request 를 보냄
    componentWillMount() {
        this.setState({visible: true});
        fetchCats().then(
            (response: Cat[]) => {
                // 성공적으로 요청을 받으면 실행됨
                this.setState({cats: response});
                this.setState({visible: false});
            }
        ).catch(
            (err) => {
                // 실패 시 실행됨
                console.log('NetWorkError', err);
                this.setState({visible: false});
            }
        )
    }

    _renderCatItems = (cats: Cat[]) => {
        const catItems:ReactNode[] = [];
        // cat data 만큼 CatListItem 을 렌더링함
        cats.map(
            (value: Cat, index: number) => {
                catItems.push(
                    <CatListItem cat={value} key={'cat' + index}/>
                );
            }
        );
        // 캣 아이템이 하나도 없으면 데이터없음 라벨을 보여줌
        if (catItems.length < 1) {
            catItems.push(
                <Label>데이터가 없음</Label>
            );
        }
        return catItems;
    };

    render() {
        const {cats, visible} = this.state;
        return(
            <div>
                {this._renderCatItems(cats)}
                <LoadingImage visible={visible}/>
            </div>
        );
    }
}

export default CatList;