displayedShoes = @user.displayedShoes.map { |shoe| shoe.id }

json.extract! @user, 
    :id, :email, :first_name, :last_name
    json.displayedShoes { json.array! displayedShoes }