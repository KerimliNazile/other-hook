import { useReducer, useRef } from 'react';
import './App.css';
import Example from './example/inex';


// function Reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       console.log("Increment");
//       return { count:state.count+1 }

//     case 'decrement':
//       console.log("decrement");
//       return { count:state.count-1 }
//     default:
//       break;
//   }
// }

// const App = () => {
//   const [state, setState] = useReducer(Reducer, { count:0})

//   return (
//     <>
//       {state.count}
//       <button onClick={() => setState({ type: 'increment' })}>+</button>
//       <button onClick={() => setState({ type: 'decrement' })}>-</button>
//     </>
//   );

// }
function App() {

  const inp = useRef()
  const showbutton = useRef()
  function showValue() {
    console.log(inp.current.value)
    console.log(showbutton.current.textContent);


  }
  return (
    <>
      <input type="text" ref={inp} />
      <button onClick={showValue} ref={showbutton}>Show</button>
<Example/>
    </>
  )
}

// function reducer () {

// }


// function App(){
//     const [state,dispatch]=useReducer(reducer,{count:1})

// return (
// <>
//   <button>+</button>
//   <div>deyerim:{state.count}</div>
// </>
// )
// }


export default App











