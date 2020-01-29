class ChangeColumnNameOfShoes < ActiveRecord::Migration[5.2]
  def change
    rename_column :shoes, :model, :style_id
    rename_column :shoes, :gender, :gender_id
  end
end
