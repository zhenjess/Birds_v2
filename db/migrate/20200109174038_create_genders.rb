class CreateGenders < ActiveRecord::Migration[5.2]
  def change
    create_table :genders do |t|
      t.string :gender, null: false
      
      t.timestamps
    end
  end
end
