
function lineMove() {
    var elem = document.getElementById("line");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function stepadd(){
        pos++; 
        console.log("hello");
        elem.style.height = pos+"px"; 
    }
    function frame() {
        if(pos==100){
            cline1Move("cline1");
            displayhtml("html1")
          } 
          if(pos==200){
            cline2Move();
            displayhtml("html2")
          }
      if (pos == 350) {
        clearInterval(id);
      } 
      else {
        stepadd();
      }
    }
  }

  function cline1Move( id) {
    var elem = document.getElementById(id);  
    var pos = 0;
    elem.style.top = "100px";
    var id = setInterval(frame1, 6);
    function frame1() {
      if (pos == 200) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.width = pos+"px"; 
      }
    }
  }

  function cline2Move() {
    var elem = document.getElementById("cline2");   
    var pos = 0;
    var left=0;
    elem.style.top = "200px";
    var id = setInterval(frame2, 6);
    function frame2() {
      if (pos == 200) {
        clearInterval(id);
      } else {
        pos++; 
        left--;
        elem.style.width = pos+"px"; 
        elem.style.left = left+"px"
      }
    }
  }
  function displayhtml(id){
    var elem = document.getElementById(id);   
    elem.style.display = "block"
  }
  
setTimeout(1000);
lineMove();