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
          player.switchSprite('getKitty')
          kitty.play()
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
      console.log("A pressed");
      keys.a.pressed = true
      break
    case 'd':
      // move player to the right
      console.log("d pressed");
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
