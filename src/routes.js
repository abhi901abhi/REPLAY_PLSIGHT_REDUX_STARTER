import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './components/Home/HomePage';
import CoursePage from './components/Courses/CoursePage';
import ManageCoursePage from './components/Courses/ManageCoursePage';
import AboutPage from './components/About/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/courses" component={CoursePage}/>
        <Route path="/course/:id" component={ManageCoursePage}/>
        <Route path="/course" component={ManageCoursePage}/>
    </Route>
);
