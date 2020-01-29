class Api::ShoesColorsController < ApplicationController
    def new
        @shoe_color = ShoeColor.new
        render :new
    end

    def index
        @shoe_color = ShoeColor.ApplicationController
    end

    def show
        @shoe_color = ShoeColor.find_by(id: params[:id])

        if @shoe_color
            render :show
        else
            render json: @shoe_color.errors.full_messages, status: 422
        end
    end

        private
        def shoe_color_params
            params.require(:shoe_color).permit(:shoe_id, :hue_id)
        end
end