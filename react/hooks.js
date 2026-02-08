import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

//USE STATE HOOK
// let App = ()=>{
//     let [color,setColor] = useState("Green")

//     let callback = () =>{
//       setColor('red')
//       console.log(color);
    
//   }
//   return(
//     <>
//     <h1>Color is {color}</h1>
//     <button onClick={callback}>
//       Change color
//     </button>
//     </>
//   )
// }

//USE STATE HOOK && USE EFFECT HOOK
// let App = ()=>{
//     let [counter,setCounter] = useState(0)
//     let callback = ()=>{
//       setCounter((counter)=>counter+1)
//     }
//     useEffect(()=>{
//       console.log(counter)
//     },[counter])

//   return(
//     <>
//     <h1>You visited this numof {counter}</h1>
//    <button onClick={callback}>clcik me</button>
//     </>
//   )
// }

// USE EFFECT HOOK WITH API CALL
// let Users = ()=>{
//   let [users,setUsers]=useState([]);

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setUsers(data))
//   },[])
//   return (
//     <ul>
//       {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
//   );
// }

// USE CONTEXT HOOK
// import React, { createContext, useContext } from 'react';
// import ReactDOM from 'react-dom/client';

// // 1️⃣ Create Context
// const ThemeContext = createContext();

// // 2️⃣ Provider
// const ThemePro = ({ children }) => {
//   return (
//     <ThemeContext.Provider value="dark">
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // 3️⃣ Consumer
// const Navbar = () => {
//   const theme = useContext(ThemeContext);
//   return <h1>Theme: {theme}</h1>;
// };

// // 4️⃣ Render
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ThemePro>
//     <Navbar />
//   </ThemePro>
// );

//USE REF HOOK
// let DomAccess = ()=>{
//   let inpEl = useRef(null)

//   useEffect(()=>{inpEl.current.focus()},[])

//   return(<>
//     <input type='text' ref={inpEl}/>
//   </>)
// }

// USE MEMO HOOK
// let ExpensiveCalc = ({number})=>{
//     console.log('Expensive calculation');

//     let CalcSomething = (num)=>{
//         let value = 0
//         for(let i=0;i<100000000;i++){
//             value += num * Math.random()
//         }
//         return value
//     }

//     let out = useMemo(()=>CalcSomething(number),[number])
//     console.log('Expensive calculation',out);
//     return <h1>The output of Complex function is {out} {
        
//     }</h1>
    
// }



// let App = ()=>{
//     let number = 2;
//     let [count,setCount] = useState(0);

//     return(<>
//     <ExpensiveCalc number={number}/>
//     <button onClick={()=>setCount(count+1)}>Increment</button>
//     <p>count:{count}</p>
//     </>)
// }

// export default App 


//USE CALLBACK HOOK
// let ChildComponent = React.memo(({handleClick})=>{
//     console.log('child comp');
    
//     return(<button onClick={handleClick}>click me</button>)
// })


// let App = ()=>{
//     let [count,setCount] = useState(0)
//     let handleClick = useCallback(()=>{
//         console.log('button clicked')
//     },[])
//     console.log('Parent component')
//     return(<>
//     <ChildComponent handleClick={handleClick}/>
//     <button onClick={()=>setCount(count+1)}>Increment</button>
//     <h2>count :{count}</h2>
    
//     </>)
// }

// export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

