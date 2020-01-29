class DropItemsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :items
  end
end
