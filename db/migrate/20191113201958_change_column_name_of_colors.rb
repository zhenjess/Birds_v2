class ChangeColumnNameOfColors < ActiveRecord::Migration[5.2]
  def change
    rename_column :colors, :hue, :color
  end
end
