//请求横屏截图
requestScreenCapture();
//截图
var img = captureScreen();

position=[1048,28]
newname="homeBuliding_wall"
size=1

var color1 = images.pixel(img, position[0], position[1]);
var color2 = images.pixel(img, position[0]-size, position[1]-size);
var color3 = images.pixel(img, position[0]+size, position[1]-size);
var color4 = images.pixel(img, position[0]+size, position[1]+size);
var color5 = images.pixel(img, position[0]-size, position[1]+size);
//显示该颜色值
v1=colors.toString(color1);
v2=colors.toString(color2);
v3=colors.toString(color3);
v4=colors.toString(color4);
v5=colors.toString(color5);

console.log(
    `element.${newname}= (wait,clickY) => {
    element.codeGenerator(
        ["${v1}","${v2}","${v3}","${v4}","${v5}",${position[0]-size},${position[1]-size},${size},wait,clickY]
    )
};`
)
console.log("")
console.log(
    `element.${newname}= (wait,clickY) => {
        element.codeGenerator_fullPic(
            ["${v1}","${v2}","${v3}","${v4}","${v5}",${position[0]-size},${position[1]-size},${size},wait,clickY]
        )
    };`
)



