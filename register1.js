var queryDict = {}
    location.search.substr(1).split("&").forEach(function (item) {
        queryDict[item.split("=")[0]] = item.split("=")[1]
    })
    console.log(queryDict)
    document.getElementById("fname").innerHTML = queryDict.fname;
    document.getElementById("lname").innerHTML = queryDict.lname;
    
    var n = queryDict.email.replace("%40", "@");
    document.getElementById("email").innerHTML = n;
    document.getElementById("sex").innerHTML = queryDict.gender;


    document.getElementById("con").innerHTML = queryDict.mobile;
    document.getElementById("adh").innerHTML = queryDict.adhar;
    document.getElementById("pan").innerHTML = queryDict.pan;
   
    var n = queryDict.address.split("+");
    var s="";
    for(let i=0;i<n.length;i++){
        s=s+n[i]+" ";
    }
    var q=s.split("%2C");
    s1="";
    for(let i=0;i<q.length;i++){
        s1=s1+q[i]+", "
    }
    document.getElementById("add").innerHTML = s1;
    //console.log(s1)
    
    document.getElementById("city").innerHTML = queryDict.city;
    document.getElementById("state").innerHTML = queryDict.state;
    document.getElementById("count").innerHTML = queryDict.country;