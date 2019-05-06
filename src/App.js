import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class app extends Component {
  state = {
    persons: [
      { id: 'asfsxf1', name: 'Max', age: 29 },
      { id: 'asfsxf2', name: 'Manu', age: 33 },
      { id: 'asfsxf3', name: 'Steffi', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false  
  }
 
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(
      { persons: persons }
    )   
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={Math.floor(Math.random().age)} 
          >
          </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.deletePersonHandler.bind(this, 'Max!!')}
            changed={this.nameChangeHandler}  
          >
            My hobbies are: cycling
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} >
          </Person> */}
        </div> 
      );
    }
    return (
      <div className="App">
        <h1>Hi i'm a react app</h1>
        <p>This is really working</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandle}>
          Toggle persons
        </button>
        {persons}
      </div>    
    );
    // gets compiled to:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default app;
 