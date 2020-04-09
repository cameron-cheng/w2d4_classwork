const fs = require('fs');

const allText = [];

fs.readFile(./data/p1.txt, {encoding: 'utf-8'}, function(err,p1){
  if (!err) {
      console.log(p1);
 
  } else {
      console.log(err);
  }
});
fs.readFile(./data/p2.txt, {encoding: 'utf-8'}, function(err,p2){
  if (!err) {
      console.log(p2);
 
  } else {
      console.log(err);
  }
});
fs.readFile(./data/p3.txt, {encoding: 'utf-8'}, function(err,p3){
  if (!err) {
      console.log(p3);
 
  } else {
      console.log(err);
  }
});
fs.readFile(./data/p4.txt, {encoding: 'utf-8'}, function(err,p4){
  if (!err) {
      console.log(p4);
 
  } else {
      console.log(err);
  }
});



// Problem: Read the data files ** in order **, creating one final string as a result
// The data files are in the ./data directory