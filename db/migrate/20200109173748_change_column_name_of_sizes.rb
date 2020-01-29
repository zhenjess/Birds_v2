class ChangeColumnNameOfSizes < ActiveRecord::Migration[5.2]
  def change
    rename_column :sizes, :sizes, :size
  end
end
