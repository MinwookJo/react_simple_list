import * as React from "react";
import {Cat} from "../../../api/Pet/Cat";

interface Props {
    cat: Cat
}

class CatListItem extends React.Component<Props>{
    render() {
        const {cat} = this.props;
        return(
            <div>
                <img src={cat.imageUrl} alt={''}/>
                <div>{'Id: ' + cat._id}</div>
                <div>{'Name: ' + cat.name}</div>
                <div>{'Age: ' + cat.age}</div>
                <div>{'Gender: ' + cat.gender}</div>
            </div>
        );
    }
}

export default CatListItem