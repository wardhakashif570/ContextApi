import React,{useReducer} from 'react';
import Counterreducer from './CounterReducer';

const Child2 =()=>{
    let [state,dispatch]=useReducer(Counterreducer,1);
    return(
<div>
<h3>Value of the reducer state is {state}</h3>
<button onClick={()=>{
dispatch('INCREMENT')
}}>
    Increment Reducer</button>
</div>
    );
}
export default Child2;