class Application < ApplicationRecord
  validates :title, presence: true
  validates :company, presence: true
  validates :application_method, presence: true
  validates :response, presence: true
end
