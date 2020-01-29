class Size < ApplicationRecord
    validates :size, presence: true

    has_many :shoes
end