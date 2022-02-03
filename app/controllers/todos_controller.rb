class TodosController < ApplicationController

    def index
        render json: current_user.todos.all #set for current user
    end

    def show
        render json: find_todo
    end

    def create 
        # todo = Todo.create!(todo_params)
        todo = current_user.todos.create!(todo_params) #set for current user
        render json: todo, status: :created
    end

    def update
        todo = find_todo
        todo.update!(todo_params)   
        render json: todo   
    end

    def destroy
        find_todo.destroy
        head :no_content
    end

    private
    
    def find_todo
        Todo.find(params[:id])
    end

    def todo_params
        params.permit(:title, :completed)
    end

end
