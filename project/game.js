
///[REFINEMENTS]/// 
///CODE TIMER/ OXYGEN METER
/// ADD AUSTRALIA, CHINA, INDIA, ETHIOPIA, EGYPT
//music by: Damiano Baldoni (tutorial), 



var pointer; //cursor
var mode; //game not initialyy started
//images
var worldMap;
var greenMap;
var redMap;
var blueMap;
var greyMap;
var tutorialScreen

var speechBubble;     

var maleAstronaut1;
var maleAstronaut2;
var maleAstronaut3;

var femaleAstronaut1;
var femaleAstronaut2;
var femaleAstronaut3;

var rocket;
var rocketSprite;

var maleOrFemale; //astronaut sprite variables
var astroEthnicityMale;
var astroEthnicityFemale;
var maleAstronautSprite; 
var femaleAstronautSprite;
var astroGenderChosen;
var astroEthnicityChosen;
var maleAstroNum;
var femaleAstroNum;
var astroList;
var astronaut;
var astronautChosen;
//flags
var americaFlag;
var brazilFlag;
var canadaFlag;
var englandFlag
var franceFlag;
var germanyFlag;
var italyFlag;
var japanFlag;
var russiaFlag;
var southAfricaFlag;
var flagList; 
var flagChosen;
var flag;
var flagSprite;
var country;
var russiaBlock1;
var japanBlock1;
var southAfricaBlock1;
var americaBlock1;
var americaBlock2;
var canadaBlock1;
var franceBlock1;
var britainBlock1;
var brazilBlock1;
var brazilBlock2;
var italyBlock1;
var germanyBlock1;
//Highlighted versions for hovering over + tags
var brazilHighlighted
var canadaHighlighted
var franceHighlighted
var germanyHighlighted
var italyHighlighted
var japanHighlighted
var russiaHighlighted
var southAfricaHighlighted
var britainHighlighted
var americaHighlighted
var brazilGreen
var canadaGreen
var franceGreen
var germanyGreen
var italyGreen
var japanGreen
var russiaGreen
var southAfricaGreen
var britainGreen
var americaGreen

var americaSprite
var franceTag
var germanyTag
var italyTag
var japanTag
var southAfricaTag
var britainTag
var flagChosen
var flagDict
var usedFlags
//game states
var points
var correct 
var flagChosenBool = false
var countryUserSelected
var gamesCompleted = 0 
var gameCompletesAdded
var score = 10
var scoreAdded = false
var timeTaken 
var tempTime
var inTutorial
//sound variables
var correctSound
var incorrectSound
var menuMusic
var gameMusic
var tutMusic
masterVolume(0.5)
var sfxPlayed = false
var bgmusicPlayed = false
var menuMusicPlayed = false
var tutMusicPlayed = false


