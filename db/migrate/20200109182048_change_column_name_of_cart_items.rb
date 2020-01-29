class ChangeColumnNameOfCartItems < ActiveRecord::Migration[5.2]
  def change
    rename_column :cart_items, :item_id, :shoe_id
  end
end
