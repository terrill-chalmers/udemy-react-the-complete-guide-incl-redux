import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import WithClass2 from '../hoc/WithClass2';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[App.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] inside componentDidMount');
    }

    state = {
        persons: [
            {id: '1a', name: 'Tbot', age: 44},
            {id: '1b', name: 'Dawny', age: 36},
            {id: '1c', name: 'Mae', age: 5},
            {id: 'id', name: 'Torque', age: 4}
        ],
        showPersons: false,
        toggleClicked: 0
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePeopleHandler = () =>
        this.setState((prevState, props) => {
            return {
                showPersons: !this.state.showPersons,
                toggleClicked: prevState.toggleClicked + 1
            }
        });

    render() {
        console.log('[App.js] inside render');
        let persons = null;

        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />;
        }

        return (
            <Auxiliary>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePeopleHandler}
                />
                {persons}
            </Auxiliary>
        );
    }
}

export default WithClass2(App, classes.App);

