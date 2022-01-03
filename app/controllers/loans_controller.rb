class LoansController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_input

  def index
    user = User.find(session[:user_id])
    loans = user.loans
    render json: loans, status: :accepted
  end

  def create
    loan = Loan.create(strong_params)
    render json: loan, status: :created
  end

  def update
    loan = Loan.update(strong_params)
    render json: loan, status: :accepted
  end

  def destroy
    loan = Loan.find(params[:id])
    loan.destroy
    head :no_content
  end

  private

  def strong_params
    params.permit[
      :lender_id,
      :borrower_id,
      :item_id,
      :accepted,
      :returned,
      :return_accepted
    ]
  end

  def invalid_input(e)
    render json: {
             errors: e.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
