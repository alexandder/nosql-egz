db.tMovies.aggregate([
  { $unwind : "$genres"},
  { $group: {_id: "$genres", averageRating: {$avg: "$rating"}, numberOfRatings: {$sum : 1}}},
  { $match : { numberOfRatings : {$gte : 10000} }},
  { $sort : {averageRating : 1}},
  { $limit : 3}
]).pretty()