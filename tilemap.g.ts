// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級":
            case "層級2":return tiles.createTilemap(hex`100010000c0c0a0a0a0c0c0a0a0a0a0c0a0a0a0c02000000000c0000000000000000090c0c0a0a0a000c000c0a0a0a0a0c000c0a0c0300000000000a000000000c000c0a0a0c0a0c0a0a0a0c00010a000a000c0a0a00000000000000000a0a0000000a0c0c00010a0a0a010a010a01010a000c0a0c0000000000000000050c0900000c0a0c000c0a00010a0c0a0c0a0a0c000a0c0a00000a000a0000000000000c040a0c0a0c000a090c000a090a090c0a0c0a0c0c0a000c0a0a00000c000a000000090a0a0a06000000000000000000000a0c0a0a00000c0a0c000c0c0a0a0c0000000c0c0000090a0a00000000090a070a00000c0a0a0a0c0a0c0c0a0a0a0c0a0c0a08`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 . . . . . . . . . 2 
2 2 2 2 . 2 . 2 2 2 2 2 2 . 2 2 
2 . . . . . . 2 . . . . 2 . 2 2 
2 2 2 2 2 2 2 2 . 2 2 . 2 . 2 2 
2 . . . . . . . . 2 2 . . . 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 . . . . . . . . . 2 . . . 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 . 2 2 
2 . . 2 . 2 . . . . . . 2 . 2 2 
2 2 . 2 . 2 . 2 . 2 . 2 2 2 2 2 
2 2 . 2 2 2 . . 2 . 2 . . . . 2 
2 2 . . . . . . . . . . . 2 2 2 
2 . . 2 2 2 . 2 2 2 2 2 . . . 2 
2 . . . 2 2 . . . . . 2 . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.castle.rock0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,sprites.dungeon.floorDark1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "我的貼圖5":
            case "tile7":return tile7;
            case "我的貼圖6":
            case "tile8":return tile8;
            case "我的貼圖":
            case "tile1":return tile1;
            case "我的貼圖7":
            case "tile9":return tile9;
            case "我的貼圖9":
            case "tile11":return tile11;
            case "我的貼圖8":
            case "tile10":return tile10;
            case "我的貼圖0":
            case "tile2":return tile2;
            case "我的貼圖1":
            case "tile3":return tile3;
            case "我的貼圖2":
            case "tile4":return tile4;
            case "我的貼圖3":
            case "tile5":return tile5;
            case "我的貼圖4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
