class Item < ApplicationRecord
    validates :size, :price, :shoe_option_id, presence: true

    has_many :cart_items
    belongs_to :shoe_option
    has_one_attached :photo #do active storage here


    def self.find_by_gender(search_id)
        CartItem.joins(:shoe)
        .where(shoes: { gender: search_id })
        .select("cart_items.id", :size, :shoe_id, :color_id, :material_id, :gender_id, :style_id,)
    end    
    
end