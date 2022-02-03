class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed
  has_one :user
end
