db.tMovies.aggregate([
  { $unwind : "$genres"},
  { $match : {genres : "Horror"}},
  { $group: {_id: "$year", numberOfRatings: {$sum : 1}, genres : {$first : "$genres"}}},
  { $sort : {numberOfRatings : -1}},
  { $limit : 5}
]).pretty()