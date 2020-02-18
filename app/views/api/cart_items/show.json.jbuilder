
json.extract! @cart_item, :id, :quantity, :cart_id, :shoe_id, :size_idx
json.style @cart_item.shoe.style
json.gender @cart_item.shoe.gender
json.material @cart_item.shoe.material
json.color @cart_item.shoe.color
json.size @cart_item.shoe.size.size[@cart_item.size_idx]

json.photoUrl url_for(@cart_item.shoe.photo)

