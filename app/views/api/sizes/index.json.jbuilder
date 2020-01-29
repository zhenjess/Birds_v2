@size.each do |size|
    json.set! size.id do 
        json.extract! size, :id, :size
    end
end