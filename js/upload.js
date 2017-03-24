var config = {
  endpoint: 'http://gz.bcebos.com',
  credentials: {
    ak: '733769b45b7b4ac5ae5128f2692c5911',           //您的AccessKey
    sk: 'dd07bb2d28d44a9d9bd9671cc60b927e'            //您的SecretAccessKey
  }
};
var client = new baidubce.sdk.BosClient(config);

var $uploadButton = $('#uploadButton');
var $progress = $('#progress');
$uploadButton.on('click', function () {
  var uploadFile = $("#uploadFile")[0].files[0];
  if (uploadFile) {
    var originalName = uploadFile.name;
    var dotIndex = originalName.lastIndexOf('.');
    var ext = originalName.slice(dotIndex);
    var key = originalName.slice(0, dotIndex) + '_' + Date.now().toString(36) + ext;
    var bucket = 'gallery';
    client.putObjectFromBlob(bucket, key, uploadFile)
      .then(function (response) {
        $progress.text('上传成功')
      })
      .catch(function (error) {
        $progress.text(error)
      });
    client.on('progress', function (e) {
      if (e.lengthComputable) {
        var percentage = (e.loaded / e.total) * 100;
        $progress.text('上传中，已上传了' + percentage.toFixed(2) + '%')
      }
    });
  }
});

