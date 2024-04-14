ServerEvents.recipes(event => {
	const reconstructedItems = [
		['minecraft:redstone', 'gtceu:restonia_gem', 'restonia'],
		['minecraft:iron_ingot', 'gtceu:enori_gem', 'enori'],
		['minecraft:coal', 'gtceu:void_gem', 'void'],
		['minecraft:lapis_lazuli', 'gtceu:palis_gem', 'palis'],
		['minecraft:diamond', 'gtceu:diamatine_gem', 'diamatine'],
		['minecraft:emerald', 'gtceu:emeradic_gem', 'emeradic'],
		['minecraft:coal_block', 'gtceu:void_block', 'void_block'],
		['#forge:storage_blocks/redstone', 'gtceu:restonia_block', 'restonia_block'],
		['#forge:storage_blocks/lapis', 'gtceu:palis_block', 'palis_block'],
		['#forge:storage_blocks/diamond', 'gtceu:diamatine_block', 'diamatine_block'],
		['#forge:storage_blocks/emerald', 'gtceu:emeradic_block', 'emeradic_block'],
		['#forge:storage_blocks/iron', 'gtceu:enori_block', 'enori_block'],
		['minecraft:sand', 'minecraft:soul_sand', 'soul_sand'],
		['minecraft:red_mushroom', 'minecraft:nether_wart', 'nether_wart'],
		['minecraft:quartz', 'minecraft:prismarine_shard', 'prismarine_shard'],
		['minecraft:rotten_flesh', 'minecraft:leather', 'leather'],
		['gtceu:topaz_gem', 'minecraft:prismarine_crystals', 'prismarine_crystals']
	]

    event.remove({ id: /^gtceu:shaped\/gear_\w+_empowered/g })
    event.remove({ output: ['gtceu:enori_gear', 'gtceu:void_gear', 'gtceu:palis_gear', 'gtceu:diamatine_gear', 'gtceu:restonia_gear', 'gtceu:emeradic_gear'] })
		// Black Quartz
	event.recipes.gtceu.electrolyzer("kubejs:black_quartz_dust")
		.itemInputs("4x gtceu:quartzite_dust")
		.itemOutputs("gtceu:black_quartz_dust")
		.duration(400)
		.EUt(90)
	event.recipes.gtceu.autoclave('kubejs:black_quartz_gem__water')
		.itemInputs('gtceu:black_quartz_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('gtceu:black_quartz_gem')
		.duration(1200)
		.EUt(24)
	event.recipes.gtceu.autoclave('kubejs:black_quartz_gem__distilled')
		.itemInputs('gtceu:black_quartz_dust')
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('gtceu:black_quartz_gem')
		.duration(600)
		.EUt(24)

    // Reconstruction
    reconstructedItems.forEach(([input, output, id]) => {
        event.recipes.gtceu.atomic_reconstruction(id)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(20)
            .EUt(128)
    })

    event.shaped(
        'gtceu:mv_atomic_reconstructor', [
            'PPP',
            'EHE',
            'PPP'
        ], {
            P: 'gtceu:lead_plate',
            E: 'gtceu:mv_emitter',
            H: 'gtceu:mv_machine_hull'
        })

    // Empowerment
    // event.recipes.gtceu.empowerment("restonia")
    //     .itemInputs("gtceu:restonia_block", "gtceu:red_alloy_ingot", "gtceu:almandine_gem", Item.of('gtceu:glass_vial', '{Fluid:{Amount:1000,FluidName:"gtceu:sulfuric_acid"}}').strongNBT(), "extendedcrafting:the_ultimate_component")
    //     .itemOutputs("gtceu:restonia_empowered_block")
    //     .duration(200)
    //     .EUt(128)

    // event.recipes.gtceu.empowerment("diamatine")
    //     .itemInputs("gtceu:diamatine_block", "extendedcrafting:ender_star", "extendedcrafting:crystaltine_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:nitrogen_dioxide"}}').strongNBT(), "extendedcrafting:crystaltine_component")
    //     .itemOutputs("gtceu:diamatine_empowered_block")
    //     .duration(200)
    //     .EUt(128)

    // event.recipes.gtceu.empowerment("emeradic")
    //     .itemInputs("gtceu:emeradic_block", "kubejs:stabilized_uranium", "gtceu:vibrant_alloy_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:argon"}}').strongNBT(), "extendedcrafting:ultimate_component")
    //     .itemOutputs("gtceu:emeradic_empowered_block")
    //     .duration(200)
    //     .EUt(128)

    // event.recipes.gtceu.empowerment("enori")
    //     .itemInputs("gtceu:enori_block", "gtceu:apatite_gem", "gtceu:end_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:helium"}}').strongNBT(), "extendedcrafting:basic_component")
    //     .itemOutputs("gtceu:enori_empowered_block")
    //     .duration(200)
    //     .EUt(128)

    // event.recipes.gtceu.empowerment("palis")
    //     .itemInputs("gtceu:palis_block", "gtceu:sapphire_gem", "minecraft:bedrock", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(), "extendedcrafting:elite_component")
    //     .itemOutputs("gtceu:palis_empowered_block")
    //     .duration(200)
    //     .EUt(128)

    // event.recipes.gtceu.empowerment("void")
    //     .itemInputs("gtceu:void_block", "gtceu:black_quartz_gem", "gtceu:dark_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:oil"}}').strongNBT(), "extendedcrafting:advanced_component")
    //     .itemOutputs("gtceu:void_empowered_block")
    //     .duration(200)
    //     .EUt(128)

    // event.shaped(
    //     'kubejs:empowerer_casing', [
    //         'AHA',
    //         'AEA',
    //         'AWA'
    //     ], {
    //         A: 'gtceu:aluminium_plate',
    //         E: 'gtceu:enori_block',
    //         H: '#forge:tools/hammers',
    //         W: '#forge:tools/wrenches',
    //     })

    // event.shaped(
    //     'gtceu:empowerment', [
    //         'TVT',
    //         'VEV',
    //         'TVT'
    //     ], {
    //         T: 'gtceu:tungsten_carbide_plate',
    //         V: 'gtceu:vibrant_alloy_plate',
    //         E: 'kubejs:empowerer_casing'
    //     })

    // Resonator
    event.shaped(
        'gtceu:mv_resonator', [
            'PVP',
            'VHV',
            'PVP'
        ], {
            P: 'gtceu:red_alloy_plate',
            H: 'gtceu:mv_machine_hull',
            V: 'gtceu:void_gem'
        })

    event.recipes.gtceu.resonator('red_coal')
        .itemInputs('#minecraft:coals')
        .itemOutputs('gtceu:coal_perfect')
        .duration(80)
        .EUt(128)


    //Crystal Gears
    event.recipes.gtceu.extruder("restonia_gear")
        .itemInputs('4x gtceu:restonia_gem')
        .itemOutputs('gtceu:restonia_gear')
        .notConsumable('gtceu:gear_extruder_mold')
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extruder("enori_gear")
        .itemInputs('4x gtceu:enori_gem')
        .itemOutputs('gtceu:enori_gear')
        .notConsumable('gtceu:gear_extruder_mold')
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extruder("emeradic_gear")
        .itemInputs('4x gtceu:emeradic_gem')
        .itemOutputs('gtceu:emeradic_gear')
        .notConsumable('gtceu:gear_extruder_mold')
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extruder("void_gear")
        .itemInputs('4x gtceu:void_gem')
        .itemOutputs('gtceu:void_gear')
        .notConsumable('gtceu:gear_extruder_mold')
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extruder("palis_gear")
        .itemInputs('4x gtceu:palis_gem')
        .itemOutputs('gtceu:palis_gear')
        .notConsumable('gtceu:gear_extruder_mold')
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extruder("diamatine_gear")
        .itemInputs('4x gtceu:diamatine_gem')
        .itemOutputs('gtceu:diamatine_gear')
        .notConsumable('gtceu:gear_extruder_mold')
        .duration(80)
        .EUt(32)
})