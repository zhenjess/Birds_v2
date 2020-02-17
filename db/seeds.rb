# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Shoe.destroy_all
Material.destroy_all
Color.destroy_all
Gender.destroy_all
Style.destroy_all
Size.destroy_all
CartItem.destroy_all

demoLogin = User.create!(first_name: "all", last_name: "birds", email: 'allbirds@gmail.com', password: "password")

demoCart = Cart.create!(user_id: demoLogin.id, status: "checked in")

demoLogin.cart_id = demoCart.id

wool = Material.create!(material: 'Wool')
tree = Material.create!(material: 'Tree')

grey = Color.create!(color: 'Grey')
black = Color.create!(color: 'Black')
white = Color.create!(color: 'White')
red = Color.create!(color: 'Red')
green = Color.create!(color: 'Green')
blue = Color.create!(color: 'Blue')

women = Gender.create!(gender: 'Women')
men = Gender.create!(gender: 'Men')

runners = Style.create!(style: 'Runners')
loungers = Style.create!(style: 'Loungers')
skippers = Style.create!(style: 'Skippers')
toppers = Style.create!(style: 'Toppers')
breezers = Style.create!(style: 'Breezers')

size = Size.create!(size: [7,8,9,10,11,12])
# eight = Size.create!(size: 8)
# nine = Size.create!(size: 9)
# ten = Size.create!(size: 10)
# eleven = Size.create!(size: 11)
# twelve = Size.create!(size: 12)

# all_color_ids = [grey.id, black.id, white.id, red.id, green.id, blue.id];



# shoe_1 = Shoe.create!(gender: 'Men', model: 'Runners')
# shoe_1.material_ids = [wool.id, tree.id];
# shoe_1.color_ids = all_color_ids;
shoe_1_colors = [grey, black, white, red, green, blue]
shoe_1_materials = [wool] #,tree
shoe_1_genders = [men]
shoe_1_styles = [runners]
shoe_1_sizes = size.size

# shoe_1_sizes.each do |size|
    shoe_1_colors.each do |color|
            shoe_1 = Shoe.create!(color_id: color.id, material_id: shoe_1_materials[0].id, gender_id: shoe_1_genders[0].id, style_id: shoe_1_styles[0].id, size_id: size.id)
            #item = CartItem.create!(shoe_id: shoe_1.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_1.gender.gender.downcase}_#{color.color.downcase}_#{shoe_1_materials[0].material.downcase}_#{shoe_1.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_1.photo.attach(io: file, filename: filename)
    end
# end

# shoe_1 = Shoe.create!(color_id: "grey", material_id: "wool", gender_id: "women", style_id: "runners", size_id: 7)

shoe_2_colors = [grey, black, white, red, green, blue]
shoe_2_materials = [tree] #,tree
shoe_2_genders = [men]
shoe_2_styles = [runners]
shoe_2_sizes = size.size

# shoe_2_sizes.each do |size|
    shoe_2_colors.each do |color|
            shoe_2 = Shoe.create!(color_id: color.id, material_id: shoe_2_materials[0].id, gender_id: shoe_2_genders[0].id, style_id: shoe_2_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_2.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_2.gender.gender.downcase}_#{color.color.downcase}_#{shoe_2_materials[0].material.downcase}_#{shoe_2.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_2.photo.attach(io: file, filename: filename)
    end
# end


shoe_3_colors = [grey, black, red, blue]
shoe_3_materials = [wool] #,tree
shoe_3_genders = [men]
shoe_3_styles = [loungers]
shoe_3_sizes = size.size

# shoe_3_sizes.each do |size|
    shoe_3_colors.each do |color|
            shoe_3 = Shoe.create!(color_id: color.id, material_id: shoe_3_materials[0].id, gender_id: shoe_3_genders[0].id, style_id: shoe_3_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_3.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_3.gender.gender.downcase}_#{color.color.downcase}_#{shoe_3_materials[0].material.downcase}_#{shoe_3.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_3.photo.attach(io: file, filename: filename)
    end
# end

shoe_4_colors = [grey, black, white, red, green, blue]
shoe_4_materials = [tree] #,tree
shoe_4_genders = [men]
shoe_4_styles = [loungers]
shoe_4_sizes = size.size

