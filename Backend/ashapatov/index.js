const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 19 // 1216
canvas.height = 64 * 10 // 808

let parsedCollisions
let collisionBlocks
let background
let doors
let kittys
let kittyCount = 0
let lastones
let fishes
let fishescount = 0
let traps

const player = new Player({
  imageSrc: './img/king/idle.png',
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: './img/king/idle.png',
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: './img/king/idleLeft.png',
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/king/runRight.png',
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/king/runLeft.png',
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: './img/king/enterDoor.png',
      onComplete: () => {
        console.log('completed animation')
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++

            if (level === 4) level = 1
            levels[level].init()
            player.switchSprite('idleRight')
            player.preventInput = false
            gsap.to(overlay, {
              opacity: 0,
            })
          },
        })
      },
    },

    getKitty: {
      frameRate: 1,
      frameBuffer: 1,
      loop: false,
      imageSrc: '',
      onComplete: () => {
        console.log('completed animation')
        kittyCount++
        console.log(kittyCount)
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++
            if (level === 4) level = 1
            levels[level].init()
            player.switchSprite('idleRight')
            player.preventInput = false
            gsap.to(overlay, {
              opacity: 0,
            })
          },
        })
      },
    },

    getLastone: {
      
    },

    getFish: {
      frameRate: 1,
      frameBuffer: 1,
      loop: false,
      imageSrc: '',
      onComplete: () => {
        console.log('completed animation')
        fishescount++
        console.log(fishescount);
        player.switchSprite('idleRight')
        player.preventInput = false
        fishes.shift();
      },
    },

    getIntrap: {

    },
  },
})

let level = 3
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]

      kittys = [
        new Sprite({
          position: {
            x: 756.0,
            y: 315,
          },
          imageSrc: './img/gg.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      lastones = []

      fishes = [
        new Sprite({
          position: {
            x: 572.0,
            y: 315,
          },
          imageSrc: './img/ff.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      traps = []
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 96
      player.position.y = 140

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel2.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 772.0,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]

      kittys = [
        new Sprite({
          position: {
            x: 752.0,
            y: 336,
          },
          imageSrc: './img/gg.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      lastones = []

      fishes = [
        new Sprite({
          position: {
            x: 572.0,
            y: 396,
          },
          imageSrc: './img/ff.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      traps = []
    },
  },
  3: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 100
      player.position.y = 500
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img-levels/lvl1-lst.png',
      })

      doors = [
        // new Sprite({
        //   position: {
        //     x: 176.0,
        //     y: 335,
        //   },
        //   imageSrc: './img/doorOpen.png',
        //   frameRate: 5,
        //   frameBuffer: 5,
        //   loop: false,
        //   autoplay: false,
        // }),
      ]

      kittys = [
        new Sprite({
          position: {
            x: 900.0,
            y: 440,
          },
          imageSrc: './img/gg.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      lastones = [
        // new Sprite({
        //   position: {
        //     x: 352.0,
        //     y: 386,
        //   },
        //   imageSrc: './img/gg.png',
        //   frameRate: 1,
        //   frameBuffer: 1,
        //   loop: true,
        //   autoplay: true,
        // }),
      ]

      fishes = [
        new Sprite({
          position: {
            x: 272.0,
            y: 406,
          },
          imageSrc: './img/ff.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      traps = [
        new Sprite({
          position: {
            x: 500.0,
            y: 430,
          },
          imageSrc: './img/ff.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
}

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
}

const overlay = {
  opacity: 0,
}

function animate() {
  window.requestAnimationFrame(animate)

  background.draw()
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw()
  })

  doors.forEach((door) => {
    door.draw()
  })

  kittys.forEach((kitty) => {
    kitty.draw()
  })

  lastones.forEach((lastone) => {
    lastone.draw()
  })

  fishes.forEach((fish) => {
    fish.draw()
  })

  traps.forEach((trap) => {
    trap.draw()
  })

  player.handleInput(keys)
  player.draw()
  player.update()

  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.restore()
}

getCought(traps);
levels[level].init()
animate()
