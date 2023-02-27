//请求横屏截图
requestScreenCapture();
var img = captureScreen();


var p = images.findMultiColors(
    img, "#fffdc50d", [[-2, -2, "#fffdc50d"], [2, -2, "#fffdc50d"], [2, 2, "#fffdc50d"], [-2, 2, "#ffecb80d"]],
    {region: [1228, 48, 4, 4]}
);
click(1230, 50)