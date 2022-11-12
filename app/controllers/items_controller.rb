class ItemsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        items = Item.all 
        render json: items
    end

    def show 
        item = Item.find_by(id: params[:id])
        render json: item, serializer: ItemLimitedSerializer
    end
end
