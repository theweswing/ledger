class ItemsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_input

  def create
    item = Item.create!(strong_params)
    render json: item, status: :created
  end

  def index
    render json: Item.all, status: :ok
  end

  private

  def strong_params
    params.permit(:name, :category_id)
  end

  def invalid_input(e)
    render json: {
             errors: e.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