# shoe_4_sizes.each do |size|
    shoe_4_colors.each do |color|
            shoe_4 = Shoe.create!(color_id: color.id, material_id: shoe_4_materials[0].id, gender_id: shoe_4_genders[0].id, style_id: shoe_4_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_4.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_4.gender.gender.downcase}_#{color.color.downcase}_#{shoe_4_materials[0].material.downcase}_#{shoe_4.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_4.photo.attach(io: file, filename: filename)
    end
# end

shoe_5_colors = [grey, black, white, red, green, blue]
shoe_5_materials = [tree] #,tree
shoe_5_genders = [men]
shoe_5_styles = [skippers]
shoe_5_sizes = size.size

# shoe_5_sizes.each do |size|
    shoe_5_colors.each do |color|
            shoe_5 = Shoe.create!(color_id: color.id, material_id: shoe_5_materials[0].id, gender_id: shoe_5_genders[0].id, style_id: shoe_5_styles[0].id, size_id: size.id)
            #item = CartItem.create!(shoe_id: shoe_5.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_5.gender.gender.downcase}_#{color.color.downcase}_#{shoe_5_materials[0].material.downcase}_#{shoe_5.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_5.photo.attach(io: file, filename: filename)
    end
# end

shoe_6_colors = [grey, black, white, red, green, blue]
shoe_6_materials = [tree] #,tree
shoe_6_genders = [men]
shoe_6_styles = [toppers]
shoe_6_sizes = size.size

# shoe_6_sizes.each do |size|
    shoe_6_colors.each do |color|
            shoe_6 = Shoe.create!(color_id: color.id, material_id: shoe_6_materials[0].id, gender_id: shoe_6_genders[0].id, style_id: shoe_6_styles[0].id, size_id: size.id)
            #item = CartItem.create!(shoe_id: shoe_6.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_6.gender.gender.downcase}_#{color.color.downcase}_#{shoe_6_materials[0].material.downcase}_#{shoe_6.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_6.photo.attach(io: file, filename: filename)
    end
# end

shoe_7_colors = [grey, black, white, red, green, blue]
shoe_7_materials = [wool] #,tree
shoe_7_genders = [women]
shoe_7_styles = [runners]
shoe_7_sizes = size.size

# shoe_7_sizes.each do |size|
    shoe_7_colors.each do |color|
            shoe_7 = Shoe.create!(color_id: color.id, material_id: shoe_7_materials[0].id, gender_id: shoe_7_genders[0].id, style_id: shoe_7_styles[0].id, size_id: size.id)
            #item = CartItem.create!(shoe_id: shoe_7.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_7.gender.gender.downcase}_#{color.color.downcase}_#{shoe_7_materials[0].material.downcase}_#{shoe_7.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_7.photo.attach(io: file, filename: filename)
    end
# end

shoe_8_colors = [grey, black, white, red, green, blue]
shoe_8_materials = [tree] #,tree
shoe_8_genders = [women]
shoe_8_styles = [runners]
shoe_8_sizes = size.size

# shoe_8_sizes.each do |size|
    shoe_8_colors.each do |color|
            shoe_8 = Shoe.create!(color_id: color.id, material_id: shoe_8_materials[0].id, gender_id: shoe_8_genders[0].id, style_id: shoe_8_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_8.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_8.gender.gender.downcase}_#{color.color.downcase}_#{shoe_8_materials[0].material.downcase}_#{shoe_8.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_8.photo.attach(io: file, filename: filename)
    end
# end

shoe_9_colors = [grey, black, white, red, blue]
shoe_9_materials = [wool] #,tree
shoe_9_genders = [women]
shoe_9_styles = [loungers]
shoe_9_sizes = size.size

# shoe_9_sizes.each do |size|
    shoe_9_colors.each do |color|
            shoe_9 = Shoe.create!(color_id: color.id, material_id: shoe_9_materials[0].id, gender_id: shoe_9_genders[0].id, style_id: shoe_9_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_9.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_9.gender.gender.downcase}_#{color.color.downcase}_#{shoe_9_materials[0].material.downcase}_#{shoe_9.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_9.photo.attach(io: file, filename: filename)
    end
# end

shoe_10_colors = [grey, black, white, red, green, blue]
shoe_10_materials = [tree] #,tree
shoe_10_genders = [women]
shoe_10_styles = [loungers]
shoe_10_sizes = size.size

