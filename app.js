console.log("ZA WARUDO");

/* OPENING THE CHARACTER PAGE MODAL */

var modal1 = document.getElementById("modal1");
var myCharacters = document.getElementById("mycharactersButton");
function myCharactersClick() {
  modal1.style.display = "block";
}
myCharacters.addEventListener("click", myCharactersClick, true);

/* CHARACTER NAME INPUT & SAVING */

var characterName = document.getElementById("characterName");
function displayName() {
  var nameInput = document.getElementById("characterNameInput")
  nameInput.style.display = "block";
  setInsertion("characterNameInputBox")
}
characterName.addEventListener("click",displayName,true);
var nameInputBox = document.getElementById("characterNameInputBox");
var storedName = localStorage.getItem("storedName");
function handleNewName(e) {
  if (e.key === "Enter") {
    var name = document.getElementById("characterNameInputBox").value;
    document.getElementById("characterNameFinal").innerHTML = name;
    nameInputBox.style.display = "none";
    localStorage.setItem("storedName", name);
  }
}
nameInputBox.addEventListener("keypress", handleNewName);
function getName() {
  localStorage.getItem("storedName");
  document.getElementById("characterNameFinal").innerHTML = storedName;
}
getName();

/* CLASS, LEVEL, AND PROFICIENCY BONUS INPUT, SAVE, AND RETREIVAL */

var charClass = document.getElementById("classDropDownInput")
var storedClass = localStorage.getItem("storedClass")
function handleNewClass () {
  document.getElementById("levelNumInput").style.display = "block"
  document.getElementById("firstLevelNum").innerHTML = ""
  var playerClass = document.getElementById("classDropDownInput").value 
  localStorage.setItem("storedClass", playerClass)
  setInsertion("levelNumInput")
}
charClass.addEventListener("change",handleNewClass)
var charLevel = document.getElementById("levelNumInput")
proficiencyBonus = 0
var storedLevel = localStorage.getItem("storedLevel")
function handleNewLevel(e) {
  if (e.key === "Enter") {
    var level = document.getElementById("levelNumInput").value
    localStorage.setItem("storedLevel", level)
    document.getElementById("levelNumInput").style.display = "none"
    document.getElementById("firstLevelNum").innerHTML = level
    proficiencyBonus = Math.floor(2 + (level-1)/4)
    update()
  }
}
charLevel.addEventListener("keypress",handleNewLevel)
function getLevel () {
  localStorage.getItem("storedLevel")
  localStorage.getItem("storedClass")
  if (storedClass == null) {
  } else {
    if (storedLevel == null) {
    } else {
      charLevel.value = storedLevel
      document.getElementById("firstLevelNum").innerHTML = storedLevel
      charClass.value = storedClass
      document.getElementById("profBonus").innerHTML = `+${Math.floor(2 + (storedLevel-1)/4)}`
      proficiencyBonus = Math.floor(2 + (storedLevel-1)/4)
    }
  }

}
getLevel()

/* BACKGROUND, RACE, AND ALIGNMENT SAVE AND RETREIVAL */

var characterRace = document.getElementById("characterRaceDropDownInput")
var storedRace = localStorage.getItem("storedRace")
characterRace.addEventListener("change", function () {
  var race = document.getElementById("characterRaceDropDownInput").value
  localStorage.setItem("storedRace",race)
})
function getRace() {
  localStorage.getItem("storedRace")
  if (storedRace != null) {
    document.getElementById("characterRaceDropDownInput").value = storedRace
  }
}
getRace()
var characterBack = document.getElementById("backgroundDropDownInput")
var storedBack = localStorage.getItem("storedBack")
characterBack.addEventListener("change", function () {
  var backGround = document.getElementById("backgroundDropDownInput").value
  localStorage.setItem("storedBack",backGround)
})
function getBackground() {
  localStorage.getItem("storedBack")
  if (storedBack != null) {
    document.getElementById("backgroundDropDownInput").value = storedBack
  }
}
getBackground()

var characterAlign = document.getElementById("alignmentDropDownInput")
var storedAlign = localStorage.getItem("storedAlign")
characterAlign.addEventListener("change", function () {
  var alignment = document.getElementById("alignmentDropDownInput").value
  localStorage.setItem("storedAlign",alignment)
})
function getAlignment() {
  localStorage.getItem("storedAlign")
  if (storedAlign != null) {
    document.getElementById("alignmentDropDownInput").value = storedAlign
  }
}
getAlignment()

/* ABILITY SCORE DOM MANIPULATION, SAVE, AND RETREIVAL */

var strengthScore = document.getElementById("strScoreContainer");
var strMod = 0
var storedStrScore = localStorage.getItem("storedStrScore");
function handleStrengthScoreClick() {
  document.getElementById("strScoreNum").innerHTML = "";
  document.getElementById("strScoreInputContainer").style.display = "block";
  document.getElementById("strScoreInput").value = ""
 setInsertion("strScoreInput")
}
strengthScore.addEventListener("click", handleStrengthScoreClick, true);
document.getElementById("strScoreInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var strScore = document.getElementById("strScoreInput").value;
      if (strScore != "") {
      strMod = Math.floor((strScore - 10) / 2)
      document.getElementById("strSaveBonus").innerHTML = `+(${strMod})`
      document.getElementById("strScoreNum").innerHTML = strScore;
      document.getElementById("strScoreInputContainer").style.display = "none";
      if (strScore > 9) {
        document.getElementById("strMod").innerHTML = `+${Math.floor(
          (strScore - 10) / 2
        )}`;
      } else {
        document.getElementById("strMod").innerHTML = `${Math.floor(
          (strScore - 10) / 2
        )}`;
      }
      localStorage.setItem("storedStrScore", strScore);
      update()
    }
    }
  });
function getStrScore() {
  localStorage.getItem("storedStrScore");
  strMod = Math.floor((storedStrScore - 10) / 2)
  if (storedStrScore == null) {
    strMod = 0
} else {
  document.getElementById("strScoreNum").innerHTML = storedStrScore;
  if (storedStrScore > 9) {
    document.getElementById("strMod").innerHTML = `+${Math.floor(
      (storedStrScore - 10) / 2
    )}`;
  } else {
    document.getElementById("strMod").innerHTML = `${Math.floor(
      (storedStrScore - 10) / 2
    )}`;
  }
}
}
getStrScore();

var dexterityScore = document.getElementById("dexScoreContainer");
var dexScore = 10
var dexMod = 0
var storedDexScore = localStorage.getItem("storedDexScore");
function handleDexterityScoreClick() {
  document.getElementById("dexScoreNum").innerHTML = "";
  document.getElementById("dexScoreInputContainer").style.display = "block";
  document.getElementById("dexScoreInput").value = ""
  setInsertion("dexScoreInput")
}
dexterityScore.addEventListener("click", handleDexterityScoreClick, true);
document.getElementById("dexScoreInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var dexScore = document.getElementById("dexScoreInput").value;
      if (dexScore != "") {
      dexMod = Math.floor((dexScore - 10) / 2)
      document.getElementById("dexScoreNum").innerHTML = dexScore;
      document.getElementById("dexScoreInputContainer").style.display = "none";
      if (dexScore > 9) {
        document.getElementById("dexMod").innerHTML = `+${Math.floor(
          (dexScore - 10) / 2
        )}`;
      } else {
        document.getElementById("dexMod").innerHTML = `${Math.floor(
          (dexScore - 10) / 2
        )}`;
      }
      localStorage.setItem("storedDexScore", dexScore);
      update()
    }
    }
  });
