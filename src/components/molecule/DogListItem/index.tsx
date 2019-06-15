import * as React from "react";
import {Dog} from "../../../api/Pet/Dog";

interface Props {
    dog: Dog
}

class DogListItem extends React.Component<Props>{
    render() {
        const {dog} = this.props;
        return(
            <div>
                <img src={dog.imageUrl} alt={''}/>
                <div>{'Id: ' + dog._id}</div>
                <div>{'Name: ' + dog.name}</div>
                <div>{'Age: ' + dog.age}</div>
                <div>{'Gender: ' + dog.gender}</div>
            </div>
        );
    }
}

export default DogListItem