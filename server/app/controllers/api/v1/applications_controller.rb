class Api::V1::ApplicationsController < ApplicationController
  def index
    @applications = Application.all
  end

  def show
    @application = Application.find(params[:id])
  end

  def create
    @application = Application.new(application_params)

    if @application.save
      render json: @application, status: :created, location: api_v1_application_path(@application)
    else
      render json: { errors: @application.errors }
    end
  end

  def update; end

  def delete; end

  private

  def application_params
    params.require(:application).permit(:date, :job_title, :company, :application_method, :response, :comment)
  end
end