# shoe_10_sizes.each do |size|
    shoe_10_colors.each do |color|
            shoe_10 = Shoe.create!(color_id: color.id, material_id: shoe_10_materials[0].id, gender_id: shoe_10_genders[0].id, style_id: shoe_10_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_10.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_10.gender.gender.downcase}_#{color.color.downcase}_#{shoe_10_materials[0].material.downcase}_#{shoe_10.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_10.photo.attach(io: file, filename: filename)
    end
# end

shoe_11_colors = [grey, black, white, red, green, blue]
shoe_11_materials = [tree] #,tree
shoe_11_genders = [women]
shoe_11_styles = [skippers]
shoe_11_sizes = size.size

# shoe_11_sizes.each do |size|
    shoe_11_colors.each do |color|
            shoe_11 = Shoe.create!(color_id: color.id, material_id: shoe_11_materials[0].id, gender_id: shoe_11_genders[0].id, style_id: shoe_11_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_11.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_11.gender.gender.downcase}_#{color.color.downcase}_#{shoe_11_materials[0].material.downcase}_#{shoe_11.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_11.photo.attach(io: file, filename: filename)
    end
# end


shoe_12_colors = [grey, black, white, red, green, blue]
shoe_12_materials = [tree] #,tree
shoe_12_genders = [women]
shoe_12_styles = [toppers]
shoe_12_sizes = size.size

# shoe_12_sizes.each do |size|
    shoe_12_colors.each do |color|
            shoe_12 = Shoe.create!(color_id: color.id, material_id: shoe_12_materials[0].id, gender_id: shoe_12_genders[0].id, style_id: shoe_12_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_12.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_12.gender.gender.downcase}_#{color.color.downcase}_#{shoe_12_materials[0].material.downcase}_#{shoe_12.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
           shoe_12.photo.attach(io: file, filename: filename)
    end
# end

shoe_13_colors = [grey, black, white, red, green, blue]
shoe_13_materials = [tree] #,tree
shoe_13_genders = [women]
shoe_13_styles = [breezers]
shoe_13_sizes = size.size

# shoe_13_sizes.each do |size|
    shoe_13_colors.each do |color|
            shoe_13 = Shoe.create!(color_id: color.id, material_id: shoe_13_materials[0].id, gender_id: shoe_13_genders[0].id, style_id: shoe_13_styles[0].id, size_id: size.id)
           # item = CartItem.create!(shoe_id: shoe_13.id, quantity: 0, cart_id: demoCart.id)
            filename = "#{shoe_13.gender.gender.downcase}_#{color.color.downcase}_#{shoe_13_materials[0].material.downcase}_#{shoe_13.style.style.downcase}.webp"
            #p filename
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
            # debugger
            shoe_13.photo.attach(io: file, filename: filename)
    end
# end

