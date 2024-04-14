//alloys go brrr - ima go insane :)

ServerEvents.recipes(event => {
	alloySmelter(event, '#forge:ingots/steel', '#forge:obsidian', 'gtceu:dark_steel_ingot', 12, 16);
	alloySmelter(event, '#forge:ingots/steel', '#forge:dusts/obsidian', 'gtceu:dark_steel_ingot', 12, 16);

	alloySmelter(event, '#forge:ingots/iron', '#forge:dusts/redstone', 'gtceu:conductive_alloy_ingot', 7.5, 16);
	alloySmelter(event, '#forge:dusts/iron', '#forge:dusts/redstone', 'gtceu:conductive_alloy_ingot', 7.5, 16);

	alloySmelter(event, '#forge:ingots/iron', 'kubejs:pulsating_dust', 'gtceu:pulsating_alloy_ingot', 7.5, 16);
	alloySmelter(event, '#forge:dusts/iron', 'kubejs:pulsating_dust', 'gtceu:pulsating_alloy_ingot', 7.5, 16);

	alloySmelter(event, '#forge:ingots/steel', '#forge:dusts/silicon', 'gtceu:electrical_steel_ingot', 6, 16);

	alloySmelter(event, '#forge:ingots/dark_steel', 'minecraft:end_stone', 'gtceu:end_steel_ingot', 15, 120);
	alloySmelter(event, '#forge:ingots/dark_steel', '#forge:dusts/endstone', 'gtceu:end_steel_ingot', 15, 120);

	// alloySmelter('#forge:ingots/end_steel', '8x enderio:infinity_dust', 'enderio:stellar_alloy_ingot', 10, 2000);

	alloySmelter(event, '#forge:ingots/steel', '#forge:dusts/boron', '2x nuclearcraft:ferroboron_ingot', 15, 16);
	alloySmelter(event, 'nuclearcraft:ferroboron_ingot', '#forge:dusts/lithium', '2x nuclearcraft:tough_alloy_ingot', 15, 16);
	alloySmelter(event, '2x #forge:ingots/steel', '#forge:gems/diamond', '2x nuclearcraft:hard_carbon_ingot', 15, 16);
	alloySmelter(event, 'kubejs:stabilized_plutonium', 'kubejs:stabilized_curium', 'gtceu:sunnarium_dust', 100, 400);
	alloySmelter(event, 'nuclearcraft:fission_reactor_casing', '#forge:glass/colorless', 'nuclearcraft:fission_reactor_glass', 2.5, 16);

    event.remove({ id: "minecraft:nuclearcraft_ferroboron_plate" }) // minecraft??
    event.remove({ id: "minecraft:nuclearcraft_ferroboron_dust" })
    event.remove([{ id: "nuclearcraft:blast_ferroboron_dust" }, { id: "nuclearcraft:fission_reactor_glass" }])
})


