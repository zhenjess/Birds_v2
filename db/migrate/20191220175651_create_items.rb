class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :shoe_options_id, null: false
      t.integer :size, null: false
      t.integer :price, null: false

      t.timestamps
    end
  end
end
