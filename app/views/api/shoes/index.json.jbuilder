# returns key and {} returns shoes and {what populates obj}
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

            # if cart_item.photo.attached? 
            #     json.photoUrl url_for(cart_item.photo)
            # end
        end
    end
end

#add materials key
json.materials do
    #access instance variable set in shoes controller
    @materials.each do |material|
        json.set! material.id do #use id as outer key
            json.extract! material, :id, :material
        end
    end
end

#add colors key
json.colors do
    #access instance variable set in shoes controller
    @colors.each do |color|
        json.set! color.id do #use id as outer key
            json.extract! color, :id, :color
        end
    end
end

#add genders key
json.genders do 
    @genders.each do |gender|
        json.set! gender.id do
            json.extract! gender, :id, :gender
        end
    end
end

#add styles key
json.styles do
    @styles.each do |style|
        json.set! style.id do
            json.extract! style, :id, :style
        end
    end
end

#add sizes key
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
            json.extract! item, :id, :shoe_id, :cart_id, :quantity
            json.gender item.shoe.gender
            json.material item.shoe.material
            json.color item.shoe.color
            json.style item.shoe.style
            json.size item.shoe.size
            
            if item.shoe.photo.attached? 
                json.photoUrl url_for(item.shoe.photo)
            end
        end
    end
end

# json.cartItems do 
#     @cart_items.each do |item|
#         json.set! item.id do 
#             if item.cart.id == current_user.cart.id
#                 json.extract! item, :id, :shoe_id
#                 if item.shoe.photo.attached? 
#                     json.photoUrl url_for(item.shoe.photo)
#                 end
#             end
#         end
#     end
# end

# json.shoeOptions do 
#     @shoe_options.each do |shoe_option|
#         json.set! shoe_option.id do 
#             json.extract! shoe_option, :id, :shoe_id, :color_id, :material_id 

#             if shoe_option.photo.attached? 
#                 json.photoUrl url_for(shoe_option.photo)
#             end
#         end
#     end
# end




# #link shoe materials to shoes
# json.shoeMaterials do 
#     @shoe_materials.each do |shoe_material|
#         json.set! shoe_material.id do
#             json.extract! shoe_material, :id, :shoe_id, :material_id
#         end
#     end
# end

#add colors key
# json.colors do
#     #access instance variable set in shoes controller
#     @colors.each do |color|
#         json.set! color.id do #use id as outer key
#             json.extract! color, :id, :color
#         end
#     end
# end

# #link shoe colors to shoes
# json.shoeColors do 
#     @shoe_colors.each do |shoe_color|
#         json.set! shoe_color.id do 
#             json.extract! shoe_color, :id, :shoe_id, :hue_id 
#         end
#     end
# end

# json.shoeOptions do 
#     @shoe_options.each do |shoe_option|
#         json.set! shoe_option.id do 
#             json.extract! shoe_option, :id, :shoe_id, :color_id, :material_id 

#             if shoe_option.photo.attached? 
#                 json.photoUrl url_for(shoe_option.photo)
#             end
#         end
#     end
# end
