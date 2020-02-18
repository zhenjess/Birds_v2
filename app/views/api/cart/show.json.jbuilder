# @cart_items = json.cartItems do
#     @cart.cart_items.each do |item|
#         if (@items["#{item.item_id}"])
#             json.set! item.id do 
#                 json.extract! item, :id, :cart_id, :shoe_id, :quantity, :s

#                 unitPrice = @items["#{item.item_id}"]['price']
#                 itemPrice = (unitPrice * item.quantity)
                
#                 json.itemPrice itemPrice
#                 json.unitPrice unitPrice
#             end
#         end
#     end
# end

# @cart_items ||= {}

# json.cart do
#     @cart_items.each do |item|
#         json.partial! 'item'
#         item : item
#     end
# end 
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

# json.carts do
#     @carts.each do |cart|
#         json.set! cart.id do
#             json.extract! cart, :id, :user_id, :status
#         end 
#     end
# end

# json.cart do
#     cart_item_ids = @cart.cart_items.map { |item|
#         if (@items["#{item.item_id}"])
#             item.id
#         end
#     }

#     cart_item_ids.select! { |id| !id.nil? }

#     json.set! @cart.id do 
#         json.extract! @cart, :user_id, :status
#         json.cartItems { json.array! cart_item_ids }

#         cartTotal = 0;
#         @cart_items.each do |id, cartItem|
#             if (@items["#{cartItem["item_id"]}"])
#                 cartTotal += (cartItem["quantity"] * @items[cartItem["item_id"].to_s]['price'])
#             end
#         end
#         json.cartTotal cartTotal
#     end
# end
# json.cart do
#     @cart_items.each do |item|
#         json.partial! 'item'
#         item : item
#     end
# end 

# json.cartItems do 
#     @cart.cart_items.each do |item|
#         if (@items["#{item.shoe_id}"])
#             json.set! item.id do
#                 json.extract! item, :id, :quantity, :cart_id, :shoe_id

#                 unitPrice = @items["#{item.shoe_id}"]["price"]
#                 itemPrice = (unitPrice * item.quantity)

#                 json.itemPrice itemPrice
#                 json.unitPrice unitPrice

#                 if cart_item.photo.attached? 
#                     json.photoUrl url_for(cart_item.photo)
#                 end
#             end 
#         end
#     end
# end

# json.items do 
#     @cart.items.each do |item|
#         json.set! item.id do 
#             json.extract! item, :id, :shoe_option_id, :size, :price
#         end
#     end
# end

