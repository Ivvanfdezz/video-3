let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . 2 . 2 2 2 2 2 2 2 2 . . . . 
    2 2 2 2 . . 2 2 . . 2 2 . . . . 
    2 . 2 2 2 2 2 2 . . 2 2 . . . . 
    2 . 2 2 2 2 2 2 . 2 2 2 . . . . 
    2 . 2 . . 2 2 2 2 2 2 2 . . . . 
    2 . 2 . . 2 2 2 . . 2 . . . . . 
    2 . 2 . . 2 . . 2 . 2 . . . . . 
    2 . 2 . . 2 . . 2 2 . . . . . . 
    2 2 2 2 2 2 2 2 2 . . . . . . . 
    . . 2 . . 2 2 2 . . . . . . . . 
    . . 2 . . 2 2 2 . . . . . . . . 
    . . 2 . . . . . . . . . . . . . 
    . . 2 . . . . . . . . . . . . . 
    . . 2 . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . 6 6 . . . . . . . 6 . . 6 . . 
    6 . . 6 6 . . . . . . 6 . 6 6 . 
    6 . . 6 6 6 6 . . . . 6 . 6 6 . 
    6 . 6 . 6 . . 6 . . . . 6 . 6 . 
    6 . 6 . 6 6 . . 6 . . . 6 . 6 . 
    6 . 6 . 6 6 . . 6 . 6 6 6 . 6 . 
    . 6 6 . 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 6 6 6 . . . 6 . . . 
    . . . 6 . . . 6 6 . . . 6 . . . 
    . . . 6 . . . . . . . 6 6 . . . 
    . . . . 6 . . . . . 6 6 6 . . . 
    . . . . . 6 6 6 6 6 . . 6 . . . 
    . . . . . . . . . . . . 6 . . . 
    . . . . . . . . . . . 6 . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(80, 60)
mySprite.setVelocity(0, 0)
controller.moveSprite(mySprite)
mySprite2.follow(mySprite, 50)
