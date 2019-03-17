function populateMenu(){
  var links = {
"Betts, Emily": "http://firebird.sheridanc.on.ca/~ixd492/ConProWebCat2019/",
"Finch, Marlee": "http://ixd589.firebird.sheridanc.on.ca/ConProWebCat/",
"Fulkerson, Jessica": "http://ixd590.firebird.sheridanc.on.ca/ConProWebCat2019/",
"Lillo Meza, Michelle": "http://ixd564.firebird.sheridanc.on.ca/ConPro_WebCatalogue/",
"Luk, William": "http://ixd541.firebird.sheridanc.on.ca/Futurama/",
"Mcghie, Faith": "http://www.firebird.sheridanc.on.ca/~ixd507/futurama/",
"Morabito, Carina": "https://firebird.sheridanc.on.ca/~ixd508/conpro_project2/",
"Tang, Xinyue": "http://firebird.sheridanc.on.ca/~ixd548/ConProWebCat2019/",
"Xiao, Zhendong": "http://ixd549.firebird.sheridanc.on.ca/process2/",
"Zhang, Di": "http://firebird.sheridanc.on.ca/~ixd550/conproweb2019/",
"Zhi, Xiaotong": "http://firebird.sheridanc.on.ca/~ixd551/futurama/"
  };
  for (var name in links) {
      if (links.hasOwnProperty(name)) {
        var theOption = document.createElement("option");
        theOption.text = name;
        theOption.value = links[name];
        var theSelect = document.getElementById("theStudents");
        theSelect.appendChild(theOption);
      }
  }
}
