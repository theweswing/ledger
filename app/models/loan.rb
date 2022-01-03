class Loan < ApplicationRecord
  belongs_to :item
  belongs_to :lender, class_name: 'User'
  belongs_to :borrower, class_name: 'User'
  validates :lender_id, presence: true
  validates :item_id, presence: true
end
