@gender.each do |gender|
    json.set! gender.id do 
        json.extract! gender, :id, :gender
    end
end