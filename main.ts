scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile0
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    tiles.setTileAt(location, sprites.castle.tilePath5)
    info.changeScoreBy(1)
    effects.confetti.startScreenEffect(1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass3, function on_overlap_tile2(sprite: Sprite, location: tiles.Location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function on_overlap_tile3(sprite: Sprite, location: tiles.Location) {
    game.over(false, effects.bubbles)
})
tiles.setTilemap(tilemap`
    level1
`)
let mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite.setVelocity(50, 50)
mySprite.setPosition(0, 120)
info.setLife(1)
game.onUpdateInterval(500, function on_update_interval() {
    
})
