class Item < ApplicationRecord
  has_many :loans
  belongs_to :category
end
