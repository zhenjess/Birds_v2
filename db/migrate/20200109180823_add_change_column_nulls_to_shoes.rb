class AddChangeColumnNullsToShoes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :shoes, :gender_id, false, 1
    change_column_null :shoes, :style_id, false, 1
  end
end
