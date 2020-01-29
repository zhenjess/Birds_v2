class Api::SizesController < ApplicationController
    def new
        @size = Size.new
        render :new
    end

    def index
        @size = Size.all
    end

    def show
        @size = Size.find_by(id: params[:id])

        if @size
            render :show
        else
            render json: @size.errors.full_messages, status: 422
        end
    end

    private
    def size_params
        params.require(:size).permit(:id)
    end
end