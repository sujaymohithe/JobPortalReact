import { REQUEST_JOBS, RECEIVE_JOBS, REQUEST_JOBDETAILS, RECEIVE_JOBDETAILS } from './actions';

export function jobs(state = { isFetching: true, list: [], jobdata: [] }, action) {
  switch (action.type) {
    case REQUEST_JOBS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_JOBS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list
      });
    case REQUEST_JOBDETAILS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_JOBDETAILS:
      state.jobdata[action.jobdata.id] = action.jobdata;
      return Object.assign({}, state, {
        isFetching: false,
        jobdata: action.jobdata
      });
    default:
      return state
  }
}

