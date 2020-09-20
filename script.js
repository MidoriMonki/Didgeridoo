document.getElementById("btn1").href = "" + localStorage.btn1Href;
document.getElementById("btn1").innerHTML = "" + localStorage.btn1Name;

document.getElementById("btn2").href = "" + localStorage.btn2Href;
document.getElementById("btn2").innerHTML = "" + localStorage.btn2Name;

document.getElementById("btn3").href = "" + localStorage.btn3Href;
document.getElementById("btn3").innerHTML = "" + localStorage.btn3Name;

document.getElementById("btn4").href = "" + localStorage.btn4Href;
document.getElementById("btn4").innerHTML = "" + localStorage.btn4Name;

document.getElementById("btn5").href = "" + localStorage.btn5Href;
document.getElementById("btn5").innerHTML = "" + localStorage.btn5Name;

document.getElementById("btn6").href = "" + localStorage.btn4Href;
document.getElementById("btn6").innerHTML = "" + localStorage.btn6Name;

if(localStorage.clock == null)
  {
      localStorage.clock = 12;
  }
if(localStorage.clock != "off")
  {
  }
else
  {
    document.getElementById("clock").style.opacity = "0";
  }
if(localStorage.geri == null)
  {
      localStorage.geri = 1;
  }
else if(localStorage.geri != 1)
  {
      localStorage.geri = 0;
      document.getElementById("mascot").style.display = "none";
  }
else
  {
    localStorage.geri = 1;
    document.getElementById("mascot").style.display = "initial";
  }


randomQuote();

function erase()
{
  localStorage.setItem("bckg", null);
  document.body.style.background = null;
  localStorage.wow = 1;
}
 document.querySelector("#files").addEventListener("change", function () {
   const reader = new FileReader();
   
   reader.addEventListener("load", () => {
     localStorage.setItem("bckg", reader.result);
     localStorage.wow = 0;
     
     
      if(localStorage.bckg !== null){
          const backgroundDataURL = localStorage.getItem("bckg");
         document.body.style.background = "url('" + backgroundDataURL + "')";
      }
   });
   
   reader.readAsDataURL(this.files[0]);
   
});
   
  document.addEventListener("DOMContentLoaded", () => {
    
      const backgroundDataURL = localStorage.getItem("bckg");
    
    
      if (localStorage.wow != 1)
        {
          document.body.style.background = "url('" + backgroundDataURL + "')";
        }
    
      if(localStorage.bckg == undefined){
          document.body.style.background = null;
      }
  });

if (localStorage.btn1Name == undefined)
  {
    document.getElementById("btn1").innerHTML = "Button 1"
  }
if (localStorage.btn2Name == undefined)
  {
    document.getElementById("btn2").innerHTML = "Button 2"
  }
if (localStorage.btn3Name == undefined)
  {
    document.getElementById("btn3").innerHTML = "Button 3"
  }
if (localStorage.btn4Name == undefined)
  {
    document.getElementById("btn4").innerHTML = "Button 4"
  }
if (localStorage.btn5Name == undefined)
  {
    document.getElementById("btn5").innerHTML = "Button 5"
  }
if (localStorage.btn6Name == undefined)
  {
    document.getElementById("btn6").innerHTML = "Button 6"
  }


