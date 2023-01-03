
document.getElementById('button').addEventListener('click', function(){
    // let myArray=[];
    const  artist=document.getElementById("art").value;
    const  Title=document.getElementById("title").value;
    const  year=document.getElementById("year").value;
    const allarray=[artist,Title,year];
    const  cd=document.getElementById("cd");
    const  cassette=document.getElementById("cassette");
    const  lp=document.getElementById("lp");
    const  gold=document.getElementById("gold");
    const  select=[];


if(allarray[0]==""||allarray[1]==""||allarray[2]==""){
    document.getElementById("de").style.border="3px solid red";
    alert("Please enter valid value");
}
else{
    document.getElementById("de").style.border="3px solid green";
if(cd.checked){
    select.push("cd");
}
if(cassette.checked){
    select.push("cassette");
}
if(lp.checked){
    select.push("lp");
}
var goldvalue=[];
if(gold.checked){
    goldvalue.push("ON");   
}


//localstorage
// let ourmusic_local=JSON.stringify(ourmusic);
// localStorage.setItem("artist,Title,year,select,gold",ourmusic_local);
// let ourmusic_store=JSON.parse(localStorage.getItem("artist,Title,year,select,gold"));
// console.log(ourmusic_store);
//table
let addrow=document.getElementById("table");
let newcell=addrow.insertRow();
let cel1=newcell.insertCell(0);
let cel2=newcell.insertCell(1);
let cel3=newcell.insertCell(2);
let cel4=newcell.insertCell(3);
let cel5=newcell.insertCell(4);
cel1.innerHTML=artist;
cel2.innerHTML=Title;
cel3.innerHTML=year;

// for(let i=0;i<select.length;i++){
//     if(!select[i]==" "){
//         cel4.innerHTML = select[i];
//     }
// }
for(let i=0;i<select.length;i++){
    if(select[i]){
        cel4.innerHTML=select;
    }
}   
for(let i=0;i<goldvalue.length;i++){
    if(goldvalue[i]){
        cel5.innerHTML=goldvalue;
    }
}

}

document.getElementById("form").reset();


});
