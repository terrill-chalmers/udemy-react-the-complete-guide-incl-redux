import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount');
    }

    render() {
        console.log('[Persons.js inside render');
       return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                id={person.id}
                key={person.id}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                position={index}
            />
        });
    }
}

export default Persons;