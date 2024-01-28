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
