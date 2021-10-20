var maxy;
var miny;

var quary;
window.onload = function dor() {

    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    
    //usage:
    readTextFile("quary.json", function(text){
        var data = JSON.parse(text);
        console.log(data);
        quary = data;
        myLoop(quary)
    });
    
    
    function myLoop(x) { 

        var element = document.getElementById("demo");

        var i, y, xLen;
        xLen = Object.keys(quary).length;
        for (i = 0; i < xLen; i++) {
            var div = document.createElement("div");
           
            var tag0 = document.createElement("h2");
            var fullname = Math.round(quary[i].avg_picking_per_hour);
            var text0 = document.createTextNode(fullname);
            tag0.classList.add("fh2")
            
            var tag = document.createElement("h2");
            var fullname = quary[i].user_name.substring(0,15);
            var text = document.createTextNode(fullname);
            tag.classList.add("sh2")

            var tag2 = document.createElement("h3");
            var pmname = Math.round(quary[i].avg_picking_per_hour);
            var text2 = document.createTextNode(pmname);
            tag2.classList.add("3h2")

            tag0.appendChild(text0);
            tag.appendChild(text);
            tag2.appendChild(text2);
            div.appendChild(tag0);
            div.appendChild(tag);
            //div.appendChild(tag2);
            element = document.getElementById("demo");


            if(Math.round(quary[i].avg_picking_per_hour)>35){
                div.classList.add("bigthan30")
            }else{
                div.classList.add("lessthan30")   
            }
            
            switch (i+1) {
                case 1:
                    div.classList.add("thefirst")
                  break;
                case 2:
                    div.classList.add("thesec")
                  break;
                case 3:
                    div.classList.add("thethirt")
                break;
            }

                element.appendChild(div);



        }
    }
    maxy = document.body.scrollHeight;
    miny = window.innerHeight;
    var y = 0;

    var myint = setInterval(function () {

        window.scroll(0, y);
        if(y+0.85*miny > maxy){
            y += maxy-miny-y;
        }else{
            y += 0.9*miny;
        }
        if (y + miny >= maxy && maxy > 0) {
            clearInterval(myint);
            setTimeout(function () { location.reload(); }, 4000);
        }
    }, 4000);
}
