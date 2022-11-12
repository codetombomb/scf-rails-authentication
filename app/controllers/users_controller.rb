class UsersController < ApplicationController
    skip_before_action  :authorize, only: :create
    def index
        users = User.all 
        render json: users
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def create
        # Create (or attempt to create) a user
        user = User.create(user_params)
        # If user was created
        if user && user.valid?
            # set our session user id
            session[:user_id] = user.id
            # Render our user as json and send status of created
            render json: user, status: :created
        # Otherwise
        else
            # Render errors and send status of unprocessable_entity
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
