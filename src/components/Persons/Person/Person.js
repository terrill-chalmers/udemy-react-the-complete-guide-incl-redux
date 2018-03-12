import React, {PureComponent} from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import WithClass2 from '../../../hoc/WithClass2';
import PropTypes from 'prop-types';

class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount');
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Person.js] inside componentWillReceiveProps');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] inside componentWillUpdate')
    }

    render() {
        console.log('[Person.js inside render');
        return (
            <Auxiliary classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}. I'm {this.props.age} years old. My id is {this.props.id} </p>
                <p>{this.props.children}.</p>
                <input
                    ref={(inp) => { this.inputElement = inp }}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxiliary>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func,
    position: PropTypes.number
};

export default WithClass2(Person, classes.Person);