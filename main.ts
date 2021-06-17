sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    projectile2.destroy(effects.hearts, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    projectile.destroy(effects.smiles, 500)
    dog.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let dog: Sprite = null
let creates_and_gates = [img`
    . . . . . . . . . . . . . . 2 2 
    . 2 . . . . . . . . . . . 2 2 . 
    . . 2 . . . . . . . . 2 2 . . . 
    . . . 2 . . . . . . 2 2 . . . . 
    . . . . 2 . . . 2 2 2 . . . . . 
    . . . . . 2 . 2 2 . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . 2 . 2 2 . . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    . . . . 2 . . . 2 2 . . . . . . 
    . . . 2 . . . . . 2 . . . . . . 
    . . . 2 . . . . . 2 . . . . . . 
    . . 2 . . . . . . . 2 . . . . . 
    . 2 . . . . . . . . 2 . . . . . 
    . 2 . . . . . . . . . 2 . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 . . . . . . . 
    . . . 3 . . . . 3 3 3 3 3 3 3 . 
    . . . 3 . . . . . . . . . . 3 . 
    . . . 3 3 3 3 3 . . . . . 3 3 . 
    . . . . . . . 3 3 3 3 3 3 3 . . 
    . . . . . . . . . . . . . . . . 
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
    projectile2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . 8 . . . 
        . . . . . . . . . . . . 8 . . . 
        . . . . . . . . . . 8 8 . . . . 
        . . . . . . . . 8 8 8 . . . . . 
        . . . . . . . . . . 8 8 . . . . 
        . . . . . . . . . 8 . 8 8 8 . . 
        . . . . . . . . . 8 . 8 . . 8 8 
        . . . . . . . . . 8 . 8 . . . 8 
        . . . . . . . . 8 . . 8 . 8 8 8 
        . . . . . . . . 8 . . 8 . 8 . 8 
        . . . . . . . . 8 . . 8 . 8 . 8 
        . . . . . . . . 8 . . . 8 8 . 8 
        . . . . . . . . 8 . . . . 8 8 . 
        . . . . . . . . 8 . . 8 8 . . . 
        . . . . . . . . 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
    projectile2.setKind(SpriteKind.Food)
    projectile2.x = randint(10, 150)
})
