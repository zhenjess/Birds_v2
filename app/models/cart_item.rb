class CartItem < ApplicationRecord
    validates :cart_id, :shoe_id, :quantity, presence: true 

    belongs_to :shoe

    belongs_to :cart
end