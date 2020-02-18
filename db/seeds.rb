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

demoLogin = User.create!(first_name: "all", last_name: "birds", email: "allbirds@gmail.com", password: "password")

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

shoe_1_colors = [grey, black, white, red, green, blue]
shoe_1_materials = [wool] #,tree
shoe_1_genders = [men]
shoe_1_styles = [runners]
shoe_1_sizes = size.size

    shoe_1_colors.each do |color|
            shoe_1 = Shoe.create!(color_id: color.id, material_id: shoe_1_materials[0].id, gender_id: shoe_1_genders[0].id, style_id: shoe_1_styles[0].id, size_id: size.id)
            filename = "#{shoe_1.gender.gender.downcase}_#{color.color.downcase}_#{shoe_1_materials[0].material.downcase}_#{shoe_1.style.style.downcase}.webp"
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")   
            shoe_1.photo.attach(io: file, filename: filename)
    end


shoe_2_colors = [grey, black, white, red, green, blue]
shoe_2_materials = [tree] 
shoe_2_genders = [men]
shoe_2_styles = [runners]
shoe_2_sizes = size.size

    shoe_2_colors.each do |color|
            shoe_2 = Shoe.create!(color_id: color.id, material_id: shoe_2_materials[0].id, gender_id: shoe_2_genders[0].id, style_id: shoe_2_styles[0].id, size_id: size.id)
            filename = "#{shoe_2.gender.gender.downcase}_#{color.color.downcase}_#{shoe_2_materials[0].material.downcase}_#{shoe_2.style.style.downcase}.webp"
      
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
       
            shoe_2.photo.attach(io: file, filename: filename)
    end



shoe_3_colors = [grey, black, red, blue]
shoe_3_materials = [wool]
shoe_3_genders = [men]
shoe_3_styles = [loungers]
shoe_3_sizes = size.size


    shoe_3_colors.each do |color|
            shoe_3 = Shoe.create!(color_id: color.id, material_id: shoe_3_materials[0].id, gender_id: shoe_3_genders[0].id, style_id: shoe_3_styles[0].id, size_id: size.id)
        
            filename = "#{shoe_3.gender.gender.downcase}_#{color.color.downcase}_#{shoe_3_materials[0].material.downcase}_#{shoe_3.style.style.downcase}.webp"
         
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
           
            shoe_3.photo.attach(io: file, filename: filename)
    end


shoe_4_colors = [grey, black, white, red, green, blue]
shoe_4_materials = [tree] 
shoe_4_genders = [men]
shoe_4_styles = [loungers]
shoe_4_sizes = size.size


    shoe_4_colors.each do |color|
            shoe_4 = Shoe.create!(color_id: color.id, material_id: shoe_4_materials[0].id, gender_id: shoe_4_genders[0].id, style_id: shoe_4_styles[0].id, size_id: size.id)
          
            filename = "#{shoe_4.gender.gender.downcase}_#{color.color.downcase}_#{shoe_4_materials[0].material.downcase}_#{shoe_4.style.style.downcase}.webp"
        
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
          
            shoe_4.photo.attach(io: file, filename: filename)
    end


shoe_5_colors = [grey, black, white, red, green, blue]
shoe_5_materials = [tree] 
shoe_5_genders = [men]
shoe_5_styles = [skippers]
shoe_5_sizes = size.size

    shoe_5_colors.each do |color|
            shoe_5 = Shoe.create!(color_id: color.id, material_id: shoe_5_materials[0].id, gender_id: shoe_5_genders[0].id, style_id: shoe_5_styles[0].id, size_id: size.id)
            
            filename = "#{shoe_5.gender.gender.downcase}_#{color.color.downcase}_#{shoe_5_materials[0].material.downcase}_#{shoe_5.style.style.downcase}.webp"
          
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
        
            shoe_5.photo.attach(io: file, filename: filename)
    end


shoe_6_colors = [grey, black, white, red, green, blue]
shoe_6_materials = [tree] 
shoe_6_genders = [men]
shoe_6_styles = [toppers]
shoe_6_sizes = size.size


    shoe_6_colors.each do |color|
            shoe_6 = Shoe.create!(color_id: color.id, material_id: shoe_6_materials[0].id, gender_id: shoe_6_genders[0].id, style_id: shoe_6_styles[0].id, size_id: size.id)
            
            filename = "#{shoe_6.gender.gender.downcase}_#{color.color.downcase}_#{shoe_6_materials[0].material.downcase}_#{shoe_6.style.style.downcase}.webp"
           
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
         
            shoe_6.photo.attach(io: file, filename: filename)
    end


