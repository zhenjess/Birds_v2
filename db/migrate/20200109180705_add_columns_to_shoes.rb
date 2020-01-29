class AddColumnsToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :gender_id, :integer
    add_column :shoes, :style_id, :integer
  end
end
