function unis(){
  var fs=require("fs");
  const path=require('path');
  pth=path.join(__dirname,"universities.json");
  var un=fs.readFileSync(pth);
  var list=JSON.parse(un);
  var cnt=0;
  for(i in list){
    var label=document.createElement('LABEL');
    label.className="switch";
    var checkbox = document.createElement('input');
    checkbox.id ="chbox";
    checkbox.type= 'checkbox';
    var t=checkbox.name = i;
    checkbox.onclick = function (){
      // alert(this.name);
      var un=fs.readFileSync(pth);
      var ll=JSON.parse(un);
      if(ll[this.name]==false){
        checkbox.checked=true;
        ll[this.name]=true;
      }
      else{
        checkbox.checked=false;
        ll[this.name]=false;
      }
      // alert(ll[this.name]);
      ch(ll);
    };
    if(list[i]==false){
      checkbox.checked=false;
    }
    else{
      checkbox.checked=true;
    }
    cnt++;
    // checkbox.style="float: right;  margin-left:100px;";
    var sw=document.createElement("SPAN");
    sw.className="slider round";
    label.appendChild(checkbox);
    label.appendChild(sw);
    document.getElementById("Universities").appendChild(label);
    let show=document.createTextNode(`${String(i)}`);
    let li=document.createElement("LI");
    li.appendChild(show);
    document.getElementById("Universities").appendChild(li);
  }
  function change(){
    var fs=require("fs");
    const path=require('path');
    pth=path.join(__dirname,"universities.json");
    var un=fs.readFileSync(pth);
    var ll=JSON.parse(un);
    var i=checkbox.name;
    alert(checkbox.name);
    if(ll[i]==false){
      checkbox.checked=true;
      ll[i]=true;
    }
    else{
      checkbox.checked=false;
      ll[i]=false;
    }
    alert(ll[i]);
    alert(i);
    ch(ll);
  }
  function ch(list){
    var fs=require("fs");
    let data = JSON.stringify(list,null,2);
    fs.writeFile('universities.json', data,(err)=>{
      if(err) throw err;
    });
  }
}