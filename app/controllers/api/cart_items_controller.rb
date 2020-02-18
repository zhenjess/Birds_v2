class Api::CartItemsController < ApplicationController
    before_action :require_login

    def index
        @cart_items = CartItem.where(cart_id: params[:cartId])
        render 'api/cart_items/index'
    end
    
    def create 
        @cart_item = CartItem.includes(:shoe).find_by_cart_id_and_shoe_id(current_user.cart.id, params[:cartItem][:shoe_id])

        @cart_item = @cart_item ||= CartItem.new(cart_item_params)

        if(@cart_item.save)
            render :show 
        else 
            render json: @cart_item.errors.full_messages 
        end
    end

    def update
        @cart_items = CartItem.all
        @cart_item = CartItem.find_by(shoe_id: params[:cartItem][:shoe_id])

        if @cart_item.update(cart_item_params)

            render 'api/cart_items/show'
        else
            render json: ['Try Again'], status: 422
        end
    end

     def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item
            @cart_item.destroy
        end
        render 'api/cart_items/show'
    end

    private
    def cart_item_params
        params.require(:cartItem).permit(:quantity, :shoe_id, :cart_id, :size_idx)
    end
end
