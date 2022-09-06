let rune = 0
let runesPerClick = 1
let runesPerSecond = 0
let equippedWeapon = 0
let equippedAsh = 0
let greatRune = 0
let bossesDefeated = 0
let cumalitivedmg = 0
let attempt = 0
let totaldmg = 0
// TODO 
// disable boss purchase on defeat WIP-not working
//shouldn't need to set max great runes at that point



const weapons = [
  {
    name: "Basic Sword",
    quantity: 0,
    max: 2,
    cost: 5,
    runemultiplier: 2,
    damage: 5,
    starter: true,
    reward: 0
  },
  {
    name: "Sword of Night and Flame",
    quantity: 0,
    cost: 15,
    max: 2,
    runemultiplier: 7,
    starter: false,
    damage: 10,
    reward: 1
  },
  {
    name: "Grafted Blade Greatsword",
    quantity: 0,
    max: 2,
    cost: 45,
    runemultiplier: 15,
    starter: false,
    damage: 25,
    reward: 2
  },
  {
    name: "Starscourge Greatsword",
    quantity: 0,
    cost: 90,
    max: 2,
    runemultiplier: 20,
    starter: false,
    damage: 50,
    reward: 3
  }
]
const ashes = [
  {
    name: "Wolves",
    quantity: 0,
    runepersecond: 2,
    cost: 20,
    reward: 0,
    damage: 2,
    starter: true
  },
  {
    name: "Black Knife Tiche",
    quantity: 0,
    runepersecond: 3,
    cost: 50,
    reward: 1,
    damage: 2,
    starter: false
  },
  {
    name: "Mimic Tear",
    quantity: 0,
    runepersecond: 4,
    cost: 100,
    reward: 2,
    damage: 7,
    starter: false
  },
  {
    name: "Dung Eater Puppet",
    quantity: 0,
    runepersecond: 5,
    cost: 250,
    reward: 3,
    damage: 10,
    starter: false
  }
]

const bosses = [
  {
    name: "Margit, the Fell Omen",
    cost: 50,
    starter: true,
    reward: 0,
    defeated: false,
    health: 45
  },
  {
    name: "Godrick the Grafted",
    cost: 200,
    starter: false,
    reward: 1,
    defeated: false,
    health: 70
  },
  {
    name: "Starscourge Radahn",
    cost: 500,
    starter: false,
    reward: 2,
    defeated: false,
    health: 300
  }
]

