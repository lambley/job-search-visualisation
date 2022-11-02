require 'rails_helper'

RSpec.describe "Applications", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/applications/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1//applications/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1//applications/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/api/v1//applications/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /delete" do
    it "returns http success" do
      get "/api/v1//applications/delete"
      expect(response).to have_http_status(:success)
    end
  end

end