# shoe_2_colors = [grey, black, white, red, green, blue]
# shoe_2_materials = [tree] #,tree
# shoe_2_genders = [men]
# shoe_2_styles = [runners]
# shoe_2_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_2_sizes.each do |size|
#     shoe_2_colors.each do |color|
#         shoe_2_materials.each do |material|
#             shoe_2 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_2.id)
#             filename = "#{shoe_2.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_2.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_3_colors = [grey, black, red, blue]
# shoe_3_materials = [wool] #,tree
# shoe_3_genders = [men]
# shoe_3_styles = [loungers]
# shoe_3_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_3_sizes.each do |size|
#     shoe_3_colors.each do |color|
#         shoe_3_materials.each do |material|
#             shoe_3 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_3.id)
#             filename = "#{shoe_3.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_3.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_4_colors = [grey, black, white, red, green, blue]
# shoe_4_materials = [tree] #,tree
# shoe_4_genders = [men]
# shoe_4_styles = [loungers]
# shoe_4_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_4_sizes.each do |size|
#     shoe_4_colors.each do |color|
#         shoe_4_materials.each do |material|
#             shoe_4 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_4.id)
#             filename = "#{shoe_4.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_4.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_5_colors = [grey, black, white, red, green, blue]
# shoe_5_materials = [tree] #,tree
# shoe_5_genders = [men]
# shoe_5_styles = [skippers]
# shoe_5_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_5_sizes.each do |size|
#     shoe_5_colors.each do |color|
#         shoe_5_materials.each do |material|
#             shoe_5 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_5.id)
#             filename = "#{shoe_5.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_5.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_6_colors = [grey, black, white, red, green, blue]
# shoe_6_materials = [tree] #,tree
# shoe_6_genders = [men]
# shoe_6_styles = [toppers]
# shoe_6_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_6_sizes.each do |size|
#     shoe_6_colors.each do |color|
#         shoe_6_materials.each do |material|
#             shoe_6 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_6.id)
#             filename = "#{shoe_6.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_6.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_7_colors = [grey, black, white, red, green, blue]
# shoe_7_materials = [wool] #,tree
# shoe_7_genders = [women]
# shoe_7_styles = [runners]
# shoe_7_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_7_sizes.each do |size|
#     shoe_7_colors.each do |color|
#         shoe_7_materials.each do |material|
#             shoe_7 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_7.id)
#             filename = "#{shoe_7.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_7.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_8_colors = [grey, black, white, red, green, blue]
# shoe_8_materials = [tree] #,tree
# shoe_8_genders = [women]
# shoe_8_styles = [runners]
# shoe_8_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_8_sizes.each do |size|
#     shoe_8_colors.each do |color|
#         shoe_8_materials.each do |material|
#             shoe_8 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_8.id)
#             filename = "#{shoe_8.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_8.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_9_colors = [grey, black, white, red, blue]
# shoe_9_materials = [wool] #,tree
# shoe_9_genders = [women]
# shoe_9_styles = [loungers]
# shoe_9_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_9_sizes.each do |size|
#     shoe_9_colors.each do |color|
#         shoe_9_materials.each do |material|
#             shoe_9 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_9.id)
#             filename = "#{shoe_9.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_9.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_10_colors = [grey, black, white, red, green, blue]
# shoe_10_materials = [tree] #,tree
# shoe_10_genders = [women]
# shoe_10_styles = [loungers]
# shoe_10_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_10_sizes.each do |size|
#     shoe_10_colors.each do |color|
#         shoe_10_materials.each do |material|
#             shoe_10 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_10.id)
#             filename = "#{shoe_10.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_10.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_11_colors = [grey, black, white, red, green, blue]
# shoe_11_materials = [tree] #,tree
# shoe_11_genders = [women]
# shoe_11_styles = [skippers]
# shoe_11_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_11_sizes.each do |size|
#     shoe_11_colors.each do |color|
#         shoe_11_materials.each do |material|
#             shoe_11 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_11.id)
#             filename = "#{shoe_11.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_11.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_12_colors = [grey, black, white, red, green, blue]
# shoe_12_materials = [tree] #,tree
# shoe_12_genders = [women]
# shoe_12_styles = [toppers]
# shoe_12_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_12_sizes.each do |size|
#     shoe_12_colors.each do |color|
#         shoe_12_materials.each do |material|
#             shoe_12 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_12.id)
#             filename = "#{shoe_12.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_12.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_13_colors = [grey, black, white, red, green, blue]
# shoe_13_materials = [tree] #,tree
# shoe_13_genders = [women]
# shoe_13_styles = [breezers]
# shoe_13_sizes = [seven, eight, nine, ten, eleven, twelve]

# shoe_13_sizes.each do |size|
#     shoe_13_colors.each do |color|
#         shoe_13_materials.each do |material|
#             shoe_13 = Shoe.create!(color_id: color.id, material_id: material.id, gender_id: gender.id, style_id: style.id, size_id: size.id)
#             item = CartItem.create!(shoe_id: shoe_13.id)
#             filename = "#{shoe_13.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_13.style.downcase}.webp"
#             #p filename
#             file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#             # debugger
#             item.photo.attach(io: file, filename: filename)
#         end
#     end
# end

# shoe_1_colors.each do |color|
#     shoe_1_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_1.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_1.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_1.model.downcase}.webp"
#         #p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#         #item.photo.attach(io: file, filename: filename)
#     end
# end

# shoe_2 = Shoe.create!(gender: 'Men', model: 'Runners')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_2_colors = [grey, black, white, red, green, blue]
# shoe_2_materials = [tree] #,tree

# shoe_2_colors.each do |color|
#     shoe_2_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_2.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_2.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_2.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end


