json.cart_items do 
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :shoe_id, :cart_id, :quantity, :size_idx
            json.gender cart_item.shoe.gender
            json.material cart_item.shoe.material
            json.color cart_item.shoe.color
            json.style cart_item.shoe.style
            json.size cart_item.shoe.size.size[cart_item.size_idx]

            if cart_item.shoe.photo.attached? 
                json.photoUrl url_for(cart_item.shoe.photo)
            end
        end 
    end
end