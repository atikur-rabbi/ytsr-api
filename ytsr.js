const ytsr = require('ytsr');
let filter;
ytsr.do_warn_deprecate = false;

 let sResult = "some val";
let searchResults = [];
var lavel = "github";

ytsr(lavel, function (err, searchResults) {
    if (err) throw err;
   console.log(JSON.stringify(searchResults))
  })

 
let sResult2 = ytsr(lavel);
sResult2.then(function(result) {
  // console.log(result); // "normalReturn"
});
console.log(sResult2)
// console.log(ytsr(lavel));





// ytsr.getFilters('github', function(err, filters) {

//   if(err) throw err;
//   filter = filters.get('Type').find(o => o.name === 'Video');
//  // ytsr.do_warn_deprecate = false;
//   ytsr.getFilters(filter.ref, function(err, filters) {
//     if(err) throw err;
//     filter = filters.get('Duration').find(o => o.name.startsWith('Short'));
//     var options = {
//       limit: 50,
//       nextpageRef: filter.ref,
//     }
//     ytsr(null, options, function(err, searchResults) {
//       if(err) throw err;
//       console.log(searchResults);
//     });
//   });
// });