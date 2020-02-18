class Api::CartsController < ApplicationController
    
    def index 
        @cart = Cart.find_by(user_id: params[:user_id])
        render 'api/cart/index'
    end

     def create
        @cart = Cart.new(user_id: params[:user_id])

        if @cart.save
            @user = current_user
            @user.cart_id = @cart.id
            @user.save
            render 'api/cart/show'
        else
            render json: ['Please Sign In'], status: 422
        end
    end

    def show
        @cart = Cart.where(id: params[:id]).where(user_id: params[:user_id]).includes(:cart_items, :items)
        @cart = @cart[0]

        if @cart
            render 'api/cart/show'
        else
            render json: {errors: "Not Available"}, status: 400
        end
    end

    def destroy 
        @cart = Cart.where(id: params[:id]).includes(:cart_items, :items)

        @cart.cart_items.each do |cartItem|      
            cartItem.destroy
        end

        render 'api/cart/show'
    end
end

