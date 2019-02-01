function toBing(){
    document.getElementById("searchButton").value="必     应";
    document.getElementById("form").action="https://bing.com/search";
    document.getElementById("key").name="q";
}
function toBaidu(){
    document.getElementById("searchButton").value="百     度";
    document.getElementById("form").action="https://www.baidu.com/s";
    document.getElementById("key").name="wd";
}
function toTaobao(){
    document.getElementById("searchButton").value="淘     宝";
    document.getElementById("form").action="https://s.taobao.com/search";
    document.getElementById("key").name="q";
}
function toJingdong(){
    document.getElementById("searchButton").value="京     东";
    document.getElementById("form").action="https://search.jd.com/Search";
    document.getElementById("key").name="keyword";
}

function change(x){
    if(x.value=="百     度")toBaidu();
    else if(x.value=="必     应")toBing();
    else if(x.value=="淘     宝")toTaobao();
    else toJingdong();
    hideMenu();
}

function showMenu(){
    var all=Array();
    var at;
    var atNew=document.getElementById("searchButton").value;
    if(atNew!="百     度")all.push("百     度");
    if(atNew!="必     应")all.push("必     应");
    if(atNew!="淘     宝")all.push("淘     宝");
    if(atNew!="京     东")all.push("京     东");
    document.getElementById("one").value=all[0];
    document.getElementById("two").value=all[1];
    document.getElementById("three").value=all[2];
    document.getElementById("menu").style.display="block";
}
function hideMenu(){
    document.getElementById("menu").style.display="none";
}

function changeImg(){
    imgname="url(\".//img//bg"+Math.round(Math.random())+".jpg\")";
    document.body.style.backgroundImage=imgname;
    document.body.style.backgroundSize="100%";
}
