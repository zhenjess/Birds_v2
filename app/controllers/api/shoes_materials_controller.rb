class Api::ShoesMaterialsController < ApplicationController
    def new
        @shoe_material = ShoeMaterial.new
        render :new
    end

    def index
        @shoe_material = ShoeMaterial.all
    end

    def show
        @shoe_material = ShoeMaterial.find_by(id: params[:id])

        if @shoe_material
            render :show
        else
            render json: @shoe_material.errors.full_messages, status: 422
        end
    end

    private
    def shoe_material_params
        params.require(:shoe_material).permit(:shoe_id, :material_id)
    end
end