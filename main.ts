namespace SpriteKind {
    export const dog = SpriteKind.create()
}
function 小精靈 (num: number) {
    for (let index = 0; index < num; index++) {
        mySprite2 = sprites.create(assets.image`我的影像0`, SpriteKind.Food)
        tiles.placeOnRandomTile(mySprite2, assets.tile`我的貼圖7`)
    }
}
function 黃 () {
    _1 = sprites.create(assets.image`1`, SpriteKind.Enemy)
    animation.runImageAnimation(
    _1,
    assets.animation`0`,
    1750,
    true
    )
    tiles.placeOnRandomTile(_1, assets.tile`我的貼圖0`)
    _1.setVelocity(50, 0)
    _1.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
function 綠 () {
    _3 = sprites.create(assets.image`我的影像5`, SpriteKind.Enemy)
    animation.runImageAnimation(
    _3,
    assets.animation`我的動畫3`,
    2725,
    true
    )
    tiles.placeOnRandomTile(_3, assets.tile`我的貼圖1`)
    _3.setVelocity(0, 50)
    _3.setFlag(SpriteFlag.BounceOnWall, true)
}
function 紅 () {
    _2 = sprites.create(assets.image`我的影像2`, SpriteKind.Enemy)
    animation.runImageAnimation(
    _2,
    assets.animation`我的動畫2`,
    2750,
    true
    )
    tiles.placeOnRandomTile(_2, assets.tile`我的貼圖2`)
    _2.setVelocity(-50, 0)
    _2.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.dog, function (sprite, otherSprite) {
    if (info.score() >= 6) {
        game.showLongText("復興高中70周年快樂", DialogLayout.Bottom)
        game.over(true, effects.confetti)
        music.baDing.play()
    }
})
function 藍 () {
    _4 = sprites.create(assets.image`我的影像4`, SpriteKind.Enemy)
    animation.runImageAnimation(
    _4,
    assets.animation`我的動畫1`,
    200,
    true
    )
    tiles.placeOnRandomTile(_4, assets.tile`我的貼圖4`)
    _4.setVelocity(0, -50)
    _4.setFlag(SpriteFlag.BounceOnWall, true)
}
function 笨狗 () {
    黑狗 = sprites.create(assets.image`我的影像6`, SpriteKind.dog)
    tiles.placeOnRandomTile(黑狗, assets.tile`我的貼圖6`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    pause(2000)
    info.changeScoreBy(1)
})
function 粉 () {
    _5 = sprites.create(assets.image`我的影像3`, SpriteKind.Enemy)
    animation.runImageAnimation(
    _5,
    assets.animation`我的動畫0`,
    3450,
    true
    )
    tiles.placeOnRandomTile(_5, assets.tile`我的貼圖3`)
    _5.setVelocity(50, 0)
    _5.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.zapped.play()
    pause(500)
})
let 黑狗: Sprite = null
let mySprite2: Sprite = null
let _5: Sprite = null
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let _1: Sprite = null
scene.setBackgroundColor(11)
tiles.setCurrentTilemap(tilemap`層級`)
let mySprite = sprites.create(assets.image`我的影像`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
info.setScore(0)
黃()
紅()
粉()
藍()
綠()
笨狗()
小精靈(24)
game.splash("WASD控制左右")
game.splash("男孩吃了六個爆米花才飽")
game.splash("飽了踏到終點才會結束")
game.splash("沿路請吃完爆米花")
game.splash("避開精靈")
