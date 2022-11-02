require 'rails_helper'

RSpec.describe "Applications", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/applications"
      expect(response).to have_http_status(:success)
    end

    it "returns an assign application instances" do
      get '/api/v1/applications'
      assigns(:applications).should
    end

    it "returns all instances of applications" do
      get '/api/v1/applications'
      count = Application.all.count
      expect(assigns(:applications).count).to eq(count)
    end

  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1/applications/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/applications/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/api/v1/applications/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /delete" do
    it "returns http success" do
      get "/api/v1/applications/delete"
      expect(response).to have_http_status(:success)
    end
  end

end
