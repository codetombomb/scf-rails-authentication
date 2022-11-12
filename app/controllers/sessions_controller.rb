class SessionsController < ApplicationController
  # /login
  def create
    # Receive the username and password
    # attempt to find user by username
    user = User.find_by(username: params[:username])
    # if we find a user && they are authenticated with the `authenticate` method
    # if user && user.authenticate(params[:password])
    if user&.authenticate(params[:password])
      # set session user id
      session[:user_id] = user.id # session = {user_id: 1}
      
      # respond with user status ok
      render json: user, status: :ok
    # otherwise
    else
      # render error "invalid creds" status of unauthorized
      render json: { errors: ["Invalid credentials"] }, status: :unauthorized
    end
  end

  #/logout
  def destroy
    # session[:user_id] = nil
    puts "logged out user with id of #{session[:user_id]}"
    session.delete(:user_id)
  end
end