function preload() {
  
  femaleAstronaut1 = loadImage('assets/femaleAstronaut1.png');
  femaleAstronaut2 = loadImage('assets/femaleAstronaut2.png');
  femaleAstronaut3 = loadImage('assets/femaleAstronaut3.png');
  maleAstronaut1 = loadImage('assets/maleAstronaut1.png');
  maleAstronaut2 = loadImage('assets/maleAstronaut2.png');
  maleAstronaut3 = loadImage('assets/maleAstronaut3.png')
  worldMap = loadImage('assets/worldMap.jpg');
  speechBubble = loadImage('assets/speechBubble.png');
  rocket = loadImage('assets/rocket.png');
  americaFlag = loadImage('assets/flags/americaFlag.png');
  brazilFlag = loadImage('assets/flags/brazilFlag.png');
  canadaFlag = loadImage('assets/flags/canadaFlag.png');
  englandFlag = loadImage('assets/flags/englandFlag.png');
  franceFlag = loadImage('assets/flags/franceFlag.png');
  germanyFlag = loadImage('assets/flags/germanyFlag.png');
  italyFlag = loadImage('assets/flags/italyFlag.png');
  japanFlag = loadImage('assets/flags/japanFlag.png');
  russiaFlag = loadImage('assets/flags/russiaFlag.png');
  southAfricaFlag = loadImage('assets/flags/southAfricaFlag.png');
  americaHighlighted = loadImage('assets/countries/usa.png');
  brazilHighlighted = loadImage('assets/countries/brazil.png');
  canadaHighlighted = loadImage('assets/countries/canada.png');
  franceHighlighted = loadImage('assets/countries/france.png');
  germanyHighlighted = loadImage('assets/countries/germany.png');
  italyHighlighted = loadImage('assets/countries/italy.png');
  japanHighlighted = loadImage('assets/countries/japan.png');
  russiaHighlighted = loadImage('assets/countries/russia.png')
  southAfricaHighlighted = loadImage('assets/countries/s._africa.png');
  britainHighlighted = loadImage('assets/countries/uk.png');
  greenMap = loadImage('assets/green.png');
  redMap = loadImage('assets/red.png');
  blueMap = loadImage('assets/all_blue.png');
  franceTag = loadImage('assets/FranceTag.PNG');
  germanyTag = loadImage('assets/GermanyTag.PNG');
  italyTag = loadImage('assets/ItalyTag.PNG');
  japanTag = loadImage('assets/JapanTag.PNG');
  southAfricaTag = loadImage('assets/SouthAfricaTag.PNG');
  britainTag = loadImage('assets/UnitedKingdomTag.PNG');
  americaGreen = loadImage('assets/countries/green_usa.png')
  brazilGreen = loadImage('assets/countries/green_brazil.png')
  canadaGreen = loadImage('assets/countries/green_canada.png')
  franceGreen = loadImage('assets/countries/green_france_.png')
  germanyGreen = loadImage('assets/countries/green_germany.png')
  italyGreen = loadImage('assets/countries/green_italy.png')
  japanGreen = loadImage('assets/countries/green_japan.png')
  russiaGreen = loadImage('assets/countries/green_russia.png')
  southAfricaGreen = loadImage('assets/countries/green_south_africa.png')
  britainGreen = loadImage('assets/countries/green_uk.png')
  greyMap = loadImage('assets/grey.png')
  tutorialScreen = loadImage('assets/tutorialScreen.PNG')
  //images stop here
  correctSound = loadSound("assets/Music and Sounds/correctSound.mp3")
  incorrectSound = loadSound("assets/Music and Sounds/incorrectSound.wav")
  menuMusic = loadSound("assets/Music and Sounds/theLift.mp3")
  gameMusic = loadSound("assets/Music and Sounds/Krazoa.mp3")
  tutMusic = loadSound("assets/Music and Sounds/tutorialMusic.mp3")

  bgmusicPlayed = false
  sfxPlayed = false
  menuMusicPlayed = false
  tutMusicPlayed = false
  masterVolume(0.2)


  astroList = [femaleAstronaut1, femaleAstronaut2, femaleAstronaut3, maleAstronaut1, maleAstronaut2, maleAstronaut3];
}

function setup() {
  
  mode = 0;
  createCanvas(1140,550);

  astronautSprite = createSprite(100,450);
  
  rocketSprite = createSprite(1000,300);

  pointer = createSprite(0,0,2.5,2.5);
  pointer.visible = false;

  flagSprite = createSprite(210,367);

  russiaBlock1 = createSprite(870,65,450,60);
  russiaBlock1.visible = false

  japanBlock1 = createSprite(1000,150,50,20);
  japanBlock1.visible = false;

  southAfricaBlock1 = createSprite(650,355,50,40);
  southAfricaBlock1.visible = false;

  americaBlock1 = createSprite(250,140,140,55);
  americaBlock2 = createSprite(90,60,65,35);
  americaBlock1.visible = false;
  americaBlock2.visible = false;

  canadaBlock1 = createSprite(250,75,240,65);
  canadaBlock1.visible = false;

  franceBlock1 = createSprite(577,118,26,22);
  franceBlock1.visible = false;

  britainBlock1 = createSprite(560,90,20,30);
  britainBlock1.visible = false;

  brazilBlock1 = createSprite(415,305,60,60);
  brazilBlock2 = createSprite(385,280,70,40);
  brazilBlock1.visible = false;
  brazilBlock2.visible = false;

  italyBlock1 = createSprite(610,135,25,30);
  italyBlock1.visible = false;

  germanyBlock1 = createSprite(605,103,20,20);
  germanyBlock1.visible = false;

}

