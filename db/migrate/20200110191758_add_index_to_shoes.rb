class AddIndexToShoes < ActiveRecord::Migration[5.2]
  def change
    add_index :shoes, :color_id, :unique => true
    add_index :shoes, :material_id, :unique => true
    add_index :shoes, :gender_id, :unique => true
    add_index :shoes, :style_id, :unique => true
    add_index :shoes, :size_id, :unique => true
  end
end
