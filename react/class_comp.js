import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props)
   
    this.state = {count:0}
    }

    increment = ()=>{this.setState({count:this.state.count+1})}

    render(){
        return(<>
        <h2>count:{this.state.count}</h2>
        <button onClick={this.increment}>inc</button>
        </>)
    }

}
export default Counter

// Lists
// import ReactDOM from 'react-dom/client';

// import React from "react";

// function StudentsList() {
//   const students = [
//     { id: 1, name: "Rahul", marks: 80 },
//     { id: 2, name: "Anita", marks: 90 },
//     { id: 3, name: "Kiran", marks: 85 }
//   ];

//   return (
//     <ul>
//       {students.map((student) => (
//         <li key={student.id}>
//           {student.name} - {student.marks}
//         </li>
//       ))}
//     </ul>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentsList/>);


//Sending data from child to parent
//  let Parent = ()=>{
//     const [name,setName]  = useState('')

//     let CallChildComp = (data)=>{
//         setName(data)
//     }
//     return(<>
//     <h1>Message:{name}</h1>
//     <Child sendData={CallChildComp}/>
//     </>)
//  }

//  let Child = ({sendData})=>{
//     return(<>
//     <button onClick={()=>sendData("hello from child")}>send data</button>
//     </>)
//  }
