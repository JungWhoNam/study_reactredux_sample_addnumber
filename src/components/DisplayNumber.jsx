import React, { Component } from "react";
import store from '../store';

export default class DisplayNumber extends Component {
    state = { number: store.getState().number }

    // if use setState in the constructor you get an error... so use componentDidMount instead
    // constructor(props){
    //     super(props);
    //     store.subscribe(function(){
    //       this.setState({number:store.getState().number});
    //     }.bind(this));
    // }

    // https://www.pluralsight.com/guides/how-to-use-componentwillmount
    // triggers before the initial render, and the function will only trigger once in the lifespan of a component.
    // https://sentry.io/answers/componentWillMount-has-been-renamed/
    componentDidMount() {
        store.subscribe(function () {
            this.setState({ number: store.getState().number });
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Display Number</h1>
                <input type="text" value={this.state.number} readOnly></input>
            </div>
        );
    };
}