function getDexScore() {
  localStorage.getItem("storedDexScore");
  dexMod = Math.floor((storedDexScore - 10) / 2)
  if (storedDexScore == null) {
    dexMod = 0
} else {
  document.getElementById("dexScoreNum").innerHTML = storedDexScore;
  if (storedDexScore > 9) {
    document.getElementById("dexMod").innerHTML = `+${Math.floor(
      (storedDexScore - 10) / 2
    )}`;
  } else {
    document.getElementById("dexMod").innerHTML = `${Math.floor(
      (storedDexScore - 10) / 2
    )}`;
  }
}
}
getDexScore()

var constitutionScore = document.getElementById("conScoreContainer");
conMod = 0
var storedConScore = localStorage.getItem("storedConScore");
function handleConstitutionScoreClick() {
  document.getElementById("conScoreNum").innerHTML = "";
  document.getElementById("conScoreInputContainer").style.display = "block";
  document.getElementById("conScoreInput").value = ""
  setInsertion("conScoreInput")
}
constitutionScore.addEventListener("click", handleConstitutionScoreClick, true);
document.getElementById("conScoreInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var conScore = document.getElementById("conScoreInput").value;
        if (conScore != "") {
      conMod = Math.floor((conScore - 10) / 2)
      document.getElementById("conScoreNum").innerHTML = conScore;
      document.getElementById("conScoreInputContainer").style.display = "none";
      if (conScore > 9) {
        document.getElementById("conMod").innerHTML = `+${Math.floor(
          (conScore - 10) / 2
        )}`;
      } else {
        document.getElementById("conMod").innerHTML = `${Math.floor(
          (conScore - 10) / 2
        )}`;
      } 
     localStorage.setItem("storedConScore", conScore);
     update()
    }
    }
  });
function getConScore() {
  localStorage.getItem("storedConScore");
  conMod = Math.floor((storedConScore - 10) / 2)
  if (storedConScore == null) {
    conMod = 0
  } else {
    document.getElementById("conScoreNum").innerHTML = storedConScore;
    if (storedConScore > 9) {
      document.getElementById("conMod").innerHTML = `+${Math.floor(
        (storedConScore - 10) / 2
      )}`;
    } else {
      document.getElementById("conMod").innerHTML = `${Math.floor(
        (storedConScore - 10) / 2
      )}`;
    }
  }
}
getConScore()

var intelligenceScore = document.getElementById("intScoreContainer");
intMod = 0
var storedIntScore = localStorage.getItem("storedIntScore");
function handleIntelligenceScoreClick() {
  document.getElementById("intScoreNum").innerHTML = "";
  document.getElementById("intScoreInputContainer").style.display = "block";
  document.getElementById("intScoreInput").value = ""
  setInsertion("intScoreInput")
}
intelligenceScore.addEventListener("click", handleIntelligenceScoreClick, true);
document.getElementById("intScoreInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var intScore = document.getElementById("intScoreInput").value;
        if (intScore != "") {
      intMod = Math.floor((intScore - 10) / 2)
      document.getElementById("intScoreNum").innerHTML = intScore;
      document.getElementById("intScoreInputContainer").style.display = "none";
      if (intScore > 9) {
        document.getElementById("intMod").innerHTML = `+${Math.floor(
          (intScore - 10) / 2
        )}`;
      } else {
        document.getElementById("intMod").innerHTML = `${Math.floor(
          (intScore - 10) / 2
        )}`;
      }
      localStorage.setItem("storedIntScore", intScore);
      update()
    }
    }
  });
function getIntScore() {
  localStorage.getItem("storedIntScore");
  intMod = Math.floor((storedIntScore - 10) / 2)
  if (storedIntScore == null) {
    intMod = 0
  } else {
    document.getElementById("intScoreNum").innerHTML = storedIntScore;
    if (storedIntScore > 9) {
      document.getElementById("intMod").innerHTML = `+${Math.floor(
        (storedIntScore - 10) / 2
      )}`;
    } else {
      document.getElementById("intMod").innerHTML = `${Math.floor(
        (storedIntScore - 10) / 2
      )}`;
    }
  }
}
getIntScore()

var wisdomScore = document.getElementById("wisScoreContainer");
wisMod = 0
var storedWisScore = localStorage.getItem("storedWisScore");
function handleWisdomScoreClick() {
  document.getElementById("wisScoreNum").innerHTML = "";
  document.getElementById("wisScoreInputContainer").style.display = "block";
  document.getElementById("wisScoreInput").value = ""
  setInsertion("wisScoreInput")
}
wisdomScore.addEventListener("click", handleWisdomScoreClick, true);
document.getElementById("wisScoreInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var wisScore = document.getElementById("wisScoreInput").value;
        if (wisScore != "") {
      wisMod = Math.floor((wisScore - 10) / 2)
      document.getElementById("wisScoreNum").innerHTML = wisScore;
      document.getElementById("wisScoreInputContainer").style.display = "none";
      if (wisScore > 9) {
        document.getElementById("wisMod").innerHTML = `+${Math.floor(
          (wisScore - 10) / 2
        )}`;
      } else {
        document.getElementById("wisMod").innerHTML = `${Math.floor(
          (wisScore - 10) / 2
        )}`;
      }
      localStorage.setItem("storedWisScore", wisScore);
      update()
    }
    }
  });
function getWisScore() {
  localStorage.getItem("storedWisScore");
  wisMod = Math.floor((storedWisScore - 10) / 2)
  if (storedWisScore == null) {
    wisMod = 0
  } else {
    document.getElementById("wisScoreNum").innerHTML = storedWisScore;
    if (storedWisScore > 9) {
      document.getElementById("wisMod").innerHTML = `+${Math.floor(
        (storedWisScore - 10) / 2
      )}`;
    } else {
      document.getElementById("wisMod").innerHTML = `${Math.floor(
        (storedWisScore - 10) / 2
      )}`;
    }
  }
}
getWisScore()

var charismaScore = document.getElementById("chaScoreContainer");
chaMod = 0
var storedChaScore = localStorage.getItem("storedChaScore");
function handleCharismaScoreClick() {
  document.getElementById("chaScoreNum").innerHTML = "";
  document.getElementById("chaScoreInputContainer").style.display = "block";
  document.getElementById("chaScoreInput").value = ""
  setInsertion("chaScoreInput")
}
charismaScore.addEventListener("click", handleCharismaScoreClick, true);
document.getElementById("chaScoreInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var chaScore = document.getElementById("chaScoreInput").value;
      if (chaScore != "") {
      chaMod = Math.floor((chaScore - 10) / 2)
  
      document.getElementById("chaScoreNum").innerHTML = chaScore;
      document.getElementById("chaScoreInputContainer").style.display = "none";
      if (chaScore > 9) {
        document.getElementById("chaMod").innerHTML = `+${Math.floor(
          (chaScore - 10) / 2
        )}`;
      } else {
        document.getElementById("chaMod").innerHTML = `${Math.floor(
          (chaScore - 10) / 2
        )}`;
      }
      localStorage.setItem("storedChaScore", chaScore);
      update()
    }
    }
  });
function getChaScore() {
  localStorage.getItem("storedChaScore");
  chaMod = Math.floor((storedChaScore - 10) / 2)
  if (storedChaScore == null) {
    chaMod = 0
  } else {
    document.getElementById("chaScoreNum").innerHTML = storedChaScore;
    if (storedChaScore > 9) {
      document.getElementById("chaMod").innerHTML = `+${Math.floor(
        (storedChaScore - 10) / 2
      )}`;
    } else {
      document.getElementById("chaMod").innerHTML = `${Math.floor(
        (storedChaScore - 10) / 2
      )}`;
    }
  }
}
getChaScore()

