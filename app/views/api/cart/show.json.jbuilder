json.cart do
    json.extract! @cart, :id, :user_id, :status
end

json.cartItems do 
    @cart.cart_items.each do |item|
        if (@items["#{item.shoe_id}"])
            json.set! item.id do
                json.extract! item, :id, :quantity, :cart_id, :shoe_id, :size_idx
                json.size item.shoe.size.size[item.size_idx] 

                unitPrice = @items["#{item.shoe_id}"]["price"]
                itemPrice = (unitPrice * item.quantity)

                json.itemPrice itemPrice
                json.unitPrice unitPrice

                if cart_item.photo.attached? 
                    json.photoUrl url_for(cart_item.photo)
                end
            end 
        end
    end
end

