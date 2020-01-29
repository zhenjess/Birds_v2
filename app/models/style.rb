class Style < ApplicationRecord
    validates :style, presence: true

    has_many :shoes
end