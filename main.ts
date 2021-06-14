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
let biscuit: Sprite = null
let creates_and_gates: Image = null
creates_and_gates = img`
    2 2 . . . . . . . . . . . . . 2 
    . 2 2 . . . . . . . . . . . 2 2 
    . . 2 . . . . . . . . . . 2 2 . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . . 2 . . . . . . 2 2 . . . 
    . . . . . 2 2 . . . 2 2 . . . . 
    . . . . . . 2 2 . 2 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 2 . 2 . . . . . . 
    . . . . . 2 2 . . . 2 2 . . . . 
    . . . . 2 2 . . . . . 2 . . . . 
    . . . 2 2 . . . . . . 2 2 . . . 
    . . 2 2 . . . . . . . . 2 . . . 
    2 2 2 . . . . . . . . . . 2 . . 
    2 . . . . . . . . . . . . 2 2 2 
    `
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
    projectile = sprites.createProjectileFromSide(creates_and_gates, 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
