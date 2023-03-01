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
    try {
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
    } catch (error) {
        console.error(error)
    }
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

element.homeWorker= (wait,clickY) => {
    element.codeGenerator(
        ["#fff0c498","#ff85694c","#ff916f4f","#ffeec198","#ffedc093",454,24,2,wait,clickY]
    )
};

element.homeWorker("wait","click")










