# Rails Authentication
---
[Notes](https://www.notion.so/Rails-Authentication-13071934e2df4f92ac748d6f66c6b4b1)

## **Dependencies (Gems/packages)**

- What dependencies do we need to add to support authentication?
    
    ---
    
    We need bcrypt so that we can store encrypted (salted and hashed) versions of our users passwords instead of storing passwords in plain text:
    
    `bundle add bcrypt`
    
    ---
    

## **Configuration (environment variables/other stuff in config folder)**

- What configuration do we need to add to support authentication?
    
    ```ruby
    #config/application.rb
    
    module Api
      class Application < Rails::Application
    	...
    
    	# Adding back cookies and session middleware
    	  config.middleware.use ActionDispatch::Cookies
    	  config.middleware.use ActionDispatch::Session::CookieStore
    	
    	  # Use SameSite=Strict for all cookies to help protect against CSRF
    		# This will include a cookie for requests that originate from the same origin - '/items' and not 'http://localhost:3000/items'
    	  config.action_dispatch.cookies_same_site_protection = :strict
    end
    ```
    
    - We will also need to include the middleware within the `ApplicationController`
    
    ```ruby
    class ApplicationController < ActionController::API
        include ActionController::Cookies
    		...
    end
    ```
    

## **Database**

- What database changes do we need to make to support authentication?
    
    ---
    
    We need a `password_digest` column in our `users` table to store our users’ encrypted password.
    
    ```ruby
    rails g migration AddPasswordDigestToUsers password_digest
    ```
    
    - Then run `rails db:migrate`
    
    ---
    

## **Models**

- What changes in the model layer do we need to add to support authentication?
    
    ---
    
    - **NOTE:** It is important to note that we have already added a uniqueness validation for username (and email) so we can consistently find the right user for authentication.
    - We need to add the `has_secure_password` macro to the User model to implement the `authenticate` and `password=` methods used in login & signup actions respectively.
    - The `has_secure_password` macro creates the following methods on the model that it is being used on:
        - `password=`
        - `password_confirmation=`
        - `authenticate`
    
    ---
    

## **Serializers**

- What do we need to change in our serializers to support authentication?
    - We’ll want a `UserSerializer` that returns only the `id`, `username`, and `email`.
    - We do not want to send our password_digest or any other sensitive data.

## **Routes**

- What routes do we need to add to support authentication?
    
    ```ruby
    get '/me', to: "users#show"
    post '/signup', to: "users#create"
    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"
    ```
    

## **Controllers**

- What changes or additions do we need to affect in our controllers to support authentication?
    - We will need a way to check for a currently logged in user. We can do this in our base `ApplicationController`:
    
    ```ruby
    class ApplicationController < ActionController::API
        include ActionController::Cookies
    		before_action :current_user
    
    	def current_user
    		@user = User.find_by(session[:user_id])
    	end
    end
    ```
    
    - We can give ourselves access to the `@user` variable if we run the `current_user` method every time we receive a request by using the `before_action` method.
    - We will also need to create a `SessionsController`. The `SessionsController` will be responsible for handling all sessions related API interactions including:
        - Logging in
        - Logout