enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite4, location3) {
    sprites.destroy(mySprite)
    scene.centerCameraAt(0, 0)
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`myImage`)
    game.setDialogFrame(img`
        999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999
        999911119999119991111999111199999999119999999999
        999111111191111911111191111119911191111991111999
        999111111111111111111111111111111111111911111199
        999111111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999991111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111119999
        999111111111111111111111111111111111111111111999
        999911111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111119999
        999111111111111111111111111111111111111111111999
        99d1111111111111111111111111111111111dd111111199
        9ddd111111111111111111111111111111111dd111111199
        9ddd1111111111dd111111111111111111111dd1111dd199
        9d1d111111111ddddd11111111111ddddd111ddd111ddd99
        9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
        9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
        9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
        9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
        dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
        dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
        dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
        dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
        ddddddddddddddddddddddd1dddddddddddddddddddddddd
        ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
        .dddddddddddddddddddddddddddddddddddddddddddddd.
        ..dddddddddddddddddddddddddddddddddddddddddddd..
        `)
    game.showLongText("Hello", DialogLayout.Bottom)
    game.showLongText("What's your name", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage1`)
    game.showLongText("Motoroil Ketchup", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage2`)
    game.showLongText("That's a nice name!", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage1`)
    game.showLongText("What's yours?", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage`)
    game.showLongText("Sean", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage1`)
    game.showLongText("Nice, I guess", DialogLayout.Bottom)
    pause(500)
    tiles.setCurrentTilemap(tilemap`level11`)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 8 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f a a a a f f f f . . 
        . f f a a b f 4 4 f b a a f f . 
        . f a a 4 1 f d d f 1 4 a a f . 
        . . f a a d d d d d d a a f . . 
        . . . f a a 4 4 4 4 a a f . . . 
        . . e 4 f c c c c c c f 4 e . . 
        . . 4 d f c c c c c c f d 4 . . 
        . . 4 4 f c c c c c c f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f 5 5 5 5 5 f f f . 
        . f 5 5 5 5 5 5 5 f f f 
        f 5 5 5 5 5 5 5 5 f f f 
        f 5 5 4 5 5 5 5 5 f f f 
        f 5 5 4 4 5 5 5 5 f f f 
        f f 5 4 4 f 1 4 5 5 f f 
        . f 5 4 4 f 1 4 5 5 f f 
        . . f d d d d 4 5 5 f . 
        . . f a a d e e f f f . 
        . . f a a e d d 4 f . . 
        . . f a a e d d e f . . 
        . f f a a f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `, SpriteKind.Player)
    mySprite3.setPosition(93, 46)
    pause(100)
    story.startCutscene(function () {
        story.spriteSayText(mySprite3, "Can you….")
        story.spriteSayText(mySprite3, "Play Football?")
        story.showPlayerChoices("No not really", "Only a little bit")
        if (story.checkLastAnswer("Only a little bit")) {
            story.spriteSayText(mySprite3, "Oh! That's great")
            story.spriteSayText(mySprite3, "You can help us with a game tonight ")
            pause(200)
            sprites.destroy(mySprite)
            sprites.destroy(mySprite3)
            tiles.setCurrentTilemap(tilemap`level15`)
            mySprite = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 8 8 f f f . . . . 
                . . . f f f 8 8 8 8 f f f . . . 
                . . f f f 6 6 6 6 6 6 f f f . . 
                . . f f 6 8 8 8 8 8 8 6 8 f . . 
                . . f 6 8 f f f f f f 8 6 f . . 
                . . f f f f a a a a f f f f . . 
                . f f a a b f 4 4 f b a a f f . 
                . f a a 4 1 f d d f 1 4 a a f . 
                . . f a a d d d d d d a a f . . 
                . . . f a a 4 4 4 4 a a f . . . 
                . . e 4 f c c c c c c f 4 e . . 
                . . 4 d f c c c c c c f d 4 . . 
                . . 4 4 f c c c c c c f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 13))
            controller.moveSprite(mySprite)
            scene.cameraFollowSprite(mySprite)
            story.spriteSayText(mySprite, "Can't believe…")
            story.spriteSayText(mySprite, "I'm doing this")
        }
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    story.startCutscene(function () {
        mySprite2.setFlag(SpriteFlag.Ghost, true)
        story.spriteSayText(mySprite2, "Hello")
        story.spriteSayText(mySprite2, "What brings you here?")
        story.showPlayerChoices("I'm bored", "I'm here for the Entrance Ceremony ")
        if (story.checkLastAnswer("I'm here for the Entrance Ceremony ")) {
            story.spriteSayText(mySprite2, "Alrighty")
            story.spriteSayText(mySprite2, "Just go straight down the road")
        }
        pause(1000)
        sprites.destroy(mySprite2)
        tiles.setCurrentTilemap(tilemap`level`)
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    story.cancelCurrentCutscene()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite2, location) {
    sprites.destroy(mySprite)
    scene.centerCameraAt(0, 0)
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`myImage0`)
    game.setDialogFrame(img`
        999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999
        999911119999119991111999111199999999119999999999
        999111111191111911111191111119911191111991111999
        999111111111111111111111111111111111111911111199
        999111111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999991111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111119999
        999111111111111111111111111111111111111111111999
        999911111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111119999
        999111111111111111111111111111111111111111111999
        99d1111111111111111111111111111111111dd111111199
        9ddd111111111111111111111111111111111dd111111199
        9ddd1111111111dd111111111111111111111dd1111dd199
        9d1d111111111ddddd11111111111ddddd111ddd111ddd99
        9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
        9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
        9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
        9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
        dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
        dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
        dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
        dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
        ddddddddddddddddddddddd1dddddddddddddddddddddddd
        ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
        .dddddddddddddddddddddddddddddddddddddddddddddd.
        ..dddddddddddddddddddddddddddddddddddddddddddd..
        `)
    game.showLongText("Oh… ", DialogLayout.Bottom)
    game.showLongText("You must be… uhh…", DialogLayout.Bottom)
    game.showLongText("Sean right?", DialogLayout.Bottom)
    game.showLongText("These new third years are becoming smaller jeez…", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level9`)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 8 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f a a a a f f f f . . 
        . f f a a b f 4 4 f b a a f f . 
        . f a a 4 1 f d d f 1 4 a a f . 
        . . f a a d d d d d d a a f . . 
        . . . f a a 4 4 4 4 a a f . . . 
        . . e 4 f c c c c c c f 4 e . . 
        . . 4 d f c c c c c c f d 4 . . 
        . . 4 4 f c c c c c c f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile112`, function (sprite, location) {
    sprites.destroy(mySprite)
    tiles.setCurrentTilemap(tilemap`level7`)
    scene.setBackgroundImage(assets.image`myImage3`)
    game.showLongText("I changed out of my clothes!", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage5`)
    game.showLongText("Oh Great", DialogLayout.Bottom)
    game.showLongText("Do you wanna defend?", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage3`)
    game.showLongText("What's that?", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage5`)
    game.showLongText("You basically just prevent the ball from", DialogLayout.Bottom)
    game.showLongText("Entering the goal", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage3`)
    game.showLongText("Alright!", DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`myImage1`)
    mySprite6 = sprites.create(assets.image`Aura`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite6,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . a a a . . . . . . . . . . . . 
        a a a a a . . . . . . . . . . . 
        a d d d a . . . . . . . . . . . 
        1 f d f 1 . . . . . . . . . . . 
        d d d d d . . . . . . . . . . . 
        . 2 2 2 . . . . . . . . . . . . 
        4 2 2 2 4 . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . f . f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . a a a . . . . . . . . . . . 
        . a a a a a . . . . . . . . . . 
        . a d d d a . . . . . . . . . . 
        . 1 f d f 1 . . . . . . . . . . 
        . d d d d d . . . . . . . . . . 
        . . 2 2 2 . . . . . . . . . . . 
        . 4 2 2 2 4 . . . . . . . . . . 
        . . f f f . . . . . . . . . . . 
        . . f . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . a a a . . . . . . . . . . 
        . . a a a a a . . . . . . . . . 
        . . a d d d a . . . . . . . . . 
        . . 1 f d f 1 . . . . . . . . . 
        . . d d d d d . . . . . . . . . 
        . . . 2 2 2 . . . . . . . . . . 
        . . 4 2 2 2 4 . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . f . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a . . . . . . . . . 
        . . . a a a a a . . . . . . . . 
        . . . a d d d a . . . . . . . . 
        . . . 1 f d f 1 . . . . . . . . 
        . . . d d d d d . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . 4 2 2 2 4 . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a . . . . . . . . 
        . . . . a a a a a . . . . . . . 
        . . . . a d d d a . . . . . . . 
        . . . . 1 f d f 1 . . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 4 2 2 2 4 . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . a d d d a . . . . . . 
        . . . . . 1 f d f 1 . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 4 2 2 2 4 . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . . . . . a d d d a . . . . . 
        . . . . . . 1 f d f 1 . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . 4 2 2 2 4 . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . a d d d a . . . . . . 
        . . . . . 1 f d f 1 . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 4 2 2 2 4 . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . a a a . . . . . . . . . . 
        . . a a a a a . . . . . . . . . 
        . . a d d d a . . . . . . . . . 
        . . 1 f d f 1 . . . . . . . . . 
        . . d d d d d . . . . . . . . . 
        . . . 2 2 2 . . . . . . . . . . 
        . . 4 2 2 2 4 . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . f . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a a a . . . . . 
        . . . . . . . a a a a a . . . . 
        . . . . . . . a d d d a . . . . 
        . . . . . . . 1 f d f 1 . . . . 
        . . . . . . . d d d d d . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . 4 2 2 2 4 . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . f . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a . . . . . . . . . 
        . . . a a a a a . . . . . . . . 
        . . . a d d d a . . . . . . . . 
        . . . 1 f d f 1 . . . . . . . . 
        . . . d d d d d . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . 4 2 2 2 4 . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a a a . . . . . 
        . . . . . . . a a a a a . . . . 
        . . . . . . . a d d d a . . . . 
        . . . . . . . 1 f d f 1 . . . . 
        . . . . . . . d d d d d . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . 4 2 2 2 4 . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . f . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a . . . . . . . . 
        . . . . a a a a a . . . . . . . 
        . . . . a d d d a . . . . . . . 
        . . . . 1 f d f 1 . . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 4 2 2 2 4 . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . . . . . a d d d a . . . . . 
        . . . . . . 1 f d f 1 . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . 4 2 2 2 4 . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . a a a . . . . . . . . . . . 
        . a a a a a . . . . . . . . . . 
        . a d d d a . . . . . . . . . . 
        . 1 f d f 1 . . . . . . . . . . 
        . d d d d d . . . . . . . . . . 
        . . 2 2 2 . . . . . . . . . . . 
        . 4 2 2 2 4 . . . . . . . . . . 
        . . f f f . . . . . . . . . . . 
        . . f . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . a a a . . . 
        . . . . . . . . . a a a a a . . 
        . . . . . . . . . a d d d a . . 
        . . . . . . . . . 1 f d f 1 . . 
        . . . . . . . . . d d d d d . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . 4 2 2 2 4 . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . a a a . . . . . . . . . . 
        . . a a a a a . . . . . . . . . 
        . . a d d d a . . . . . . . . . 
        . . 1 f d f 1 . . . . . . . . . 
        . . d d d d d . . . . . . . . . 
        . . . 2 2 2 . . . . . . . . . . 
        . . 4 2 2 2 4 . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . f . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite5, location4) {
    tiles.setCurrentTilemap(tilemap`level5`)
    story.startCutscene(function () {
        story.spriteSayText(sprite5, "What class do I have to go to…")
        sprites.destroy(mySprite)
        scene.centerCameraAt(0, 0)
        tiles.setCurrentTilemap(tilemap`level7`)
        scene.setBackgroundImage(assets.image`myImage`)
        game.setDialogFrame(img`
            999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999
            999911119999119991111999111199999999119999999999
            999111111191111911111191111119911191111991111999
            999111111111111111111111111111111111111911111199
            999111111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999991111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111119999
            999111111111111111111111111111111111111111111999
            999911111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111119999
            999111111111111111111111111111111111111111111999
            99d1111111111111111111111111111111111dd111111199
            9ddd111111111111111111111111111111111dd111111199
            9ddd1111111111dd111111111111111111111dd1111dd199
            9d1d111111111ddddd11111111111ddddd111ddd111ddd99
            9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
            9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
            9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
            9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
            dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
            dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
            dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
            dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
            ddddddddddddddddddddddd1dddddddddddddddddddddddd
            ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
            .dddddddddddddddddddddddddddddddddddddddddddddd.
            ..dddddddddddddddddddddddddddddddddddddddddddd..
            `)
        game.showLongText("Well… I", DialogLayout.Right)
        game.showLongText("think it", DialogLayout.Right)
        game.showLongText("Is 3-B…", DialogLayout.Right)
        tiles.setCurrentTilemap(tilemap`level5`)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 8 8 8 8 8 8 6 8 f . . 
            . . f 6 8 f f f f f f 8 6 f . . 
            . . f f f f a a a a f f f f . . 
            . f f a a b f 4 4 f b a a f f . 
            . f a a 4 1 f d d f 1 4 a a f . 
            . . f a a d d d d d d a a f . . 
            . . . f a a 4 4 4 4 a a f . . . 
            . . e 4 f c c c c c c f 4 e . . 
            . . 4 d f c c c c c c f d 4 . . 
            . . 4 4 f c c c c c c f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
        controller.moveSprite(mySprite)
        scene.cameraFollowSprite(mySprite)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite7, location6) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 14))
    tiles.setCurrentTilemap(tilemap`Fart`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile99`, function (sprite, location) {
    story.cancelCurrentCutscene()
    sprites.destroy(mySprite4)
    tiles.setCurrentTilemap(tilemap`level21`)
    mySprite5 = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f 4 f f 4 f f 4 f f f f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 5 5 5 5 b f 4 e 
        4 d f 5 5 5 5 5 5 f d 4 
        4 4 f 5 5 5 5 5 5 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.NPC)
    mySprite5.setPosition(60, 39)
    story.startCutscene(function () {
        story.spriteSayText(mySprite5, "Kid…")
        story.spriteSayText(mySprite5, "You Playin?")
        story.spriteSayText(mySprite, "Yeah!")
        story.spriteSayText(mySprite5, "Great…")
        story.spriteSayText(mySprite5, "Your locker is the broken one")
    })
    sprites.destroy(mySprite5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite6, location5) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 3))
    tiles.setCurrentTilemap(tilemap`level0`)
    mySprite2 = sprites.create(img`
        . . . f f f f f . . . . 
        . . f c c c c c f f . . 
        . f c c c c c c c f f . 
        f c c c c c c c f f f f 
        f c c 4 c c c f f f f f 
        f c c 4 4 c c c f f f f 
        f f c 4 4 4 4 4 f f f f 
        f f c 4 4 f f 4 c 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 9 9 9 e d d 4 . . 
        . . f 9 9 9 e d d e . . 
        . . f 8 8 8 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `, SpriteKind.NPC)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(12, 12))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite3, location2) {
    tiles.setCurrentTilemap(tilemap`level5`)
    story.startCutscene(function () {
        story.spriteSayText(sprite3, "What class do I have to go to…")
        sprites.destroy(mySprite)
        scene.centerCameraAt(0, 0)
        tiles.setCurrentTilemap(tilemap`level7`)
        scene.setBackgroundImage(assets.image`myImage`)
        game.setDialogFrame(img`
            999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999
            999911119999119991111999111199999999119999999999
            999111111191111911111191111119911191111991111999
            999111111111111111111111111111111111111911111199
            999111111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999991111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111119999
            999111111111111111111111111111111111111111111999
            999911111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111119999
            999111111111111111111111111111111111111111111999
            99d1111111111111111111111111111111111dd111111199
            9ddd111111111111111111111111111111111dd111111199
            9ddd1111111111dd111111111111111111111dd1111dd199
            9d1d111111111ddddd11111111111ddddd111ddd111ddd99
            9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
            9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
            9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
            9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
            dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
            dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
            dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
            dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
            ddddddddddddddddddddddd1dddddddddddddddddddddddd
            ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
            .dddddddddddddddddddddddddddddddddddddddddddddd.
            ..dddddddddddddddddddddddddddddddddddddddddddd..
            `)
        game.showLongText("Well… I", DialogLayout.Right)
        game.showLongText("think it", DialogLayout.Right)
        game.showLongText("Is 3-B…", DialogLayout.Right)
        tiles.setCurrentTilemap(tilemap`level5`)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 8 8 8 8 8 8 6 8 f . . 
            . . f 6 8 f f f f f f 8 6 f . . 
            . . f f f f a a a a f f f f . . 
            . f f a a b f 4 4 f b a a f f . 
            . f a a 4 1 f d d f 1 4 a a f . 
            . . f a a d d d d d d a a f . . 
            . . . f a a 4 4 4 4 a a f . . . 
            . . e 4 f c c c c c c f 4 e . . 
            . . 4 d f c c c c c c f d 4 . . 
            . . 4 4 f c c c c c c f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
        controller.moveSprite(mySprite)
        scene.cameraFollowSprite(mySprite)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile55`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level17`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile70`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level19`)
    mySprite.setPosition(63, 50)
    mySprite4 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f 5 5 5 5 5 5 f f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 e e e e 5 5 5 f . . 
        . f f 5 5 b f 4 4 f b 5 5 f f . 
        . f 5 5 4 1 f d d f 1 4 5 5 f . 
        . . f 5 5 d d d d d d 5 5 f . . 
        . . . f 5 5 4 4 4 4 5 5 f . . . 
        . . e 4 f a a a a a a f 4 e . . 
        . . 4 d f a a a a a a f d 4 . . 
        . . 4 4 f a a a a a a f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite4.setPosition(52, 50)
    story.startCutscene(function () {
        story.spriteSayText(mySprite4, "Go change dude")
        story.spriteSayText(mySprite4, "The rooms on the right")
    })
})
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite6: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`Fart`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 8 8 8 8 8 8 6 8 f . . 
    . . f 6 8 f f f f f f 8 6 f . . 
    . . f f f f a a a a f f f f . . 
    . f f a a b f 4 4 f b a a f f . 
    . f a a 4 1 f d d f 1 4 a a f . 
    . . f a a d d d d d d a a f . . 
    . . . f a a 4 4 4 4 a a f . . . 
    . . e 4 f c c c c c c f 4 e . . 
    . . 4 d f c c c c c c f d 4 . . 
    . . 4 4 f c c c c c c f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f a a a a f 8 f . . . 
            . . . f f a a a a f 8 8 8 f . . 
            . . . f a a a f f 6 6 6 6 f . . 
            . . . f f f f 6 6 8 8 8 8 6 f . 
            . . . f 6 8 8 8 f f f f 6 8 f . 
            . . f f f f f f f a a a f f f . 
            . . f f a 4 4 e b f 4 4 a a f . 
            . . f a a 4 d 4 1 f d d a f . . 
            . . . f a a a 4 d d d d f . . . 
            . . . . f f a a 4 4 4 a f . . . 
            . . . . . 4 d d e c c c f . . . 
            . . . . . e d d e c c c f . . . 
            . . . . . f e e f c c c f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f a a a a f 8 f . . . 
            . . . f f a a a a f 8 8 8 f . . 
            . . . f a a a f f 6 6 6 6 f . . 
            . . . f f f f 6 6 8 8 8 8 6 f . 
            . . . f 6 8 8 8 f f f f 6 8 f . 
            . . f f f f f f f a a a f f f . 
            . . f f a 4 4 e b f 4 4 a a f . 
            . . f a a 4 d 4 1 f d d a f . . 
            . . . f a a a a a d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e c c f . . . 
            . . . . f f f e e f c c f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f a a a a f 8 f . . . 
            . . . f f a a a a f 8 8 8 f . . 
            . . . f a a a f f 6 6 6 6 f . . 
            . . . f f f f 6 6 8 8 8 8 6 f . 
            . . . f 6 8 8 8 f f f f 6 8 f . 
            . . f f f f f f f a a a f f f . 
            . . f f a 4 4 e b f 4 4 a a f . 
            . . f a a 4 d 4 1 f d d a f . . 
            . . . f a a a 4 d d d d f . . . 
            . . . . f f a a 4 4 4 e f . . . 
            . . . . . 4 d d e c c c f . . . 
            . . . . . e d d e c c c f . . . 
            . . . . . f e e f c c c f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f a a a a f 8 f . . . 
            . . . f f a a a a f 8 8 8 f . . 
            . . . f a a a f f 6 6 6 6 f . . 
            . . . f f f f 6 6 8 8 8 8 6 f . 
            . . . f 6 8 8 8 f f f f 6 8 f . 
            . . f f f f f f f a a a f f f . 
            . . f f a 4 4 e b f 4 4 a a f . 
            . . f a a 4 d 4 1 f d d a f . . 
            . . . f a a a 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e c c c c f . . . 
            . . . . f e e f c c c c f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        500,
        false
        )
    }
})
game.onUpdate(function () {
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 8 8 8 8 8 8 6 6 f . . 
            . . f 6 8 f f f f f f 8 6 f . . 
            . . f f f f a a a a f f f f . . 
            . f f a f b f 4 4 f b f a f f . 
            . f a a 4 1 f d d f 1 4 a a f . 
            . . f a a d d d d d d a a f . . 
            . . . f a a 4 4 4 4 a a f . . . 
            . . e 4 f c c c c c c f 4 e . . 
            . . 4 d f c c c c c c f d 4 . . 
            . . 4 4 f c c c c c c f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 8 8 8 8 8 8 6 6 f . . 
            . f f 6 8 f f f f f f 8 6 f f . 
            . f f f f f a a a a f f f f f . 
            . . f a f b f 4 4 f b f a f . . 
            . . f a 4 1 f d d f 1 4 a f . . 
            . . . f a 4 d d d d 4 a f e . . 
            . . f e f c c c c e d d 4 e . . 
            . . e 4 f c c c c e d d e . . . 
            . . . . f c c c c f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 8 8 8 8 8 8 6 6 f . . 
            . . f 6 8 f f f f f f 8 6 f . . 
            . . f f f f a a a a f f f f . . 
            . f f a f b f 4 4 f b f a f f . 
            . f a a 4 1 f d d f 1 4 a a f . 
            . . f a a d d d d d d a a f . . 
            . . . f a a 4 4 4 4 a a f . . . 
            . . e 4 f c c c c c c f 4 e . . 
            . . 4 d f c c c c c c f d 4 . . 
            . . 4 4 f c c c c c c f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f 6 6 8 8 8 8 8 8 6 f f . . 
            . f f 6 8 f f f f f f 8 6 f f . 
            . f f f f f a a a a f f f f f . 
            . . f a f b f 4 4 f b f a f . . 
            . . f a 4 1 f d d f 1 4 a f . . 
            . . e f a 4 d d d d 4 a f . . . 
            . . e 4 d d e c c c c f e f . . 
            . . . e d d e c c c c f 4 e . . 
            . . . . e e f c c c c f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        false
        )
    }
})
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f a a a a f f . . . . 
            . . . f a a a f f a a a f . . . 
            . . f f f f f 8 8 f f f f f . . 
            . . f f 6 8 6 8 8 6 8 6 f f . . 
            . . f 6 8 f 8 f f 8 f 8 6 f . . 
            . . f f f 8 8 a a 8 8 f f f . . 
            . f f a f 8 f a a f 8 f a f f . 
            . f a a f f a a a a f a a a f . 
            . . f a a a a a a a a a a f . . 
            . . . f a a a a a a a a f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f c c c c c c f d 4 . . 
            . . 4 4 f c c c c c c f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f a a a a f f . . . . 
            . . . f a a a f f a a a f . . . 
            . . . f f f f 8 8 f f f f . . . 
            . . f f 6 8 6 8 8 6 8 6 f f . . 
            . . f 6 8 f 8 f f f 8 f 6 f . . 
            . . f f f 8 f a a 8 8 f f f . . 
            . . f a 8 f f a a 8 f a a f . . 
            . f f a f f a a a f a a a f f . 
            . f f a a a a a a a a a a f f . 
            . . . f a a a a a a a a f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f c c c c c e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f a a a a f f . . . . 
            . . . f a a a f f a a a f . . . 
            . . f f f f f 8 8 f f f f f . . 
            . . f f 6 8 6 8 8 6 8 6 f f . . 
            . . f 6 8 f 8 f f 8 f 8 6 f . . 
            . . f f f 8 8 a a 8 8 f f f . . 
            . f f a f 8 f a a f 8 f a f f . 
            . f a a f f a a a a f a a a f . 
            . . f a a a a a a a a a a f . . 
            . . . f a a a a a a a a f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f c c c c c c f d 4 . . 
            . . 4 4 f c c c c c c f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f a a a a f f . . . . 
            . . . f a a a f f a a a f . . . 
            . . . f f f f 8 8 f f f f . . . 
            . . f f 6 8 6 8 8 6 8 6 f f . . 
            . . f 6 f 8 f f f 8 f 8 6 f . . 
            . . f f f 8 8 a a f 8 f f f . . 
            . . f a a f 8 a a f f 8 a f . . 
            . f f a a a f a a a f f a f f . 
            . f f a a a a a a a a a a f f . 
            . . . f a a a a a a a a f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e c c c c c f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        false
        )
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 8 f a a a a f f . . . . 
            . . f 8 8 8 f a a a a f f . . . 
            . . f 6 6 6 6 f f a a a f . . . 
            . f 6 8 8 8 8 6 6 f f f f . . . 
            . f 8 6 f f f f 8 8 8 6 f . . . 
            . f f f a a a f f f f f f f . . 
            . f a a 4 4 f b e 4 4 a f f . . 
            . . f a d d f 1 4 d 4 a a f . . 
            . . . f d d d d 4 a a a f . . . 
            . . . f e 4 4 4 a a f f . . . . 
            . . . f c c c e d d 4 . . . . . 
            . . . f c c c e d d e . . . . . 
            . . . f c c c f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 f a a a a f f . . . . 
            . . f 6 6 6 f a a a a f f . . . 
            . . f 8 8 8 8 f f a a a f . . . 
            . f 8 6 6 6 6 8 8 f f f f . . . 
            . f 6 8 f f a f 6 6 6 8 f . . . 
            . f f f a a a f f f f f f f . . 
            . f a a 4 4 f b e 4 4 a f f . . 
            . . f a d d f 1 4 d 4 a a f . . 
            . . . f d d d a a a a a f . . . 
            . . . f c c e d d 4 f . . . . . 
            . . . f c c e d d e f . . . . . 
            . . f f c c f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 8 f a a a a f f . . . . 
            . . f 8 8 8 f a a a a f f . . . 
            . . f 6 6 6 6 f f a a a f . . . 
            . f 6 8 8 8 8 6 6 f f f f . . . 
            . f 8 6 f f f f 8 8 8 6 f . . . 
            . f f f a a a f f f f f f f . . 
            . f a a 4 4 f b e 4 4 a f f . . 
            . . f a d d f 1 4 d 4 a a f . . 
            . . . f d d d d 4 a a a f . . . 
            . . . f e 4 4 4 a a f f . . . . 
            . . . f c c c e d d 4 . . . . . 
            . . . f c c c e d d e . . . . . 
            . . . f c c c f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 f a a a a f f . . . . 
            . . f 8 8 8 f a a a a f f . . . 
            . . f 6 6 6 6 f f a a a f . . . 
            . f 6 8 8 8 8 6 6 f f f f . . . 
            . f 8 6 f f f f 8 8 8 6 f . . . 
            . f f f a a a f f f f f f f . . 
            . f a a 4 4 f b e 4 4 a f f . . 
            . . f a d d f 1 4 d 4 a a f . . 
            . . . f d d d d 4 a a a f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f c c c c e d d e . . . . 
            . . f f c c c c f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        500,
        false
        )
    }
})
