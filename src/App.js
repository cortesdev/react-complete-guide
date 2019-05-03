import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class app extends Component {
  state = {
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Manu', age: 33 },
      { name: 'Steffi', age: 25 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    // DONT DO : this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Max', age: 29 },
          { name: event.target.value, age: 33 },
          { name: 'Steffi', age: 25 }
        ]
      }
    )
   
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i'm a react app</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Maximillian!!!!')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={Math.floor(Math.random() * 30)} 
        >
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!')}
          changed={this.nameChangeHandler}  
        >
          My hobbies are: cycling
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} >
        </Person>
      </div>    
    );
    // gets compiled to:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default app;


// state = {
//   persons: [
//     { name: 'Max', age: 29 },
//     { name: 'Manu', age: 33 },
//     { name: 'Steffi', age: 25 }
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {
//   // console.log('Was clicked')
//   // DONT DO : this.state.persons[0].name = 'Maximilian';
//   this.setState({
//     persons: [
//       { name: 'Maximilian', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 27 }
//     ]
//   })
// }






// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//    persons: [
//      { name: 'Max', age: 29 },
//      { name: 'Manu', age: 33 },
//      { name: 'Steffi', age: 25 }
//    ] 
//   });
 
//   const switchNameHandler = () => {
 
//      setPersonsState({
//        persons: [
//          { name: 'Maximilian', age: 28 },
//          { name: 'Manu', age: 29 },
//          { name: 'Stephanie', age: 27 }
//        ]
//      })
//    };
   
//    const [otherState] = useState('some other value');
 
//    console.log(personsState, otherState);
 
//    return (
//      <div className="App">
//        <h1>Hi i'm a react app</h1>
//        <p>This is really working</p>
//        <button onClick={switchNameHandler}>Switch name</button>
//        <Person 
//          name={personsState.persons[0].name} 
//          age={personsState.persons[1].age} >
//        </Person>
//        <Person 
//          name={personsState.persons[1].name} 
//          age={personsState.persons[1].age} >
//          My hobbies are: cycling
//        </Person>
//        <Person 
//          name={personsState.persons[2].name} 
//          age={personsState.persons[2].age} >
//        </Person>
//      </div>    
//    );  
//  }
 
 
