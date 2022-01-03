Rails.application.routes.draw do
  resources :categories, only: %i[create index]
  resources :items, only: %i[create index]
  resources :users, only: %i[index show] do
    resources :loans, only: %i[create destroy update show index]
  end
  post 'signup', to: 'users#create'
  post 'login', to: 'sessions#create'
  get 'me', to: 'users#me'
  delete 'logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
