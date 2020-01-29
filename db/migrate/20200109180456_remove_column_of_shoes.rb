class RemoveColumnOfShoes < ActiveRecord::Migration[5.2]
  def change
    remove_column :shoes, :style_id
    remove_column :shoes, :gender_id
  end
end
