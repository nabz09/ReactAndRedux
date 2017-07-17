import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

const routes = () => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="about" component={AboutPage} />
            <Route path="courses" component={CoursesPage} />
        </Route>
    );
}

export default routes;
