import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import MyProfile from './pages/MyProfilePage';
import CalenderEventsPage from './pages/calenderEventsPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
    {
        ...App,
        routes:[
            {
                ...HomePage,
                path:'/',
                exact:true
            },
            {
                ...MyProfile,
                path:'/ggggg'
            },
            {
                ...CalenderEventsPage,
                path:'/hhhhhh',
                exact:true
            },
            {
                ...NotFoundPage
            }
        ]
    }
];