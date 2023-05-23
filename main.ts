input.onButtonPressed(Button.A, function () {
    判断点数 += -1
    basic.showNumber(判断点数)
})
input.onGesture(Gesture.Shake, function () {
    骰子点数 = randint(1, 6)
    basic.showNumber(骰子点数)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (4 <= 判断点数) {
        是否再来一次 = randint(0, 7)
    }
    if (4 > 判断点数) {
        是否再来一次 = randint(0, 4)
    }
    if (2 < 是否再来一次) {
        basic.showString("YES")
        basic.clearScreen()
    } else {
        basic.showString("NO")
        basic.clearScreen()
    }
    判断点数 = 0
})
input.onButtonPressed(Button.B, function () {
    判断点数 += 1
    basic.showNumber(判断点数)
})
let 是否再来一次 = 0
let 骰子点数 = 0
let 判断点数 = 0
basic.showString("SPACE")
判断点数 = 0
