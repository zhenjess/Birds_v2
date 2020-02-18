json.shoes do 
    @shoes.each do |shoe|
        json.set! shoe.id do 
            json.extract! shoe, :id
            json.gender shoe.gender.gender
            json.material shoe.material.material
            json.color shoe.color.color
            json.style shoe.style.style
            json.size shoe.size.size 
            json.photoUrl url_for(shoe.photo)
        end
    end
end

json.materials do
    @materials.each do |material|
        json.set! material.id do 
            json.extract! material, :id, :material
        end
    end
end

json.colors do
    @colors.each do |color|
        json.set! color.id do
            json.extract! color, :id, :color
        end
    end
end

json.genders do 
    @genders.each do |gender|
        json.set! gender.id do
            json.extract! gender, :id, :gender
        end
    end
end

json.styles do
    @styles.each do |style|
        json.set! style.id do
            json.extract! style, :id, :style
        end
    end
end

json.sizes do
    @sizes.each do |size|
        json.set! size.id do
            json.extract! size, :id, :size
        end
    end
end

json.cartItems do 
    @cart_items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :shoe_id, :cart_id, :quantity, :size_idx
            json.gender item.shoe.gender
            json.material item.shoe.material
            json.color item.shoe.color
            json.style item.shoe.style
            json.size item.shoe.size.size[item.size_idx]
            
            if item.shoe.photo.attached? 
                json.photoUrl url_for(item.shoe.photo)
            end
        end
    end
end
