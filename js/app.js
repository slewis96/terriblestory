function intro(){
  var inname = prompt("Who dis?", "yourname");
  var inlocation = prompt("Where he from ?", "location");
  var character = {name: inname, location: inlocation};
  alert("this is an adventure about " + character.name + " from " + character.location);
  document.body.innerHTML = '';
  document.write (
  "<body>"+
  "<img id='frame' src='imgs/magiccastle.png'>"+
  "<button id='nextButton' onclick='enterCastle("+'"'+character.name+'"'+")' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Next</button>"+
  "</body>"+
  "<script src='js/app.js' 'type='text/javascript'></script>"
  );
}
function enterCastle(name){
  alert("One day " + name +" was walking about somewhere and he saw a castle");
  var enter = prompt("Does "+ name +" enter the castle", "(yes or no)");
  enter = enter.toLowerCase();
  if(enter=="yes" | enter=="y"){
    document.body.innerHTML = '';
    document.write (
    "<body>"+
    "<img id='frame' src='imgs/door.png'>"+
    "<button id='nextButton' onclick='roomOption("+'"'+name+'"'+")' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Next</button>"+
    "</body>"+
    "<script src='js/app.js' 'type='text/javascript'></script>"
    );
  }
  else if(enter=="no" | enter=="n"){
    alert("Congratulations you've won");
    location.reload();
  }
  else{
    alert("please enter a valid input");
    enterCastle(character);
  }
}
function roomOption(name){
  alert(name+" sees two doorways the right doorway seems unsuspicious other than a sign above it reading 'go left', there seems to be a faint purring coming from the left door")
  var door = prompt("Which door does "+ name +" enter", "(left or right)");
  door = door.toLowerCase();
  if(door=="left" | door=="l"){
    document.body.innerHTML = '';
    document.write (
    "<body>"+
    "<img id='frame' src='imgs/panther.png'>"+
    "<button id='nextButton' onclick='panther("+'"'+name+'"'+")' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Next</button>"+
    "</body>"+
    "<script src='js/app.js' 'type='text/javascript'></script>"
    );
  }
  else if(door=="right" | door=="r"){
    document.body.innerHTML = '';
    document.write (
    "<body>"+
    "<img id='frame' src='imgs/chickenwings.png'>"+
    "<button id='nextButton' onclick='chicken("+'"'+name+'"'+")' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Next</button>"+
    "</body>"+
    "<script src='js/app.js' 'type='text/javascript'></script>"
    );
  }
  else{
    alert("please enter a valid input");
    roomOption(name);
  }
}
function panther(name){
  alert(name + " is confronted by an anger panther");
  var action = prompt("What should "+name + " do punch the panther or roll away", "(punch or roll)");
  action = action.toLowerCase();
  if(action=="punch"){
    document.body.innerHTML = '';
    document.write (
    "<body>"+
    "<img id='frame' src='imgs/pantherdead.gif'>"+
    "<button id='nextButton' onclick='location.reload();' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Try Again?</button>"+
    "</body>"+
    "<script src='js/app.js' 'type='text/javascript'></script>"
    );
    alert(name + " tried to punch the panther... it didn't end well");
  }
  else if(action=="roll"){
    document.body.innerHTML = '';
    document.write (
    "<body>"+
    "<img id='frame' src='imgs/items.png'>"+
    "<button id='nextButton' onclick='items("+'"'+name+'"'+")' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Next</button>"+
    "</body>"+
    "<script src='js/app.js' 'type='text/javascript'></script>"
    );
    alert(name+" rolled away with the speed and grace of a panther")
  }
  else{
    alert("please enter a valid input");
    panther(name);
  }
}
function chicken(name){
  alert(name + " sees a table with 100 chickenwings on, his stomach grumbles");
  var action = prompt("How many chickenwings should "+name + " eat", "(0-100)");
  action = action.toLowerCase();
  if(action>20){
    document.body.innerHTML = '';
    document.write (
    "<body>"+
    "<img id='frame' src='imgs/chickendead.gif'>"+
    "<button id='nextButton' onclick='location.reload();' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Try Again?</button>"+
    "</body>"+
    "<script src='js/app.js' 'type='text/javascript'></script>"
    );
    alert(name + " ate too much");
  }
  else if(action<=20){
    document.body.innerHTML = '';
    document.write (
    "<body>"+
    "<img id='frame' src='imgs/items.png'>"+
    "<button id='nextButton' onclick='items("+'"'+name+'"'+")' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Next</button>"+
    "</body>"+
    "<script src='js/app.js' 'type='text/javascript'></script>"
    );
    alert(name+" enjoyed "+ action +" chicken wings and moved on")
  }
  else if(action>100){
    alert("there's only 100 on the table");
    chicken(name);
  }
  else{
    alert("please enter a valid input");
    chicken(name);
  }
}
function items(name){
  alert(name+" sees a table with three items, these might be helpful later on, there's a large chicken wing, a length of rope, and a hammer.");
  alert("A note warns you only to take two items");
  var itemlist = prompt("Which items will +"name+" take?", "(rope, hammer), (chicken, rope) etc.");
}
