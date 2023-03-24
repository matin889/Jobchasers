import React from 'react';

function JobList({ jobs }) {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <h2>{job.companyName}</h2>
          <p>{job.jobTitle}</p>
        </li>
      ))}
    </ul>
  );
}

export default JobList;