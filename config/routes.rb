Rails.application.routes.draw do
  resources :items, only: [:index, :show]
  resources :users, only: [:index, :show]
  resources :categories, only: [:index, :show]

  get '/hello', to: 'application#hello_world'

end
