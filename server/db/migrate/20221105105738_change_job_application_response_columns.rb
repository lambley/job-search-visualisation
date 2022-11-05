class ChangeJobApplicationResponseColumns < ActiveRecord::Migration[7.0]
  def change
    rename_column :job_applications, :response, :initial_response
    add_column :job_applications, :first_interview, :string
    add_column :job_applications, :technical_task, :string
    add_column :job_applications, :second_interview, :string
    add_column :job_applications, :offer_received, :string
    add_column :job_applications, :offer_accepted, :string
  end
end
