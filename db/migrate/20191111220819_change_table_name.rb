class ChangeTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :shoes_colors, :shoe_colors
  end
end
