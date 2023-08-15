input.onButtonPressed(Button.A, function () {
    ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    Laser = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        Laser.change(LedSpriteProperty.Y, -1)
    }
    Laser.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.change(LedSpriteProperty.X, 1)
})
let Laser: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
