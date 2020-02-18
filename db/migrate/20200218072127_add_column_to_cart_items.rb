class AddColumnToCartItems < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :size_idx, :integer
  end
end
