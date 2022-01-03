class AddNameToLoan < ActiveRecord::Migration[7.0]
  def change
    add_column :loans, :borrower_name, :string
  end
end
