class Api::StylesController < ApplicationController
    def new
        @style = Style.new
        render :new
    end

    def index
        @style = Style.all
    end

    def show
        @style = Style.find_by(id: params[:id])

        if @style
            render :show
        else
            render json: @style.errors.full_messages, status: 422
        end
    end

    private
    def style_params
        params.require(:style).permit(:id)
    end
end