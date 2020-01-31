function populateMenu(){
  var links = {
    
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
