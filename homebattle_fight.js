if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
  }


var img = captureScreen();
//base boundary binary
img=images.inRange(img, "#C06F28","#CC762F")
images.save(img, "/mnt/shared/Pictures/1.jpg", "jpg", 100);
var point = images.findAllPointsForColor(img, "#ffffff",{region: [120,0, 980, 590]})
if(point){
    // toast(point);

    //top-left
    offect=200
    a = [offect,0];
    //top-right
    b = [1280-offect,0];
    //bottom-left
    c =[offect,720];
    //bottom-right
    d = [1280-offect,720];
    //corner
    corner=[a,b,c,d];
    cloest_point_list=[];
    for (let j=0; j<corner.length; j++){
      for (let i=0; i<point.length; i++ ){
        x0=corner[j][0];
        y0=corner[j][1];
        x=point[i].x;
        y=point[i].y;
        distance= ((x0-x)**2+(y0-y)**2)**(1/2);
        
        if (i == 0) {
          cloest_point = [x,y,distance]
          console.log(distance)
        } else if (i>0 && distance < cloest_point[2])  {
          cloest_point = [x,y,distance]
        } else {
          console.log("flitering distance")
        };
      };
      cloest_point_list[j] =cloest_point;
    }
    cloest_point_list[0][0] = cloest_point_list[0][0]-random(30,50)
    cloest_point_list[1][0] = cloest_point_list[1][0]+random(30,50)
    cloest_point_list[2][0] = cloest_point_list[2][0]-random(30,50)
    cloest_point_list[3][0] = cloest_point_list[3][0]+random(30,50)
    console.log(cloest_point_list);
    click(140,655);
    sleep(1000)
    click(cloest_point_list[0][0],cloest_point_list[0][1]);
    sleep(1000)
    click(cloest_point_list[1][0],cloest_point_list[1][1]);
    sleep(1000)
    click(cloest_point_list[2][0],cloest_point_list[2][1]);
    sleep(1000)
    click(cloest_point_list[3][0],cloest_point_list[3][1]);

    
    // exit();
}