function currentTime() {
  var time = "am";
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  if (localStorage.clock != 24)
  {
    if (hour > 12)
    {
      hour -= 12;
      time = "pm";
    }
      document.getElementById("clock").innerText = hour + ":" + min + time; /* adding time to the div */
  }
  else
  {
      document.getElementById("clock").innerText = hour + ":" + min + ":" + sec; /* adding time to the div */
  }
  var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();

function addButton()
{
  if (localStorage.amountBtn == undefined)
{
    localStorage.amountBtn += 1;
}
  if (localStorage.amountBtn < 111111)
 {
  localStorage.amountBtn += "1";
 }
  if (localStorage.amountBtn == undefined)
{
  localStorage.amountBtn += "1";
}
  if (localStorage.amountBtn > 1)
{
  var x = document.getElementById("btn1");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn1");
  x.style.display = "none";
}
if (localStorage.amountBtn > 0)
{
  var x = document.getElementById("btn1");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn1");
  x.style.display = "none";
}

if (localStorage.amountBtn > 1)
{
  var x = document.getElementById("btn2");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn2");
  x.style.display = "none";
}

if (localStorage.amountBtn > 11)
{
  var x = document.getElementById("btn3");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn3");
  x.style.display = "none";
}

if (localStorage.amountBtn > 111)
{
  var x = document.getElementById("btn4");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn4");
  x.style.display = "none";
}
  
if (localStorage.amountBtn > 1111)
{
  var x = document.getElementById("btn5");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn5");
  x.style.display = "none";
}
  if (localStorage.amountBtn > 11111)
{
  var x = document.getElementById("btn6");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn6");
  x.style.display = "none";
}
}
  
  
  
function removeButton()
{
  if(localStorage.amountBtn > 11111)
  {
    localStorage.amountBtn -= "100000";
  }
  else if(localStorage.amountBtn > 1111)
  {
    localStorage.amountBtn -= "10000";
  }
  else if(localStorage.amountBtn > 111)
  {
    localStorage.amountBtn -= "1000";
  }
  else if (localStorage.amountBtn > 11)
  {
      localStorage.amountBtn -= "100";
  }
  else if (localStorage.amountBtn > 1)
  {
      localStorage.amountBtn -= "10";
  }
  else if (localStorage.amountBtn = 1)
  {
      localStorage.amountBtn -="1";
  }
  
  if (localStorage.amountBtn > 1)
{
  var x = document.getElementById("btn1");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn1");
  x.style.display = "none";
}
if (localStorage.amountBtn > 0)
{
  var x = document.getElementById("btn1");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn1");
  x.style.display = "none";
}

if (localStorage.amountBtn > 1)
{
  var x = document.getElementById("btn2");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn2");
  x.style.display = "none";
}

if (localStorage.amountBtn > 11)
{
  var x = document.getElementById("btn3");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn3");
  x.style.display = "none";
}

if (localStorage.amountBtn > 111)
{
  var x = document.getElementById("btn4");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn4");
  x.style.display = "none";
}
  if (localStorage.amountBtn > 1111)
{
  var x = document.getElementById("btn5");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn5");
  x.style.display = "none";
}
if (localStorage.amountBtn > 11111)
{
  var x = document.getElementById("btn6");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn6");
  x.style.display = "none";
}
}
  




var am = localStorage.amountBtn;



if (am !== undefined)
{
if (localStorage.amountBtn > 1)
{
  var x = document.getElementById("btn1");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn1");
  x.style.display = "none";
}
if (localStorage.amountBtn > 0)
{
  var x = document.getElementById("btn1");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn1");
  x.style.display = "none";
}

if (localStorage.amountBtn > 1)
{
  var x = document.getElementById("btn2");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn2");
  x.style.display = "none";
}

if (localStorage.amountBtn > 11)
{
  var x = document.getElementById("btn3");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn3");
  x.style.display = "none";
}

if (localStorage.amountBtn > 111)
{
  var x = document.getElementById("btn4");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn4");
  x.style.display = "none";
}
if (localStorage.amountBtn > 1111)
{
  var x = document.getElementById("btn5");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn5");
  x.style.display = "none";
}
if (localStorage.amountBtn > 11111)
{
  var x = document.getElementById("btn6");
  x.style.display = "initial";
}
else
{
  var x = document.getElementById("btn6");
  x.style.display = "none";
}
}


function changeVariable1H()
{
    document.getElementById("btn1").href="" + document.getElementById('btn1Href').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn1Href = document.getElementById("btn1").href;
    }
}
function changeVariable1N()
{
    document.getElementById("btn1").innerHTML ="" + document.getElementById('btn1Name').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn1Name = document.getElementById("btn1").innerHTML;
    }
}

function changeVariable2H()
{
    document.getElementById("btn2").href="" + document.getElementById('btn2Href').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn2Href = document.getElementById("btn2").href;
    }
}
function changeVariable2N()
{
    document.getElementById("btn2").innerHTML ="" + document.getElementById('btn2Name').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn2Name = document.getElementById("btn2").innerHTML;
    }
}

function changeVariable3H()
{
    document.getElementById("btn3").href="" + document.getElementById('btn3Href').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn3Href = document.getElementById("btn3").href;
    }
}
function changeVariable3N()
{
    document.getElementById("btn3").innerHTML ="" + document.getElementById('btn3Name').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn3Name = document.getElementById("btn3").innerHTML;
    }
}

function changeVariable4H()
{
    document.getElementById("btn4").href="" + document.getElementById('btn4Href').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn4Href = document.getElementById("btn4").href;
    }
}
function changeVariable4N()
{
    document.getElementById("btn4").innerHTML ="" + document.getElementById('btn4Name').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn4Name = document.getElementById("btn4").innerHTML;
    }
}

function changeVariable5H()
{
    document.getElementById("btn5").href="" + document.getElementById('btn5Href').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn5Href = document.getElementById("btn5").href;
    }
}
function changeVariable5N()
{
    document.getElementById("btn5").innerHTML ="" + document.getElementById('btn5Name').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn5Name = document.getElementById("btn5").innerHTML;
    }
}
function changeVariable6H()
{
    document.getElementById("btn6").href="" + document.getElementById('btn6Href').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn6Href = document.getElementById("btn6").href;
    }
}
function changeVariable6N()
{
    document.getElementById("btn6").innerHTML ="" + document.getElementById('btn6Name').value; 
    if (typeof(Storage) !== "undefined") 
    {
      localStorage.btn6Name = document.getElementById("btn6").innerHTML;
    }
}




