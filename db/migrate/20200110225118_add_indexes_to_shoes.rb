class AddIndexesToShoes < ActiveRecord::Migration[5.2]
  def change
    add_index :shoes, :gender_id
    add_index :shoes, :color_id
    add_index :shoes, :material_id
    add_index :shoes, :style_id
    add_index :shoes, :size_id
  end
end
