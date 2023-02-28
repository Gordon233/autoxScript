if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
  }

let img = captureScreen();
hope_list = ["workshop",]
//get upgrade name list
img = images.clip(img, 350, 103, 203, 390);
img=images.inRange(img, "#f0f0f0","#ffffff")
let name_list = gmlkit.ocr(img, "en").text.replace(/\s+/g, '').toLowerCase().split("\n")[0];

console.log(name_list)

for (let j=0; j<hope_list.length;j++){
    console.log("in")
    if (name_list.includes(hope_list[j])){ //找名字
        console.log("found name")
        for (let k=103; k<493;k=k+2) { 
            console.log(k)
            let img1 = captureScreen();           //locate name, tap
            img2 = images.clip(img1, 350, (103+k), 203, (390-k));
            img2 = images.inRange(img2, "#f0f0f0","#ffffff")
            images.save(img2, "/mnt/shared/Pictures/coc/2.jpg", "jpg", 100);
            let name_list_1 = gmlkit.ocr(img2, "en").text.replace(/\s+/g, '').toLowerCase().split("\n")[0];
            console.log(name_list_1)
            if (name_list_1[0] == hope_list[j][0] ){
                click((350+10),(103+k)) //offect tap
                console.log("tap target name")
                break
            };
        };
    } else {
        swipe(529,300,513,100,1000)
        sleep(1000)
    };
};

// //upgrade plane
// img = images.clip(img, 350, 102, 322, 50);

images.save(img, "/mnt/shared/Pictures/coc/1.jpg", "jpg", 100);
//识别中文
//识别中文
