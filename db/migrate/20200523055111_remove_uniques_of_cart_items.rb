class RemoveUniquesOfCartItems < ActiveRecord::Migration[5.2]
  def change  
    remove_index :cart_items, name: "index_cart_items_on_cart_id_and_shoe_id"
  end
end
