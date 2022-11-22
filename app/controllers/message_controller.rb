class MessageController < ApplicationController
  skip_before_action :verify_authenticity_token
  def show
    @greeting = Message.all.sample.message
    render json:  @greeting.to_json
  end
end
