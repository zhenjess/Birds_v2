Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    # resources :shoes, only: [:index, :show, :create, :update, :edit]
    # resources :accessories, only: [:index, :show, :create, :update, :edit]
    # resources :materials, only: [:index, :show, :create]
    # resources :reviews, only: [:create, :show, :edit, :destroy]
    # resource :user, only: [:create]
    # resource :cart 

    resource :session, only: [:create, :destroy]
    resources :shoes, only: [:index, :show] do #:show
      resources :genders, only: [:index, :show]
    end

    resources :materials, only: [:index, :show]

    resources :cart_items, only: [:index, :create, :update, :destroy]
    resources :carts, only: [:destroy]
    # delete '/cart_items', to: 'cart_items#destroy_all'

    resources :users, only: [:create, :update, :show] do
      resources :carts, only: [:create, :index, :show] do
        resources :cart_items, except: [:new, :edit]
      end
    end
  end
  root "static_pages#root"
end

    
    # resources :users, only: [:create, :update, :show]
    # resource :cart, only: [:create, :show]
    # resources :cart_items, only: [:create]

# resources :colors, only: [:index, :show]
#     resources :styles, only: [:index, :show]
#     resources :sizes, only: [:index, :show]
#  resources :cart_items, only: [:index, :show]
