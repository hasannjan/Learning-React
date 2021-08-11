import React from 'react';
import './App.css';

// function App() {
//     const details = [
//       ["COUNTRY", "CODE", "NUMBER", "NAME"], 
//       ["Pakistan","+92", "3128779060", "Hasan"],
//        ["UAE", "971", "3052013106", "Nadir"],
//        ["UK", "44" , "3452151273", "Usama"],
//        ["USA", "1", "3051613630" , "Umair"]
//     ]

//   return (
//     <div className="arrays">
//         {details.map(item => (
//           <table>
//             <div className="box">
//               <td>{item+""}</td>
//             </div>
//             </table>
//             ))} 
//     </div>
//   )
// } 

// class App extends React.Component {
//   render() { 
//     return (
//       <div>
//         <h1>Code goes there</h1>
//       </div>
//     )
//   }
// }

// //#1
// class App extends React.Component {
//   render(){
//   return (
//     <div>
//       <Header username="Hasan"/>
//       <Greeting/>
//     </div>
//     )
//   }
// }

// //#2
// class Header extends React.Component {
//   render() {
//   return (
//     <header>
//       <p>Welcome, {this.props.username}!</p>
//     </header>
//     )
//   }
// }

// //#3
// class Greeting extends React.Component {
//   render() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay

//   if (hours < 12){
//     timeOfDay = "Morning"
//   }
//   else if (hours >=12 && hours < 17){
//     timeOfDay = "Afternoon"
//   }
//   else {
//     timeOfDay = "Night"
//   }
//   return (
//     <h1>Good {timeOfDay} to you, sir or madam!</h1>
//   )
//   }   
// }

// class App extends React.Component {
//   constructor() {
//         super()
//         this.state = {
//           name: "Hasan",
//           age: "21"
//         }
//   }

// render() {
//   return (
//     <div>
//       <h1>{this.state.name}</h1>
//       <h3>{this.state.age} years old</h3>
//     </div>
//     ) 
//   }
// }


// class App extends React.Component {
//   constructor() {
//         super()
//         this.state = {
//           isLoggedin: false
//         }
//   }

// render() {
//   let wordDisplay
//   if (this.state.isLoggedin === true){
//     wordDisplay = "in"
//   }
//   else {
//     wordDisplay = "out"
//   }

//   return (
//     <div>
//       <h1>You are currently logged {wordDisplay}</h1>
//     </div>
//     ) 
//   }
// }

// function handleClick() {
//   this.setState(prevState =>{
//     return {
//       count:prevState.count + 1
//     }
//   })
// }

function App () {
  constructor ()
  super()
  this.state = {
    count:0
  }
  handleClick = handleClick.bind(this)
  return (
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.handleClick}>Click me</button>
    </div>
  )
}





























export default App
