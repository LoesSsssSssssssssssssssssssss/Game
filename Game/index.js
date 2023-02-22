const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 19 // 1216
canvas.height = 64 * 10 // 808

let parsedCollisions
let collisionBlocks
let background
let doors
let fake_doors
let kittys
let kittyCount = 0
let lastones
let fishes
let fishescount = 0
let traps
let lives = 1
let cells
let unreachables
let keyses

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
      frameRate: 1,
      frameBuffer: 1,
      loop: true,
      imageSrc: './img/kit/ks2.png',
    },
    runLeft: {
      frameRate: 1,
      frameBuffer: 1,
      loop: true,
      imageSrc: './img/kit/ks1.png',
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
        kittyCount += 500
        console.log(kittyCount)
        player.switchSprite('idleRight')
        player.preventInput = false
        kittys.shift();
      },
    },

    getKey: {
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
        fishescount += 100
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
      player.position.x = 96
      player.position.y = 340

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
            x: 1067,
            y: 260,
          },
          imageSrc: './img/caver.png',
          frameRate: 1,
          frameBuffer: 1,
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
            x: 272.0,
            y: 315,
          },
          imageSrc: './img/fish.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      traps = [
        new Sprite({
          position: {
            x: 578,
            y: 492,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 642,
            y: 492,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      unreachables = []

      cells = []

      keyses = []

      fake_doors = []
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 80
      player.position.y = 410

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
            x: 1072.0,
            y: 68,
          },
          imageSrc: './img/caver.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      kittys = [
        new Sprite({
          position: {
            x: 552.0,
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
            x: 1072.0,
            y: 150,
          },
          imageSrc: './img/fish.png',
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
            y: 492,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      unreachables = []

      cells = []

      keyses = []

      fake_doors = []
    },
  },
  3: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 100
      player.position.y = 150
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img-lvls/lvl3.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 1076.0,
            y: 452  ,
          },
          imageSrc: './img/caver.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      kittys = [
        new Sprite({
          position: {
            x: 60.0,
            y: 330,
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
            x: 780.0,
            y: 80,
          },
          imageSrc: './img/fish.png',
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
            y: 428,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      unreachables = []

      cells = []

      keyses = []

      fake_doors = []
    },
  },
  4: {
    init: () => {
      parsedCollisions = collisionsLevel41.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 1000
      player.position.y = 130
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
        //   imageSrc: './img/caver.png',
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
            x: 100.0,
            y: 200,
          },
          imageSrc: './img/fish.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      traps = [
        new Sprite({
          position: {
            x: 642.0,
            y: 300,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      unreachables = []

      cells = []

      keyses = []

      fake_doors = []
    },
  },
  5: {
    init: () => {
      parsedCollisions = collisionsLevel42.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 1050
      player.position.y = 180
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img-lvls/lvl4-2.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 992.0,
            y: 452,
          },
          imageSrc: './img/caver.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      kittys = [
        new Sprite({
          position: {
            x: 80.0,
            y: 522,
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
            x: 330.0,
            y: 140,
          },
          imageSrc: './img/fish.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      traps = [
        new Sprite({
          position: {
            x: 320.0,
            y: 556,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
        new Sprite({
          position: {
            x: 384,
            y: 556,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
        new Sprite({
          position: {
            x: 448,
            y: 556,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      unreachables = []

      cells = []

      keyses = []

      fake_doors = []
    },
  },
  6: {
    init: () => {
      parsedCollisions = collisionsLevel5h.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 100
      player.position.y = 350
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img-lvls/lvl5-hall.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 128.0,
            y: 105,
          },
          imageSrc: './img/door2.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 756.0,
            y: 105,
          },
          imageSrc: './img/door2.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
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

      unreachables = [
        new Sprite({
          position: {
            x: 492.0,
            y: 386,
          },
          imageSrc: './img/minikit.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      cells = [
        new Sprite({
          position: {
            x: 435,
            y: 210,
          },
          imageSrc: './img/cell2.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 435.0,
            y: 145,
          },
          imageSrc: './img/cell2.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      fishes = [
        // new Sprite({
        //   position: {
        //     x: 272.0,
        //     y: 406,
        //   },
        //   imageSrc: './img/fish.png',
        //   frameRate: 1,
        //   frameBuffer: 1,
        //   loop: false,
        //   autoplay: false,
        // }),
      ]

      traps = [
        // new Sprite({
        //   position: {
        //     x: 700.0,
        //     y: 330,
        //   },
        //   imageSrc: './img/lovushka.png',
        //   frameRate: 1,
        //   frameBuffer: 1,
        //   loop: false,
        //   autoplay: false,
        // }),
      ]

      keyses = []

      fake_doors = []
    },
  },
  7: {
    init: () => {
      parsedCollisions = collisionsLevel51.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 1050
      player.position.y = 290
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
        //   imageSrc: './img/caver.png',
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

      keyses = [
        new Sprite({
          position: {
            x: 60,
            y: 514,
          },
          imageSrc: './img/card.png',
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
            x: 1000.0,
            y: 130,
          },
          imageSrc: './img/fish.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      traps = [
        new Sprite({
          position: {
            x: 832,
            y: 555,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 896,
            y: 555,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 512,
            y: 428,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 576,
            y: 428,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 832,
            y: 172,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 896,
            y: 172,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      unreachables = []

      cells = []

      fake_doors = []
    },
  },
  8: {
    init: () => {
      parsedCollisions = collisionsLevel52.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 100
      player.position.y = 100
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img-lvls/lvl5-2.png',
      })

      doors = []

      kittys = []

      lastones = []

      fishes = [
        new Sprite({
          position: {
            x: 1100,
            y: 520,
          },
          imageSrc: './img/fish.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      traps = [
        new Sprite({
          position: {
            x: 320.0,
            y: 555,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 706.0,
            y: 300,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 906.0,
            y: 300,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 1088.0,
            y: 428,
          },
          imageSrc: './img/lovushka.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),
      ]

      unreachables = []

      cells = []

      fake_doors = []

      keyses = [
        new Sprite({
          position: {
            x: 755,
            y: 450,
          },
          imageSrc: './img/card.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]
    },
  },
  9: {
    init: () => {
      parsedCollisions = collisionsLevel5h.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 100
      player.position.y = 350
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img-lvls/lvl5-hall.png',
      })

      doors = []

      kittys = []

      lastones = [
        new Sprite({
          position: {
            x: 500,
            y: 395,
          },
          imageSrc: './img/minikit.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: true,
          autoplay: true,
        }),
      ]

      fishes = []

      traps = []

      unreachables = []

      cells = []

      keyses = []

      fake_doors = [
        new Sprite({
          position: {
            x: 128.0,
            y: 105,
          },
          imageSrc: './img/door2.png',
          frameRate: 1,
          frameBuffer: 1,
          loop: false,
          autoplay: false,
        }),

        new Sprite({
          position: {
            x: 756.0,
            y: 105,
          },
          imageSrc: './img/door2.png',
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

  unreachables.forEach((unreachable) => {
    unreachable.draw()
  })

  cells.forEach((cell) => {
    cell.draw()
  })

  fishes.forEach((fish) => {
    fish.draw()
  })

  traps.forEach((trap) => {
    trap.draw()
  })

  keyses.forEach((key) => {
    key.draw()
  })

  fake_doors.forEach((fdoor) => {
    fdoor.draw()
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
