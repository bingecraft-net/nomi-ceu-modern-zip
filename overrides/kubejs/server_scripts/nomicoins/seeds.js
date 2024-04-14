ServerEvents.recipes(event => {
    //-- "Seeds"
    event.shaped(
        Item.of('minecraft:cocoa_beans', 32), [
        'AA ',
        ' A ',
        '   '
    ], {
        A: 'kubejs:nomi_penny'
    }).noMirror().noShrink()

    event.shaped(
        Item.of('minecraft:sugar_cane', 32), [
        'A A',
        '   ',
        '   '
    ], {
        A: 'kubejs:nomi_penny'
    }).noMirror().noShrink()

    event.shaped(
        Item.of('minecraft:cactus', 32), [
        'A  ',
        'A  ',
        '   '
    ], {
        A: 'kubejs:nomi_penny'
    }).noMirror().noShrink()

    event.shaped(
        Item.of('minecraft:potato', 32), [
        'AA ',
        '   ',
        '   '
    ], {
        A: 'kubejs:nomi_penny'
    }).noMirror().noShrink()
})
