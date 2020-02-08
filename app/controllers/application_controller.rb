class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    # protect_from_forgery prepend: true
    helper_method :current_user, :logged_in?, :require_login

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.includes(:cart).find_by(session_token: session[:session_token])
    end

    def require_login
        unless current_user
            render json: { base: ['Please Login to Proceed'] }, status: 401
        end
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logged_in?
        !!current_user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
