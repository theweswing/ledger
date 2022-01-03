class CategoriesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_input

  def index
    categories = Category.all
    render json: categories, status: :ok
  end

  def create
    if Category.find_by(name: params[:name])
      category = Category.find_by(name: params[:name])
    else
      category = Category.create!(strong_params)
    end
    render json: category, status: :created
  end

  private

  def strong_params
    params.permit(:name)
  end

  def invalid_input(e)
    render json: {
             errors: e.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
