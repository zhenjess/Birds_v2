class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :material, null: false
      
      t.timestamps
    end
  end
end
