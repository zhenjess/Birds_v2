class Material < ApplicationRecord
    TYPES = [
        'Tree',
        'Wool'
        #sugarcane and synthetic for accessories and shoe insole
    ].sort.freeze

    validates :material, presence: true, inclusion: { in: TYPES }

    has_many :shoes
end