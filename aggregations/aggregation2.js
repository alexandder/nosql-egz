db.tMovies.aggregate([
  { $match : { year : {$in : ["2000", "2001", "2002"]}}},
  { $unwind : "$genres"},
  { $group: {_id: "$genres", number: {$sum : 1}} },
  { $sort : {number : 1}},
  { $limit : 5}
]).pretty()