import pymongo
from pymongo import MongoClient

connection = MongoClient('localhost', 27017)

db = connection.nosql

bestRatings = db.tMovies.aggregate([
  { "$group": {"_id": "$title", "averageRating": {"$avg": "$rating"}, "numberOfRatings": {"$sum" : 1}} },
  { "$match" : { "numberOfRatings" : {"$gte" : 1000} }},
  { "$sort" : {"averageRating" : -1}},
  { "$limit" : 5}
])

for r in list(bestRatings):
    print(r)