/* SAVING THROWS INPUT, SAVE, AND RETREIVAL */

var strSave = document.getElementById("strSaveCheckbox")
var storedStrSave = localStorage.getItem("storedStrSave")
strSave.addEventListener("change", function () {
  localStorage.setItem("storedStrSave", strSave.checked)
  update()
})
function getStrSave () {
  document.getElementById("strSaveBonus").innerHTML = `+(${strMod})`
  localStorage.getItem("storedStrSave")
  if (storedStrSave == "true") {
    document.getElementById("strSaveCheckbox").checked = true
    document.getElementById("strSaveBonus").innerHTML = `+(${proficiencyBonus + strMod})`
  } else if (storedStrSave == "false") {
    document.getElementById("strSaveBonus").innerHTML = `+(${strMod})`
  }
}
getStrSave()

var dexSave = document.getElementById("dexSaveCheckbox")
var storedDexSave = localStorage.getItem("storedDexSave")
dexSave.addEventListener("change", function () {
  localStorage.setItem("storedDexSave", dexSave.checked)
  update()
})
function getDexSave () {
  document.getElementById("dexSaveBonus").innerHTML = `+(${dexMod})`
  localStorage.getItem("storedDexSave")
  if (storedDexSave == "true") {
    document.getElementById("dexSaveCheckbox").checked = true
    document.getElementById("dexSaveBonus").innerHTML = `+(${proficiencyBonus + dexMod})`
  } else if (storedDexSave == "false") {
    document.getElementById("dexSaveBonus").innerHTML = `+(${dexMod})`
  }
}
getDexSave()

var conSave = document.getElementById("conSaveCheckbox")
var storedConSave = localStorage.getItem("storedConSave")
conSave.addEventListener("change", function () {
  localStorage.setItem("storedConSave", conSave.checked)
  update()
})
function getConSave () {
  document.getElementById("conSaveBonus").innerHTML = `+(${conMod})`
  localStorage.getItem("storedConSave")
  if (storedConSave == "true") {
    document.getElementById("conSaveCheckbox").checked = true
    document.getElementById("conSaveBonus").innerHTML = `+(${proficiencyBonus + conMod})`
  } else if (storedConSave == "false") {
    document.getElementById("conSaveBonus").innerHTML = `+(${conMod})`
  }
}
getConSave()

var intSave = document.getElementById("intSaveCheckbox")
var storedIntSave = localStorage.getItem("storedIntSave")
intSave.addEventListener("change", function () {
  localStorage.setItem("storedIntSave", intSave.checked)
  update()
})
function getIntSave () {
  document.getElementById("intSaveBonus").innerHTML = `+(${intMod})`
  localStorage.getItem("storedIntSave")
  if (storedIntSave == "true") {
    document.getElementById("intSaveCheckbox").checked = true
    document.getElementById("intSaveBonus").innerHTML = `+(${proficiencyBonus + intMod})`
  } else if (storedIntSave == "false") {
    document.getElementById("intSaveBonus").innerHTML = `+(${intMod})`
  }
}
getIntSave()

var wisSave = document.getElementById("wisSaveCheckbox")
var storedWisSave = localStorage.getItem("storedWisSave")
wisSave.addEventListener("change", function () {
  localStorage.setItem("storedWisSave", wisSave.checked)
  update()
})
function getWisSave () {
  document.getElementById("wisSaveBonus").innerHTML = `+(${wisMod})`
  localStorage.getItem("storedWisSave")
  if (storedWisSave == "true") {
    document.getElementById("wisSaveCheckbox").checked = true
    document.getElementById("wisSaveBonus").innerHTML = `+(${proficiencyBonus + wisMod})`
  } else if (storedWisSave == "false") {
    document.getElementById("wisSaveBonus").innerHTML = `+(${wisMod})`
  }
}
getWisSave()

var chaSave = document.getElementById("chaSaveCheckbox")
var storedChaSave = localStorage.getItem("storedChaSave")
chaSave.addEventListener("change", function () {
localStorage.setItem("storedChaSave", chaSave.checked)
update()
})
function getChaSave () {
  document.getElementById("chaSaveBonus").innerHTML = `+(${chaMod})`
  localStorage.getItem("storedChaSave")

  if (storedChaSave == "true") {
    document.getElementById("chaSaveCheckbox").checked = true
    document.getElementById("chaSaveBonus").innerHTML = `+(${proficiencyBonus + chaMod})`
  } else if (storedChaSave == "false") {
    document.getElementById("chaSaveBonus").innerHTML = `+(${chaMod})`
  }
}
getChaSave()

/* SKILLS LIST INPUT, SAVE, AND RETREIVAL */

function populateSkillsList(checkboxVariable,storedVariable) {
  document.getElementById(checkboxVariable).addEventListener("change", function () {
    localStorage.setItem(storedVariable, document.getElementById(checkboxVariable).checked)
    update()
  })
}
function getSkillsList (bonusId,modifier,storedSkill,checkboxVariable) {
  document.getElementById(bonusId).innerHTML = `+(${modifier})`

  if (localStorage.getItem(storedSkill) == "true") {
    document.getElementById(checkboxVariable).checked = true
    document.getElementById(bonusId).innerHTML = `+(${proficiencyBonus + modifier})`
  } else if (localStorage.getItem(storedSkill) == "false") {
    document.getElementById(bonusId).innerHTML = `+(${modifier})`
  }
}
function getAllSkills () {
  getSkillsList("acrBonus",dexMod,"storedAcrSkill","acrobatics")
  getSkillsList("aniBonus",wisMod,"storedAniSkill","animalHandling")
  getSkillsList("arcBonus",intMod,"storedArcSkill","arcana")
  getSkillsList("athBonus",strMod,"storedAthSkill","athletics")
  getSkillsList("decBonus",chaMod,"storedDecSkill","deception")
  getSkillsList("hisBonus",intMod,"storedHisSkill","history")
  getSkillsList("insBonus",wisMod,"storedInsSkill","insight")
  getSkillsList("intiBonus",chaMod,"storedIntiSkill","intimidation")
  getSkillsList("invBonus",intMod,"storedInvSkill","investigation")
  getSkillsList("medBonus",wisMod,"storedMedSkill","medicine")
  getSkillsList("natBonus",intMod,"storedNatSkill","nature")
  getSkillsList("percBonus",wisMod,"storedPercSkill","perception")
  getSkillsList("perfBonus",chaMod,"storedPerfSkill","performance")
  getSkillsList("persBonus",chaMod,"storedPersSkill","persuasion")
  getSkillsList("relBonus",intMod,"storedRelSkill","religion")
  getSkillsList("sleBonus",dexMod,"storedSleSkill","sleightOfHand")
  getSkillsList("steBonus",dexMod,"storedSteSkill","stealth")
  getSkillsList("surBonus",wisMod,"storedSurSkill","survival")
}
getAllSkills()
function populateAllSkills () {
  populateSkillsList("acrobatics","storedAcrSkill")
  populateSkillsList("animalHandling","storedAniSkill")
  populateSkillsList("arcana","storedArcSkill")
  populateSkillsList("athletics","storedAthSkill")
  populateSkillsList("deception","storedDecSkill")
  populateSkillsList("history","storedHisSkill")
  populateSkillsList("insight","storedInsSkill")
  populateSkillsList("intimidation","storedIntiSkill")
  populateSkillsList("investigation","storedInvSkill")
  populateSkillsList("medicine","storedMedSkill")
  populateSkillsList("nature","storedNatSkill")
  populateSkillsList("perception","storedPercSkill")
  populateSkillsList("persuasion","storedPersSkill")
  populateSkillsList("performance","storedPerfSkill")
  populateSkillsList("religion","storedRelSkill")
  populateSkillsList("sleightOfHand","storedSleSkill")
  populateSkillsList("stealth","storedSteSkill")
  populateSkillsList("survival","storedSurSkill")
}
populateAllSkills()

