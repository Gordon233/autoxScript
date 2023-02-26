//请求横屏截图
requestScreenCapture();
var img = captureScreen();


var p = images.findMultiColors(img, "#ffffffff", [[10, 10, "#fff5f5f5"], [-10, -10, "#ffffffff"]],
{region: [1229, 52, 30, 30]});
click(1229, 52)