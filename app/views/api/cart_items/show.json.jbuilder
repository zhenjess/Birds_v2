
json.extract! @cart_item, :id, :quantity, :cart_id, :shoe_id, :size_idx
json.style @cart_item.shoe.style
json.gender @cart_item.shoe.gender
json.material @cart_item.shoe.material
json.color @cart_item.shoe.color
json.size @cart_item.shoe.size.size[@cart_item.size_idx] # @cart_item.shoe.size[@cart_item.sizeIdx]
#debugger
# json.photoUrl url_for(CartItems[cart_item.shoe_id].photo)
json.photoUrl url_for(@cart_item.shoe.photo)

# @cart_items.each do |item|ize_idx
#     json.set! item["id"] do
#         json.extract! item, :id, :quantity, :shoe_id, :color_id, :material_id, :gender_id, :style_id, :size_id
#         json.photoUrl url_for(item.shoe.photo)
#     end 
# end


# unitPrice = @item['price']
# itemPrice = (unitPrice * @cart_item.quantity)

# json.cartItems do 
#     json.set! @cart_item.id do
#         json.extract! @cart_item, :id, :quantity, :item_id
#         json.unitPrice unitPrice
#         json.itemPrice itemPrice
#     end 
# end
