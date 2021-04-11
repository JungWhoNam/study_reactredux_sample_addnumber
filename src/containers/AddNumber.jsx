// react-redux 사용시
import AddNumber from '../components/AddNumber';
import {connect} from 'react-redux';

// 다른곳에서 값이 입력될때 (예.. + button 클릭)
// redux에 distpatch할 내용을 적는다... 한 마디로 action을 보냄
function mapReduxDispatchToReactProps(dispatch) {
    return {
        // AddNumber props로 전달될 내용을 적음
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size});
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);


// 아래 코드... react와 redux를 따로 사용할때
// import React, { Component } from "react";
// import store from '../store';
// import AddNumber from "../components/AddNumber";

// // export default class extends Component{
// export default class Container extends Component{
//     render(){
//         return <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREAMENT', size:size});
//         }}></AddNumber>
//     }
// }