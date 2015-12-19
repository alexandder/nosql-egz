db.tMovies.aggregate([
  { $group: {_id: "$title", averageRating: {$avg: "$rating"}, numberOfRatings: {$sum : 1}} },
  { $match : { numberOfRatings : {$gte : 1000} }},
  { $sort : {averageRating : -1}},
  { $limit : 5}
]).pretty()