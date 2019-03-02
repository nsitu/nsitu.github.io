function populateMenu(){
  var links = {
      "Student 01": "https://google.com",
      "Student 02": "https://facebook.com",
      "Student 03": "https://google.com",
      "Student 04": "https://facebook.com",
      "Student 05": "https://google.com",
      "Student 06": "https://facebook.com",
      "Student 07": "https://google.com",
      "Student 08": "https://facebook.com",
      "Student 09": "https://google.com",
      "Student 10": "https://facebook.com"
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
