class Gender < ApplicationRecord
    IDENTITIES = [
        'Women',
        'Men'
    ].sort.freeze

    validates :gender, presence: true, inclusion: { in: IDENTITIES }

    has_many :shoes
end


