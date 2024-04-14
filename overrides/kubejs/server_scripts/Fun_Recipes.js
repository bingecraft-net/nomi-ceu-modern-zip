ServerEvents.recipes(event => {

    event.remove({ output: 'expatternprovider:fishbig' })

    event.recipes.gtceu.bender('fishbig_lmao')
        .itemInputs('64x avaritia:infinity_block')
        .circuit(6)
        .itemOutputs('expatternprovider:fishbig')
        .duration(1728000)
        .EUt(2147483647)

    event.recipes.gtceu.bender('not_a_noob_anymore')
        .itemInputs('expatternprovider:fishbig')
        .circuit(9)
        .itemOutputs('gtceu:nan_certificate')
        .duration(1728000)
        .EUt(2147483647)

})