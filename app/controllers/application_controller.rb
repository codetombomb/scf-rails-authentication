class ApplicationController < ActionController::API
  include ActionController::Cookies
  # rescue_from ActiveRecord::RecordInvalid, with: render_unprocessable

  # def render_unprocessable
  #   render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  # end

  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end

end
