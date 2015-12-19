#!/bin/bash

csvjoin -c movieId movies.csv ratings.csv > joined.csv

echo "movieId,title,genres,userId,mId,rating,timestamp" > random.csv
shuf -n 1500000 joined.csv >> random.csv

sed 's/"//g' data.csv > moviesRatings.csv
sed -i -e 's/10,000/10000/g' random.csv
sed -i -e 's/20,000/20000/g' random.csv
sed -i -e 's/5,000/5000/g' random.csv
sed -i -e 's/301, 302/301 302/g' random.csv
sed -i -e 's/3, 2, 1/3 2 1/g' random.csv
sed -i -e 's/, / /g' random.csv
sed -i -e 's/Patrik 1,5/Patrik 1.5/g' random.csv
sed -i -e 's/s,T/s T/g' random.csv
sed -i -e 's/3,000/3000/g' random.csv
sed -i -e 's/40,000/40000/g' random.csv
sed -i -e 's/1,000,000/1000000/g' random.csv

time mongoimport -d nosql -c movies --type csv --file random.csv --headerline