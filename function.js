var fun ={};
fun.disconnectWlan=() => {
    notifications();

    requestScreenCapture();
    var img = captureScreen();
    var p = images.findMultiColors(
        img, "#ff80cbc4", [[-2, -2, "#ff80cbc4"], [2, -2, "#ff80cbc4"], [2, 2, "#ff80cbc4"], [-2, 2, "#ff80cbc4"]],
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
    wait = para[7]
    clickY =para[8]
    try {
        while (true) {
            console.log("1")
            // requestScreenCapture();
            console.log("2")
            var img = captureScreen();
            var p = images.findMultiColors(
                img, para[0], [ [-2, -2, para[1]], [2, -2, para[2]], [2, 2, para[3]], [-2, 2, para[4]] ],
                {region: [para[5], para[6], 4, 4]}
            );
            console.log(p)
    
            if (p && wait == "wait")  {
                console.log("01")
                if (clickY == "click") {
                    click(p.x,p.y)
                }
                break
            }
            else if (wait == "unwait") {
                console.log("02")
                if (p && clickY == "click"){
                    click(p.x,p.y)
                }
                break
            }
            console.log("loop")
            sleep(500)
        };   
    } catch (error) {
        console.error(error)
    }
 
}

element.homeShop = (wait,clickY) => {
    element.codeGenerator(["#ffa06741","#ff7a4e2d","#ffb57549","#ff765231","#ff8b5839",1188,638,wait,clickY]);
};

element.homeAttack= (wait,clickY) => {
    element.codeGenerator(
        ["#fffdf1d5","#fffdf1d5","#fffdf2d5","#fffaebcf","#fffaeacf",82,631,wait,clickY]
    )
};

element.homeAttack_findEnemy= (wait,clickY) => {
    element.codeGenerator(
        ["#fffdce53","#ffffd155","#ffffd155","#fffbcb52","#fffbcb52",883,383,wait,clickY]
    )
};

element.homeAttack_findEnemy_quiteBattle= (wait,clickY) => {
    element.codeGenerator(
        ["#fffe5d65","#fff7242b","#fff92831","#fffc5d64","#fff95d65",32,519,wait,clickY]
    )
};

element.homeBattle = () =>{
    element.homeAttack("wait","click")
    element.homeAttack_findEnemy("wait","click")
    element.homeAttack_findEnemy_quiteBattle("wait","click")
};

element.homeBattle()










