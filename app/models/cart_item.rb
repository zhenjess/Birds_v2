class CartItem < ApplicationRecord
    validates :cart_id, :shoe_id, :quantity, presence: true

    belongs_to :shoe

    belongs_to :cart

    #has_one_attached :photo #do active storage here

    # def self.find_by_cart
    #     debugger
    #     CartItem.includes(:cart).includes(:shoe).find_by("cart_id = current_user.cart.id")
    # end

    # def self.find_by_gender(search_id)
    #     CartItem.joins(:shoe)
    #     .where(shoes: { gender_id: search_id })
    #     .select("cart_items.id", :quantity, :shoe_id, :color_id, :material_id, :gender_id, :size_id, :style_id)
    # end
end