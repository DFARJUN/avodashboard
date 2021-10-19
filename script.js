var y = -100;
var maxy
var miny
window.onload = function dor() {

        myLoop(quary)
    
    function myLoop(x) { 
    var divdate = document.createElement("div");
    var datenum = x.user_name;
    var divdatetext = document.createTextNode(datenum);
    divdate.appendChild(divdatetext);
        var element = document.getElementById("demo");
        divdate.id = "divdate";
    element.appendChild(divdate);

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
    });




        var i, y, xLen;
        x = x.childNodes;
        xLen = Object.keys(quary).length;
        for (i = 0; i < xLen; i++) {
            var div = document.createElement("div");
           
            var tag0 = document.createElement("h2");
            var fullname = Math.round(quary[i].avg_picking_per_hour);
            var text0 = document.createTextNode(fullname);
            tag0.classList.add("fh2")
            
            var tag = document.createElement("h2");
            var fullname = quary[i].user_name;
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

            if(i<20){
                element.appendChild(div);
            }


        }
    }
    /*var myint = setInterval(function () {
        maxy = document.body.scrollHeight;
        miny = window.innerHeight;
        window.scroll(0, y);
        y += 0.2;
        if (y + miny-100 > maxy && maxy > 0) {
            clearInterval(myint);
            setTimeout(function () { location.reload(); }, 5000);
        }
    }, 1);*/
}