/* ARMOR CLASS INPUT, SAVE, AND RETREIVAL*/


acNumberBox = document.getElementById("acNumberBox");
var storedArmorClass = localStorage.getItem("storedArmorClass")
function acNumberBoxClick() {
  document.getElementById("acNumberBox").innerHTML = "";
  document.getElementById("acInput").style.display = "block";
  setInsertion("acInput")
}
acNumberBox.addEventListener("click", acNumberBoxClick, true);
document.getElementById("acInput").addEventListener(
  "keypress",
  function (e) {
    if (e.key === "Enter") {
      var armorClass = document.getElementById("acInput").value

      if (armorClass != "") {
      document.getElementById("acNumberBox").innerHTML = armorClass;
      document.getElementById("acInput").style.display = "none";
      localStorage.setItem("storedArmorClass", armorClass)
      }
    }
  },
  true
);
function getArmorClass() {
  localStorage.getItem("storedArmorClass")
  if (storedArmorClass != null) {
    document.getElementById("acNumberBox").innerHTML = storedArmorClass
  }
 
}
getArmorClass()

/* SPEED INPUT, SAVE, AND RETREIVAL */

speedNumberBox = document.getElementById("speedNumberBox");
var storedSpeed = localStorage.getItem("storedSpeed")
function speedNumberBoxClick() {
  document.getElementById("speedNumberBox").innerHTML = "";
  document.getElementById("speedInput").style.display = "block";
  setInsertion("speedInput")
}
speedNumberBox.addEventListener("click", speedNumberBoxClick, true);
document.getElementById("speedInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var speed =  document.getElementById("speedInput").value

      if (speed != "") {
      document.getElementById("speedNumberBox").innerHTML = speed;
      document.getElementById("speedInput").style.display = "none";
      localStorage.setItem("storedSpeed", speed)
      }
    }
  },
  true
);
function getSpeed() {
localStorage.getItem("storedSpeed")
if (storedSpeed != null) {
  document.getElementById("speedNumberBox").innerHTML = storedSpeed
}
}
getSpeed()

/* HIT POINTS INPUT, SAVE, AND RETREIVAL */

hitPointsTotalNumberBox = document.getElementById("hitPointsTotalNumberBox");
var storedHitPointsTotal = localStorage.getItem("storedHitPointsTotal")
function hitPointsTotalNumberBoxClick() {
  document.getElementById("hitPointsTotalNumberBox").innerHTML = "";
  document.getElementById("hitPointsTotalInput").style.display = "block";
  setInsertion("hitPointsTotalInput")
}
hitPointsTotalNumberBox.addEventListener("click", hitPointsTotalNumberBoxClick, true);
document.getElementById("hitPointsTotalInput").addEventListener(
  "keypress",
  function (e) {
    if (e.key === "Enter") {
      var hitPointsTotal = document.getElementById("hitPointsTotalInput").value
      if (hitPointsTotal != "") {
      document.getElementById("hitPointsTotalNumberBox").innerHTML = hitPointsTotal ;
      document.getElementById("hitPointsTotalInput").style.display = "none";
      localStorage.setItem("storedHitPointsTotal", hitPointsTotal)
      }
    }
  },
  true
);
function getHitPointsTotal () {
 localStorage.getItem("storedHitPointsTotal")
 if (storedHitPointsTotal != null) {
  document.getElementById("hitPointsTotalNumberBox").innerHTML = storedHitPointsTotal
 }
}
getHitPointsTotal()

hitPointsNumberBox = document.getElementById("hitPointsNumberBox");
var storedHitPoints = localStorage.getItem("storedHitPoints")
function hitPointsNumberBoxClick() {
  document.getElementById("hitPointsNumberBox").innerHTML = "";
  document.getElementById("hitPointsInput").style.display = "block";
  setInsertion("hitPointsInput")
}
hitPointsNumberBox.addEventListener("click", hitPointsNumberBoxClick, true);
document.getElementById("hitPointsInput").addEventListener(
  "keypress",
  function (e) {
    if (e.key === "Enter") {
      var hitPoints = document.getElementById("hitPointsInput").value
      if (hitPoints != "") {
      document.getElementById("hitPointsNumberBox").innerHTML = hitPoints ;
      document.getElementById("hitPointsInput").style.display = "none";
      localStorage.setItem("storedHitPoints", hitPoints)
      }
    }
  },
  true
);
function getHitPoints () {
 localStorage.getItem("storedHitPoints")
 if (storedHitPoints != null) {
  document.getElementById("hitPointsNumberBox").innerHTML = storedHitPoints
 }
}
getHitPoints()

/* TEMP HIT POINTS INPUT, SAVE, AND RETREIVAL */

tempHitPointsNumberBox = document.getElementById("tempHitPointsNumberBox");
var storedTemp = localStorage.getItem("storedTemp")
function tempHitPointsNumberBoxClick() {
  document.getElementById("tempHitPointsNumberBox").innerHTML = "";
  document.getElementById("tempHitPointsInput").style.display = "block";
  setInsertion("tempHitPointsInput")
}
tempHitPointsNumberBox.addEventListener(
  "click",
  tempHitPointsNumberBoxClick,
  true
);
document.getElementById("tempHitPointsInput").addEventListener(
  "keypress",
  function (e) {
    if (e.key === "Enter") {
      tempHP = document.getElementById("tempHitPointsInput").value
      if (tempHp != "") {
      document.getElementById("tempHitPointsNumberBox").innerHTML = tempHP ;
      document.getElementById("tempHitPointsInput").style.display = "none";
      localStorage.setItem("storedTemp", tempHP)
      }
    }
  },
  true
);
function getTempHP () {
  localStorage.getItem("storedTemp")
  if (storedTemp != null) {
    document.getElementById("tempHitPointsNumberBox").innerHTML = storedTemp
  }
}
getTempHP()

/* HIT DICE INPUT, SAVE, AND RETREIVAL */


hitDiceTotalNumberBox = document.getElementById("hitDiceTotalNumberBox");
var storedHitDiceTotal = localStorage.getItem("storedHitDiceTotal")
function hitDiceTotalNumberBoxClick() {
  document.getElementById("hitDiceTotalNumberBox").innerHTML = "";
  document.getElementById("hitDiceTotalInput").style.display = "block";
  setInsertion("hitDiceTotalInput")
}
hitDiceTotalNumberBox.addEventListener("click", hitDiceTotalNumberBoxClick, true);
document.getElementById("hitDiceTotalInput").addEventListener(
  "keypress",
  function (e) {
    if (e.key === "Enter") {
      hitDiceTotal = document.getElementById("hitDiceTotalInput").value
      if (hitDiceTotal != "") {
      document.getElementById("hitDiceTotalNumberBox").innerHTML = hitDiceTotal ;
      document.getElementById("hitDiceTotalInput").style.display = "none";
      localStorage.setItem("storedHitDiceTotal", hitDiceTotal)
      }
    }
  },
  true
);
function getHitDiceTotal() {
localStorage.getItem("storedHitDiceTotal")
if (storedHitDiceTotal != null) {
  document.getElementById("hitDiceTotalNumberBox").innerHTML = storedHitDiceTotal
}
}
getHitDiceTotal()