# shoe_3 = Shoe.create!(gender: 'Men', model: 'Loungers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_3_colors = [grey, black, red, blue]
# shoe_3_materials = [wool] #,tree

# shoe_3_colors.each do |color|
#     shoe_3_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_3.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_3.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_3.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end


# shoe_4 = Shoe.create!(gender: 'Men', model: 'Loungers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_4_colors = [grey, black, white, red, green, blue]
# shoe_4_materials = [tree] #,tree

# shoe_4_colors.each do |color|
#     shoe_4_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_4.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_4.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_4.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end


# shoe_5 = Shoe.create!(gender: 'Men', model: 'Skippers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_5_colors = [grey, black, white, red, green, blue]
# shoe_5_materials = [tree] #,tree

# shoe_5_colors.each do |color|
#     shoe_5_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_5.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_5.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_5.model.downcase}.webp"
#          #debugger
#          #p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end


# shoe_6 = Shoe.create!(gender: 'Men', model: 'Toppers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_6_colors = [grey, black, white, red, green, blue]
# shoe_6_materials = [tree]; #,tree

# shoe_6_colors.each do |color|
#     shoe_6_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_6.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_6.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_6.model.downcase}.webp"
#         #  debugger
#         #  p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end

# shoe_7 = Shoe.create!(gender: 'Women', model: 'Runners')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_7_colors = [grey, black, white, red, green, blue]
# shoe_7_materials = [wool] #,tree

# shoe_7_colors.each do |color|
#     shoe_7_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_7.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_7.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_7.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end

# shoe_8 = Shoe.create!(gender: 'Women', model: 'Runners')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_8_colors = [grey, black, white, red, green, blue]
# shoe_8_materials = [tree]; #,tree

# shoe_8_colors.each do |color|
#     shoe_8_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_8.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_8.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_8.model.downcase}.webp"
#        # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end

# shoe_9 = Shoe.create!(gender: 'Women', model: 'Loungers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_9_colors = [grey, black, white, red, blue]
# shoe_9_materials = [wool]; #,tree

# shoe_9_colors.each do |color|
#     shoe_9_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_9.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_9.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_9.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end

# shoe_10 = Shoe.create!(gender: 'Women', model: 'Loungers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_10_colors = [grey, black, white, red, green, blue]
# shoe_10_materials = [tree] #,tree

# shoe_10_colors.each do |color|
#     shoe_10_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_10.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_10.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_10.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)

#     end
# end


# shoe_11 = Shoe.create!(gender: 'Women', model: 'Skippers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_11_colors = [grey, black, white, red, green, blue]
# shoe_11_materials = [tree] #,tree

# shoe_11_colors.each do |color|
#     shoe_11_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_11.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_11.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_11.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end


# shoe_12 = Shoe.create!(gender: 'Women', model: 'Toppers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_12_colors = [grey, black, white, red, green, blue]
# shoe_12_materials = [tree] #,tree

# shoe_12_colors.each do |color|
#     shoe_12_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_12.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_12.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_12.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end


# shoe_13 = Shoe.create!(gender: 'Women', model: 'Breezers')
# # shoe_1.material_ids = [wool.id, tree.id];
# # shoe_1.color_ids = all_color_ids;
# shoe_13_colors = [grey, black, white, red, green, blue]
# shoe_13_materials = [tree] #,tree

# shoe_13_colors.each do |color|
#     shoe_13_materials.each do |material|
#         shoe_option = ShoeOption.create!(shoe_id: shoe_13.id, color_id: color.id, material_id: material.id)
#         filename = "#{shoe_13.gender.downcase}_#{color.color.downcase}_#{material.material.downcase}_#{shoe_13.model.downcase}.webp"
#         # p filename
#         file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
#         shoe_option.photo.attach(io: file, filename: filename)
#         item = Item.create!(shoe_option_id: shoe_option.id, size: 8, price: 95)
#     end
# end

# shoe_2 = Shoe.create!(gender: 'Male', model: 'Loungers')
# # shoe_2.material_ids = [wool.id, tree.id];
# # shoe_2.color_ids = all_color_ids;
# shoe_2_color_ids = [grey.id, black.id, white.id, red.id, green.id, blue.id];
# shoe_2_material_ids = [wool.id, tree.id];

