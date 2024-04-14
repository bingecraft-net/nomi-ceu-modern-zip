ServerEvents.recipes(event => {
    event.shapeless('5x kubejs:nomi_penny', 'kubejs:nomi_nickel')

    event.shaped('kubejs:nomi_nickel', [
            ' A ',
            'AAA',
            ' A '
        ], {
            A: 'kubejs:nomi_penny'
        }
    )

    event.shapeless('5x kubejs:nomi_nickel', 'kubejs:nomi_quarter')
    event.shaped('kubejs:nomi_quarter', [
            ' A ',
            'AAA',
            ' A '
        ], {
            A: 'kubejs:nomi_nickel'
        }
    )

    event.shapeless('4x kubejs:nomi_quarter', 'kubejs:nomi_dollar')
    event.shaped('kubejs:nomi_dollar', [
            'A A',
            '   ',
            'A A'
        ], {
            A: 'kubejs:nomi_quarter'
        }
    )
})
