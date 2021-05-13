import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

    mouseCoordinates = (event) => {
        let newCoords = [event.clientX,event.clientY]
        return this.props.onReceiveCoordinates(newCoords)
    }

    render(){
        return(
            <button onClick={this.mouseCoordinates}/>
        )
    }

}

