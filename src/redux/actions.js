import * as data from '../dataset/jobs.json';
export const REQUEST_JOBS = 'REQUEST_JOBS'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'
export const REQUEST_JOBDETAILS = 'REQUEST_JOBDETAILS'
export const RECEIVE_JOBDETAILS = 'RECEIVE_JOBDETAILS'

const jobsData = data.default;
function requestJobs() {
  return {
    type: REQUEST_JOBS
  }
}

function receiveJobs(json) {
  return {
    type: RECEIVE_JOBS,
    jobs: json
  }
}

function fetchJobs() {
  return dispatch => {
    dispatch(requestJobs())
    return dispatch(receiveJobs(jobsData));
  }
}

function shouldFetchJobs(state) {
  debugger;
  const jobs = state.jobs
  if (jobs.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchJobsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchJobs(getState())) {
      return dispatch(fetchJobs())
    }
  }
}

function requestJobDetails() {
  return {
    type: REQUEST_JOBDETAILS
  }
}

function receiveJobDetails(json) {
  return {
    type: RECEIVE_JOBDETAILS,
    job: json
  }
}

function fetchJobDetails(id) {
  return dispatch => {
    dispatch(requestJobDetails())
    let index = jobsData.map(e => e.id).indexOf(id);
    debugger;
    return dispatch(receiveJobDetails(index != -1 ? jobsData[index] : []));
  }
}

function shouldFetchJobDetails(state) {
  const details = state.jobdetails;
  if (details.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchJobDetailsIfNeeded(id) {
  return (dispatch, getState) => {
    if (shouldFetchJobDetails(getState())) {
      return dispatch(fetchJobDetails(id))
    }
  }
}
