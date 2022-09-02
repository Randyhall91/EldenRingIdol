let rune = 0
let runesPerClick = 1
let ashperSecond = 0
const weapons = [
  {
    name: "Dark Moon Greatsword",
    quantity: 0,
    max: 2,
    cost: 5,
    runemultiplier: 5
  },
  {
    name: "Sword of Night and Flame",
    quantity: 0,
    cost: 10,
    max: 2,
    runemultiplier: 7
  },
  {
    name: "Moonveil",
    quantity: 0,
    cost: 20,
    max: 2,
    runemultiplier: 10
  }
]
const ashes = [
  {
    name: "Black Knife Tiche",
    quantity: 0,
    cost: 30,
    runepersecond: 5
  },
  {
    name: "Mimic Tear",
    quantity: 0,
    cost: 40,
    runepersecond: 7
  },
  {
    name: "Dung Eater Puppet",
    quantity: 0,
    cost: 50,
    runepersecond: 10
  }
]
//NOTE Purchase Upgrades
function buyWeapon(weapon) {
  const boughtweapon = weapons.find(w => w.name == weapon)


  // @ts-ignore
  if (boughtweapon.quantity >= 2) {
    // @ts-ignore
    boughtweapon.quantity = 2
    return
  }


  // @ts-ignore
  if (rune >= boughtweapon.cost) {
    // @ts-ignore
    rune -= boughtweapon.cost
    // @ts-ignore
    boughtweapon.quantity++
    // @ts-ignore
    // console.log('you bought a weapon!', boughtweapon.name);
    // @ts-ignore
    if (boughtweapon.quantity >= 1) {
      // @ts-ignore
      boughtweapon.cost += 20
      // @ts-ignore

      console.log('cost of', boughtweapon.name, boughtweapon.cost);
    }
  }

  drawWeaponCost(boughtweapon.name, boughtweapon.cost)
  update()
}
function drawWeaponCost(name, cost) {
  if (name == "Dark Moon Greatsword") {
    let weaponCost = document.getElementById('DMweaponCost')
    // @ts-ignore
    weaponCost.innerText = cost
  }
  if (name == "Sword of Night and Flame") {
    let weaponCost = document.getElementById('SNFweaponCost')
    // @ts-ignore
    weaponCost.innerText = cost
  }
  if (name == "Moonviel") {
    let weaponCost = document.getElementById('MVweaponCost')
    // @ts-ignore
    weaponCost.innerText = cost
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
  drawAshCost(boughtash.name, boughtash.cost)
  update()
}
function drawAshCost(name, cost) {
  if (name == "Black Knife Tiche") {
    let weaponCost = document.getElementById('BKTashCost')
    // @ts-ignore
    weaponCost.innerText = cost
  }
  if (name == "Mimic Tear") {
    let weaponCost = document.getElementById('MTashCost')
    // @ts-ignore
    weaponCost.innerText = cost
  }
  if (name == "Dung Eater Puppet") {
    let weaponCost = document.getElementById('DEPashCost')
    // @ts-ignore
    weaponCost.innerText = cost
  }

}
//NOTE On Click function
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


//NOTE Ashes Interval
function ashFarm() {

  let sum = 0
  ashes.forEach(ash => {
    if (ash.quantity > 0) {
      sum += ash.runepersecond * ash.quantity
    }
  })
  ashperSecond = sum
  rune += sum
  // console.log('ashfarm', rune);
  update()
}
setInterval(ashFarm, 3000)

function drawWeapons() {
  let template = ''
  let weapon = document.getElementById('drawWeapons')
  weapons.forEach(w => {
    if (w.quantity > 0) {
      template += `
      <h5>${w.name} Quantity: <p>${w.quantity}</p></h5>
      `
    }
    // @ts-ignore
    weapon.innerHTML = template
  })
}
function drawAshes() {
  let template = ''
  let ash = document.getElementById('drawAshes')
  ashes.forEach(a => {
    if (a.quantity > 0) {
      template += `
      <h5>${a.name} Quantity: <p>${a.quantity}</p></h5>
      `
    }
    // @ts-ignore
    ash.innerHTML = template
  })
}


//NOTE Update
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
  drawWeapons()
  drawAshes()
}