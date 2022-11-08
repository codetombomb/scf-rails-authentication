Rails.application.routes.draw do
  resources :category_items
  resources :categories
  resources :items
  resources :users

  get '/hello', to: 'application#hello_world'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
