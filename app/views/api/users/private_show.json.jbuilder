displayedShoes = @user.displayedShoes.map { |shoe| shoe.id }

json.extract! @user, 
    :id, :email, :first_name, :last_name, :cart_id
    json.displayedShoes { json.array! displayedShoes }