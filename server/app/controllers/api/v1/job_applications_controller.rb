class Api::V1::JobApplicationsController < ApplicationController
  def index
    @job_applications = JobApplication.all
    render json: @job_applications, status: :ok
  end

  def show
    @job_application = JobApplication.find(params[:id])
  end

  def create
    @job_application = JobApplication.new(job_application_params)

    if @job_application.save
      render json: @job_application, status: :created, location: api_v1_job_application_path(@job_application)
    else
      render json: { errors: @job_application.errors }, status: :unprocessable_entity
    end
  end

  def update
    @job_application = JobApplication.find(params[:id])

    if @job_application.update(job_application_params)
      render json: @job_application, status: :ok, location: api_v1_job_application_path(@job_application)
    else
      render json: { errors: @job_application.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @job_application = JobApplication.find(params[:id])
    @job_application.destroy

    render json: @job_application, status: :accepted
  end

  private

  def job_application_params
    params.require(:job_application).permit(:date, :job_title, :company, :application_method, :response, :comment)
  end
end
