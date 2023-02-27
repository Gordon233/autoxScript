if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
  }


var img = captureScreen();
var point = images.findAllPointsForColor(img, "#ffc6772e")
if(point){
    toast(point);
    console.log(point)
    exit()
}
