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
let lives = 1

const player = new Player({
  imageSrc: './img/kit/ksks1mod.png',
  frameRate: 1,
  animations: {
    idleRight: {
      frameRate: 1,
      frameBuffer: 0,
      loop: true,
      imageSrc: './img/kit/ks2.png',
    },
    idleLeft: {
      frameRate: 1,
      frameBuffer: 0,
      loop: true,
      imageSrc: './img/kit/ks1.png',
    },
    runRight: {
      frameRate: 4,
      frameBuffer: 8,
      loop: true,
      imageSrc: './img/kit/ks2mod.png',
    },
    runLeft: {
      frameRate: 4,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/kit/kittyanim.png',
    },
    enterDoor: {
      frameRate: 1,
      frameBuffer: 2,
      loop: false,
      imageSrc: './img/kit/ksks1mod.png',
      onComplete: () => {
        console.log('completed animation')
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++

            if (level === 10) level = 1
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
            if (level === 10) level = 1
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

let level = 1
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
        imageSrc: './img-lvls/lvl1.png',
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
            x: 956.0,
            y: 330,
          },
          imageSrc: './img/minikit.png',
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

      traps = [
        new Sprite({
          position: {
            x: 582.0,
            y: 426,
          },
          imageSrc: './img/fck.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]
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
        imageSrc: './img-lvls/lvl2.png',
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
            x: 152.0,
            y: 136,
          },
          imageSrc: './img/minikit.png',
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

      traps = [
        new Sprite({
          position: {
            x: 182.0,
            y: 376,
          },
          imageSrc: './img/fck.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]
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
        imageSrc: './img-lvls/lvl3.png',
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
            y: 340,
          },
          imageSrc: './img/minikit.png',
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
        //   imageSrc: './img/minikit.png',
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
            x: 700.0,
            y: 330,
          },
          imageSrc: './img/fck.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  4: {
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
        imageSrc: './img-lvls/lvl4-1.png',
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
            y: 340,
          },
          imageSrc: './img/minikit.png',
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
        //   imageSrc: './img/minikit.png',
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
            x: 700.0,
            y: 330,
          },
          imageSrc: './img/fck.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  5: {
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
        imageSrc: './img-lvls/lvl4-2.png',
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
            y: 340,
          },
          imageSrc: './img/minikit.png',
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
        //   imageSrc: './img/minikit.png',
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
            x: 700.0,
            y: 330,
          },
          imageSrc: './img/fck.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  6: {
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
        imageSrc: './img-lvls/lvl5-hall.png',
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
            y: 340,
          },
          imageSrc: './img/minikit.png',
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
        //   imageSrc: './img/minikit.png',
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
            x: 700.0,
            y: 330,
          },
          imageSrc: './img/fck.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  7: {
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
        imageSrc: './img-lvls/lvl5-1.png',
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
            y: 340,
          },
          imageSrc: './img/minikit.png',
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
        //   imageSrc: './img/minikit.png',
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
            x: 700.0,
            y: 330,
          },
          imageSrc: './img/fck.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  8: {
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
        imageSrc: './img-lvls/lvl5-2.png',
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
            y: 340,
          },
          imageSrc: './img/minikit.png',
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
        //   imageSrc: './img/minikit.png',
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
            x: 700.0,
            y: 330,
          },
          imageSrc: './img/fck.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  9: {
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
        imageSrc: './img-lvls/lvl5-hall.png',
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
        // new Sprite({
        //   position: {
        //     x: 900.0,
        //     y: 340,
        //   },
        //   imageSrc: './img/minikit.png',
        //   frameRate: 1,
        //   frameBuffer: 1,
        //   loop: true,
        //   autoplay: true,
        // }),
      ]

      lastones = [
        new Sprite({
          position: {
            x: 900,
            y: 340,
          },
          imageSrc: './img/minikit.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
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
            x: 700.0,
            y: 330,
          },
          imageSrc: './img/fck.png',
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

levels[level].init()
animate()