function toggleVisbility() {
   var x = document.getElementById("btn1Name");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
    var x = document.getElementById("btn1Href");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
      var x = document.getElementById("btn1D");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
  
  
  
   var x = document.getElementById("btn2Name");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
    var x = document.getElementById("btn2Href");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
      var x = document.getElementById("btn2D");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }




 var x = document.getElementById("btn3Name");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
    var x = document.getElementById("btn3Href");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
      var x = document.getElementById("btn3D");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }




 var x = document.getElementById("btn4Name");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
    var x = document.getElementById("btn4Href");
  if (x.style.display === "none") {
    x.style.display = "initial"
  } else {
    x.style.display = "none";
  }
      var x = document.getElementById("btn4D");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
  
  
  
  
 var x = document.getElementById("btn5Name");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
    var x = document.getElementById("btn5Href");
  if (x.style.display === "none") {
    x.style.display = "initial"
  } else {
    x.style.display = "none";
  }
      var x = document.getElementById("btn5D");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }




 var x = document.getElementById("btn6Name");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
    var x = document.getElementById("btn6Href");
  if (x.style.display === "none") {
    x.style.display = "initial"
  } else {
    x.style.display = "none";
  }
      var x = document.getElementById("btn6D");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }


var x = document.getElementById("bckgN");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }

var x = document.getElementById("erase");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
    var x = document.getElementById("files");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("ok");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
}

if (localStorage.theme == "light")
  {
    var element = document.body;
    document.getElementById("title").style.src = "https://cdn.glitch.com/e70d2d12-ea5d-4f5f-809c-1b8eb6b3dfcc%2FUntitled_Artwork%204.png?v=1600244717725";
    element.classList.toggle("light-mode");
  }
else
  {
      document.getElementById("title").src = "https://cdn.glitch.com/e70d2d12-ea5d-4f5f-809c-1b8eb6b3dfcc%2FUntitled_Artwork%204%20copy.png?v=1600244719154";
  }

function myFunction() {
  
   var element = document.body;
   element.classList.toggle("light-mode");
  
  if (localStorage.theme == "light")
  {
      localStorage.theme = "dark";
      document.getElementById("title").src = "https://cdn.glitch.com/e70d2d12-ea5d-4f5f-809c-1b8eb6b3dfcc%2FUntitled_Artwork%204%20copy.png?v=1600244719154";
  }
  else
  {
      localStorage.theme = "light";
      document.getElementById("title").src = "https://cdn.glitch.com/e70d2d12-ea5d-4f5f-809c-1b8eb6b3dfcc%2FUntitled_Artwork%204.png?v=1600244717725";
  }
}

if (localStorage.amountBtn == undefined)
{
  localStorage.amountBtn = 1;
  var x = document.getElementById("btn1");
  x.style.display = "initial";
  var x = document.getElementById("btn2");
  x.style.display = "none";
  var x = document.getElementById("btn3");
  x.style.display = "none";
  var x = document.getElementById("btn4");
  x.style.display = "none";
  var x = document.getElementById("btn5");
  x.style.display = "none";
  var x = document.getElementById("btn6");
  x.style.display = "none";
}

function toggleClock() {
  if(localStorage.clock != 24 && localStorage.clock != "off")
  {
      localStorage.clock = 24;
      document.getElementById("clock").style.opacity = "1";
  }
  else if (localStorage.clock != 12 && localStorage.clock != "off")
  {
      localStorage.clock = "off";
      document.getElementById("clock").style.opacity = "0";
  }
  else
  {
      localStorage.clock = 12;
      document.getElementById("clock").style.opacity = "1";
  }
  currentTime();
}

function toggleGeri() {
  if (localStorage.geri != 1)
  {
      localStorage.geri = 1;
      document.getElementById("mascot").style.display = "initial";
  }
  else
  {
    var r = confirm("Are you sure you want to do this? Geri is a very handsome boy that just wants to help!");
    if (r == true) 
    {
      localStorage.geri = 0;
      document.getElementById("mascot").style.display = "none";
    } 
  }
}


function randomQuote()
{
  let quotes = ["G'day User!", "Good to see you!", "How is your day going?", "What sites are we surfing today?", "Welcome back!", "hey", "'I'll be dunking by next year' - Declan", "???????", "It's a site", "Created by MidoriMonki", "Error: Can't think of anymore quotes", "More than a browser", "Loading screen tip #14", "Hello there", "Have tried clicking Geri yet?", "Greeting human life-form"]
  
  let quotes_random = quotes[Math.floor(Math.random() * quotes.length)];
  
  document.getElementById("h2").innerHTML = "-- " + quotes_random + " --";
}



