Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :job_applications, only: %i[index show create update delete]
    end
  end
end
