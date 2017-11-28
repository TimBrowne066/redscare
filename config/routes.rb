Rails.application.routes.draw do
  resource :home, only: [:show]
  root to: "home#show"
end
