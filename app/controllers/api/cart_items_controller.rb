class Api::CartItemsController < ApplicationController
    #before_action :require_login

    skip_before_action :verify_authenticity_token

    def index
        # @cart_items = CartItem.find_by(id: params[:cartItem][:shoe_id])
        @cart_items = CartItem.where(cart_id: params[:cartId])
        render 'api/cart_items/index'
    end
    
    def create 
        # debugger
        @cart_item = CartItem.includes(:shoe).find_by_cart_id_and_shoe_id(current_user.cart.id, params[:cartItem][:shoe_id])

        #we need to check Cart Item table
        #if current params[:shoe_id] && params[:cartId]
        #call update and increment quantity else save new row item

        #test

        # @testing = CartItem.where(shoe_id: params[:shoe_id]).where(cart_id: params[:cart_id])
        # debugger
        @cart_item = CartItem.new(cart_item_params)

        if(@cart_item.save)
            render :show 
        else 
            render json: @cart_item.errors.full_messages 
        end

        #test

        #justcommented below

                    # if (@cart_item) #if have item update 
                    #     #  debugger 
                    #     @quantity = @cart_item.quantity + 1 #quantity column from cart item
                    #     @cart_item.update(quantity: @quantity) #sets quantity at quantity
                    #     if @cart_item.save 
                    #         render :show 
                    #     else 
                    #         render json: @cart_item.errors.full_messages 
                    #     end 
                    # else #create item and quantity is 1, can it go through association to get shoe photo
                    #    # debugger 
                    #     @cart_item = CartItem.new(cart_item_params)
                    #     @cart_item.quantity = 1
                    #     @cart_item.cart_id = current_user.cart.id
                    #     if @cart_item.save #is can save then render
                    #         render :show
                    #     else
                    #         render json: @cart_item.errors.full_messages
                    #     end
                    # end
    end

    def update
        # @cart_items = CartItem.where(cart_id: params[:cart_id])
        # @cart_item = CartItem.find_by(id: params[:id])

        @cart_items = CartItem.all
        @cart_item = CartItem.find_by(shoe_id: params[:cartItem][:shoe_id])

        if @cart_item.update(cart_item_params)

            render 'api/cart_items/show'
        else
            render json: ['Try Again'], status: 422
        end
    end

     def destroy
        # @cart_items = CartItem.where(cart_id: params[:cart_id])
        @cart_item = CartItem.find_by(id: params[:id]).destroy
        render 'api/cart_items/show'
    end

    def destroy_all
        @cart_items = CartItem.where(cart_id: params[:cartId])
        @cart_items.destroy_all
        render 'api/cart_items/index'
    end 

    private
    def cart_item_params
        params.require(:cartItem).permit(:quantity, :shoe_id, :cart_id)
    end
end

        # @cart_items = CartItem.where(cart_id: params[:cart_id])
        # @cart_items = CartItem.find_by(shoe_id: params[:shoe_id])
        # render 'api/cart_items/index'

    # def new
    #     @cart_items = CartItem.new
    #     render :new
    # end

    # def index
    #     @cart_items = CartItem.all
    #     @shoes = Shoe.all
    #     @cart_items = CartItem.where(cart_id: params[:cart_id])
    #     render 'api/cart_items/index'
    # end

    # def show
    #     @cart_item = CartItem.find_by(id: params[:id])
    #     @item = Item.find_by(id: @cart_item.shoe_id)
    #     render 'api/cart_items/show'
    # end

#    def create
#         @cart_item = CartItem.new(cart_item_params)
#         @cart_item.cart_id = params[:cart_id]

#         if !@cart_item.id
#             @cart_item.save
#             @item = Item.find_by(id: @cart_item.shoe_id)
#             render 'api/cart_items/show'
#         else
#             render json: {"errors": [@cart_item.errors.full_messages]}, status: 200
#         end
#     end

#     def update 
#         @cart_item = CartItem.find_by(id: params[:id])

#         if @cart_item
#             if @cart_item.update(cart_item_params)
#                 @item = Item.find_by(id: @cart_item.shoe_id)
#                 render 'api/cart_items/show'
#             end
#         end
#     end



    # def destroy
    #     debugger
    #     @cart_item = CartItem.find_by(id: params[:id])
        
    #     if @cart_item
    #         @cart_item.destroy
    #         @shoe = Shoe.find_by(id: @cart_item.shoe_id)
    #         render 'api/cart_items/show'
    #     end
    # end

#     def show
#         @cart_item = CartItem.find_by(id: params[:id])
#         @item = Item.find_by(id: @cart_item.shoe_id)
#         render 'api/cart_items/show'
#     end

#     def destroy
#         @cart_item = CartItem.find_by(id: params[:id])

#         if @cart_item
#             @cart_item.destroy
#             @item = Item.find_by(id: @cart_item.shoe_id)
#             render 'api/cart_items/show'
#         end
#     end