# shoe_2_color_ids.each do |color_id|
#     shoe_2_material_ids.each do |material_id|
#         ShoeOption.create!(shoe_id: shoe_2.id, color_id: color_id, material_id: material_id)
#     end
# end

# shoe_3 = Shoe.create!(gender: 'Female', model: 'Runners')
# # shoe_3.material_ids = [wool.id, tree.id];
# # shoe_3.color_ids = all_color_ids;
# shoe_3_color_ids = [grey.id, black.id, white.id, red.id, green.id, blue.id];
# shoe_3_material_ids = [wool.id];

# shoe_3_color_ids.each do |color_id|
#     shoe_3_material_ids.each do |material_id|
#         ShoeOption.create!(shoe_id: shoe_3.id, color_id: color_id, material_id: material_id)
#     end
# end

# shoe_4 = Shoe.create!(gender: 'Female', model: 'Loungers')
# # shoe_4.material_ids = [wool.id, tree.id];
# # shoe_4.color_ids = all_color_ids;
# shoe_4_color_ids = [grey.id, black.id];
# shoe_4_material_ids = [ tree.id];

# shoe_4_color_ids.each do |color_id|
#     shoe_4_material_ids.each do |material_id|
#         ShoeOption.create!(shoe_id: shoe_4.id, color_id: color_id, material_id: material_id)
#     end
# end

# shoe_2 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_2.material_ids = [wool.id];
# shoe_2.color_ids = [black.id];

# shoe_3 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_3.material_ids = [wool.id];
# shoe_3.color_ids = [white.id];

# shoe_4 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_4.material_ids = [wool.id];
# shoe_4.color_ids = [red.id];

# shoe_5 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_5.material_ids = [wool.id];
# shoe_5.color_ids = [green.id];

# shoe_6 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_6.material_ids = [wool.id];
# shoe_6.color_ids = [blue.id];

# shoe_7 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_7.material_ids = [tree.id];
# shoe_7.color_ids = [grey.id];

# shoe_8 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_8.material_ids = [tree.id];
# shoe_8.color_ids = [black.id];

# shoe_11 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_9.material_ids = [tree.id];
# shoe_9.color_ids = [white.id];

# shoe_12 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_10.material_ids = [tree.id];
# shoe_10.color_ids = [red.id];

# shoe_11 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_11.material_ids = [tree.id];
# shoe_11.color_ids = [green.id];

# shoe_12 = Shoe.create!(gender: 'Male', model: 'Runners')
# shoe_12.material_ids = [tree.id];
# shoe_12.color_ids = [blue.id];

# shoe_13 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_13.material_ids = [wool.id];
# shoe_13.color_ids = [grey.id];

# shoe_14 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_14.material_ids = [wool.id];
# shoe_14.color_ids = [black.id];

# shoe_15 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_15.material_ids = [wool.id];
# shoe_15.color_ids = [white.id];

# shoe_16 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_16.material_ids = [wool.id];
# shoe_16.color_ids = [red.id];

# shoe_17 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_17.material_ids = [wool.id];
# shoe_17.color_ids = [green.id];

# shoe_18 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_18.material_ids = [wool.id];
# shoe_18.color_ids = [blue.id];

# shoe_19 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_19.material_ids = [tree.id];
# shoe_19.color_ids = [grey.id];

# shoe_20 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_20.material_ids = [tree.id];
# shoe_20.color_ids = [black.id];

# shoe_21 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_21.material_ids = [tree.id];
# shoe_21.color_ids = [white.id];

# shoe_22 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_22.material_ids = [tree.id];
# shoe_22.color_ids = [red.id];

# shoe_23 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_23.material_ids = [tree.id];
# shoe_23.color_ids = [green.id];

# shoe_24 = Shoe.create!(gender: 'Male', model: 'Loungers')
# shoe_24.material_ids = [tree.id];
# shoe_24.color_ids = [blue.id];

# shoe_25 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_25.material_ids = [wool.id];

# shoe_26 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_26.material_ids = [wool.id];

# shoe_27 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_27.material_ids = [wool.id];

# shoe_28 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_28.material_ids = [wool.id];

# shoe_29 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_29.material_ids = [wool.id];

# shoe_30 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_30.material_ids = [wool.id];

