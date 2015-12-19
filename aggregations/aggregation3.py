import pymongo
from pymongo import MongoClient

connection = MongoClient('localhost', 27017)

db = connection.nosql

averageRatings = db.tMovies.aggregate([
  { "$unwind" : "$genres"},
  { "$group": {"_id": "$genres", "averageRating": {"$avg": "$rating"}, "numberOfRatings": {"$sum" : 1}}},
  { "$match" : { "numberOfRatings" : {"$gte" : 10000} }},
  { "$sort" : {"averageRating" : 1}},
  { "$limit" : 3}
])


for r in list(averageRatings):
    print(r)