hitDiceNumberBox = document.getElementById("hitDiceNumberBox");
var storedHitDice = localStorage.getItem("storedHitDice")
function hitDiceNumberBoxClick() {
  document.getElementById("hitDiceNumberBox").innerHTML = "";
  document.getElementById("hitDiceInput").style.display = "block";
  setInsertion("hitDiceInput")
}
hitDiceNumberBox.addEventListener("click", hitDiceNumberBoxClick, true);
document.getElementById("hitDiceInput").addEventListener(
  "keypress",
  function (e) {
    if (e.key === "Enter") {
      hitDice = document.getElementById("hitDiceInput").value
      if (hitDice != "") {
      document.getElementById("hitDiceNumberBox").innerHTML = hitDice ;
      document.getElementById("hitDiceInput").style.display = "none";
      localStorage.setItem("storedHitDice", hitDice)
      }
    }
  },
  true
);
function getHitDice() {
localStorage.getItem("storedHitDice")
if (storedHitDice != null) {
  document.getElementById("hitDiceNumberBox").innerHTML = storedHitDice
}
}
getHitDice()

/* NEW FEATURE INPUT, SAVE, AND RETREIVAL */

var newFeature = document.getElementById("newFeature");
var storedFeatures = localStorage.getItem("storedFeatures")
var storedFeatures1 = localStorage.getItem("storedFeatures1")
var storedFeatures2 = localStorage.getItem("storedFeatures2")
var storedFeatures3 = localStorage.getItem("storedFeatures3")
var newFeatureTitleInput = document.getElementById("newFeatureTitleText")
newFeatureTitleInput.addEventListener("keypress",function (e) {
  if (e.key === "Enter") {
    setInsertion("newFeatureText")
  }
})
function newFeatureClick() {
  document.getElementById("newFeatureTitleInputWrapper").style.display = "block";
  document.getElementById("newFeatureInputWrapper").style.display = "block";
  setInsertion("newFeatureTitleText")
}
newFeature.addEventListener("click", newFeatureClick, true);
function handleNewFeature(e) {

  if (e.key === "Enter") {
    if(document.getElementById("featureParent").offsetHeight < 666) {
    var newFeatureFinal = document.createElement("div");
    document.getElementById("featureParent").appendChild(newFeatureFinal);

    var newFeatureTitleTrait = document.createElement("div");
    var newFeatureTrait = document.createElement("div");
    newFeatureTitleTrait.setAttribute("class","featureTitle")
    newFeatureTrait.setAttribute("class","featureTrait")

    newFeatureTitleTrait.innerHTML = document.getElementById("newFeatureTitleText").value;
    newFeatureTrait.innerHTML = document.getElementById("newFeatureText").value;

    newFeatureFinal.appendChild(newFeatureTitleTrait);
    newFeatureFinal.appendChild(newFeatureTrait);
    
    var newFeatureDeleteBtn = document.createElement("button")
    newFeatureDeleteBtn.innerHTML = "X"
    newFeatureDeleteBtn.classList.add("deleteFeature")
    newFeatureTitleTrait.appendChild(newFeatureDeleteBtn)
    newFeatureDeleteBtn.addEventListener("click",handleFeatureDeletion)

    newFeatureFinal.setAttribute("class","featureWrapper")

    document.getElementById("newFeatureText").value = "";
    document.getElementById("newFeatureTitleText").value = "";

    document.getElementById("newFeatureTitleInputWrapper").style.display = "none";
    document.getElementById("newFeatureInputWrapper").style.display = "none";


    localStorage.setItem("storedFeatures",document.getElementById("featureParent").innerHTML)
  } else if (document.getElementById("features1").offsetHeight < 666){
    document.getElementById("featuresColumn1").style.display = "block"
    document.getElementById("featuresColumn2").style.display = "block"
    document.getElementById("featuresColumn3").style.display = "block"
    
    var newFeatureFinal = document.createElement("div");
    document.getElementById("features1").appendChild(newFeatureFinal);

    var newFeatureTitleTrait = document.createElement("div");
    var newFeatureTrait = document.createElement("div");
    newFeatureTitleTrait.setAttribute("class","featureTitle")
    newFeatureTrait.setAttribute("class","featureTrait")

    newFeatureTitleTrait.innerHTML = document.getElementById("newFeatureTitleText").value;
    newFeatureTrait.innerHTML = document.getElementById("newFeatureText").value;

    newFeatureFinal.appendChild(newFeatureTitleTrait);
    newFeatureFinal.appendChild(newFeatureTrait);

    var newFeatureDeleteBtn = document.createElement("button")
    newFeatureDeleteBtn.innerHTML = "X"
    newFeatureDeleteBtn.classList.add("deleteFeature")
    newFeatureTitleTrait.appendChild(newFeatureDeleteBtn)
    newFeatureDeleteBtn.addEventListener("click",handleFeatureDeletion)

    newFeatureFinal.setAttribute("class","featureWrapper")

    document.getElementById("newFeatureText").value = "";
    document.getElementById("newFeatureTitleText").value = "";

    document.getElementById("newFeatureTitleInputWrapper").style.display = "none";
    document.getElementById("newFeatureInputWrapper").style.display = "none";

    localStorage.setItem("storedFeatures1",document.getElementById("features1").innerHTML)
  } else if (document.getElementById("features2").offsetHeight < 666) {

    var newFeatureFinal = document.createElement("div");
    document.getElementById("features2").appendChild(newFeatureFinal);

    var newFeatureTitleTrait = document.createElement("div");
    var newFeatureTrait = document.createElement("div");
    newFeatureTitleTrait.setAttribute("class","featureTitle")
    newFeatureTrait.setAttribute("class","featureTrait")

    newFeatureTitleTrait.innerHTML = document.getElementById("newFeatureTitleText").value;
    newFeatureTrait.innerHTML = document.getElementById("newFeatureText").value;

    newFeatureFinal.appendChild(newFeatureTitleTrait);
    newFeatureFinal.appendChild(newFeatureTrait);

    var newFeatureDeleteBtn = document.createElement("button")
    newFeatureDeleteBtn.innerHTML = "X"
    newFeatureDeleteBtn.classList.add("deleteFeature")
    newFeatureTitleTrait.appendChild(newFeatureDeleteBtn)
    newFeatureDeleteBtn.addEventListener("click",handleFeatureDeletion)

    newFeatureFinal.setAttribute("class","featureWrapper")

    document.getElementById("newFeatureText").value = "";
    document.getElementById("newFeatureTitleText").value = "";

    document.getElementById("newFeatureTitleInputWrapper").style.display = "none";
    document.getElementById("newFeatureInputWrapper").style.display = "none";

    localStorage.setItem("storedFeatures2",document.getElementById("features2").innerHTML)

  } else {
    var newFeatureFinal = document.createElement("div");
    document.getElementById("features3").appendChild(newFeatureFinal);

    var newFeatureTitleTrait = document.createElement("div");
    var newFeatureTrait = document.createElement("div");
    newFeatureTitleTrait.setAttribute("class","featureTitle")
    newFeatureTrait.setAttribute("class","featureTrait")

    newFeatureTitleTrait.innerHTML = document.getElementById("newFeatureTitleText").value;
    newFeatureTrait.innerHTML = document.getElementById("newFeatureText").value;

    newFeatureFinal.appendChild(newFeatureTitleTrait);
    newFeatureFinal.appendChild(newFeatureTrait);

    var newFeatureDeleteBtn = document.createElement("button")
    newFeatureDeleteBtn.innerHTML = "X"
    newFeatureDeleteBtn.classList.add("deleteFeature")
    newFeatureTitleTrait.appendChild(newFeatureDeleteBtn)
    newFeatureDeleteBtn.addEventListener("click",handleFeatureDeletion)

    newFeatureFinal.setAttribute("class","featureWrapper")

    document.getElementById("newFeatureText").value = "";
    document.getElementById("newFeatureTitleText").value = "";

    document.getElementById("newFeatureTitleInputWrapper").style.display = "none";
    document.getElementById("newFeatureInputWrapper").style.display = "none";

    localStorage.setItem("storedFeatures3",document.getElementById("features3").innerHTML)

  }
  }
}
document.getElementById("newFeatureText").addEventListener("keypress", handleNewFeature, true);
function getFeatures() {
  localStorage.getItem("storedFeatures")
  localStorage.getItem("storedFeatures1")
  localStorage.getItem("storedFeatures2")
  localStorage.getItem("storedFeatures3")
  if (storedFeatures != null) {
    document.getElementById("featureParent").innerHTML = storedFeatures
  }
  if (storedFeatures1 != null) {
    document.getElementById("features1").innerHTML = storedFeatures1
    document.getElementById("featuresColumn1").style.display = "block"
    document.getElementById("featuresColumn2").style.display = "block"
    document.getElementById("featuresColumn3").style.display = "block"
  }
  if (storedFeatures2 != null) {
    document.getElementById("features2").innerHTML = storedFeatures2
    document.getElementById("featuresColumn1").style.display = "block"
    document.getElementById("featuresColumn2").style.display = "block"
    document.getElementById("featuresColumn3").style.display = "block"
  }
  if (storedFeatures3 != null) {
    document.getElementById("features3").innerHTML = storedFeatures3
    document.getElementById("featuresColumn1").style.display = "block"
    document.getElementById("featuresColumn2").style.display = "block"
    document.getElementById("featuresColumn3").style.display = "block"
  }
  }
