def on_overlap_tile(sprite, location):
    tiles.set_tile_at(location, sprites.castle.tile_path5)
    info.change_score_by(1)
    effects.confetti.start_screen_effect(1000)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    game.over(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    sprites.castle.tile_grass1,
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    game.over(False, effects.bubbles)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile3)

tiles.set_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
        . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d 4 e f e 
            f f f e 4 4 4 4 d d 4 e 
            e 4 f b 1 1 1 e d d e . 
            . . f 6 6 6 6 f e e . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . .
    """),
    SpriteKind.player)
mySprite.set_stay_in_screen(True)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)
mySprite.set_velocity(50, 50)
mySprite.set_position(0, 120)
info.set_life(1)

def on_update_interval():
    pass
game.on_update_interval(500, on_update_interval)
