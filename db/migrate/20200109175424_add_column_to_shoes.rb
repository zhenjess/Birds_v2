class AddColumnToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :size_id, :integer
  end
end
