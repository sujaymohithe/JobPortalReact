const initialState = {
  data: [
    {
      "id": 1,
      "title": "Frontend Developer",
      "description": "Comfortable with modern JS stack, experience with React.",
      "employment_type": "Full Time",
      "posted_date": "24-09-2019",
      "Requirement":[ "Minimum experience required: 4 years.", "Should have worked on .Net development/implementation project.", "Location of posting would be subject to business requirements." ]
    },
    {
      "id": 2,
      "title": "Back-end SQL Developer",
      "description": "Comfortable with SQL relational database.",
      "employment_type": "Full Time",
      "posted_date": "12-09-2019",
      "Requirement":[ "Minimum experience required: 4 years.", "Should have worked on .Net development/implementation project.", "Location of posting would be subject to business requirements." ]
    },
    {
      "id": 3,
      "title": ".Net Software Developer",
      "description": "Comfortable with .Net and web application development.",
      "employment_type": "Part Time",
      "posted_date": "02-09-2019",
      "Requirement":[ "Minimum experience required: 4 years.", "Should have worked on .Net development/implementation project.", "Location of posting would be subject to business requirements." ]
    },
    {
      "id": 4,
      "title": "Ruby with Rails Developer",
      "description": "Comfortable with software development using Ruby with Rails.",
      "employment_type": "Full Time",
      "posted_date": "20-08-2019",
      "Requirement":[ "Minimum experience required: 4 years.", "Should have worked on .Net development/implementation project.", "Location of posting would be subject to business requirements." ]
    },
    {
      "id": 5,
      "title": "Jave J2EE Developer",
      "description": "Web application development experience using J2EE.",
      "employment_type": "Part Time",
      "posted_date": "24-09-2019",
      "Requirement":[ "Minimum experience required: 4 years.", "Should have worked on .Net development/implementation project.", "Location of posting would be subject to business requirements." ]
    }
  ],
}

export const REQUEST_JOBS = 'REQUEST_JOBS'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'
export const REQUEST_JOBDETAILS = 'REQUEST_JOBDETAILS'
export const RECEIVE_JOBDETAILS = 'RECEIVE_JOBDETAILS'

const jobsData = initialState.data;
function requestJobs() {
  return {
    type: REQUEST_JOBS
  }
}

function receiveJobs(json) {
  return {
    type: RECEIVE_JOBS,
    list: json
  }
}

function fetchJobs() {
  return dispatch => {
    dispatch(requestJobs())
    return dispatch(receiveJobs(jobsData));
  }
}

function shouldFetchJobs(state) {
  const jobsList = state.jobs.list
  if (jobsList.length == 0) {
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
    jobdata: json
  }
}

function fetchJobDetails(id) {
  return dispatch => {
    dispatch(requestJobDetails())
    let index = jobsData.map(e => e.id).indexOf(id);
    return dispatch(receiveJobDetails(index != -1 ? jobsData[index] : []));
  }
}

function shouldFetchJobDetails(state) {
  const details = state.jobs.jobdata;
  if (details.length == 0) {
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
