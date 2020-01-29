@color.each do |color|
    json.set! color.id do
        json.extract! color, :id, :color
    end
end