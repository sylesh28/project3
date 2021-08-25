function ele(id){
    return document.getElementById(id);
}

//onclick
var infonames = [];
var infonamessort = [];
var info = [];
var info2d = [];
var id = 0;
function sumbit(){
    id++;
    info = 
    [ele("firstname").value,
    ele("lastname").value,
    ele("phone").value,
    ele("time").value,id]
    info2d.push(info);
    infonames.push(ele("firstname").value); 
    console.log(info);
    ele("tb").innerHTML += "<tr><td>" + info[0] + "</td><td>" + info[1] + "</td><td>" + info[2] + "</td><td>" + info[3] + "</td></tr>"
}

function sort(){
    var html = "<tr><td>First Name</td><td>Last Name</td><td>Phone Number</td><td>Time</td></tr>";
    for(var i = 0;i < info2d.length;i++){
        html += "<tr><td>" + info2d.sort()[i][0] + "</td>";
        html += "<td>" + info2d.sort()[i][1] + "</td>";
        html += "<td>" + info2d.sort()[i][2] + "</td>";
        html += "<td>" + info2d.sort()[i][3] + "</td></tr>";
    }
    ele("tb").innerHTML = html;
}