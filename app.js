var firstDay = moment('2015-03-27');
var now = moment();
var days = now.diff(firstDay,'days');
console.log(days);

// var GameScore = Bmob.Object.extend("GameScore");
// var gameScore = new GameScore();
// gameScore.save({"score": 137}, {
//   success: function(gameScore) {
//     console.log('添加数据成功，返回的objectId是：' + gameScore.id);
//   },
//   error: function(gameScore, error) {
//     console.log('添加数据失败，返回错误信息：' + error.description);
//   }
// });