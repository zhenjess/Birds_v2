class CreateShoeOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :shoe_options do |t|
       t.integer :shoe_id, null: false
       t.integer :color_id, null: false
       t.integer :material_id, null: false
    end
    add_index :shoe_options, [:shoe_id, :color_id, :material_id], :unique => true
    add_index :shoe_options, :color_id
    add_index :shoe_options, :material_id
  end
end
