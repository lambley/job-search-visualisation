require 'rails_helper'

RSpec.describe 'JobApplications', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/v1/job_applications'
      expect(response).to have_http_status(:success)
    end

    it 'returns an assign job_application instances' do
      get '/api/v1/job_applications'
      expect(assigns(:job_applications)).to_not be(nil)
    end

    it 'returns all instances of job_applications' do
      get '/api/v1/job_applications'
      count = JobApplication.all.count
      expect(assigns(:job_applications).count).to eq(count)
    end

    it 'renders json with status 200' do
      get '/api/v1/job_applications'
      expect(response.content_type).to include('application/json')
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      get "/api/v1/job_applications/#{job_application.id}"
      expect(response).to have_http_status(:success)
    end

    it 'assigns a job_applications instance' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      get "/api/v1/job_applications/#{job_application.id}"
      expect(assigns(:job_application)).to eq(job_application)
    end
  end

  describe 'GET /create' do
    it 'returns http success' do
      get '/api/v1/job_applications'
      expect(response).to have_http_status(:success)
    end

    it 'renders json on creation' do
      post '/api/v1/job_applications', params: {
        job_application: {
          date: '21/10/2022',
          job_title: 'test',
          company: 'test company',
          application_method: 'direct',
          response: 'rejection',
          comment: 'comment'
        }
      }

      expect(response.content_type).to include('application/json')
    end

    it 'responds with a 201 given valid inputs' do
      post '/api/v1/job_applications', params: {
        job_application: {
          date: '21/10/2022',
          job_title: 'test',
          company: 'test company',
          application_method: 'direct',
          response: 'rejection',
          comment: 'comment'
        }
      }

      expect(response).to have_http_status(:created)
    end

    it 'redirects to show on successful creation' do
      post '/api/v1/job_applications', params: {
        job_application: {
          date: '21/10/2022',
          job_title: 'test',
          company: 'test company',
          application_method: 'direct',
          response: 'rejection',
          comment: 'comment'
        }
      }

      job_application_id = JSON.parse(response.body)['id']

      expect(response.headers['Location']).to eq("/api/v1/job_applications/#{job_application_id}")
    end

    it 'responds with a 422 when given invalid inputs' do
      post '/api/v1/job_applications', params: {
        job_application: {
          date: '',
          job_title: '',
          company: ' ',
          application_method: '',
          response: '',
          comment: ''
        }
      }

      expect(response).to have_http_status(422)
    end

    it 'renders a json with errors on invalid inputs' do
      post '/api/v1/job_applications', params: {
        job_application: {
          date: '',
          job_title: '',
          company: ' ',
          application_method: '',
          response: '',
          comment: ''
        }
      }
      errors = JSON.parse(response.body)['errors']
      expect(response.content_type).to include('application/json')
      expect(errors).to_not be(nil)
    end
  end

  describe 'GET /update' do
    it 'returns http success' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      get "/api/v1/job_applications/#{job_application.id}"
      expect(response).to have_http_status(:success)
    end

    it 'assigns a job application' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      get "/api/v1/job_applications/#{job_application.id}"

      expect(assigns(:job_application)).to eq(job_application)
    end

    it 'should respond with 200 upon successful updating' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      put "/api/v1/job_applications/#{job_application.id}", params: {
        job_application: {
          date: '21/10/2022',
          job_title: 'test1',
          company: 'test company1',
          application_method: 'direct1',
          response: 'rejection1',
          comment: 'commen1t'
        }
      }

      expect(response).to have_http_status(200)
    end

    it 'should render json with updated object successful updating ' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      put "/api/v1/job_applications/#{job_application.id}", params: {
        job_application: {
          date: '21/10/2022',
          job_title: 'test1',
          company: 'test company1',
          application_method: 'direct1',
          response: 'rejection1',
          comment: 'commen1t'
        }
      }

      expect(response.content_type).to include('application/json')
    end

    it 'should respond with 422 when given invalid attributes' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      put "/api/v1/job_applications/#{job_application.id}", params: {
        job_application: {
          date: '',
          job_title: '',
          company: ' ',
          application_method: '',
          response: '',
          comment: ''
        }
      }

      expect(response).to have_http_status(422)
    end

    it 'renders a json with errors on invalid inputs' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      put "/api/v1/job_applications/#{job_application.id}", params: {
        job_application: {
          date: '',
          job_title: '',
          company: ' ',
          application_method: '',
          response: '',
          comment: ''
        }
      }
      errors = JSON.parse(response.body)['errors']
      expect(response.content_type).to include('application/json')
      expect(errors).to_not be(nil)
    end
  end

  describe 'GET /delete' do
    it 'returns http success' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      get "/api/v1/job_applications/#{job_application.id}"
      expect(response).to have_http_status(:success)
    end

    it 'assigns a job application' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      get "/api/v1/job_applications/#{job_application.id}"

      expect(assigns(:job_application)).to eq(job_application)
    end

    xit 'deletes found entry' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )

      delete "/api/v1/job_applications/#{job_application.id}"

      expect(JobApplication.find(job_application)).to eq(nil)
    end

    xit 'responds with json containing deleted entry' do
      job_application = JobApplication.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )

      delete "/api/v1/job_applications/#{job_application.id}"

      expect(response.headers).to include('application/json')
    end
  end
end
