class Api::ColorsController < ApplicationController
    def new
        @color = Color.new
        render :new
    end

    def index
        @color = Color.all
    end

    def show
        @color = Color.find_by(id: params[:id])

        if @color
            render :show
        else
            render json: @color.errors.full_messages, status: 422
        end
    end

    private
    def color_params
        params.require(:color).permit(:id)
    end
end