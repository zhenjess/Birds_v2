json.items do
    @items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :shoe_option_id, :size, :price
        end
    end
end

json.carts do
    @carts.each do |cart|
        json.set! cart.id do
            json.extract! cart, :id, :user_id, :status
        end 
    end
end

json.cartItems do 
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :item_id, :cart_id, :quantity

            if cart_item.photo.attached? 
                json.photoUrl url_for(cart_item.photo)
            end
        end 
    end
end