window.addEventListener('keydown', (event) => {
  if (player.preventInput) return
  switch (event.key) {
    case 'e':
      for (let i = 0; i < kittys.length; i++) {
        const kitty = kittys[i]

        if (  
          player.hitbox.position.x + player.hitbox.width <=
            kitty.position.x + kitty.width &&
          player.hitbox.position.x >= kitty.position.x &&
          player.hitbox.position.y + player.hitbox.height >= kitty.position.y &&
          player.hitbox.position.y <= kitty.position.y + kitty.height
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

      break

    case 'Enter':
      for (let i = 0; i < lastones.length; i++) {
        const Lastone = lastones[i]

        if (
          player.hitbox.position.x + player.hitbox.width <= Lastone.position.x + Lastone.width &&
          player.hitbox.position.x >= Lastone.position.x &&
          player.hitbox.position.y + player.hitbox.height >= Lastone.position.y &&
          player.hitbox.position.y <= Lastone.position.y + Lastone.height
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
      if (player.velocity.y === 0) player.velocity.y = -50

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
      break
    case 'd':
      // move player to the right
      keys.d.pressed = true
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
