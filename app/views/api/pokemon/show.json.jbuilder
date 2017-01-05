json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type, :items

json.id @pokemon.id
json.name @pokemon.name
json.attack @pokemon.attack
json.defense @pokemon.defense
json.image_url @pokemon.image_url
json.moves @pokemon.moves
json.poke_type @pokemon.poke_type
json.items @pokemon.items
