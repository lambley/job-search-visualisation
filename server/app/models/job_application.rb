class JobApplication < ApplicationRecord
  # arrays for validations
  initial_response_types = [
    'no reply',
    'reply',
    'rejection',
    'awaiting response'
  ]

  first_interview_types = [
    'first interview',
    'rejection',
    nil,
    ''
  ]

  technical_task_types = [
    'no reply',
    'no task required',
    'rejection',
    'rejected by me',
    'technical task',
    nil,
    ''
  ]

  second_interview_types = [
    'no reply',
    'second interview',
    nil,
    ''
  ]

  offer_received_types = [
    'waiting for offer',
    'offer received',
    'rejected before offer',
    nil,
    ''
  ]

  offer_accepted_types = [
    'offer accepted',
    'offer rejected',
    nil,
    ''
  ]

  # validation
  validates :job_title, presence: true
  validates :company, presence: true
  validates :application_method, presence: true
  validates :initial_response, inclusion: initial_response_types
  validates :first_interview, inclusion: first_interview_types
  validates :technical_task, inclusion: technical_task_types
  validates :second_interview, inclusion: second_interview_types
  validates :offer_received, inclusion: offer_received_types
  validates :offer_accepted, inclusion: offer_accepted_types
end
