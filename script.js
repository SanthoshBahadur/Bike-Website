
    let redBtn = document.getElementById("red")
    let blueBtn = document.getElementsById("blue");
    let blackBtn = document.getElementsById("black");
    let bike = document.getElementsById("bike");

    redBtn.onclick = function() {
      bike.style.backgroundImage = "url('images/BMW1.png')";
    }
    blueBtn.onclick = function() {
      bike.style.backgroundImage = "url('images/BMW2.png')";
    }
    blackBtn.onclick = function() {
      bike.style.backgroundImage ="url('images/BMW3.png')";
    }
