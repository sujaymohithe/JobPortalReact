import { REQUEST_JOBS, RECEIVE_JOBS, REQUEST_JOBDETAILS, RECEIVE_JOBDETAILS } from './actions';

function jobs(state = { isFetching: false, jobs: [], jobdetails: [] }, action) {
  switch (action.type) {
    case REQUEST_JOBS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_JOBS:
      return Object.assign({}, state, {
        isFetching: false,
        jobs: action.jobs
      });
    case REQUEST_JOBDETAILS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_JOBDETAILS:
      debugger;
      state.jobdetails[action.job.id] = action.job;
      return Object.assign({}, state, {
        isFetching: false,
        jobdetails: action.job
      });
    default:
      return state
  }
}

export default jobs
