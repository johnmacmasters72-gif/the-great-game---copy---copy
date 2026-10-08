@namespace
class SpriteKind:
    NPC = SpriteKind.create()

def on_overlap_tile(sprite4, location3):
    sprites.destroy(mySprite)
    scene.center_camera_at(0, 0)
    tiles.set_current_tilemap(tilemap("""
        level6
        """))
    scene.set_background_image(assets.image("""
        myImage
        """))
    game.set_dialog_frame(img("""
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
        """))
    game.show_long_text("Hello", DialogLayout.BOTTOM)
    game.show_long_text("What’s your name", DialogLayout.BOTTOM)
    scene.set_background_image(assets.image("""
        myImage1
        """))
    game.show_long_text("Motoroil Ketchup", DialogLayout.BOTTOM)
    scene.set_background_image(assets.image("""
        myImage2
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile25
        """),
    on_overlap_tile)

def on_on_overlap(sprite, otherSprite):
    
    def on_start_cutscene():
        mySprite2.set_flag(SpriteFlag.GHOST, True)
        story.sprite_say_text(mySprite2, "Hello")
        story.sprite_say_text(mySprite2, "What brings you here?")
        story.show_player_choices("I'm bored", "I'm here for the Entrance Ceremony ")
        if story.check_last_answer("I'm here for the Entrance Ceremony "):
            story.sprite_say_text(mySprite2, "Alrighty")
            story.sprite_say_text(mySprite2, "Just go straight down the road")
        pause(1000)
        sprites.destroy(mySprite2)
        tiles.set_current_tilemap(tilemap("""
            level
            """))
    story.start_cutscene(on_start_cutscene)
    
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap)

def on_overlap_tile2(sprite2, location):
    global mySprite
    sprites.destroy(mySprite)
    scene.center_camera_at(0, 0)
    tiles.set_current_tilemap(tilemap("""
        level6
        """))
    scene.set_background_image(assets.image("""
        myImage0
        """))
    game.set_dialog_frame(img("""
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
        """))
    game.show_long_text("Oh… ", DialogLayout.BOTTOM)
    game.show_long_text("You must be… uhh…", DialogLayout.BOTTOM)
    game.show_long_text("Sean right?", DialogLayout.BOTTOM)
    game.show_long_text("These new third years are becoming smaller jeez…",
        DialogLayout.BOTTOM)
    tiles.set_current_tilemap(tilemap("""
        level9
        """))
    mySprite = sprites.create(img("""
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
            """),
        SpriteKind.player)
    controller.move_sprite(mySprite)
    scene.camera_follow_sprite(mySprite)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile22
        """),
    on_overlap_tile2)

def on_overlap_tile3(sprite5, location4):
    tiles.set_current_tilemap(tilemap("""
        level5
        """))
    
    def on_start_cutscene2():
        global mySprite
        story.sprite_say_text(sprite5, "What class do I have to go to…")
        sprites.destroy(mySprite)
        scene.center_camera_at(0, 0)
        tiles.set_current_tilemap(tilemap("""
            level7
            """))
        scene.set_background_image(assets.image("""
            myImage
            """))
        game.set_dialog_frame(img("""
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
            """))
        game.show_long_text("Well… I", DialogLayout.RIGHT)
        game.show_long_text("think it", DialogLayout.RIGHT)
        game.show_long_text("Is 3-B…", DialogLayout.RIGHT)
        tiles.set_current_tilemap(tilemap("""
            level5
            """))
        mySprite = sprites.create(img("""
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
                """),
            SpriteKind.player)
        tiles.place_on_tile(mySprite, tiles.get_tile_location(2, 2))
        controller.move_sprite(mySprite)
        scene.camera_follow_sprite(mySprite)
    story.start_cutscene(on_start_cutscene2)
    
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile12
        """),
    on_overlap_tile3)

def on_overlap_tile4(sprite7, location6):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(3, 14))
    tiles.set_current_tilemap(tilemap("""
        Fart
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile11
        """),
    on_overlap_tile4)

def on_overlap_tile5(sprite6, location5):
    global mySprite2
    tiles.place_on_tile(mySprite, tiles.get_tile_location(3, 3))
    tiles.set_current_tilemap(tilemap("""
        level0
        """))
    mySprite2 = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(12, 12))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile10
        """),
    on_overlap_tile5)

def on_overlap_tile6(sprite3, location2):
    tiles.set_current_tilemap(tilemap("""
        level5
        """))
    
    def on_start_cutscene3():
        global mySprite
        story.sprite_say_text(sprite3, "What class do I have to go to…")
        sprites.destroy(mySprite)
        scene.center_camera_at(0, 0)
        tiles.set_current_tilemap(tilemap("""
            level7
            """))
        scene.set_background_image(assets.image("""
            myImage
            """))
        game.set_dialog_frame(img("""
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
            """))
        game.show_long_text("Well… I", DialogLayout.RIGHT)
        game.show_long_text("think it", DialogLayout.RIGHT)
        game.show_long_text("Is 3-B…", DialogLayout.RIGHT)
        tiles.set_current_tilemap(tilemap("""
            level5
            """))
        mySprite = sprites.create(img("""
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
                """),
            SpriteKind.player)
        tiles.place_on_tile(mySprite, tiles.get_tile_location(2, 2))
        controller.move_sprite(mySprite)
        scene.camera_follow_sprite(mySprite)
    story.start_cutscene(on_start_cutscene3)
    
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
        """),
    on_overlap_tile6)

mySprite2: Sprite = None
mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    Fart
    """))
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)

def on_on_update():
    if controller.left.is_pressed():
        animation.run_image_animation(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            500,
            False)
game.on_update(on_on_update)

def on_on_update2():
    if controller.right.is_pressed():
        animation.run_image_animation(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            500,
            False)
game.on_update(on_on_update2)

def on_on_update3():
    if controller.down.is_pressed():
        animation.run_image_animation(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            500,
            False)
game.on_update(on_on_update3)

def on_on_update4():
    if controller.up.is_pressed():
        animation.run_image_animation(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            500,
            False)
game.on_update(on_on_update4)
