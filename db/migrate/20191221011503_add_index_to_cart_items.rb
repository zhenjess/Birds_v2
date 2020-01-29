class AddIndexToCartItems < ActiveRecord::Migration[5.2]
  def change
    add_index :cart_items, [:cart_id, :item_id], :unique => true
  end
end
