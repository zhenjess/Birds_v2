json.extract! @shoe, :id, :gender_id, :style_id, :color_id, :material_id, :size_id

json.photoUrls @shoe.photos.map { |file| url_for(file) }

