var $uploadButton = $('#uploadButton');
$uploadButton.on('click', function () {
  var uploadFile = $("#uploadFile")[0].files[0];
  if (uploadFile) {
    var originalName = uploadFile.name;
    var dotIndex = originalName.lastIndexOf('.');
    var extention = originalName.slice(dotIndex);
    var name = originalName.slice(0, dotIndex) + '_' + Date.now().toString(36) + extention;
    var file = new Bmob.File(name, uploadFile);
    file.save().then(function (obj) {
      console.log(obj.url());
    }, function (error) {
      console.log(error);
    });
  }
});

