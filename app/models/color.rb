class Color < ApplicationRecord
    validates :color, presence: true

    has_many :shoes
end