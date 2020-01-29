@material.each do |material|
    json.set! material.id do 
        json.extract! material, :id, :material
    end
end