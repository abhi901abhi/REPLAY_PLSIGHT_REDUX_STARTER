import React from 'react';
import {Link, IndexLink} from 'react-router';

//acitve class name = based on route apply the class 'Active' -->
//Stateless functional component
const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;
