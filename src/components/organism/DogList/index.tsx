import {ReactNode} from "react";
import * as React from "react";
import {Dog, fetchDogs} from "../../../api/Pet/Dog";
import LoadingImage from "../../molecule/LoadingImage";
import Label from "../CatList";
import DogListItem from "../DogListItem";

interface State {
    dogs: Dog[],
    visible: boolean
}

interface Props {

}

const initialState: State = {
    dogs: [],
    visible: false
};

// 강아지 리스트
class DogList extends React.Component<Props, State> {
    state = initialState;
    // 렌더링 전 request 를 보냄
    componentWillMount() {
        this.setState({visible: true});
        fetchDogs().then(
            // 성공
            (response: Dog[]) => {
                this.setState({dogs: response});
                this.setState({visible: false});
            }
        ).catch(
            // 실패
            (err) => {
                console.log('NetWorkError', err);
                this.setState({visible: false});
            }
        )
    }

    _renderDogItems = (dogs: Dog[]) => {
        const dogItems:ReactNode[] = [];
        // 도그 데이터 만큼 도그아이템을 렌더링 함
        dogs.map(
            (value: Dog, index: number) => {
                dogItems.push(
                    <DogListItem dog={value} key={'dog' + index}/>
                );
            }
        );
        // 도그 아이템이 하나도 없으면 데이터없음 라벨을 보여줌
        if (dogItems.length < 1) {
            dogItems.push(
                <Label>데이터가 없음</Label>
            );
        }
        return dogItems;
    };

    render() {
        const {dogs, visible} = this.state;
        return(
            <div>
                {this._renderDogItems(dogs)}
                <LoadingImage visible={visible}/>
            </div>
        );
    }
}

export default DogList;