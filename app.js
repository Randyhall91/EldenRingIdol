let rune = 0
let runesPerClick = 1
let ashperSecond = 0
let equippedWeapon = 0
let equippedAsh = 0
let greatRune = 0
let bossesDefeated = 0
// TODO 
//     Change Weapons / ashes to buttons
//     Change ashes to just add damage for boss fights
//     Add Bosses that grant Great Runes on defeat
//     Great Runes now generate runes instead of ashes

//     Draw weapons based off Great Runes aquired
//     Draw first boss if 2 weapons are aquired
//     Draw the next off great runes aquired

const weapons = [
  {
    name: "Basic Sword",
    quantity: 0,
    max: 2,
    cost: 1,
    runemultiplier: 1,
    isWeapon: 'weapon',
    starter: true
  },
  {
    name: "Sword of Night and Flame",
    quantity: 0,
    cost: 10,
    max: 2,
    runemultiplier: 7,
    starter: 'weapon',
    isWeapon: true,
    reward: 1
  },
  {
    name: "Grafted Blade Greatsword",
    quantity: 0,
    max: 2,
    cost: 5,
    runemultiplier: 10,
    starter: 'weapon',
    isWeapon: true,
    reward: 2
  },
  {
    name: "Starscourge Greatsword",
    quantity: 0,
    cost: 20,
    max: 2,
    runemultiplier: 12,
    starter: 'weapon',
    isWeapon: true,
    reward: 3
  }
]
const ashes = [
  {
    name: "Wolves",
    quantity: 0,
    runepersecond: 2,
    cost: 3,
    reward: 0,
    isAsh: 'ash',
    starter: true
  },
  {
    name: "Black Knife Tiche",
    quantity: 0,
    runepersecond: 3,
    cost: 3,
    reward: 1,
    isAsh: 'ash',
    starter: false
  },
  {
    name: "Mimic Tear",
    quantity: 0,
    runepersecond: 4,
    cost: 4,
    reward: 2,
    isAsh: 'ash',
    starter: false
  },
  {
    name: "Dung Eater Puppet",
    quantity: 0,
    runepersecond: 5,
    cost: 50,
    reward: 3,
    isAsh: 'ash',
    starter: false
  }
]
const bosses = [
  {
    name: "Margit, the Fell Omen",
    cost: 50,
    starter: true,
    reward: 0
  },
  {
    name: "Godrick the Grafted",
    cost: 150,
    starter: false,
    reward: 1
  },
  {
    name: "Starscourge Radahn",
    cost: 250,
    starter: false,
    reward: 2
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
function drawBoss() {
  let template = ''
  let boss = document.getElementById('drawBoss')
  bosses.forEach(b => {
    if (b.starter == true) {
      template += `
    <button onclick="buyBoss('${b.name}')" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost}
        </button>
    `
    }
    if (greatRune >= 1) {
      if (b.reward == 1)
        template += `
        <button onclick="buyBoss('${b.name}')" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost}
        </button>
        `
    }
    if (greatRune >= 2) {
      if (b.reward == 2)
        template += `
        <button onclick="buyBoss('${b.name}')" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost}
        </button>
        `
    }
    if (greatRune >= 3) {
      if (b.reward == 3)
        template += `
        <button onclick="buyBoss('${b.name}')" class="fs-5 d-flex btn btn-info my-1">${b.name} | Cost: ${b.cost}
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
    console.log(equippedWeapon);
    // @ts-ignore
    // console.log('you bought a weapon!', boughtweapon.name);
    // @ts-ignore
    if (boughtweapon.quantity >= 1) {
      // @ts-ignore
      boughtweapon.cost += 20
      // @ts-ignore

      // console.log('cost of', boughtweapon.name, boughtweapon.cost);
    }
  }
  update()
}


function buyAsh(ash) {
  const boughtash = ashes.find(a => a.name == ash)
  // @ts-ignore
  if (boughtash.quantity >= 2) {
    return
  }
  if (rune >= boughtash.cost) {
    // @ts-ignore
    rune -= boughtash.cost
    // @ts-ignore
    boughtash.quantity++
    // @ts-ignore
    console.log('you bought a Ash!', boughtash.name);
  }
  // @ts-ignore

  update()
}

function buyBoss(boss) {
  const boughtBoss = bosses.find(b => b.name == boss)


  if (rune >= boughtBoss.cost) {
    rune -= boughtBoss.cost

    greatRune++

  }
  update()
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
      <button onclick="unequip('${w.name}', '${w.isWeapon}')" class="btn btn-danger">Unequip</button>
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
      <button onclick="unequip('${a.name}', '${a.isAsh}')" class="btn btn-danger">Unequip</button>
      `
    }
    // @ts-ignore
    ash.innerHTML = template
  })
}
//SECTION Unequip Items
function unequip(item, type) {
  if (type = 'weapon') {
    const weapon = weapons.find(w => w.name == item)
    console.log(weapon.name);
    // @ts-ignore
    weapon.quantity--
    equippedWeapon--
  }

  if (type = 'ash') {
    const ash = ashes.find(a => a.name == item)
    console.log(ash.name);
    // @ts-ignore
    ash.quantity--
    equippedAsh--
  }
  update()
}



//TODO set max ashes to 2, add dissmiss button for ashes
// Balance 




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
  drawWeaponsStatus()
  drawWeapon()
  drawAshesStatus()
  drawAsh()
  drawBoss()
}
update()