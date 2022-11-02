class Api::V1::ApplicationsController < ApplicationController
  def index
    @applications = Application.all
  end

  def show
    @application = Application.find(params[:id])
  end

  def create
  end

  def update
  end

  def delete
  end
end
