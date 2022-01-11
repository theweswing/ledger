class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_input

  # skip_before_action :authorize, only: [:create]

  def create
    user = User.create!(strong_params)
    render json: user, status: :created if user.valid?
  end

  def me
    user = User.find_by(id: session[:user_id])
    render json: user, status: :accepted if user
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    user.destroy
    head :no_content
  end

  def index
    users = User.all
    render json: users, status: :ok
  end

  private

  def strong_params
    params.permit(
      :username,
      :password,
      :password_confirmation,
      :email,
      :phone,
      :first_name,
      :last_name,
    )
  end

  def invalid_input(e)
    render json: {
             errors: e.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
