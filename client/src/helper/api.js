import axios from 'axios';

// currently 4 api endpoints
// GET http://localhost:3000/api/v1/job_applications - index
// POST http://localhost:3000/api/v1/job_applications - create
// GET http://localhost:3000/api/v1/job_applications/:id - show
// PATCH http://localhost:3000/api/v1/job_applications/:id - update
// DELETE http://localhost:3000/api/v1/job_applications/:id - update

export default class Api {
  constructor() {
    this.baseURL = 'http://localhost:3000/api/v1/job_applications';
    this.jobApplicationId = null;
    this.client = null;
  }

  init = () => {
    // set headers here
    const headers = {
      Accept: 'application/json',
    };

    // at id to baseurl if present
    if (this.jobApplicationId) {
      this.baseURL = `${this.baseURL}/${this.jobApplicationId}`;
    }

    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  index = () => {
    return this.init().get();
  };

  show = (jobApplicationId) => {
    this.jobApplicationId = jobApplicationId;
    return this.init().get();
  };
}
