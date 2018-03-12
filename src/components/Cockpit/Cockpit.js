import React, { Fragment } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if (props.persons.length <= 3) {assignedClasses.push(classes.red);}
    if (props.persons.length <= 2) {assignedClasses.push(classes.bold);}
    if (props.persons.length <= 1) {assignedClasses.push(classes.italic);}

    const REACT_VERSION = React.version;

    return (
        <Fragment>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>v. {REACT_VERSION}</p>
            <button className={btnClass}
                    onClick={props.clicked}>Toggle People
            </button>
        </Fragment>
    );
};

export default cockpit;