class RemoveShoeMaterialsAndRemoveShoeColors < ActiveRecord::Migration[5.2]
  def change
    drop_table :shoe_colors
    drop_table :shoe_materials
  end
end
