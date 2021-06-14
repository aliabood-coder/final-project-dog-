let projectile: Sprite = null
let creates_and_gates = [img`
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
let dog = sprites.create(img`
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
