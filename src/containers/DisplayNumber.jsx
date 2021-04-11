// react-redux 사용시
import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';

// redux에 state이 변경될때 불어질 함수 (한마디로 subscribe하는 경우)
// 첫번째 인자로 변경된 state를 받은
function mapReduxStateToReactProps(state) {
    return {
        // DisplayNumber에 props로 전달될 내용을 적음
        number:state.number
    };
}
export default connect(mapReduxStateToReactProps)(DisplayNumber);


// 아래 코드... react와 redux를 따로 사용할때
// import React, { Component } from "react";
// import store from '../store';
// import DisplayNumber from "../components/DisplayNumber";


// // export default class extends Component{
// export default class Container extends Component{

//     state = { number: store.getState().number }

//     // if use setState in the constructor you get an error... so use componentDidMount instead
//     // constructor(props){
//     //     super(props);
//     //     store.subscribe(function(){
//     //       this.setState({number:store.getState().number});
//     //     }.bind(this));
//     // }

//     // https://www.pluralsight.com/guides/how-to-use-componentwillmount
//     // triggers before the initial render, and the function will only trigger once in the lifespan of a component.
//     // https://sentry.io/answers/componentWillMount-has-been-renamed/
//     componentDidMount() {
//         store.subscribe(function () {
//             this.setState({ number: store.getState().number });
//         }.bind(this));
//     }

//     render(){
//         return <DisplayNumber number={this.state.number}></DisplayNumber>
//     }
// }