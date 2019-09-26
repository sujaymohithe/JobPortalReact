import React from 'react';
import styled from 'styled-components';
import { fetchJobDetailsIfNeeded } from '../../redux/actions';
import { connect } from 'react-redux';
import JobDetails from './JobDetails';
import NotFound from './NotFound';

const Wrapper = styled.section`
    padding: 2em;
`;

const AnchorLink = styled.a`
    font-weight: bold;
`;

class JobDetailsContainer extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        var param = this.props.match.params.id;
        this.state = {
            jobID: param
        }
    }

    componentDidMount() {
        debugger;
        const { dispatch } = this.props
        dispatch(fetchJobDetailsIfNeeded(parseInt(this.state.jobID)))
    }

    render() {
        const { isFetching, jobdetails } = this.props
        return (
            <Wrapper>
                <AnchorLink data-test="BacktoJobs" href={'/'}> Back to Jobs </AnchorLink>
                {isFetching && jobdetails.length === 0 && <h2>Loading...</h2>}
                {!isFetching && jobdetails.length === 0 && <NotFound />}
                <JobDetails jobdetails={this.props.jobdetails} isFetching={this.props.isFetching}></JobDetails>
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    debugger;
    const { isFetching, jobdetails } = state

    return {
        isFetching,
        jobdetails
    }
}

export default connect(mapStateToProps)(JobDetailsContainer)