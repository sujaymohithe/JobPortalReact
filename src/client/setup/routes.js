// Imports
import React from 'react'

// App Imports
import JobsListingContainer from '../components/jobs/JobsListingContainer';
import JobDetailsContainer from '../components/Jobs/JobDetailsContainer'

// Routes
const routes = [
    {
        path: '/',
        component: JobsListingContainer,
        exact: true
    },
    {
        path: '/jobDetails/:id',
        component: JobDetailsContainer
    }
]

export default routes