class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.date :date
      t.string :job_title
      t.string :company
      t.string :application_method
      t.string :response
      t.string :comment

      t.timestamps
    end
  end
end
