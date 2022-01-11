class SessionsController < ApplicationController
  # skip_before_action :authorize, only: [:create]
  def create
    user = User.find_by(email: params[:email])
    byebug
    if user&.authenticate(params[:password])
      byebug
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end

  def destroy
    session.delete[:user_id]
    head :no_content
  end
end
