if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}





//get upgrade name list
function homeReadBulidingPanel_BigName() {
    img1=captureScreen();
    img2 =images.clip(img1, 426, 474, 455, 50);
    //img3=img2
    img3=images.inRange(img2, "#FFFFB8","#FFFFB8")
    let BulidingName = gmlkit.ocr(img3, "zh").text.replace(/\s+/g, '').toLowerCase().replace(/[(0-9)]/g, '');
    images.save(img3, "/mnt/shared/Pictures/coc/1.jpg", "jpg", 100);
    console.log(BulidingName)
    return BulidingName;

};

//升級面板逐個點擊
function homeFindBuildingPanelName(nameList){
    firstName =[410,116] //pitch 38
    for (let i=0;i<10;i++){
        press(firstName[0],firstName[1]+38*i,300);
        sleep(1000)
        selectBuilding =  homeReadBulidingPanel_BigName()
        sleep(1000)
        for (let j=0;j<nameList.length;j++) {
            if (selectBuilding.includes(nameList[j]) == true) {
                press(firstName[0],firstName[1]+38*i,100)
                console.log("found the name!")
                break
            };
        };

    };
    
}

homeFindBuildingPanelName(["camp"])


// for (let j=0; j<hope_list.length;j++){
//     console.log("in")
//     if (BulidingName.includes(hope_list[j])){ //找名字
//         console.log("found name")
//         for (let k=103; k<493;k=k+2) { 
//             console.log(k)
//             let img1 = captureScreen();           //locate name, tap
//             img2 = images.clip(img1, 350, (103+k), 203, (390-k));
//             img2 = images.inRange(img2, "#f0f0f0","#ffffff")
//             images.save(img2, "/mnt/shared/Pictures/coc/2.jpg", "jpg", 100);
//             let BulidingName_1 = gmlkit.ocr(img2, "en").text.replace(/\s+/g, '').toLowerCase().split("\n")[0];
//             console.log(BulidingName_1)
//             if (BulidingName_1[0] == hope_list[j][0] ){
//                 click((350+10),(103+k)) //offect tap
//                 console.log("tap target name")
//                 break
//             };
//         };
//     } else {
//         swipe(529,300,513,100,1000)
//         sleep(1000)
//     };
// };

// images.save(img, "/mnt/shared/Pictures/coc/1.jpg", "jpg", 100);

