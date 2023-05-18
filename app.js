// alert("iam connected brooo");
// jshint esversion:6

// Set the date we're counting down to
var countDownDate = new Date("Nov 3, 2020 19:17:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var years= Math.floor(days/365);
  var months= Math.floor((days/30)%(years*12));
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "days " + hours + "hours " + minutes + "m " + seconds + "s ";
  document.getElementById("demo2").innerHTML = years +"yrs   "+ months + "Months" ;


}, 1000);
//-------------------------
function spawnButton() {
  var button = document.getElementById('disappearingButton');

  button.remove();

  var randomX = Math.floor(Math.random() * window.innerWidth);
  var randomY = Math.floor(Math.random() * window.innerHeight);

  var newButton = document.createElement('button');
  newButton.textContent = 'NO 😈!!';
  newButton.onclick = spawnButton;

  newButton.setAttribute("id", "disappearingButton");
  newButton.setAttribute("class", "button-59");
  //newButton.id= 'disappearingButton';
  newButton.style.position = 'absolute';
  newButton.style.left = randomX + 'px';
  newButton.style.top = randomY + 'px';

  document.body.appendChild(newButton);
}



//------------------------------------
(function() {


  function getRandomColor() {
  var colors= ["#456", "#890", "#634", "#299", "tomato", "#fb3"],
  idx= Math.floor(colors.length*Math.random());

return (colors[idx]);
  }

  function animateIt(el, dur, delay) {
    var animateEl= el.animate([
          {
            opacity: 0,
           transform: "translate(-50%, -50%) scale(0)"
          },

          {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)"
          },
          {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(1.1)"
          }

        ],
                                         {
        duration: dur,
        easing: "ease-out",
        fill: "forwards",
        delay: delay || 0
        });

    return animateEl;
  }



  function createBubble() {
    var ns= "http://www.w3.org/2000/svg",
        bubble= document.createElement("div"),
        bubbleDummy= document.createElement("div"),
        heart= document.createElementNS(ns, "svg"),
        heartPath= document.createElementNS(ns, "path");

    heart.setAttribute("viewBox", "0 0 600 500");
    heartPath.setAttribute("d", "M300,150 C500,10 600,300 300,400 C0,300 100,10 300,150");
    bubble.classList.add("bubble");
    bubble.style.color= getRandomColor();
    bubbleDummy.classList.add("bubble-dummy");
    heart.classList.add("heart");

    heart.appendChild(heartPath);
    bubble.appendChild(bubbleDummy);
    bubble.appendChild(heart);

    document.body.appendChild(bubble);
    return {
      setPosition: function(x,y) {
          bubble.style.left= x +"px";

        bubble.style.top= y + "px";
      },
      _animate: function() {
        var animateBubble= animateIt(bubbleDummy, 1200),
            animateHeart= animateIt(heart, 2000);

        // console.log(animateBubble);

        return {
          bubbleDur: 1200,
          heartDur: 2000
        };
      },
      remove: function(el) {
        bubble.remove();
      }
    };
  }


  document.body.addEventListener("click", handleDown, false);
  document.body.addEventListener("touchstart", handleDown, false);

  function handleDown(e) {
      var _x= e.pageX,
      _y= e.pageY;

    var bubble= createBubble();

    bubble.setPosition(_x, _y);
   var animation= bubble._animate(),
       totalDelay= animation.bubbleDur+ animation.heartDur;
    // if(e.type) {
    // createSound(20,5000,1,"sawtooth",1);
    // }
    setTimeout(()=> {
      bubble.remove();
      // console.log("removed");
    }, totalDelay);

    // console.log(animation);
  }

  var w= document.body.clientWidth,
      h= document.body.clientHeight;

  function bubbleUp() {
    var de= {
      pageX: Math.random()*w,
      pageY: Math.random()*h
    };

    handleDown(de);

    bblUp= setTimeout(bubbleUp, 200);

  }
 bubbleUp();

  window.addEventListener("resize", function() {
    w= document.body.clientWidth;
      h= document.body.clientHeight;
  }, false);
}());