function resetBossHealth(name) {
  const boss = bosses.find(b => b.name == name)

  // @ts-ignore
  if (boss.name == "Margit, the Fell Omen") {
    // @ts-ignore
    boss.health = 45
  }
  // @ts-ignore
  if (boss.name == "Godrick the Grafted") {
    // @ts-ignore
    boss.health = 70
  }
  // @ts-ignore
  if (boss.name == "Starscourge Radahn") {
    // @ts-ignore
    boss.health = 150
  }

  // @ts-ignore
  console.log(boss.health, 'reset bosses health to starting values');

}
//SECTION Draw Weapon Upgrades
function drawWeapon() {
  let weapon = document.getElementById('drawWeapon')
  let template = ''

  weapons.forEach(w => {
    if (w.starter == true) {
      template += `
    <button onclick="buyWeapon('${w.name}')" class="fs-5 d-flex btn btn-info my-1">${w.name} | Cost: ${w.cost} | Dmg : ${w.damage}
        </button>
    `
    }
    if (greatRune >= 1) {
      if (w.reward == 1)
        template += `
    <button onclick="buyWeapon('${w.name}')" class="fs-5 d-flex btn btn-info my-1">${w.name} | Cost: ${w.cost} | Dmg : ${w.damage}
        </button>
    `
    }
    if (greatRune >= 2) {
      if (w.reward == 2)
        template += `
    <button onclick="buyWeapon('${w.name}')" class="fs-5 d-flex btn btn-info my-1">${w.name} | Cost: ${w.cost} | Dmg : ${w.damage}
        </button>
    `
    }
    if (greatRune >= 3) {
      if (w.reward == 3)
        template += `
    <button onclick="buyWeapon('${w.name}')" class="fs-5 d-flex btn btn-info my-1">${w.name} | Cost: ${w.cost} | Dmg : ${w.damage}
        </button>
    `
    }

  })

  // @ts-ignore
  weapon.innerHTML = template

}
//SECTION Draw Ash Upgrades
function drawAsh() {
  let ash = document.getElementById('drawAsh')
  let template = ''
  ashes.forEach(a => {
    if (a.starter == true) {
      template += `
    <button onclick="buyAsh('${a.name}')" class="fs-5 d-flex btn btn-info my-1">${a.name} | Cost: ${a.cost} | Dmg : ${a.damage}
        </button>
    `
    }
    if (greatRune >= 1) {
      if (a.reward == 1)
        template += `
        <button onclick="buyAsh('${a.name}')" class="fs-5 d-flex btn btn-info my-1">${a.name} | Cost: ${a.cost} | Dmg : ${a.damage}
        </button>
        `
    }
    if (greatRune >= 2) {
      if (a.reward == 2)
        template += `
    <button onclick="buyAsh('${a.name}')" class="fs-5 d-flex btn btn-info my-1">${a.name} | Cost: ${a.cost} | Dmg : ${a.damage}
        </button>
        `
    }
    if (greatRune >= 3) {
      if (a.reward == 3)
        template += `
        <button onclick="buyAsh('${a.name}')" class="fs-5 d-flex btn btn-info my-1">${a.name} | Cost: ${a.cost} | Dmg : ${a.damage}
        </button>
        `
    }

  })


  // @ts-ignore
  ash.innerHTML = template

}
// SECTION Draw Bosses
//TODO make button disable on defeat
function drawBoss() {
  let template = ''
  let boss = document.getElementById('drawBoss')
  bosses.forEach(b => {
    if (b.starter == true) {
      template += `
        <button onclick="buyBoss('${b.name}')" type="button" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost} | Life: ${b.health}
        </button>
        `
    }
    if (greatRune >= 1) {
      if (b.reward == 1) {
        template += `
          <button onclick="buyBoss('${b.name}')" type="button" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost} | Life: ${b.health}
          </button>          `
      }
    }
    if (greatRune >= 2) {
      if (b.reward == 2) {
        template += `
          <button onclick="buyBoss('${b.name}')" type="button" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost} | Life: ${b.health}</button> `
      }
    }
    if (greatRune >= 3) {
      if (b.reward == 3) {
        template += `
          <button onclick="buyBoss('${b.name}')" type="button" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost} | Life: ${b.health}</button> `
      }

    }
  })
  boss.innerHTML = template
}
function drawStats() {

  let stats = document.getElementById('drawStats')
  let template = `
    <h2>Runes per Click: <strong id="runesperclick"></strong> </h2>
        <h2>Great Runes Aquired: ${greatRune}
        </h2>
        <h2>Runes per second: ${runesPerSecond}
        </h2>
        
        <div id="equippedWeapons">
          <h3>Weapons x2</h3>
          <div id="drawWeaponsStatus"></div>
        </div>
        <h3>Ashes x1</h3>
        <div id="drawAshesStatus"></div>
        <h1>Total Damage: ${Math.floor(totaldmg * .75)}*</h1>
        <h5>*per sec avg<h5>
  `
  stats.innerHTML = template
  // @ts-ignore
  let currentrunes = document.getElementById('runes')
  // @ts-ignore
  currentrunes.innerHTML = rune
  // console.log(currentrunes);
  let perclick = document.getElementById('runesperclick')
  // @ts-ignore
  perclick.innerText = runesPerClick
  // let runessecond = document.getElementById('runespersecond')
  // // @ts-ignore
  // runessecond.innerText = runesPerSecond
  // let greatRunes = document.getElementById('greatRunes')
  // // @ts-ignore
  // greatRunes.innerHTML = greatRune
}


