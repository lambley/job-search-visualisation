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

    it 'responds with a 201 and assigns new instance when given valid inputs' do
    end

    it 'redirects to show on successful creation' do
    end

    it 'responds with a 422 when given invalid inputs' do
    end
  end

  describe 'GET /update' do
    it 'returns http success' do
      get '/api/v1/applications/update'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /delete' do
    it 'returns http success' do
      get '/api/v1/applications/delete'
      expect(response).to have_http_status(:success)
    end
  end
end
