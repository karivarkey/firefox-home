function search(e) {
  if (e.key == "Enter") {
    var search = document.getElementById("search");
    var x = search.value;

    var query = "https://www.google.com/search?q=";
    if (x != "") {
      query += x;
      window.location.href = query;
    }
  }
}

function reducelinespacing(x) {
  const s = document.querySelector("input");
  if (x == 1) {
    s.style.letterSpacing = "1px";
  } else {
    s.style.letterSpacing = "50px";
  }
}

function datetime()
{
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var h = new Date();
  var date = h.getDate()
  var month = months[h.getMonth()]
  var year = h.getFullYear()

  var hour = to12(h.getHours())
  var minute = h.getMinutes();
  console.log(hour[0] + " " + minute+ " " + hour[1]);

  var timeElement = document.getElementById("time");
  timeElement.textContent = hour[0]+":"+minute+" "+hour[1]

  var DateElement = document.getElementById("date");
  DateElement.textContent = date +" " + month+" " + year

  setTimeout(datetime,3000);


}

function to12(hour)
{
  if (hour<=12){
    var h = [hour,"AM"]
    return h
  }
  else{
    var h = [(hour-12),"PM"]
    return h
    
  }
}