function draw() {
  
  clear();
  if (mode == 0) { //title screen displayed until either option is picked
    inMenu = true;
    inTutorial = false
    if(menuMusicPlayed == false){
      menuMusic.loop()
      gameMusic.stop()
      tutMusic.stop()
      menuMusicPlayed = true
    }
    astronautChosen = false;
    flagChosen = false;
    flagChosenBool = false;
    background(220);
    gamesCompleted = 0
    score = 10
    tempTime = 0
    timeTaken = 0

    text('Press "ENTER" to begin game',20,20);
    text('Press "R" to enter tutorial',20,50);
    text('Please click on the game window to enable sound',20,80)
    
    flagList = ["americaFlag", "brazilFlag", "canadaFlag", "englandFlag", "franceFlag", "germanyFlag", "italyFlag", "japanFlag", "russiaFlag", "southAfricaFlag"]
   
    flagDict = {
      americaFlag: {
        name: "America",
        img: americaFlag,
        highlight: americaGreen
      },
      brazilFlag: {
        name: "Brazil",
        img: brazilFlag,
        highlight: brazilGreen
      },
      canadaFlag: {
        name: "Canada",
        img: canadaFlag,
        highlight: canadaGreen
      },
      englandFlag: {
        name: "United Kingdom",
        img: englandFlag,
        highlight: britainGreen
      },
      franceFlag: {
        name: "France",
        img: franceFlag,
        highlight: franceGreen
      },
      germanyFlag: {
        name: "Germany",
        img: germanyFlag,
        highlight: germanyGreen
      },
      italyFlag: {
        name: "Italy",
        img: italyFlag,
        highlight: italyGreen
      },
      japanFlag: {
        name: "Japan",
        img: japanFlag,
        highlight: japanGreen
      },
      russiaFlag: {
        name: "Russia",
        img: russiaFlag,
        highlight: russiaGreen
      },
      southAfricaFlag: {
        name: "South Africa",
        img: southAfricaFlag,
        highlight: southAfricaGreen
      } 
    }
   usedFlags = []
   //var object = {
    //americaFlag: {
      //image: flagList[1],
      //text: flagDict.americaFlag
    //}
   //}
    
  }
  if (mode == 1) { //game code goes here
    background(220);
    inMenu = false;
    if (correctSound.isLoaded == false && incorrectSound.isLoaded == false){
      correctSound.play()
      incorrectSound.play()
    }

   

    if (correct == false && scoreAdded == false){
        score --
        console.log(score)
        correct = false
        scoreAdded = true
      }
    
    if (gamesCompleted <= 9){

      if( bgmusicPlayed == false){
        gameMusic.loop()
        menuMusic.stop(
          )
        console.log("i am running this code")
        bgmusicPlayed = true
      }
      tempTime ++
      timeTaken = round(tempTime/60)
     
    if (flagChosen == false) {

      flagIndex = random(flagList)
      
      if (usedFlags.includes(flagIndex)) {
        flagChosen = false
    }
      else {
        usedFlags.push(flagIndex)
        flag = flagDict[flagIndex]
        flagSprite.addImage(flag.img);
        flagChosen = true
      }
    console.log(usedFlags.includes(flagList[flagIndex]))
    console.log(flagList[flagIndex])
  }
  
  //determining race and gender of astronaut
  if (astronautChosen == false) {
    astronaut = random(astroList);
    astronautSprite.addImage(astronaut)
    astronautChosen = true
  }

    image(worldMap,0,0);
    if(flagChosenBool == false){image(blueMap,0,0)}
    
    var correctFlag = flag.name;
   //world map image and resolution set 
   //var correctFlag = flagDict.flag;
   //picking which gender to draw
   /*text('flag: '+correctFlag,500,400);
   text('mouseY:'+mouseY+' mouseX: '+mouseX,500,425);
   text('games completed: '+gamesCompleted,500,375)*/ 
   //text('Gender numba: '+maleOrFemale,500,475);
   //text('Ethnicity numba: '+astroEthnicity,500,450);


    if(pointer.overlap(russiaBlock1) && flagChosenBool == false){
      image(russiaHighlighted,0,0);
      text("Russia",880,70)
      if(mouseIsPressed){
          print("russia")
          flagChosen = "Russia"
          flagChosenBool = true
          countryUserSelected = russiaHighlighted
      }
    }

    drawSprite(japanBlock1);
    if(pointer.overlap(japanBlock1) && flagChosenBool == false){
      image(japanHighlighted,0,0);
      image(japanTag,1000,165);
      if(mouseIsPressed){
        print("japan")
        flagChosen = "Japan"
        flagChosenBool = true
        countryUserSelected = japanHighlighted
      }
      
    }
    drawSprite(southAfricaBlock1);
    if(pointer.overlap(southAfricaBlock1) && flagChosenBool == false){
      image(southAfricaHighlighted,0,0);
      image(southAfricaTag,590,380);
      if(mouseIsPressed){
       print("south africa")
       flagChosen = "South Africa"
       flagChosenBool = true
       countryUserSelected = southAfricaHighlighted
      }
    }

    drawSprite(americaBlock1);
    drawSprite(americaBlock2);
    let americaGroup = new Group();
    americaGroup.add(americaBlock1);
    americaGroup.add(americaBlock2);
    if(pointer.overlap(americaGroup) && flagChosenBool == false){
      image(americaHighlighted,0,0);
      text("America",245,140)
      if(mouseIsPressed){
        print("america")
        flagChosen = "America"
        flagChosenBool = true
        countryUserSelected = americaHighlighted
      }
    }
    drawSprite(canadaBlock1);
    if(pointer.overlap(canadaBlock1) && flagChosenBool == false){
      image(canadaHighlighted,0,0)
      text("Canada",215,80)
      if(mouseIsPressed){
        print("canada")
        flagChosen = "Canada"
        flagChosenBool = true
        countryUserSelected = canadaHighlighted
      }
    }
    drawSprite(franceBlock1);
    if(pointer.overlap(franceBlock1) && flagChosenBool == false){
      image(franceHighlighted,0,0);
      image(franceTag,450,70);
      if(mouseIsPressed){
        print("france")
        flagChosen = "France"
        flagChosenBool = true
        countryUserSelected = franceHighlighted
      }
    }
    drawSprite(britainBlock1);
    if(pointer.overlap(britainBlock1) && flagChosenBool == false){
      image(britainHighlighted,0,0);
      image(britainTag,450,70);
      if(mouseIsPressed){
        print("britain")
        flagChosen = "United Kingdom"
        flagChosenBool = true
        countryUserSelected = britainHighlighted
      }
    }
    drawSprite(brazilBlock1);
    drawSprite(brazilBlock2);
    let brazilGroup = new Group();
    brazilGroup.add(brazilBlock1);
    brazilGroup.add(brazilBlock2);
    if(pointer.overlap(brazilGroup) && flagChosenBool == false){
      image(brazilHighlighted,0,0);
      text("Brazil",400,300)
      if(mouseIsPressed){
        print("brazil")
        flagChosen = "Brazil"
        flagChosenBool = true
        countryUserSelected = brazilHighlighted
      }
    }
    drawSprite(italyBlock1);
    if(pointer.overlap(italyBlock1) && flagChosenBool == false){
      image(italyHighlighted,0,0);
      image(italyTag,450,70);
      if(mouseIsPressed){
        print("italy")
        flagChosen = "Italy"
        flagChosenBool = true
        countryUserSelected = italyHighlighted
      }
    }
    drawSprite(germanyBlock1);
    if(pointer.overlap(germanyBlock1) && flagChosenBool == false){
      image(germanyHighlighted,0,0);
      image(germanyTag,450,70);
      if(mouseIsPressed){
        print("germany")
        flagChosen = "Germany"
        flagChosenBool = true
        countryUserSelected = germanyHighlighted
      }
    }
      text('Press "ESCAPE" to go back',20,20);

    

    rocketSprite.addImage(rocket);
    if(flagChosenBool == false){
      gameCompletesAdded = true
    }
    
    if(flagChosenBool == true){
      
      image(greyMap,0,0);
      image(flag.highlight,0,0);

      //image(correctFlag.highlight);
      if(correctFlag == flagChosen){
        correct = true
        if (sfxPlayed === false){
          correctSound.play()
         sfxPlayed = true
        }
        text("correct! the country was: "+flag.name+" press SPACE to continue",300,300);
      }
      if(flagChosen != correctFlag){
        correct = false
        if (sfxPlayed === false){
          incorrectSound.play()
         sfxPlayed = true
        }
        image(countryUserSelected,0,0);
        text("incorrect, the correct country was: "+flag.name+" press SPACE to continue",300,300);
      }
      
      
      if (gameCompletesAdded == true){
        gamesCompleted ++
        console.log(gamesCompleted)
        console.log(flagList)
        console.log(flagDict)
        gameCompletesAdded = false
      }


      if(keyIsDown(32) && flagChosenBool == true){
        flagChosenBool = false
        flagChosen = false
        astronautChosen = false
        scoreAdded = false
       sfxPlayed = false
        correctSound.stop()
        incorrectSound.stop()
      }
     
   
    }
    line(mouseX, 0, mouseX, 1000);
    line(0, mouseY, 1500, mouseY);
    drawSprite(astronautSprite);
    image(speechBubble,150,320);
    drawSprite(flagSprite);
    //drawSprite(rocketSprite);
    drawSprite(pointer);
    pointer.position.x = mouseX;
    pointer.position.y = mouseY;


     //alow user to return to menu
  }
  else{

    text("Game Over! You got "+score+"/10 flags right! in "+timeTaken+" seconds, you can be faster than that",300,300);

    text('Press "ESCAPE" to go back',20,20);
  }
  }
  if (mode == 2) { //tutorial code goes here
    background(220)
    image(tutorialScreen,500,10)
    inMenu = false
    if (tutMusicPlayed == false){
      tutMusic.loop()
      menuMusic.stop()
      tutMusicPlayed = true
    }
    inMenu = false
    inTutorial = true
    text('Press "ESCAPE" to go back',20,20)//alow user to return to menu
    
    text('Astronauts aboard the ISS need your help getting home! sort them using your knowledge of flags and countries do it as quickly as you can!',50,120);
    text('using your cursor, click on the country belonging to the flag on the map!',50,150)//script for tutorial goes here
  }
  if (inMenu == true) { //only allowing user to access game or tutorial whilst in menu

    if(keyIsDown(ENTER)) { //enter to start game
      bgmusicPlayed = false

      mode = 1;
      
      
    }
    if(keyIsDown(82)) { //r to start tutorial
      tutMusicPlayed = false

      mode = 2;
      
    }
  }
  if(keyIsDown(27) && inMenu == false) { //escape to get back to main menu 
    menuMusicPlayed = false

    mode = 0;
    
    
  }
}

function keyboardCode() {



}