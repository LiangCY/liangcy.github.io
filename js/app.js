var firstDay = moment('2015-03-27');
var now = moment();
var days = now.diff(firstDay, 'days');
$('#days').text(days);
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

var bucketUrl = 'http://gallery.gz.bcebos.com/';
var config = {
  endpoint: 'http://gz.bcebos.com',
  credentials: {
    ak: '733769b45b7b4ac5ae5128f2692c5911',           //您的AccessKey
    sk: 'dd07bb2d28d44a9d9bd9671cc60b927e'            //您的SecretAccessKey
  }
};
var bucket = 'gallery';
var client = new baidubce.sdk.BosClient(config);


client.listObjects(bucket)
  .then(function (response) {
    var contents = response.body.contents;
    if (contents.length < 9) {
      var rand = Math.floor(Math.random() * contents.length);
      var file = contents[rand];
      $('body').css('background-image', "url(" + bucketUrl + file.key + ")");
    } else {
      for (var i = 1; i <= 9; i++) {
        rand = Math.floor(Math.random() * contents.length);
        var filename = contents.splice(rand, 1)[0].key;
        console.log(filename);
        $('.grid.g-' + i).css('background-image', "url(" + bucketUrl + filename + ")");
      }
    }
  })
  .catch(function (error) {
    // 查询失败
  });