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
    . . . . . . . . . . . . . . . . 
    . . e e e e e e e e e e e . . . 
    . . e e e e e e e e e e e . . . 
    . . e 5 e 5 e 5 e 5 e 5 e . . . 
    . . e 5 e 5 e 5 e 5 e 5 e . . . 
    . . e 5 e 5 e 5 e 5 e 5 e . . . 
    . . e e e e e e e e e e e . . . 
    . . e e e e e e e e e e e . . . 
    . . e 5 e 5 e 5 e 5 e 5 e . . . 
    . . e 5 e 5 e 5 e 5 e 5 e . . . 
    . . e 5 e 5 e 5 e 5 e 5 e . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 9 
    . . . . . . . . . . . . . . 9 9 
    8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 5 
    8 . f . . f . . f . . f . . . 5 
    8 . f . . f . . f . . f . . . 5 
    8 . f . . f . . f . . f . . . 5 
    8 . f . . f . . f . . f . . . 5 
    8 . f . . f . . f . . f . . . 5 
    8 . f . . f . . f . . f . . . 5 
    8 8 8 8 8 8 8 8 8 8 8 8 8 9 . 5 
    . . . . . . . . . . . . . 9 9 5 
    . . . . . . . . . . . . . . 9 5 
    . . . . . . . . . . . . . . 9 9 
    . . . . . . . . . . . . . . . 9 
    `]
dog = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . f f e e d d d d e f f . . 
    . . f e e f d d d d e e e e f . 
    . f e e f d d d d e e e f e e f 
    . f e e f d f d d e f e f e e f 
    . . f e f d d d d e e e f e f . 
    . . f e f d d d d d e e f e f . 
    . . . f . f d f f f d f . f . . 
    . . . . . f d d f d d f . . . . 
    . . . . . . f d d d f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . f . . . . . . . 
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
