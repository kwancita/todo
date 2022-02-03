class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only:[:create]

  def create
    # find the user by username
    user = User.find_by_username!(params[:username])
    # if the password authenticated
    if user.authenticate(params[:password])
      # logging our user in IMPORTANT!!!
      session[:user_id] = user.id 
      # send success response
      render json: user, status: :ok
    else
      # send error
      render json: {errors: "Invalid username and password"}, status: :unauthorized
    end
  end

  def destroy
    session.delete(:user_id)
  end

end
