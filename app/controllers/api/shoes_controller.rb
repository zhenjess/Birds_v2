class Api::ShoesController < ApplicationController

    def index 
        @shoes = Shoe.all
        @genders = Gender.all
        @colors = Color.all
        @materials = Material.all
        @sizes = Size.all
        @styles = Style.all 
        @cart_items = CartItem.includes(:cart).includes(:shoe)
    end

    def show 
        @shoe = Shoe.find_by(id: params[:id])

        if @shoe
            render :show
        else
            render json: ["Birds not found"], status: 404
        end
    end

    def create
        @shoe = Shoe.new(shoe_params)

        if @shoe.save
            render :show
        else
            render json: ["Birds don't exist"], status: 404
        end
    end

    private
    def shoe_params
        params.require(:shoe).permit(:gender_id, :style_id, :color_id, :material_id, :size_id, photos: [])
    end
end

 