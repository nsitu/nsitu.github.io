function populateMenu(){
  var links = {
    "Emily Betts": "http://firebird.sheridanc.on.ca/~ixd492/ConProWebCat2019/",
    "Mya Cipparrone":"http://ixd518.firebird.sheridanc.on.ca/Artifact-Lixier/",
    "Rachael Concessio":"http://ixd495.firebird.sheridanc.on.ca/CONPRO/index%20(1).html",
    "Nghia Dang":"http://ixd519.firebird.sheridanc.on.ca/ConProWebCat2019/index.html",
    "Tim de Bernardo":"http://firebird.sheridanc.on.ca/~ixd533/ConProWebCat2019/",
    "Michael Brzuchalski":"https://ixd493.firebird.sheridanc.on.ca/ConProProj2/",
    "Rick Erickson":"http://ixd498.firebird.sheridanc.on.ca/ConProProject2/",
    "Anna Francesca Dela Cruz":"http://ixd588.firebird.sheridanc.on.ca/flux_capacitor/",
    "Jessica Fulkerson": "http://ixd590.firebird.sheridanc.on.ca/ConProWebCat2019/",
    "Mais Enaya":"http://ixd536.firebird.sheridanc.on.ca/Hober/",
    "Micha Farber":"http://ixd577.firebird.sheridanc.on.ca/ConPro%20WebCat%202019/",
    "Marlee Finch": "http://ixd589.firebird.sheridanc.on.ca/ConProWebCat/",
    "Celine Haddadin":"http://ixd556.firebird.sheridanc.on.ca/CONPRO2/",
    "Linda Hatch":"http://ixd630.firebird.sheridanc.on.ca/ConProWebCat2019/",
    "Kai Heckert-Williams":"http://ixd501.firebird.sheridanc.on.ca/ConProWebCat2019/index.html",
    "Nenyi (Nae) Keborku":"https://ixd579.firebird.sheridanc.on.ca/LUCIDREAM/",
    "Nathan Knappett":"http://ixd559.firebird.sheridanc.on.ca/Nathan_Knappett_Catalogue_Project02/index.html",
    "Chris Kovacs":"https://firebird.sheridanc.on.ca/~ixd539/concept_prj2/",
    "Yichen Li":"http://ixd563.firebird.sheridanc.on.ca/link/",
    "Peilan Liao":"http://ixd505.firebird.sheridanc.on.ca/ConProWebCat2019/",
    "Michelle Lillo Meza": "http://ixd564.firebird.sheridanc.on.ca/ConPro_WebCatalogue/",
    "Claudia Lira":"http://ixd565.firebird.sheridanc.on.ca/ConProWebClaudia2019/",
    "William Luk": "http://ixd541.firebird.sheridanc.on.ca/Futurama/",
    "Jonathan Mathew":"http://ixd604.firebird.sheridanc.on.ca/MathewJonathan_Con_Pro_P2/",
    "Faith Mcghie": "http://www.firebird.sheridanc.on.ca/~ixd507/futurama/",
    "Melissa Miranda Cuadros":"http://ixd566.firebird.sheridanc.on.ca/VDES12350/Melissa_Miranda_P2/",
    "Viking Nav":"http://ixd608.firebird.sheridanc.on.ca/ConProWebCat2019_3/",
    "Sabrina Nguyen":"http://ixd605.firebird.sheridanc.on.ca/Futurama%20Catalogue/",
    "Arash Nouri": "http://firebird.sheridanc.on.ca/~ixd568/Futurama/",
    "Rithika Mirnalini Rameshkumar":"http://ixd606.firebird.sheridanc.on.ca/ConProWebCat2019/",
    "Carina Morabito": "https://firebird.sheridanc.on.ca/~ixd508/conpro_project2/",
    "PSYCAMINE":"http://ixd516.firebird.sheridanc.on.ca/conpro%20prj2/",
    "Rebecca Sader":"http://ixd510.firebird.sheridanc.on.ca/futurama/",
    "Hwa Young Seok":"http://ixd546.firebird.sheridanc.on.ca/Hwayoung_Futurama",
    "Lea Servitillo":"http://ixd0068.firebird.sheridanc.on.ca/servitillo_lea_conpro_prj2/",
    "Kyra Seymour":"http://ixd570.firebird.sheridanc.on.ca/VDES12350/ConProWebCat2019/",
    "Kenzie Stone":"http://ixd595.firebird.sheridanc.on.ca/ConProWebCat2019/index.html",
    "Wu Siyan":"http://ixd574.firebird.sheridanc.on.ca",
    "Xinyue Tang": "http://firebird.sheridanc.on.ca/~ixd548/ConProWebCat2019/",
    "Mary-Ann Trieu": "https://ixd571.firebird.sheridanc.on.ca/ConPro2/mindsight-bot_catalogue/ConProWebCat2019/",
    "Wilson Truong":"http://ixd572.firebird.sheridanc.on.ca/galleryconpro2/",
    "Zhendong Xiao": "http://ixd549.firebird.sheridanc.on.ca/process2/",
    "Zheyuan Xiao":"http://ixd611.firebird.sheridanc.on.ca/concept_project2/",
    "Di Zhang": "http://firebird.sheridanc.on.ca/~ixd550/conproweb2019/",
    "Xiaotong Zhi": "http://firebird.sheridanc.on.ca/~ixd551/futurama/",
    "Valeriia Zub":"http://ixd515.firebird.sheridanc.on.ca/ConPro/artifact.html"
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
