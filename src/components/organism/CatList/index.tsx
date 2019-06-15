import {ReactNode} from "react";
import * as React from "react";
import {Cat, fetchCats} from "../../../api/Pet/Cat";
import CatListItem from "../../molecule/CatListItem";

interface State {
    cats: Cat[]
}

interface Props {

}

const initialState: State = {
    cats: []
};

class CatList extends React.Component<Props, State> {
    state = initialState;

    componentWillMount() {
        fetchCats().then(
            (response: Cat[]) => {
                this.setState({cats: response});
            }
        ).catch(
            (err) => {
                console.log('NetWorkError', err);
            }
        )
    }

    _renderCatItems = (cats: Cat[]) => {
        const catItems:ReactNode[] = [];
        cats.map(
            (value: Cat, index: number) => {
                catItems.push(
                    <CatListItem cat={value} key={'cat' + index}/>
                );
            }
        );
        return catItems;
    };

    render() {
        const {cats} = this.state;
        return(
            <div>
                {this._renderCatItems(cats)}
            </div>
        );
    }
}

export default CatList;