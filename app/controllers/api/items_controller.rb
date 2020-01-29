class Api::ItemsController < ApplicationController
    def new 
        @items = Item.new
        render :new
    end
    def index
        @items = Item.all
        @shoe_options = ShoeOption.all
        @shoes = Shoe.all
    end

    def show
        @items = Item.find_by_gender(params[:id])
        render 'api/items/show'
    end

    def items_params
        params.require(:item).permit(:size, :price, :photo)
    end
end