//SECTION Purchase Upgrades
function buyWeapon(weapon) {
  const boughtweapon = weapons.find(w => w.name == weapon)

  // @ts-ignore
  if (equippedWeapon >= 2) {
    // @ts-ignore
    equippedWeapon = 2
    return
  }
  // @ts-ignore
  if (rune >= boughtweapon.cost) {
    // @ts-ignore
    rune -= boughtweapon.cost
    // @ts-ignore
    boughtweapon.quantity++
    equippedWeapon++
    // @ts-ignore
    if (boughtweapon.quantity == 1) {
      // @ts-ignore
      boughtweapon.cost += 20
    }
    totaldmg += boughtweapon.damage
  }

  update()
}
function buyAsh(ash) {
  const boughtash = ashes.find(a => a.name == ash)
  // @ts-ignore
  if (equippedAsh >= 1) {
    equippedAsh = 1
    return
  }
  if (rune >= boughtash.cost) {
    // @ts-ignore
    rune -= boughtash.cost
    // @ts-ignore
    boughtash.quantity++
    equippedAsh++
    totaldmg += boughtash.damage
  }


  update()
}
function buyBoss(boss) {
  const boughtBoss = bosses.find(b => b.name == boss)


  if (rune >= boughtBoss.cost) {
    rune -= boughtBoss.cost


    boughtBoss.defeated = true

    fight(boughtBoss.name)
  }
  update()
}

//SECTION Combat
function fight(bossname) {
  const boss = bosses.find(b => b.name == bossname)
  bossname = boss.name
  fightIntro(bossname)
  fightDmg()
  setTimeout(() => { fightResults(boss.name); }, 5000);
  update()
}
function fightIntro(name) {
  let template = ''
  const boss = bosses.find(b => b.name == name)
  console.log(boss.name);
  if (boss.name == 'Margit, the Fell Omen') {
    let bossimg = document.getElementById('bossfight')
    template += `
      <img class="img-fluid" src="assets/Margit_salute.gif" alt="">`
    bossimg.innerHTML = template
  }
  if (boss.name == 'Godrick the Grafted') {
    let bossimg = document.getElementById('bossfight')
    template += `
      <img class="img-fluid" src="assets/godrick.gif" alt="">`
    bossimg.innerHTML = template
  }

  if (boss.name == 'Starscourge Radahn') {
    let bossimg = document.getElementById('bossfight')
    template += `
      <img class="img-fluid" src="assets/Starscourge.gif" alt="">`
    bossimg.innerHTML = template
  }

}



function fightDmg() {
  let wepdmg = 0
  let ashdmg = 0

  const heldweapons = weapons.forEach(w => {

    if (w.quantity >= 1) {
      for (let i = 0; i <= 10; i++) {
        wepdmg += (Math.floor((Math.random() * w.damage) + 1))
        if (attempt >= 1) {
          let attemptHelp = wepdmg * (Math.floor(1 + (attempt / 15)))
          wepdmg = attemptHelp
          console.log(attemptHelp, 'after attempt');
        }
        console.log(wepdmg);
      }
    }
  })

  const summonedashes = ashes.forEach(a => {
    if (a.quantity >= 1) {
      for (let i = 0; i <= 10; i++) {
        ashdmg += (Math.floor((Math.random() * a.damage) + 1))
        // console.log(ashdmg, 'ash dmg');
      }
    }
  })

  cumalitivedmg = ashdmg + wepdmg
  console.log(cumalitivedmg, "to boss");
}


