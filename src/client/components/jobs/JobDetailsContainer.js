import React from 'react';
import styled from 'styled-components';
import { fetchJobDetailsIfNeeded } from './redux/actions';
import { connect } from 'react-redux';
import JobDetails from './JobDetails';
import NotFound from '../common/NotFound';

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
        const { isFetching, jobdata } = this.props
        return (
            <Wrapper>
                <AnchorLink data-test="BacktoJobs" href={'/'}> Back to Jobs </AnchorLink>
                {isFetching && jobdata.length === 0 && <h2>Loading...</h2>}
                {!isFetching && jobdata.length === 0 && <NotFound />}
                <JobDetails jobdata={this.props.jobdata} isFetching={this.props.isFetching}></JobDetails>
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    debugger;
    return {
        isFetching : state.jobs.isFetching,
        jobdata : state.jobs.jobdata,
    }
}

export default connect(mapStateToProps)(JobDetailsContainer)