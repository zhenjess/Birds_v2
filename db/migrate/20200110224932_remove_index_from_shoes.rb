class RemoveIndexFromShoes < ActiveRecord::Migration[5.2]
  def change
    remove_index :shoes, :gender_id
    remove_index :shoes, :material_id
    remove_index :shoes, :color_id
    remove_index :shoes, :style_id
    remove_index :shoes, :size_id
  end
end
