require 'rails_helper'

RSpec.describe 'Applications', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/v1/applications'
      expect(response).to have_http_status(:success)
    end

    it 'returns an assign application instances' do
      get '/api/v1/applications'
      expect(assigns(:applications)).to_not be(nil)
    end

    it 'returns all instances of applications' do
      get '/api/v1/applications'
      count = Application.all.count
      expect(assigns(:applications).count).to eq(count)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      application = Application.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      get "/api/v1/applications/#{application.id}"
      expect(response).to have_http_status(:success)
    end

    it 'assigns an application instance' do
      application = Application.create(
        date: '21/10/2022',
        job_title: 'test',
        company: 'test company',
        application_method: 'direct',
        response: 'rejection',
        comment: 'comment'
      )
      get "/api/v1/applications/#{application.id}"
      expect(assigns(:application)).to eq(application)
    end
  end

  describe 'GET /create' do
    it 'returns http success' do
      get '/api/v1/applications/create'
      expect(response).to have_http_status(:success)
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
