class CreateShoesColors < ActiveRecord::Migration[5.2]
  def change
    create_table :shoes_colors do |t|
      t.integer :shoe_id, null: false
      t.integer :hue_id, null: false

      t.timestamps
    end

    add_index :shoes_colors, :shoe_id, unique: true
    add_index :shoes_colors, :hue_id, unique: true
  end
end
