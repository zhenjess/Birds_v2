class AddIndexesToCartItems < ActiveRecord::Migration[5.2]
  def change
    add_index :cart_items, [:cart_id, :shoe_id]
  end
end
