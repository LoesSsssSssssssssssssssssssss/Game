window.addEventListener('keydown', (event) => {
  if (player.preventInput) return
  switch (event.key) {
    case 'e':

      for (let i = 0; i < kittys.length; i++) {
        const kitty = kittys[i]

        if (  
          player.position.x <= kitty.position.x + kitty.width &&
          player.position.x + player.width >= kitty.position.x &&
          player.position.y + player.height >= kitty.position.y &&
          player.position.y <= kitty.position.y + kitty.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('getKitty');
          kitty.play();
          console.log("Kitty-for-copleted");
          return
        }
        
      }

      for (let i = 0; i < keyses.length; i++) {
        const elem = keyses[i]

        if (  
          player.position.x <= elem.position.x + elem.width &&
          player.position.x + player.width >= elem.position.x &&
          player.position.y + player.height >= elem.position.y &&
          player.position.y <= elem.position.y + elem.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('getKey');
          elem.play();
          console.log("key-for-copleted");
          return
        }
        
      }

      for (let i = 0; i < fishes.length; i++) {
        const fish = fishes[i]

        if (
          player.position.x <= fish.position.x + fish.width &&
          player.position.x + player.width >= fish.position.x &&
          player.position.y + player.height >= fish.position.y &&
          player.position.y <= fish.position.y + fish.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('getFish')
          fish.play()
          console.log("Fish-for-completed");
          return
        }
        
      }

      for (let i = 0; i < lastones.length; i++) {
        const Lastone = lastones[i]

        if (
          player.position.x <= Lastone.position.x + Lastone.width &&
          player.position.x + player.width >= Lastone.position.x &&
          player.position.y + player.height >= Lastone.position.y &&
          player.position.y <= Lastone.position.y + Lastone.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = false
          gsap.to(overlay, {
              opacity: 1,
            })
            
          return
        }
        
      }

      break

    case ' ':
      if (player.velocity.y === 0) player.velocity.y = -17
      getdamage()
      break

    case 'w':
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i]

        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('enterDoor')
          door.play()
          return
        }
      }

      break
    case 'a':
      // move player to the left
      keys.a.pressed = true
      getdamage()
      break
    case 'd':
      // move player to the right
      keys.d.pressed = true
      getdamage()
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'a':
      // move player to the left
      keys.a.pressed = false

      break
    case 'd':
      // move player to the right
      keys.d.pressed = false

      break
  }
})

function getdamage(){

  if (level == 4 && player.position.y > 640){
    level++
    levels[level].init()
  }

  for (let j = 0; j < traps.length; j++) {
    const trap = traps[j];

    if (
      // player.hitbox.position.x + player.hitbox.width + 10 <=
      //   trap.position.x + trap.width &&
      // player.hitbox.position.x + 10 >= trap.position.x &&
      // player.hitbox.position.y + player.hitbox.height + 10 >= trap.position.y &&
      // player.hitbox.position.y + 10 <= trap.position.y + trap.height
      player.position.x <= trap.position.x + trap.width &&
      player.position.x + player.width >= trap.position.x &&
      player.position.y + player.height >= trap.position.y &&
      player.position.y <= trap.position.y + trap.height
    ) {
      lives--
      console.log(lives);
      if( lives <= 0 ){
        levels[level].init()
        lives = 1
        kittyCount -= 200
        fishescount -= 100
        setTimeout(getdamage(), 3000);
      }
      return
    }
    
  }
}
