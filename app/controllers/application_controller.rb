class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize



  def authorize
    # binding.pry
    # Check to see if a user is currently logged in
    if session[:user_id].nil?
      # If user is not logged in, render errors - need to login
      render json: { errors: ["You must be logged in to see this."]}, status: :unauthorized
    end
  end

  # rescue_from ActiveRecord::RecordInvalid, with: render_unprocessable

  # def render_unprocessable
  #   render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  # end

  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end

end
