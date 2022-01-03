class User < ApplicationRecord
  has_secure_password
  has_many :loans_as_lender, class_name: 'Loan', foreign_key: 'lender_id'
  has_many :loans_as_borrower, class_name: 'Loan', foreign_key: 'borrower_id'
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
