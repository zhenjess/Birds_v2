class CreateSizes < ActiveRecord::Migration[5.2]
  def change
    create_table :sizes do |t|
      t.integer :sizes, null: false
      
      t.timestamps
    end
  end
end
