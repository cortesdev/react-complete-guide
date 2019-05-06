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
    otherState: 'some other value',
    showPersons: false  
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

  togglePersonsHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgrooundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
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
    }
    return (
      <div className="App">
        <h1>Hi i'm a react app</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandle}>Switch name</button>
        {persons}
      </div>    
    );
    // gets compiled to:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default app;
 