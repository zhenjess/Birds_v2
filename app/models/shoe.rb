class Shoe < ApplicationRecord

    belongs_to :gender
    belongs_to :style
    belongs_to :color
    belongs_to :material
    belongs_to :size

    has_many :cart_items

    has_one_attached :photo #do active storage here

    # has_many_attached :photos

end