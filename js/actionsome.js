

function lineMove() {
  var elem = document.getElementById("line");
  var pos = 0;
  var id = setInterval(frame, 5);
  function stepadd() {
    pos++;
    console.log("hello");
    elem.style.height = pos + "px";
  }
  function frame() {
    if (pos == 100) {
      cline1Move("cline1", pos);
      displayhtml("html1")
    }
    if (pos == 200) {
      cline2Move("cline2", pos);
      displayhtml("html2")
    }
    if (pos == 300) {
      addcline("line", "cline3");
      clinedit("cline3", "http://208.87.133.114:5000/shanshan", "shanshan");
      cline1Move("cline3", pos);
    }
    if (pos == 400) {
      addcline("line", "cline4");
      clinedit("cline4", "midou.html", "midou");
      cline2Move("cline4", pos);
    }
    if (pos % 100 == 0 && pos > 400) {
      clineid = "cline" + pos / 100;
      addcline("line", clineid);
      if (pos / 100 % 2 == 0) {
        cline2Move(clineid, pos);
      } else {
        cline1Move(clineid, pos);

      }
    }
    if (pos == 450) {
      clearInterval(id);
    }
    else {
      stepadd();
      movehtml(pos);
    }
  }
}

function cline1Move(id, tpos) {
  var elem = document.getElementById(id);
  var pos = 0;
  elem.style.top = tpos + "px";
  var id = setInterval(frame1, 6);
  function frame1() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.width = pos + "px";
    }
  }
}

function cline2Move(id, tpos) {
  var elem = document.getElementById(id);
  var pos = 0;
  var left = 0;
  elem.style.top = tpos + "px";
  elem.style.backgroundColor = "purple";
  var id = setInterval(frame2, 6);
  function frame2() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++;
      left--;
      elem.style.width = pos + "px";
      elem.style.left = left + "px";

    }
  }
}
function displayhtml(id) {
  var elem = document.getElementById(id);
  elem.style.display = "block"
}
function addcline(id, childid) {
  var elem = document.getElementById(id);
  var newdiv = document.createElement("div");
  newdiv.setAttribute("class", "cline");
  newdiv.setAttribute("id", childid);
  elem.appendChild(newdiv);
}
function movehtml(tpos) {
  window.scrollBy(0, tpos);
}
function clinedit(id, url, name) {
  var cline = document.getElementById(id);
  var tempp = document.createElement("p");
  var aurl = document.createElement("a");
  aurl.setAttribute("href", url);
  aurl.textContent = name;
  tempp.appendChild(aurl);
  cline.appendChild(tempp);
}
setTimeout(1000);
lineMove();