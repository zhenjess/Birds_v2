class ChangeColumnSizeOfSizes < ActiveRecord::Migration[5.2]
  def change
    add_column :sizes, :size_temp, :integer, array: true, default: []
    remove_column :sizes, :size
    rename_column :sizes, :size_temp, :size
  end

end
