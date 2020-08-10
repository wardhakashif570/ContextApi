import React,{useContext} from 'react';
import CounterContext from './CounterContext';

const Child=(props)=>{
    let Countervalue=useContext(CounterContext);
    return(
            <div>
             <h1>This is the First Child {props.name}</h1>
             
             
             
             <h3>Counter value is :{Countervalue[0]}</h3>
             <button onClick={()=>{
                 Countervalue[1](++Countervalue[0])
             }}>
                 Increment Context
             </button>
             </div>
    );
}
export default Child;