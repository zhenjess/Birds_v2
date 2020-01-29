# json.extract! @item, :id, :shoe_option_id, :size, :price

# json.photoUrls @item.photos.map { |file| url_for(file) }

# @items.each do |item|
#     json.set! item["id"] do
#         json.extract! item, :id, :shoe_option_id, :model, :material, :price, :gender, :size, :shoe_id, :color_id, :material_id
#         json.photoUrl url_for(item.photo)
#     end
# end

json.partial! 'api/items/item', item: @item
 
@items.each do |item|
    json.set! item["id"] do
        json.extract! item, :id, :shoe_option_id, :size, :price, :shoe_id, :color_id, :material_id
        json.photoUrl url_for(ShoeOptions[item.shoe_option_id].photo)
    end 
end


    