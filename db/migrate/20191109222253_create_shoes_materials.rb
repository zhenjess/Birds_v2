class CreateShoesMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :shoes_materials do |t|
      t.integer :shoe_id, null: false
      t.integer :material_id, null: false

      t.timestamps
    end
    add_index :shoes_materials, :shoe_id, unique: true
    add_index :shoes_materials, :material_id, unique: true
  end

end
