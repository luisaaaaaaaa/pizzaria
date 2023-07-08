menuListArray = ["Pizza Vegetariana","Pizza de frango","Pizza de carne","Pizza portuguesa","Pizza Quatro queijos","Pizza de peperrone"
                    ];

function getMenu(){
var htmldata;
menuListArray.sort()
for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata+menuListArray[i]+"<br>"
}
document.getElementById("displayMenu").innerHTML=htmldata
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="";
for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+menuListArray[i]+"<br>"
}
document.getElementById("displayAddMenu").innerHTML=htmldata


}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem()
}