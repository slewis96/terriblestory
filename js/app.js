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
    enterCastle(name);
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
  var itemList = prompt("Which items will "+name+" take?", "rope, hammer, chicken (separate by commas)")
  var itemsArr = itemList.split(',');
  if(itemsArr.length<=1){
    alert("Take at least two items");
    items(name);
  }
  itemsArr[0] = itemsArr[0].trim().toLowerCase();
  itemsArr[1] = itemsArr[1].trim().toLowerCase();
  if(itemsArr.length>2){
    document.body.innerHTML = '';
    document.write (
    "<body>"+
    "<img id='frame' src='imgs/fall.gif'>"+
    "<button id='nextButton' onclick='location.reload()' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Try Again?</button>"+
    "</body>"+
    "<script src='js/app.js' 'type='text/javascript'></script>"
    );
    alert(name + " ignored the note as they went to pick up the "+itemsArr[2].trim()+" a trap door opened up");
  }
  else{
    if(((itemsArr[0]!="rope")&&(itemsArr[0]!="hammer")&&(itemsArr[0]!="chicken"))||((itemsArr[1]!="rope")&&(itemsArr[1]!="hammer")&&(itemsArr[1]!="chicken"))){
      alert("please enter a valid input");
      items(name);
    }
    else{
      document.body.innerHTML = '';
      document.write (
      "<body>"+
      "<img id='frame' src='imgs/skeleton.png'>"+
      "<button id='nextButton' onclick='boss("+'"'+name+'"'+", "+'"'+itemsArr[0]+'"'+", "+'"'+itemsArr[1]+'"'+")' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Next</button>"+
      "</body>"+
      "<script src='js/app.js' 'type='text/javascript'></script>"
      );
      alert(name + " picked up the " +itemsArr[0]+" and "+itemsArr[1]+" and moved on");
    }
  }
}
function boss(name, item1, item2){
  alert(name + " is confronted by a spooky skeleton he bellows 'who dares enter my castle'");
  var use = prompt(name + " must think fast " +name+" reaches into their pocket what do they use?", item1 +" or "+item2);
  var use = use.toLowerCase();
  if(use!=item1&&use!=item2){
    alert("you don't have that item");
    boss(name, item1, item2);
  }
  else{
    switch(use){
      case "chicken":
        wrongItem(name, use);
        break;
      case "rope":
        wrongItem(name, use);
        break;
      case "hammer":
        rightItem(name);
        break;
    }
  }
}
function wrongItem(name, use){
  if(use=="chicken"){
    alert(name+ " eats the large chicken wing as the skeleton approaches.... he kills " + name)
  }
  if(use=="rope"){
    alert(name+ " tries to untangle the rope as the skeleton approaches.... he kills " + name)
  }
  document.body.innerHTML = '';
  document.write (
  "<body>"+
  "<img id='frame' src='imgs/skeletondead.gif'>"+
  "<button id='nextButton' onclick='location.reload();' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Try Again?</button>"+
  "</body>"+
  "<script src='js/app.js' 'type='text/javascript'></script>"
  );
}
function rightItem(name){
  alert(name+" hits the skeleton with the hammer, his skull cracks, he drops, "+name+" hits him again, "+name+" can't stop.");
  alert("only powdered bones remain "+name+" wipes the sweat from their brow you've finished it")
  document.body.innerHTML = '';
  document.write (
  "<body>"+
  "<img id='frame' src='imgs/theend.gif'>"+
  "<button id='nextButton' onclick='location.reload();' style='position:absolute; top:0; width: 300px; height: 300px;' type='button' name='button'>Sorry</button>"+
  "</body>"+
  "<script src='js/app.js' 'type='text/javascript'></script>"
  );
}
