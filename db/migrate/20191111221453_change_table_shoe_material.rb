class ChangeTableShoeMaterial < ActiveRecord::Migration[5.2]
  def change
    rename_table :shoes_materials, :shoe_materials
  end
end
