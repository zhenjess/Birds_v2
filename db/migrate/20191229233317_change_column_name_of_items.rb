class ChangeColumnNameOfItems < ActiveRecord::Migration[5.2]
  def change
    rename_column :items, :shoe_options_id, :shoe_option_id
  end
end