function fightResults(name) {
  let template = ''
  const boss = bosses.find(b => b.name == name)

  // @ts-ignore
  boss.health -= cumalitivedmg

  console.log('health', boss.health, boss.name, 'dmg dealt', cumalitivedmg);
  // @ts-ignore
  if (boss.health <= 0) {
    // console.log('Victory!');

    let victory = document.getElementById('bossfight')
    template += `
      <img class="img-fluid" src="assets/Enemy_felled.gif" alt="">
      
      `
    victory.innerHTML = template
    greatRune++
    boss.defeated == true
    attempt = 0

    update()
    // console.log(boss.name, boss.defeated, attempt);
  }


  if (boss.health > 0) {
    console.log('You Died!');
    let death = document.getElementById('bossfight')
    template += `
    <img class="img-fluid" src="assets/youdied.gif" alt="">`
    death.innerHTML = template
    attempt++
    // console.log(attempt, 'st Attempt');
  }
  cumalitivedmg = 0
  // console.log(cumalitivedmg, 'dmg reset to 0');
  resetBossHealth(boss.name)
}


//TODO IF Dead only disabled Margit???
// function ifDead() {

//   const addDisable = document.getElementById('ifDead')

//   const bosskill = bosses.forEach(b => {
//     // @ts-ignore
//     if (b.defeated == true) {

//       addDisable.setAttribute("disabled", '')
//       // console.log(b);
//     }

//   })


// }



//SECTION On Click function
function farm() {

  // @ts-ignore
  const perclickwep = weapons.forEach(weapon => {
    if (weapon.quantity > 0) {
      runesPerClick = weapon.runemultiplier * weapon.quantity
      console.log(runesPerClick);
    }

  })
  rune += runesPerClick
  update()

}


//SECTION Rune gain Interval
function runeFarm() {

  let sum = 0
  if (greatRune >= 1) {
    sum += greatRune * 10
  }
  runesPerSecond = sum

  rune += sum

  runesUpdate()
}
setInterval(runeFarm, 1000)
// SECTION Draw Weapons Ashes and # of Great Runes under Status
function drawWeaponsStatus() {
  let template = ''
  let weapon = document.getElementById('drawWeaponsStatus')
  weapons.forEach(w => {
    if (w.quantity > 0) {
      template += `
      <h5>${w.name} Quantity: ${w.quantity}</h5>
      <button onclick="unequipWeapon('${w.name}')" class="btn btn-danger">Unequip</button>
      `
    }
    // @ts-ignore
    weapon.innerHTML = template
  })

}
//NOTE UPDATE to Great rune status
function drawAshesStatus() {
  let template = ''
  let ash = document.getElementById('drawAshesStatus')
  ashes.forEach(a => {
    if (a.quantity > 0) {
      template += `
      <h5>${a.name} Quantity: ${a.quantity}</h5>
      <button onclick="unequipAsh('${a.name}')" class="btn btn-danger">Unequip</button>
      `
    }
    // @ts-ignore
    ash.innerHTML = template
  })
}
//SECTION Unequip Items
function unequipWeapon(item) {
  const wep = weapons.find(w => w.name == item)
  // console.log(wep.name);

  // @ts-ignor
  wep.quantity--
  equippedWeapon--
  totaldmg -= wep.damage
  update()
}
function unequipAsh(item) {
  const ash = ashes.find(a => a.name == item)
  // console.log(ash.name);

  // @ts-ignor
  ash.quantity--
  equippedAsh--
  totaldmg -= ash.damage

  update()
}


function newGame() {
  rune = 1000
  let wep = weapons.find(w => w.name == 'Starscourge Greatsword')
  wep.quantity += 2
  equippedWeapon += 2
  let ash = ashes.find(a => a.name == 'Dung Eater Puppet')
  ash.quantity += 1
  equippedAsh += 1
  update()
}


//SECTION Update
function runesUpdate() {
  let currentrunes = document.getElementById('runes')
  // @ts-ignore
  currentrunes.innerHTML = rune
}
function update() {
  //Left Pane
  drawStats()
  drawWeaponsStatus()
  drawAshesStatus()
  //Right Pane
  drawWeapon()
  drawAsh()
  drawBoss()

}
update()

