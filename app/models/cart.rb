class Cart < ApplicationRecord
    validates :status, presence: true
    belongs_to :user

    has_many :cart_items,
        class_name: "CartItem", 
        primary_key: :id, 
        foreign_key: :cart_id
    
    has_many :shoes, 
        through: :cart_items, 
        source: :shoe
end