class Api::GendersController < ApplicationController
    def new
        @gender = Gender.new
        render :new
    end

    def index
        @gender = Gender.all
    end

    def show
        @gender = Gender.find_by(id: params[:id])

        if @gender
            render :show
        else
            render json: @gender.errors.full_messages, status: 422
        end
    end

    private
    def gender_params
        params.require(:gender).permit(:id)
    end
end