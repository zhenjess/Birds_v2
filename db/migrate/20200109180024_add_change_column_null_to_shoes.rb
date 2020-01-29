class AddChangeColumnNullToShoes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :shoes, :size_id, false, 1
  end
end
