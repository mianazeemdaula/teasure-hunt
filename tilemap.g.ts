// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010303030303030303030303030303040c0909090d09090909090909090d09050209090e0e0e0e0e0e0e0e0e0e0e09050209090e09090909090909090b0e09050209090e0909090b0e090910100e09050209090e0909090e0e0e0e0e0e0e09050209090e0b09090e09090909090909050209090e0e0e090e090e0e0e0909090502090c09090e090e0b0e0b0e0b0e090502090e0e0a0e090e0e0e090e0e0e090502090e0c0909090909090909090e090502090e0909090909090909090b0e090502090e090909090909090c09090e090502090e0b0909090909090909090e090502090e0e0e0e0909090b09090909090507080808080e080b0f0f0f0808080806`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . . 2 . . . . 2 . . 
. . . 2 . . . 2 2 2 2 2 2 2 . . 
. . . 2 . . . 2 . . . . . . . . 
. . . 2 2 2 . 2 . 2 2 2 . . . . 
. . . . . 2 . 2 . 2 . 2 . 2 . . 
. . 2 2 2 2 . 2 2 2 . 2 2 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 2 2 2 . . . . . . . . . . 
. . . . . 2 . . 2 2 2 . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.builtin.brick,myTiles.tile2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
