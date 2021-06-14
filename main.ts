sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    biscuit.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    creates_and_gates.destroy(effects.smiles, 500)
    dog.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let dog: Sprite = null
let creates_and_gates: Image[] = []
let biscuit: Sprite = null
biscuit = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 e 2 2 . . . . . . . 
    . . . . . 2 e e 2 2 . . . . . . 
    . . . . . 2 e e e 2 . . . . . . 
    . . . . . 2 e e e 2 2 . . . . . 
    . . . . . 2 e e e e 2 2 . . . . 
    . . . . . 2 e e e e e 2 . . . . 
    . . . . . 2 e e e e e 2 2 . . . 
    . . . . . 2 e e e 2 2 2 2 2 . . 
    . . . . . 2 e e 2 2 . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    `, SpriteKind.Food)
creates_and_gates = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 . . . . . . . 5 . . . . 
    . . . 5 . . . . . . . 5 . . . . 
    . . . 5 . . . . . . . 5 . . . . 
    . . . 5 . . . . . . . 5 . . . . 
    . . . 5 . . . . . . . 5 . . . . 
    . . . 5 . . . . . . . 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 9 9 9 9 9 9 9 9 . . . . . 
    . . . 9 . . . . . . 9 . . . . . 
    . . . 9 . . . . . . 9 . . . . . 
    . . . 9 . . . . . . 9 . . . . . 
    . . . 9 . . . . . . 9 . . . . . 
    . . . 9 . . . . . . 9 . . . . . 
    . . . 9 9 9 9 9 9 9 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
dog = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . e e e . . . e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
dog.setStayInScreen(true)
dog.bottom = 120
controller.moveSprite(dog, 100, 100)
info.setLife(3)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(creates_and_gates[randint(0, creates_and_gates.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
