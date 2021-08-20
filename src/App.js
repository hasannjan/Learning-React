import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

// function App() {
//     const details = ["COUNTRY", "CODE", "NUMBER", "NAME"]
//       const country = ["Pakistan","UAE","UK","USA",, , ]
//        ["+92", "971","44","1", ],
//        ["3052013106", "3128779060" , "3452151273", "3051613630"],
//        ["Usama","Hasan" ,"Nadir" , "Umair"]
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

// function App () {
//   constructor ()
//   super()
//   this.state = {
//     count:0
//   }
//   handleClick = handleClick.bind(this)
//   return (
//     <div>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.handleClick}>Click me</button>
//     </div>
//   )
// }

// function App() {
//   const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
//   return (
//     <div className="todo-list">
//       {todoItems}
//     </div>
//   )
// }


// class App extends React.Component {
//       constructor() {
//             super()
//             this.state = {
//                 firstName: "",
//                 lastName: "",
//                 isFriendly: false,
//                 gender: "",
//                 favColor: ""
//             }
//             this.handleChange = this.handleChange.bind(this)
//       }

//       handleChange(event) {
//           const {name, value, type, checked} = event.target
//           type === "checkbox" ? this.setState({ [name] : checked }) : this.setState ({ [name] : value})
//       }

//     render() {
//       return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                 type="text" 
//                 value={this.state.firstName} 
//                 name="firstName" 
//                 placeholder="First Name" 
//                 onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                 type="text" 
//                 value={this.state.lastName} 
//                 name="lastName" 
//                 placeholder="Last Name" 
//                 onChange={this.handleChange} 
//                 />

//                 <br />

//                 <textarea 
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />

//                 <br />

//                 <label>
//                      <input 
//                         type="checkbox"
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                      /> Is Friendly? 
//                 </label>

//                     <br /> 

//                 <label>
//                      <input 
//                         type="radio"
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                      /> Male
//                 </label>

//                 <label>
//                      <input 
//                         type="radio"
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                      /> Female 
//                 </label>

//                 <br />
//                 <label>Favorite Color : </label>
//                 <select 
//                 value={this.state.favColor}
//                 onChange={this.handleChange}
//                 name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                 </select>

//                 <h2>You are a {this.state.gender}</h2>
//                 <h2>Your Favorite Color is {this.state.favColor}</h2>

//                 <button>Submit</button>

//             </form>
//         ) 
//       }
//     }

class App extends React.Component {
      constructor() {
            super()
            this.state = {
                firstName: "",
                lastName: "",
                age: "",    
                gender: "",
                location: "",
                dietaryrestrictions: ""
            }
            this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
          const {name, value, type, checked} = event.target
          type === "checkbox" ? this.setState({ [name] : checked }) : this.setState ({ [name] : value})
      }

    render() {
      return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                value={this.state.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={this.handleChange} 
                />
                <br />
                <input 
                type="text" 
                value={this.state.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={this.handleChange} 
                />
                <br />
                <input 
                type="text" 
                value={this.state.age} 
                name="age" 
                placeholder="Age" 
                onChange={this.handleChange} 
                />
                <br />
                <label>
                     <input 
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "Male"}
                        onChange={this.handleChange}
                     /> Male
                </label>

                <label>
                     <input 
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                        onChange={this.handleChange}
                     /> Female 
                </label>
                <br />
                <br />
                 <label>Location : </label>
                 <select 
                value={this.state.location}
                onChange={this.handleChange}
                name="location"
                >
                    <option value="london">London</option>
                    <option value="dortmund">Dortmund</option>
                    <option value="dubai">Dubai</option>
                    <option value="vancouver">Vancouver</option>
                    <option value="toronto">Toronto</option>
                </select>
                <br />
                <br />
                 <label>Dietary Restrictions : </label>
                 <select 
                value={this.state.dietaryrestrictions}
                onChange={this.handleChange}
                name="dietaryrestrictions"
                >
                    <option value="vegetarian">Vegetarian</option>
                    <option value="kosher">Kosher</option>
                    <option value="lactosefree">Lactose-Free</option>
                </select>
                <br />
                <button>Submit</button>
                <h2>Your First Name is : {this.state.firstName}</h2>
                <h2>Your Last Name is : {this.state.lastName}</h2>
                <h2>Your Age is : {this.state.age}</h2>
                <h2>Your Gender is : {this.state.gender}</h2>
                <h2>Location you are tevaelling to is : {this.state.location}</h2>
                <h2>Your Dietery Restriction is : {this.state.dietaryrestrictions}</h2>
            </form>
        ) 
      }
    }

export default App
