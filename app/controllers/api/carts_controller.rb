class Api::CartsController < ApplicationController
    #before_action :require_login
    
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
            # render json: @cart.errors.full_messages
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
end

# def create
       
#         @cart = Cart.where(user_id: current_user.id)

#         if !current_user
#             render json: ['Please Sign In'], status: 422
#         else
#             if @cart.nil?
#                 @cart = Cart.new(user_id: params[:user_id])
#                 @cart.user_id = current_user.id
#                 @cart.save
#                 render 'api/cart/show'
#             else
#                 render json: @cart.errors.full_messages
#             end
#         end
#     end