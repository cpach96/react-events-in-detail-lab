// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {

    eventHandler = (event) =>{
        event.persist();
        let tester = this.props.onDelayedClick
        setTimeout(function(){ tester(event) }, this.props.delay);
    }

    render(){
        return(
            <button onClick={this.eventHandler}/>
    
        )
    }

}