shoe_7_colors = [grey, black, white, red, green, blue]
shoe_7_materials = [wool] 
shoe_7_genders = [women]
shoe_7_styles = [runners]
shoe_7_sizes = size.size

    shoe_7_colors.each do |color|
            shoe_7 = Shoe.create!(color_id: color.id, material_id: shoe_7_materials[0].id, gender_id: shoe_7_genders[0].id, style_id: shoe_7_styles[0].id, size_id: size.id)
           
            filename = "#{shoe_7.gender.gender.downcase}_#{color.color.downcase}_#{shoe_7_materials[0].material.downcase}_#{shoe_7.style.style.downcase}.webp"
            
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
       
            shoe_7.photo.attach(io: file, filename: filename)
    end


shoe_8_colors = [grey, black, white, red, green, blue]
shoe_8_materials = [tree] 
shoe_8_genders = [women]
shoe_8_styles = [runners]
shoe_8_sizes = size.size

    shoe_8_colors.each do |color|
            shoe_8 = Shoe.create!(color_id: color.id, material_id: shoe_8_materials[0].id, gender_id: shoe_8_genders[0].id, style_id: shoe_8_styles[0].id, size_id: size.id)
           
            filename = "#{shoe_8.gender.gender.downcase}_#{color.color.downcase}_#{shoe_8_materials[0].material.downcase}_#{shoe_8.style.style.downcase}.webp"
           
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
         
            shoe_8.photo.attach(io: file, filename: filename)
    end


shoe_9_colors = [grey, black, white, red, blue]
shoe_9_materials = [wool] 
shoe_9_genders = [women]
shoe_9_styles = [loungers]
shoe_9_sizes = size.size

    shoe_9_colors.each do |color|
            shoe_9 = Shoe.create!(color_id: color.id, material_id: shoe_9_materials[0].id, gender_id: shoe_9_genders[0].id, style_id: shoe_9_styles[0].id, size_id: size.id)
          
            filename = "#{shoe_9.gender.gender.downcase}_#{color.color.downcase}_#{shoe_9_materials[0].material.downcase}_#{shoe_9.style.style.downcase}.webp"
          
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
           
            shoe_9.photo.attach(io: file, filename: filename)
    end


shoe_10_colors = [grey, black, white, red, green, blue]
shoe_10_materials = [tree] 
shoe_10_genders = [women]
shoe_10_styles = [loungers]
shoe_10_sizes = size.size

    shoe_10_colors.each do |color|
            shoe_10 = Shoe.create!(color_id: color.id, material_id: shoe_10_materials[0].id, gender_id: shoe_10_genders[0].id, style_id: shoe_10_styles[0].id, size_id: size.id)
         
            filename = "#{shoe_10.gender.gender.downcase}_#{color.color.downcase}_#{shoe_10_materials[0].material.downcase}_#{shoe_10.style.style.downcase}.webp"
          
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
           
            shoe_10.photo.attach(io: file, filename: filename)
    end


shoe_11_colors = [grey, black, white, red, green, blue]
shoe_11_materials = [tree]
shoe_11_genders = [women]
shoe_11_styles = [skippers]
shoe_11_sizes = size.size

    shoe_11_colors.each do |color|
            shoe_11 = Shoe.create!(color_id: color.id, material_id: shoe_11_materials[0].id, gender_id: shoe_11_genders[0].id, style_id: shoe_11_styles[0].id, size_id: size.id)
        
            filename = "#{shoe_11.gender.gender.downcase}_#{color.color.downcase}_#{shoe_11_materials[0].material.downcase}_#{shoe_11.style.style.downcase}.webp"
      
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
   
            shoe_11.photo.attach(io: file, filename: filename)
    end



shoe_12_colors = [grey, black, white, red, green, blue]
shoe_12_materials = [tree] 
shoe_12_genders = [women]
shoe_12_styles = [toppers]
shoe_12_sizes = size.size

    shoe_12_colors.each do |color|
            shoe_12 = Shoe.create!(color_id: color.id, material_id: shoe_12_materials[0].id, gender_id: shoe_12_genders[0].id, style_id: shoe_12_styles[0].id, size_id: size.id)
          
            filename = "#{shoe_12.gender.gender.downcase}_#{color.color.downcase}_#{shoe_12_materials[0].material.downcase}_#{shoe_12.style.style.downcase}.webp"

            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
         
           shoe_12.photo.attach(io: file, filename: filename)
    end


shoe_13_colors = [grey, black, white, red, green, blue]
shoe_13_materials = [tree] 
shoe_13_genders = [women]
shoe_13_styles = [breezers]
shoe_13_sizes = size.size


    shoe_13_colors.each do |color|
            shoe_13 = Shoe.create!(color_id: color.id, material_id: shoe_13_materials[0].id, gender_id: shoe_13_genders[0].id, style_id: shoe_13_styles[0].id, size_id: size.id)
         
            filename = "#{shoe_13.gender.gender.downcase}_#{color.color.downcase}_#{shoe_13_materials[0].material.downcase}_#{shoe_13.style.style.downcase}.webp"
        
            file = open("https://birds-seeds.s3-us-west-1.amazonaws.com/#{filename}")
        
            shoe_13.photo.attach(io: file, filename: filename)
    end

