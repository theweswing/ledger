class ApplicationController < ActionController::API
  # before_action :authorize
  include ActionController::Cookies

  private

  def authorize
    unless session.include? :user_id
      return render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end
end
