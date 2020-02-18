class Material < ApplicationRecord
    TYPES = [
        'Tree',
        'Wool'
    ].sort.freeze

    validates :material, presence: true, inclusion: { in: TYPES }

    has_many :shoes
end