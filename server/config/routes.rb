Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :applications, only: %i[index show create update delete]
    end
  end
end
