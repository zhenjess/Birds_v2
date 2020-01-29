class CreateShoes < ActiveRecord::Migration[5.2]
  def change
    create_table :shoes do |t|
      t.string :model, null: false
      t.string :gender, null: false
      
      t.timestamps
    end
  end
end