# shoe_31 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_31.material_ids = [tree.id];

# shoe_32 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_32.material_ids = [tree.id];

# shoe_33 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_33.material_ids = [tree.id];

# shoe_34 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_34.material_ids = [tree.id];

# shoe_35 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_35.material_ids = [tree.id];

# shoe_36 = Shoe.create!(gender: 'Male', model: 'Skippers')
# shoe_36.material_ids = [tree.id];

# shoe_37 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_37.material_ids = [wool.id];

# shoe_38 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_38.material_ids = [wool.id];

# shoe_39 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_39.material_ids = [wool.id];

# shoe_40 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_40.material_ids = [wool.id];

# shoe_41 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_41.material_ids = [wool.id];

# shoe_42 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_42.material_ids = [wool.id];

# shoe_43 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_43.material_ids = [tree.id];

# shoe_44 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_44.material_ids = [tree.id];

# shoe_45 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_45.material_ids = [tree.id];

# shoe_46 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_46.material_ids = [tree.id];

# shoe_47 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_47.material_ids = [tree.id];

# shoe_48 = Shoe.create!(gender: 'Male', model: 'Toppers')
# shoe_48.material_ids = [tree.id];

# shoe_49 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_49.material_ids = [wool.id];

# shoe_50 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_50.material_ids = [wool.id];

# shoe_51 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_51.material_ids = [wool.id];

# shoe_52 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_52.material_ids = [wool.id];

# shoe_53 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_53.material_ids = [wool.id];

# shoe_54 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_54.material_ids = [wool.id];

# shoe_55 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_55.material_ids = [tree.id];

# shoe_56 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_56.material_ids = [tree.id];

# shoe_57 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_57.material_ids = [tree.id];

# shoe_58 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_58.material_ids = [tree.id];

# shoe_59 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_59.material_ids = [tree.id];

# shoe_60 = Shoe.create!(gender: 'Female', model: 'Runners')
# shoe_60.material_ids = [tree.id];

# shoe_61 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_61.material_ids = [wool.id];

# shoe_62 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_62.material_ids = [wool.id];

# shoe_63 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_63.material_ids = [wool.id];

# shoe_64 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_64.material_ids = [wool.id];

# shoe_65 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_65.material_ids = [wool.id];

# shoe_66 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_66.material_ids = [wool.id];

# shoe_67 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_67.material_ids = [tree.id];

# shoe_68 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_68.material_ids = [tree.id];

# shoe_69 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_69.material_ids = [tree.id];

# shoe_70 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_70.material_ids = [tree.id];

# shoe_71 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_71.material_ids = [tree.id];

# shoe_72 = Shoe.create!(gender: 'Female', model: 'Loungers')
# shoe_72.material_ids = [tree.id];

# shoe_73 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_73.material_ids = [wool.id];

# shoe_74 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_74.material_ids = [wool.id];

# shoe_75 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_75.material_ids = [wool.id];

# shoe_76 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_76.material_ids = [wool.id];

# shoe_77 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_77.material_ids = [wool.id];

# shoe_78 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_78.material_ids = [wool.id];

# shoe_79 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_79.material_ids = [tree.id];

# shoe_80 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_80.material_ids = [tree.id];

# shoe_81 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_81.material_ids = [tree.id];

# shoe_82 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_82.material_ids = [tree.id];

# shoe_83 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_83.material_ids = [tree.id];

# shoe_84 = Shoe.create!(gender: 'Female', model: 'Skippers')
# shoe_84.material_ids = [tree.id];

# shoe_85 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_85.material_ids = [wool.id];

# shoe_86 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_86.material_ids = [wool.id];

# shoe_87 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_87.material_ids = [wool.id];

# shoe_88 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_88.material_ids = [wool.id];

# shoe_89 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_89.material_ids = [wool.id];

# shoe_90 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_90.material_ids = [wool.id];

# shoe_91 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_91.material_ids = [tree.id];

# shoe_92 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_92.material_ids = [tree.id];

# shoe_93 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_93.material_ids = [tree.id];

# shoe_94 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_94.material_ids = [tree.id];

# shoe_95 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_95.material_ids = [tree.id];

# shoe_96 = Shoe.create!(gender: 'Female', model: 'Toppers')
# shoe_96.material_ids = [tree.id];