class Api::UsersController < ApplicationController
    def new 
        @user = User.new
        render :new
    end

    def create 
        @user = User.new(user_params) #from user form
    
        if @user.save
            login(@user)
           # debugger
            ensure_cart
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])

        if @user == current_user
            # render :private_show
            render :show
        elsif @user
            render :show
        end
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password, :confirm_password)
    end

    def ensure_cart
        #debugger
        @cart = Cart.create(user_id: @user.id).id))
        # @user[cart_id] = @user.cart_id || Cart.create(user_id: @user.id).id)
        @user.update(cart_id: (@user.cart_id || @cart))
    end
   
end