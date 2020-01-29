class RemoveIndexFromShoeColor < ActiveRecord::Migration[5.2]
  def change
    remove_index :shoe_colors, :shoe_id
    remove_index :shoe_colors, :hue_id

    add_index :shoe_colors, :shoe_id
    add_index :shoe_colors, :hue_id
  end
end