getFeatures()

/* NEW PROFICIENCY INPUT, SAVE, AND RETREIVAL */

var newProf = document.getElementById("newProf")
var storedProfs = localStorage.getItem("storedProfs")
var profsIdArray = []
var storedProfsIds = localStorage.getItem("storedProfsIds")
function newProfClick () {
  document.getElementById("newProfInputWrapper").style.display = "block";
  setInsertion("newProfText")
}
newProf.addEventListener("click",newProfClick,true)
function handleNewProf (e) {
  if (e.key === "Enter") {
    if (document.getElementById("newProfText").value != "") {
    var newProf = document.createElement("div");
    newProf.innerHTML = document.getElementById("newProfText").value;
    document.getElementById("profParent").appendChild(newProf);
    newProf.classList.add("profWrapper")
    document.getElementById("newProfText").value = "";
    document.getElementById("newProfInputWrapper").style.display = "none";

    var newProfDeleteBtn = document.createElement("button")
    newProfDeleteBtn.innerHTML = "X"
    newProfDeleteBtn.classList.add("deleteProf")
    newProf.appendChild(newProfDeleteBtn)
    newProfDeleteBtn.addEventListener("click",handleProfDeletion)

    localStorage.setItem("storedProfs",document.getElementById("profParent").innerHTML)
    localStorage.setItem("storedProfsIds",profsIdArray)
    }
  }
}
function getProfs() {
localStorage.getItem("storedProfs")
if (storedProfs != null) {
  document.getElementById("profParent").innerHTML = storedProfs
}
}
getProfs()
document.getElementById("newProfText").addEventListener("keypress",handleNewProf,true)

/* NEW ATTACK INPUT AND RETREIVAL */

var addAttack = document.getElementById("addAttack")
var storedAttacks = localStorage.getItem("storedAttacks")
function addAttackClick () {
  document.getElementById("attackInputContainer").style.display = "block"
  setInsertion("attackInput")
}
addAttack.addEventListener("click",addAttackClick,true)
document.getElementById("doneAddAttack").addEventListener("click", function () {
  if (
    document.getElementById("attackInput").value != "" &&
    document.getElementById("diceInput").value != "" &&
    document.getElementById("damageSelect").value != "none" &&
    document.getElementById("attackSelect").value != "none"
  ) {
  var newAttackBox = document.createElement('div');
  newAttack = document.getElementById("attackInput").value;
  var attackParent = document.getElementById("attackParent");
  newAttackBox.append(newAttack);
  attackParent.appendChild(newAttackBox);
  var attackOutput = document.createElement("div");
  if (document.getElementById("attackSelect").value == "strAttack") {
    attackOutput.innerHTML = `+${proficiencyBonus + strMod}`
    attackOutput.setAttribute("class","strAttackOutput")
    document.getElementById("attackOutputParent").appendChild(attackOutput)
  } else if (document.getElementById("attackSelect").value == "dexAttack") {
    attackOutput.innerHTML = `+${proficiencyBonus + dexMod}`
    attackOutput.setAttribute("class","dexAttackOutput")
    document.getElementById("attackOutputParent").appendChild(attackOutput)
  } else if (document.getElementById("attackSelect").value == "conAttack") {
    attackOutput.innerHTML = `+${proficiencyBonus + conMod}`
    attackOutput.setAttribute("class","conAttackOutput")
    document.getElementById("attackOutputParent").appendChild(attackOutput)
  } else if (document.getElementById("attackSelect").value == "intAttack") {
    attackOutput.innerHTML = `+${proficiencyBonus + intMod}`
    attackOutput.setAttribute("class","intAttackOutput")
    document.getElementById("attackOutputParent").appendChild(attackOutput)
  } else if (document.getElementById("attackSelect").value == "wisAttack") {
    attackOutput.innerHTML = `+${proficiencyBonus + wisMod}`
    attackOutput.setAttribute("class","wisAttackOutput")
    document.getElementById("attackOutputParent").appendChild(attackOutput)
  } else if (document.getElementById("attackSelect").value == "chaAttack") {
    attackOutput.innerHTML = `+${proficiencyBonus + chaMod}`
    attackOutput.setAttribute("class","chaAttackOutput")
    document.getElementById("attackOutputParent").appendChild(attackOutput)
  };
  var newDice = document.createElement(`div`)
  newDice.append(document.getElementById("diceInput").value) 
  document.getElementById("diceParent").appendChild(newDice)

  var newDamage = document.createElement(`div`)
  newDamage.append(document.getElementById("damageSelect").value) 
  document.getElementById("damageTypeParent").appendChild(newDamage)

  localStorage.setItem("storedAttacks",document.getElementById("attackListContainer").innerHTML);

  document.getElementById("attackInput").value = ""
  document.getElementById("diceInput").value = ""
  document.getElementById("damageSelect").value = "none"
  document.getElementById("attackSelect").value = "none"
  document.getElementById("attackInputContainer").style.display = "none"
  }
})
function getAttacks() {
  localStorage.getItem("storedAttacks")
  if (storedAttacks != null) {
    document.getElementById("attackListContainer").innerHTML = storedAttacks
  }
}
getAttacks()

/* EQUIPMENT SAVE AND RETREIVAL */

var addEquip = document.getElementById("addEquip")

addEquip.addEventListener("click", function () {
  document.getElementById("equipInputWrapper").style.display = "block"
  setInsertion("equipInput")
})

var equipInput = document.getElementById("equipInput")

var storedEquip = localStorage.getItem("storedEquip")

equipInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (equipInput.value != "") {
      var newEquip = document.createElement("div")
      newEquip.append(equipInput.value)
      document.getElementById("equipList").appendChild(newEquip)
      document.getElementById("equipInputWrapper").style.display = "none"
      equipInput.value = ""



      localStorage.setItem("storedEquip",document.getElementById("equipList").innerHTML)
    }
  }
})

function getEquipment () {
localStorage.getItem("storedEquip")
if (storedEquip != null) {
  document.getElementById("equipList").innerHTML = storedEquip
}
}

getEquipment()

/* USER EDITING */

var deleteProfButtons = document.querySelectorAll(".deleteProf")

function handleProfDeletion (e) {
  var deletionProf = e.target.closest(".profWrapper")
  deletionProf.remove()
  localStorage.setItem("storedProfs",document.getElementById("profParent").innerHTML)
}

for (let i = 0;i<deleteProfButtons.length;i++) {
  deleteProfButtons[i].addEventListener("click",handleProfDeletion)
}

var deleteFeatureButtons = document.querySelectorAll(".deleteFeature")

function handleFeatureDeletion (e) {
var deletionFeature = e.target.closest(".featureWrapper")
deletionFeature.remove()
localStorage.setItem("storedFeatures",document.getElementById("featureParent").innerHTML)
localStorage.setItem("storedFeatures1",document.getElementById("features1").innerHTML)
localStorage.setItem("storedFeatures2",document.getElementById("features2").innerHTML)
localStorage.setItem("storedFeature3",document.getElementById("features3").innerHTML)
}

for (let i=0;i<deleteFeatureButtons.length;i++) {
    deleteFeatureButtons[i].addEventListener("click",handleFeatureDeletion)
    }

/*
var featureParent = document.getElementById("featureParent")
var featuresArray = featureParent.getElementsByClassName("featureWrapper")

function removal () {
for (let i = 0; i < featuresArray.length;i++) {
  featuresArray[i].addEventListener("click",function () {
    featureParent.removeChild(featuresArray[i])    
  },)
  }
}

removal()
*/

/* PAGE BUTTONS */

var modal2 = document.getElementById("modal2")

var spellsPageBtn = document.getElementById("spellsPage")

spellsPageBtn.addEventListener("click", function () {
  modal1.style.display = "none"
  modal2.style.display = "block"
})



/* SPELLS PAGE */





/* FUNCTIONS */

