import React, { Component } from "react";
import store from '../store';
import DisplayNumber from "../components/DisplayNumber";

// export default class extends Component{
export default class Container extends Component{

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

    render(){
        return <DisplayNumber number={this.state.number}></DisplayNumber>
    }
}