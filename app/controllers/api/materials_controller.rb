class Api::MaterialsController < ApplicationController 
    def new
        @material = Material.new
        render :new
    end

    def index
        @material = Material.all
    end

    def show
        @material = Material.find_by(id: params[:id])

        if @material
            render :show
        else
            render json: @material.errors.full_messages, status: 422
        end
    end

    private
    def material_params
        params.require(:material).permit(:id)
    end
end