function setInsertion(Id) {
  var input = document.getElementById(Id);
    input.focus();
    input.setSelectionRange(0,0);
}
function updatePB() {
  console.log("updating proficiency bonus")
var updateLevel = Number(document.getElementById("firstLevelNum").innerHTML)
var updateProficiency = Math.floor(2 + (updateLevel-1)/4)
var updateProficiencyBox = document.getElementById("profBonus")
if (updateLevel == 0) {

} else {
  updateProficiencyBox.innerHTML = `(+${updateProficiency})`
}
}
function updateSavingThrows() {
  console.log("updating Saving throws")
var updateStrScore = Number(document.getElementById("strScoreNum").innerHTML)
var updateDexScore = Number(document.getElementById("dexScoreNum").innerHTML)
var updateConScore = Number(document.getElementById("conScoreNum").innerHTML)
var updateIntScore = Number(document.getElementById("intScoreNum").innerHTML)
var updateWisScore = Number(document.getElementById("wisScoreNum").innerHTML)
var updateChaScore = Number(document.getElementById("chaScoreNum").innerHTML)
var updateStrBonus = Math.floor((updateStrScore - 10) / 2)
var updateDexBonus = Math.floor((updateDexScore - 10) / 2)
var updateConBonus = Math.floor((updateConScore - 10) / 2)
var updateIntBonus = Math.floor((updateIntScore - 10) / 2)
var updateWisBonus = Math.floor((updateWisScore - 10) / 2)
var updateChaBonus = Math.floor((updateChaScore - 10) / 2)
var updateStrSave = document.getElementById("strSaveCheckbox").checked
var updateDexSave = document.getElementById("dexSaveCheckbox").checked
var updateConSave = document.getElementById("conSaveCheckbox").checked
var updateIntSave = document.getElementById("intSaveCheckbox").checked
var updateWisSave = document.getElementById("wisSaveCheckbox").checked
var updateChaSave = document.getElementById("chaSaveCheckbox").checked
if (updateStrSave == true) {
  document.getElementById("strSaveBonus").innerHTML = `+(${proficiencyBonus + updateStrBonus})`
} else {
  document.getElementById("strSaveBonus").innerHTML = `+(${updateStrBonus})`
}
if (updateDexSave == true) {
  document.getElementById("dexSaveBonus").innerHTML = `+(${proficiencyBonus + updateDexBonus})`
} else {
  document.getElementById("dexSaveBonus").innerHTML = `+(${updateDexBonus})`
}
if (updateConSave == true) {
  document.getElementById("conSaveBonus").innerHTML = `+(${proficiencyBonus + updateConBonus})`
} else {
  document.getElementById("conSaveBonus").innerHTML = `+(${updateConBonus})`
}
if (updateIntSave == true) {
  document.getElementById("intSaveBonus").innerHTML = `+(${proficiencyBonus + updateIntBonus})`
} else {
  document.getElementById("intSaveBonus").innerHTML = `+(${updateIntBonus})`
}
if (updateWisSave == true) {
  document.getElementById("wisSaveBonus").innerHTML = `+(${proficiencyBonus + updateWisBonus})`
} else {
  document.getElementById("wisSaveBonus").innerHTML = `+(${updateWisBonus})`
}
if (updateChaSave == true) {
  document.getElementById("chaSaveBonus").innerHTML = `+(${proficiencyBonus + updateChaBonus})`
} else {
  document.getElementById("chaSaveBonus").innerHTML = `+(${updateChaBonus})`
}

}
function updateSkillsList() {
  var updateStrScore = Number(document.getElementById("strScoreNum").innerHTML)
var updateDexScore = Number(document.getElementById("dexScoreNum").innerHTML)
var updateConScore = Number(document.getElementById("conScoreNum").innerHTML)
var updateIntScore = Number(document.getElementById("intScoreNum").innerHTML)
var updateWisScore = Number(document.getElementById("wisScoreNum").innerHTML)
var updateChaScore = Number(document.getElementById("chaScoreNum").innerHTML)
var updateStrBonus = Math.floor((updateStrScore - 10) / 2)
var updateDexBonus = Math.floor((updateDexScore - 10) / 2)
var updateConBonus = Math.floor((updateConScore - 10) / 2)
var updateIntBonus = Math.floor((updateIntScore - 10) / 2)
var updateWisBonus = Math.floor((updateWisScore - 10) / 2)
var updateChaBonus = Math.floor((updateChaScore - 10) / 2)
var updateAcrSkill = document.getElementById("acrobatics").checked
var updateAniSkill = document.getElementById("animalHandling").checked
var updateArcSkill = document.getElementById("arcana").checked
var updateAthSkill = document.getElementById("athletics").checked
var updateDecSkill = document.getElementById("deception").checked
var updateHisSkill = document.getElementById("history").checked
var updateInsSkill = document.getElementById("insight").checked
var updateInvSkill = document.getElementById("investigation").checked
var updateIntiSkill = document.getElementById("intimidation").checked
var updateMedSkill = document.getElementById("medicine").checked
var updateNatSkill = document.getElementById("nature").checked
var updatePercSkill = document.getElementById("perception").checked
var updatePerfSkill = document.getElementById("performance").checked
var updatePersSkill = document.getElementById("persuasion").checked
var updateRelSkill = document.getElementById("religion").checked
var updateSleSkill = document.getElementById("sleightOfHand").checked
var updateSteSkill = document.getElementById("stealth").checked
var updateSurSkill = document.getElementById("survival").checked
if (updateAcrSkill == true) {
  document.getElementById("acrBonus").innerHTML = `+(${proficiencyBonus + updateDexBonus})`
} else {
  document.getElementById("acrBonus").innerHTML = `+(${updateDexBonus})`
}
if (updateAniSkill == true) {
  document.getElementById("aniBonus").innerHTML = `+(${proficiencyBonus + updateWisBonus})`
} else {
  document.getElementById("aniBonus").innerHTML = `+(${updateWisBonus})`
}
if (updateArcSkill == true) {
  document.getElementById("arcBonus").innerHTML = `+(${proficiencyBonus + updateIntBonus})`
} else {
  document.getElementById("arcBonus").innerHTML = `+(${updateIntBonus})`
}
if (updateAthSkill == true) {
  document.getElementById("athBonus").innerHTML = `+(${proficiencyBonus + updateStrBonus})`
} else {
  document.getElementById("athBonus").innerHTML = `+(${updateStrBonus})`
}
if (updateDecSkill == true) {
  document.getElementById("decBonus").innerHTML = `+(${proficiencyBonus + updateChaBonus})`
} else {
  document.getElementById("decBonus").innerHTML = `+(${updateChaBonus})`
}
if (updateHisSkill == true) {
  document.getElementById("hisBonus").innerHTML = `+(${proficiencyBonus + updateIntBonus})`
} else {
  document.getElementById("hisBonus").innerHTML = `+(${updateIntBonus})`
}
if (updateInsSkill == true) {
  document.getElementById("insBonus").innerHTML = `+(${proficiencyBonus + updateWisBonus})`
} else {
  document.getElementById("insBonus").innerHTML = `+(${updateWisBonus})`
}
if (updateInvSkill == true) {
  document.getElementById("invBonus").innerHTML = `+(${proficiencyBonus + updateIntBonus})`
} else {
  document.getElementById("invBonus").innerHTML = `+(${updateIntBonus})`
}
if (updateIntiSkill == true) {
  document.getElementById("intiBonus").innerHTML = `+(${proficiencyBonus + updateChaBonus})`
} else {
  document.getElementById("intiBonus").innerHTML = `+(${updateChaBonus})`
}
if (updateMedSkill == true) {
  document.getElementById("medBonus").innerHTML = `+(${proficiencyBonus + updateWisBonus})`
} else {
  document.getElementById("medBonus").innerHTML = `+(${updateWisBonus})`
}
if (updateNatSkill == true) {
  document.getElementById("natBonus").innerHTML = `+(${proficiencyBonus + updateIntBonus})`
} else {
  document.getElementById("natBonus").innerHTML = `+(${updateIntBonus})`
}
if (updatePercSkill == true) {
  document.getElementById("percBonus").innerHTML = `+(${proficiencyBonus + updateWisBonus})`
  document.querySelector(".passiveContainer").innerHTML = `Passive Perception: (${10 + proficiencyBonus + updateWisBonus})`
} else {
  document.getElementById("percBonus").innerHTML = `+(${updateWisBonus})`
  document.querySelector(".passiveContainer").innerHTML = `Passive Perception: (${10 + updateWisBonus})`
}
if (updatePerfSkill == true) {
  document.getElementById("perfBonus").innerHTML = `+(${proficiencyBonus + updateChaBonus})`
} else {
  document.getElementById("perfBonus").innerHTML = `+(${updateChaBonus})`
}
if (updatePersSkill == true) {
  document.getElementById("persBonus").innerHTML = `+(${proficiencyBonus + updateChaBonus})`
} else {
  document.getElementById("persBonus").innerHTML = `+(${updateChaBonus})`
}
if (updateRelSkill == true) {
  document.getElementById("relBonus").innerHTML = `+(${proficiencyBonus + updateIntBonus})`
} else {
  document.getElementById("relBonus").innerHTML = `+(${updateIntBonus})`
}
if (updateSleSkill == true) {
  document.getElementById("sleBonus").innerHTML = `+(${proficiencyBonus + updateDexBonus})`
} else {
  document.getElementById("sleBonus").innerHTML = `+(${updateDexBonus})`
}
if (updateSteSkill == true) {
  document.getElementById("steBonus").innerHTML = `+(${proficiencyBonus + updateDexBonus})`
} else {
  document.getElementById("steBonus").innerHTML = `+(${updateDexBonus})`
}
if (updateSurSkill == true) {
  document.getElementById("surBonus").innerHTML = `+(${proficiencyBonus + updateWisBonus})`
} else {
  document.getElementById("surBonus").innerHTML = `+(${updateWisBonus})`
}

}
function updateInitiative () {
  console.log("updating initiative")
  var updateDexScore = Number(document.getElementById("dexScoreNum").innerHTML)
  var updateDexBonus = Math.floor((updateDexScore - 10) / 2)
  document.getElementById("characterInitiative").innerHTML = `+${updateDexBonus}`
}
function updateAttacks() {
  var updateStrScore = Number(document.getElementById("strScoreNum").innerHTML)
  var updateDexScore = Number(document.getElementById("dexScoreNum").innerHTML)
  var updateConScore = Number(document.getElementById("conScoreNum").innerHTML)
  var updateIntScore = Number(document.getElementById("intScoreNum").innerHTML)
  var updateWisScore = Number(document.getElementById("wisScoreNum").innerHTML)
  var updateChaScore = Number(document.getElementById("chaScoreNum").innerHTML)
  var updateStrBonus = Math.floor((updateStrScore - 10) / 2)
  var updateDexBonus = Math.floor((updateDexScore - 10) / 2)
  var updateConBonus = Math.floor((updateConScore - 10) / 2)
  var updateIntBonus = Math.floor((updateIntScore - 10) / 2)
  var updateWisBonus = Math.floor((updateWisScore - 10) / 2)
  var updateChaBonus = Math.floor((updateChaScore - 10) / 2)

for (let i = 0; i <= document.querySelectorAll(".strAttackOutput").length - 1; i++) {
document.querySelectorAll(".strAttackOutput")[i].innerHTML = `+${updateStrBonus + proficiencyBonus}`
}
for (let i = 0; i <= document.querySelectorAll(".dexAttackOutput").length - 1; i++) {
  document.querySelectorAll(".dexAttackOutput")[i].innerHTML = `+${updateDexBonus + proficiencyBonus}`
  }
for (let i = 0; i <= document.querySelectorAll(".conAttackOutput").length - 1; i++) {
    document.querySelectorAll(".conAttackOutput")[i].innerHTML = `+${updateConBonus + proficiencyBonus}`
    }
for (let i = 0; i <= document.querySelectorAll(".intAttackOutput").length - 1; i++) {
      document.querySelectorAll(".intAttackOutput")[i].innerHTML = `+${updateIntBonus + proficiencyBonus}`
      }
for (let i = 0; i <= document.querySelectorAll(".wisAttackOutput").length - 1; i++) {
        document.querySelectorAll(".wisAttackOutput")[i].innerHTML = `+${updateWisBonus + proficiencyBonus}`
        }
for (let i = 0; i <= document.querySelectorAll(".chaAttackOutput").length - 1; i++) {
          document.querySelectorAll(".chaAttackOutput")[i].innerHTML = `+${updateChaBonus + proficiencyBonus}`
          }

}
function update () {
  console.log("updating")
  updatePB()
  updateSavingThrows()
  updateSkillsList()
  updateInitiative()
  updateAttacks()
  console.log("finished updating")
}
update()