class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.integer :user_id
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