ServerEvents.recipes(event => {
    //Different Steel Recipe
    event.remove({ id: "gtceu:centrifuge/decomposition_centrifuging__black_steel" })
    event.remove({ id: "gtceu:mixer/black_steel" })
	event.recipes.gtceu.mixer("mixer_conductive_iron") // on gtceu normal, this can be handcrafted
        .itemInputs('#forge:dusts/iron', '#forge:dusts/redstone')
        .itemOutputs('gtceu:conductive_alloy_dust')
        .duration(300)
        .EUt(7)
    event.recipes.gtceu.mixer("mixer_black_steel")
        .itemInputs('3x gtceu:steel_dust', '2x gtceu:black_bronze_dust', '2x gtceu:void_gem', '2x gtceu:coal_perfect')
        .itemOutputs('9x gtceu:black_steel_dust')
        .duration(200)
        .EUt(15)

    event.recipes.gtceu.mixer("vibrant_alloy_dust")
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .itemOutputs('gtceu:vibrant_alloy_dust')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("energetic_alloy_dust")
        .itemInputs('2x gtceu:gold_dust', '#forge:dusts/redstone', 'minecraft:glowstone_dust')
        .itemOutputs('2x gtceu:energetic_alloy_dust')
        .duration(200)
        .EUt(30)

        event.recipes.gtceu.mixer("glowstone_dust")
        .itemInputs('gtceu:tricalcium_phosphate_dust', 'gtceu:gold_dust')
        .itemOutputs('2x minecraft:glowstone_dust')
        .duration(80)
        .EUt(15)

    event.recipes.gtceu.mixer("mana_infused_dust")
        .itemInputs('kubejs:primal_mana', 'gtceu:titanium_dust')
        .itemOutputs('gtceu:mana_infused_metal_dust')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("lumium_dust")
        .itemInputs('4x gtceu:tin_alloy_dust', '2x gtceu:sterling_silver_dust', '2x extendedcrafting:luminessence', 'kubejs:energized_clathrate')
        .itemOutputs('4x gtceu:lumium_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
        .duration(200)
        .EUt(1920)

    event.recipes.gtceu.mixer("signalum_dust")
        .itemInputs('4x gtceu:annealed_copper_dust', '2x gtceu:ardite_dust', '2x gtceu:red_alloy_dust', 'kubejs:destabilized_clathrate')
        .itemOutputs('4x gtceu:signalum_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
        .duration(200)
        .EUt(1920)

    event.recipes.gtceu.mixer("rhodium_plated_palladium")
        .itemInputs('3x gtceu:palladium_dust', 'gtceu:rhodium_dust', '2x gtceu:lumium_dust')
        .itemOutputs('6x gtceu:rhodium_plated_palladium_dust')
        .duration(400)
        .EUt(7680)
        .circuit(1)

    event.recipes.gtceu.mixer("enderium_dust")
        .itemInputs('4x gtceu:lead_dust', '2x gtceu:platinum_dust', 'gtceu:blue_steel_dust', 'gtceu:osmium_dust', 'kubejs:resonant_clathrate')
        .itemOutputs('4x gtceu:enderium_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 1000))
        .duration(300)
        .EUt(1920)

    event.recipes.gtceu.mixer("ardite_dust")
        .itemInputs('3x gtceu:red_steel_dust', 'minecraft:blaze_powder')
        .itemOutputs('4x gtceu:ardite_dust')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("manyullyn_dust")
        .itemInputs('4x gtceu:ardite_dust', '4x gtceu:cobalt_dust', 'kubejs:primal_mana')
        .itemOutputs('4x gtceu:manyullyn_dust')
        .duration(400)
        .EUt(30)
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.electric_blast_furnace("mana_infused_metal")
        .itemInputs('gtceu:mana_infused_metal_dust')
        .itemOutputs('gtceu:mana_infused_metal_ingot')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
        .duration(400)
        .EUt(400)
        .blastFurnaceTemp(2141)
})

ServerEvents.recipes(event => {
	event.remove('gtceu:alloy_blast_smelter/red_alloy')
	event.recipes.gtceu.alloy_blast_smelter("red_alloy_fluid")
        .itemInputs('2x gtceu:copper_dust', '3x #forge:dusts/redstone')
        .outputFluids(Fluid.of('gtceu:red_alloy', 288))
        .duration(75)
        .EUt(16)
        .circuit(5)
        .blastFurnaceTemp(1400)
	event.recipes.gtceu.alloy_blast_smelter("conductive_alloy_fluid")
        .itemInputs('#forge:dusts/iron', '#forge:dusts/redstone')
        .outputFluids(Fluid.of('gtceu:conductive_alloy', 144))
        .duration(225)
        .EUt(16)
        .circuit(2)
        .blastFurnaceTemp(1400)
    event.recipes.gtceu.alloy_blast_smelter("energetic_alloy_fluid")
        .itemInputs('2x gtceu:gold_dust', '#forge:dusts/redstone', 'minecraft:glowstone_dust')
        .outputFluids(Fluid.of('gtceu:energetic_alloy', 576))
        .duration(1200)
        .EUt(120)
        .circuit(3)
        .blastFurnaceTemp(1250)

        event.recipes.gtceu.alloy_blast_smelter("energetic_alloy_fluid_gas")
        .itemInputs('2x gtceu:gold_dust', '#forge:dusts/redstone', 'minecraft:glowstone_dust')
        .inputFluids(Fluid.of('gtceu:nitrogen', 4000))
        .outputFluids(Fluid.of('gtceu:energetic_alloy', 576))
        .duration(600)
        .EUt(120)
        .circuit(13)
        .blastFurnaceTemp(1250)

    event.recipes.gtceu.alloy_blast_smelter("vibrant_alloy_fluid")
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .outputFluids(Fluid.of('gtceu:vibrant_alloy', 288))
        .duration(900)
        .EUt(120)
        .circuit(2)
        .blastFurnaceTemp(1350)

    event.recipes.gtceu.alloy_blast_smelter("vibrant_alloy_fluid_gas")
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .inputFluids(Fluid.of('gtceu:nitrogen', 2000))
        .outputFluids(Fluid.of('gtceu:vibrant_alloy', 288))
        .duration(600)
        .EUt(120)
        .circuit(12)
        .blastFurnaceTemp(1350)

    event.recipes.gtceu.alloy_blast_smelter("dark_soularium_fluid")
        .itemInputs('gtceu:soularium_ingot', 'gtceu:dark_steel_ingot')
        .inputFluids(Fluid.of('gtceu:tritium', 1000))
        .outputFluids(Fluid.of('gtceu:dark_soularium', 144))
        .duration(1200)
        .EUt(32000)
        .blastFurnaceTemp(8600)
})
ServerEvents.recipes(event => {
    event.remove({ id: /thermal:[A-Za-z]+_dust_/ })
    event.remove({ id: /thermal:fire_charge/ })
})