Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/delete'
  resources :items, only: [:index, :show]
  # get '/items', to: 'items#index'
  # get '/items/:id', to: 'items#show'
  
  resources :users, only: [:index]
  resources :categories, only: [:index, :show]
  
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  # get '/hello', to: 'application#hello_world'

end
