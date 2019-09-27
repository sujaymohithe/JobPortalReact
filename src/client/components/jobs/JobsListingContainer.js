import React from 'react';
import { fetchJobsIfNeeded } from './redux/actions';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Job from './Job';

const Wrapper = styled.section`
    padding: 2em;
`;

class JobsListingContainer extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchJobsIfNeeded())
    }    

    render() {
        return (
            <Wrapper>
                <h2>Your dream job’s just a search away…</h2>
                <Job jobs={this.props.jobs} isFetching={this.props.isFetching}></Job>
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching : state.jobs.isFetching,
        jobs : state.jobs.list,
    }
}



export default connect(mapStateToProps)(JobsListingContainer)