var fun ={};
fun.disconnectWlan=() => {
    notifications();

    requestScreenCapture();
    var img = captureScreen();
    var p = images.findMultiColors(
        img, "#ff80cbc4", [[-size, -size, "#ff80cbc4"], [2, -size, "#ff80cbc4"], [2, 2, "#ff80cbc4"], [-size, 2, "#ff80cbc4"]],
        {region: [193, 187, 4, 4]}
    );
    click(195, 189);
    sleep(2000);
    click(195, 189);
    sleep(1000);
    click(55, 350);
    sleep(1000);
    click(55, 350);

};

requestScreenCapture();

var element = {};
element.codeGenerator =(para) =>{
    wait = para[8];
    clickY =para[9];
    size=para[7];

    while (true) {
        console.log("1")
        // requestScreenCapture();
        console.log("2")
        var img = captureScreen();
        var p = images.findMultiColors(
            img, para[0], [ [-size, -size, para[1]], [size, -size, para[2]], [size, size, para[3]], [-size, size, para[4]] ],
            {region: [para[5], para[6], size*2, size*2]}
        );
        console.log(p);

        if (p && wait == "wait")  {
            console.log("01");
            if (clickY == "click") {
                click(p.x,p.y)
                console.log("46")
            }
            break
        }
        else if (wait == "unwait") {
            console.log("02");
            if (p && clickY == "click"){
                click(p.x,p.y)
            }
            break       
        }
        console.log("loop");
        sleep(500);
    };   

}
element.codeGenerator_fullPic =(para) =>{
    wait = para[8];
    clickY =para[9];
    size=para[7];
    while (true) {
        console.log("1")
        // requestScreenCapture();
        console.log("2")
        var img = captureScreen();
        var p = images.findMultiColors(
            img, para[0], [ [-size, -size, para[1]], [size, -size, para[2]], [size, size, para[3]], [-size, size, para[4]] ],
            {region: [0, 0, 1280, 720]}
        );
        console.log(p);

        if (p && wait == "wait")  {
            console.log("01");
            if (clickY == "click") {
                click(p.x,p.y)
                console.log("46")
            }
            break
        }
        else if (wait == "unwait") {
            console.log("02");
            if (p && clickY == "click"){
                click(p.x,p.y)
            }
            break       
        }
        console.log("loop");
        sleep(500);
    };   

}

element.homeAttack= (wait,clickY) => {
    element.codeGenerator(
        ["#fffdf1d5","#fffff5e0","#fffdf4dc","#fff2e5c4","#fffdefd2",79,629,4,wait,clickY]
    )
};
element.homeAttack_findEnemy= (wait,clickY) => {
    element.codeGenerator(
        ["#ffffd155","#ffffd155","#ffffd155","#ffffd155","#ffffd155",873,369,4,wait,clickY]
    )
};
element.homeAttack_findEnemy_cancleBattle= (wait,clickY) => {
    element.codeGenerator(
        ["#fff95d64","#fff61d25","#fffe5d65","#fff95d61","#fff55d5d",27,521,4,wait,clickY]
    )
};
element.homeBuliding_x= (wait,clickY) => {
    element.codeGenerator(
        ["#ffff8d95","#ffff8d95","#ffff8d95","#ffff8d95","#ffff8d95",1047,27,1,wait,clickY]
    )
};
//------------------------------------------------------------------

element.homeBuliding_wall= (wait,clickY) => {
    element.codeGenerator(
        ["#ff90adc2","#ffe8e8e0","#ffe8e8e0","#ff6490b3","#ffe8e8e0",455,493,1,wait,clickY]
    )
};


//------------------------------------------------------------------
element.homeStock= (wait,clickY) => {
    element.codeGenerator_fullPic(
        ["#ffc8c0b9","#ffc2b5af","#ffc8beba","#ffb4a69f","#ffa19591",312,354,2,wait,clickY]
    )
};
//------------------------------------------------------------------

element.relocateBase = () => {
    gestures(
        [0, 500, [800, 300], [500, 1000]],
        [0, 500, [300, 1500], [500, 1000]]
    );
    gestures(
        [0, 500, [800, 300], [500, 1000]],
        [0, 500, [300, 1500], [500, 1000]]
    );
    element.homeAttack("wait","click");
    element.homeAttack_findEnemy("wait","click");
    element.homeAttack_findEnemy_cancleBattle("wait","click");
};

//element.relocateBase() //縮小定位家鄉陣型

//call a function remenber all bulliding , and save as test. 
element.homeBuliding_wall("unwait","unclick");
element.homeBuliding_x("wait","click")













