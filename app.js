let rune = 100
let runesPerClick = 1
let ashperSecond = 0
let equippedWeapon = 0
let equippedAsh = 0
let greatRune = 0
let bossesDefeated = 0
let cumalitivedmg = 0
// TODO 
//Add damage #s to weapons and ashes take out ash runes/s
// disable boss purchase on defeat WIP
//shouldn't need to set max great runes at that point
// Add damage delt to screen above combat imgs
//Play with design a little more.
//Delay update till combat is 'over'
//DOn't give great runes on failure
//Creat New Game + button for teacher testing


const weapons = [
  {
    name: "Basic Sword",
    quantity: 0,
    max: 2,
    cost: 5,
    runemultiplier: 1,
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
    damage: 1,
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
    damage: 5,
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
    health: 35
  },
  {
    name: "Godrick the Grafted",
    cost: 200,
    starter: false,
    reward: 1,
    defeated: false,
    health: 75
  },
  {
    name: "Starscourge Radahn",
    cost: 500,
    starter: false,
    reward: 2,
    defeated: false,
    health: 175
  }
]
//SECTION Draw Weapon Upgrades
function drawWeapon() {
  let weapon = document.getElementById('drawWeapon')
  let template = ''

  weapons.forEach(w => {
    if (w.starter == true) {
      template += `
    <button onclick="buyWeapon('${w.name}')" class="fs-5 d-flex btn btn-info my-1">${w.name} | Cost: ${w.cost}
        </button>
    `
    }
    if (greatRune >= 1) {
      if (w.reward == 1)
        template += `
    <button onclick="buyWeapon('${w.name}')" class="fs-5 d-flex btn btn-info my-1">${w.name} | Cost: ${w.cost}
        </button>
    `
    }
    if (greatRune >= 2) {
      if (w.reward == 2)
        template += `
    <button onclick="buyWeapon('${w.name}')" class="fs-5 d-flex btn btn-info my-1">${w.name} | Cost: ${w.cost}
        </button>
    `
    }
    if (greatRune >= 3) {
      if (w.reward == 3)
        template += `
    <button onclick="buyWeapon('${w.name}')" class="fs-5 d-flex btn btn-info my-1">${w.name} | Cost: ${w.cost}
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
    <button onclick="buyAsh('${a.name}')" class="fs-5 d-flex btn btn-info my-1">${a.name} | Cost: ${a.cost}
        </button>
    `
    }
    if (greatRune >= 1) {
      if (a.reward == 1)
        template += `
        <button onclick="buyAsh('${a.name}')" class="fs-5 d-flex btn btn-info my-1">${a.name} | Cost: ${a.cost}
        </button>
        `
    }
    if (greatRune >= 2) {
      if (a.reward == 2)
        template += `
    <button onclick="buyAsh('${a.name}')" class="fs-5 d-flex btn btn-info my-1">${a.name} | Cost: ${a.cost}
        </button>
        `
    }
    if (greatRune >= 3) {
      if (a.reward == 3)
        template += `
        <button onclick="buyAsh('${a.name}')" class="fs-5 d-flex btn btn-info my-1">${a.name} | Cost: ${a.cost}
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
    <button onclick="buyBoss('${b.name}')" type="button" id="ifDead" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost} | Life: ${b.health}
        </button>
    `
    }
    if (greatRune >= 1) {
      if (b.reward == 1)
        template += `
        <button onclick="buyBoss('${b.name}')" type="button" id="ifDead" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost} | Life: ${b.health}
        </button>
        `
    }
    if (greatRune >= 2) {
      if (b.reward == 2)
        template += `
        <button onclick="buyBoss('${b.name}')" type="button" id="ifDead" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost} | Life: ${b.health}
        </button>
        `
    }
    if (greatRune >= 3) {
      if (b.reward == 3)
        template += `
        <button onclick="buyBoss('${b.name}')" type="button" id="ifDead" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost} | Life: ${b.health}
        </button>
        `
    }
  })
  boss.innerHTML = template
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
  setTimeout(() => { fightResults(boss.name); }, 5000);
  fightDmg()
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

  const heldweapons = weapons.forEach(w => {
    for (let i = 0; i <= 10; i++) {
      if (w.quantity >= 1) {
        cumalitivedmg += (Math.floor((Math.random() * w.damage) + 1))
      }
    }
  })
  const summonedashes = ashes.forEach(a => {
    for (let i = 0; i <= 10; i++) {
      if (a.quantity >= 1) {
        cumalitivedmg += (Math.floor((Math.random() * a.damage) + 1))
      }
    }

  })
  console.log(cumalitivedmg);
}
function fightResults(name) {
  let template = ''
  const boss = bosses.find(b => b.name == name)
  boss.health -= cumalitivedmg
  if (boss.health <= 0) {
    console.log('Victory!');

    let victory = document.getElementById('bossfight')
    template += `
      <img class="img-fluid" src="assets/Enemy_felled.gif" alt="">
      
      `
    victory.innerHTML = template
    greatRune++
    boss.defeated == true
    // console.log(boss.name, boss.defeated);
  }


  if (boss.health > 0) {
    console.log('You Died!');
    let death = document.getElementById('bossfight')
    template += `
    <img class="img-fluid" src="assets/youdied.gif" alt="">`
    death.innerHTML = template
  }
}
//TODO IF Dead only disabled Margit???
function ifDead() {

  const addDisable = document.getElementById('ifDead')

  const bosskill = bosses.forEach(b => {
    // @ts-ignore
    if (b.defeated == true) {
      addDisable.setAttribute("disabled", '')
      // console.log(b.name, 'killed');
      // console.log(b.name, b.defeated);
    }

  });


}



//SECTION On Click function
function farm() {
  let totaldmg = 1
  // @ts-ignore
  const weapondamage = weapons.forEach(weapon => {
    if (weapon.quantity > 0) {
      totaldmg += weapon.runemultiplier * weapon.quantity
      console.log('totaldmg', totaldmg);
    }

  })

  // console.log(totaldmg);
  runesPerClick = totaldmg
  // if (totaldmg <= 2) {
  //   rune++
  // }
  rune += totaldmg
  update()
}


//SECTION Rune gain Interval
function runeFarm() {

  let sum = 0
  if (greatRune >= 1) {
    sum += greatRune * 10
  }
  ashes.forEach(ash => {
    if (ash.quantity > 0) {
      sum += ash.runepersecond * ash.quantity
    }
  })
  ashperSecond = sum
  rune += sum

  update()
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

  update()
}
function unequipAsh(item) {
  const ash = ashes.find(a => a.name == item)
  // console.log(ash.name);

  // @ts-ignor
  ash.quantity--
  equippedAsh--

  update()
}





//SECTION Update
function update() {
  // @ts-ignore

  let currentrunes = document.getElementById('runes')
  // @ts-ignore
  currentrunes.innerHTML = rune
  // console.log(currentrunes);
  let perclick = document.getElementById('runesperclick')
  // @ts-ignore
  perclick.innerText = runesPerClick
  let perash = document.getElementById('runespersecond')
  // @ts-ignore
  perash.innerText = ashperSecond
  let greatRunes = document.getElementById('greatRunes')
  // @ts-ignore
  greatRunes.innerHTML = greatRune
  drawWeaponsStatus()
  drawWeapon()
  drawAshesStatus()
  drawAsh()
  drawBoss()

}
update()

