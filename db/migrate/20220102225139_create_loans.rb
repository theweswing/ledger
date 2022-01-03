class CreateLoans < ActiveRecord::Migration[7.0]
  def change
    create_table :loans do |t|
      t.references :lender
      t.references :borrower
      t.references :item
      t.boolean :accepted
      t.boolean :returned
      t.boolean :return_accepted
      t.timestamps
    end
  end
end
