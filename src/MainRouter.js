import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import JobsListingContainer from './components/Jobs/JobsListingContainer';
import JobDetailsContainer from './components/Jobs/JobDetailsContainer'

class MainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={JobsListingContainer} />
                    <Route exact path="/JobDetails/:id" component={JobDetailsContainer} />
                </Switch>
            </BrowserRouter>
        )
    }
};
export default MainRouter;