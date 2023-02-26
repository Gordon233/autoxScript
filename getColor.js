//请求横屏截图
requestScreenCapture();
//截图
var img = captureScreen();
//获取在点(100, 100)的颜色值
position=[1229,52]

var color1 = images.pixel(img, position[0], position[1]);
var color2 = images.pixel(img, position[0]+10, position[1]+10);
var color3 = images.pixel(img, position[0]-10, position[1]-10);
//显示该颜色值
v1=colors.toString(color1);
v2=colors.toString(color2);
v3=colors.toString(color3);

console.log(`
    var p = images.findMultiColors(img, "${v1}", [[10, 10, "${v2}"], [-10, -10, "${v3}"]],
    {region: [${position[0]}, ${position[1]}, 30, 30]});`
)