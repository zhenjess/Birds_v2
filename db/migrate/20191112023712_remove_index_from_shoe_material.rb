class RemoveIndexFromShoeMaterial < ActiveRecord::Migration[5.2]
  def change
    remove_index :shoe_materials, :shoe_id
    remove_index :shoe_materials, :material_id

    add_index :shoe_materials, :shoe_id
    add_index :shoe_materials, :material_id
  end
end