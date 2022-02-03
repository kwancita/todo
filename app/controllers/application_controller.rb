class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_user #this will blind all the action if not authenticated user
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    private 

    def authenticate_user
        render json: {error: "not authorized"}, status: :unauthorized unless current_user
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found(error)
        render json: { error: error.message }, status: :not_found
    end

    def current_user
        User.find_by(id: session[:user_id])
    end

end
