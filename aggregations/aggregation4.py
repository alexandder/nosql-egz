import pymongo
from pymongo import MongoClient

connection = MongoClient('localhost', 27017)

db = connection.nosql

horrorsYears = db.tMovies.aggregate([
  { "$unwind" : "$genres"},
  { "$match" : {"genres" : "Horror"}},
  { "$group" : {"_id": "$year", "numberOfRatings": {"$sum" : 1}, "genres" : {"$first" : "$genres"}}},
  { "$sort" : {"numberOfRatings" : -1}},
  { "$limit" : 5}
])


for r in list(horrorsYears):
    print(r)
