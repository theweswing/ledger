# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#USERNAME SIGNUP CHECK:

user1 = {
  'username': 'theweswing',
  'password': 'sexywes2',
  'password_confirmation': 'sexywes2',
  'email': 'wschierenbeck@gmail.com',
  'phone': '347-853-4383',
  'first_name': 'Wes',
  'last_name': 'Schierenbeck',
}

User.create(user1)

#LOGIN CHECK:
# {"username": "theweswing",
#     "password": "sexywes2"}
