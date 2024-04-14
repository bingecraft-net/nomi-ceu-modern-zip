ServerEvents.recipes(event => {

    // Item and Fluid Conduits //

    // Make lowest tier fluid conduit pressurized
    event.remove({ id: "enderio:fluid_conduit" })
    event.shaped(
        "4x enderio:pressurized_fluid_conduit", [
            'BBB',
            'GGG',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            G: "minecraft:glass"
        }
    )

    // Manual item conduit
    event.shaped(
        "4x enderio:item_conduit", [
            'BBB',
            'WWW',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            W: "gtceu:pulsating_alloy_single_wire"
        }
    )

		event.remove({ id: "enderio:ender_fluid_conduit" })
    // Manual ender fluid conduit
    event.shaped(
        "4x enderio:ender_fluid_conduit", [
            'BBB',
            'WPW',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            W: "gtceu:vibrant_alloy_single_wire",
            P: "enderio:pressurized_fluid_conduit"
        }
    ).id("enderio:ender_fluid_conduit_upgrade")

    // Assembler item conduit
    event.recipes.gtceu.assembler("efficent_item_conduit")
        .itemInputs("6x enderio:conduit_binder", "3x gtceu:pulsating_alloy_single_wire")
        .itemOutputs("8x enderio:item_conduit")
        .duration(80)
        .EUt(16)

    // Assembler ender fluid conduit
    event.recipes.gtceu.assembler("efficent_ender_conduit")
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:vibrant_alloy_single_wire", "enderio:pressurized_fluid_conduit")
        .itemOutputs("8x enderio:ender_fluid_conduit")
        .duration(80)
        .EUt(16)

    // Energy Conduits //

    //Conductive Iron
    event.shaped(
        '3x enderio:conductive_conduit', [
            'AAA',
            'BBB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'gtceu:conductive_alloy_single_wire'
        }
    )

    event.recipes.gtceu.assembler('conductive_conduit')
        .itemInputs('3x gtceu:conductive_alloy_single_wire', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:conductive_conduit')
        .duration(80)
        .EUt(16)

    //Energetic Alloy
    event.shaped(
        '3x enderio:energetic_conduit', [
            'AAA',
            'BCB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'gtceu:energetic_alloy_single_wire',
            C: 'enderio:conductive_conduit'
        }
    )

    event.recipes.gtceu.assembler('energetic_conduit')
        .itemInputs('2x gtceu:energetic_alloy_single_wire', 'enderio:conductive_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:energetic_conduit')
        .duration(80)
        .EUt(16)

    //Vibrant Alloy

    event.shaped(
        '3x enderio:vibrant_conduit', [
            'AAA',
            'BCB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'gtceu:vibrant_alloy_single_wire',
            C: 'enderio:energetic_conduit'
        }
    )

    event.recipes.gtceu.assembler('vibrant_conduit')
        .itemInputs('2x gtceu:vibrant_alloy_single_wire', 'enderio:energetic_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:vibrant_conduit')
        .duration(80)
        .EUt(16)

    //Endsteel
    event.recipes.gtceu.assembler('endsteel_conduit')
        .itemInputs('2x gtceu:end_steel_single_wire', 'enderio:vibrant_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:endsteel_conduit')
        .duration(80)
        .EUt(16)

    //Lumium
    event.recipes.gtceu.assembler('lumium_conduit')
        .itemInputs('2x gtceu:lumium_single_wire', 'enderio:endsteel_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:lumium_conduit')
        .duration(80)
        .EUt(16)

    //Signalum
    event.recipes.gtceu.assembler('signalum_conduit')
        .itemInputs('2x gtceu:signalum_single_wire', 'enderio:lumium_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:signalum_conduit')
        .duration(80)
        .EUt(16)

    //Enderium
    event.recipes.gtceu.assembler('enderium_conduit')
        .itemInputs('2x gtceu:enderium_single_wire', 'enderio:signalum_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:enderium_conduit')
        .duration(80)
        .EUt(16)

    //Draconium
    event.recipes.gtceu.assembler('draconium_conduit')
        .itemInputs('2x gtceu:draconium_single_wire', 'enderio:enderium_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:draconium_conduit')
        .duration(80)
        .EUt(16)

    //Draconic Superconductor
    event.recipes.gtceu.assembler('draconic_superconductor_conduit')
        .itemInputs('2x gtceu:draconic_superconductor_single_wire', 'enderio:draconium_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:draconic_superconductor_conduit')
        .duration(80)
        .EUt(16)

    event.remove({ output: ['enderio:iron_gear', 'enderio:energized_gear', 'enderio:vibrant_gear', 'enderio:dark_bimetal_gear'] })

    // Infinity Bimetal Gear
    event.recipes.gtceu.alloy_smelter('infinity_gear')
        .itemInputs('gtceu:iron_gear', '2x enderio:grains_of_infinity')
        .itemOutputs('enderio:iron_gear')
        .duration(100)
        .EUt(16)

    // Energized Bimetal Gear
    event.recipes.gtceu.alloy_smelter('energetic_gear')
        .itemInputs('enderio:iron_gear', '4x gtceu:energetic_alloy_ingot')
        .itemOutputs('enderio:energized_gear')
        .duration(150)
        .EUt(16)

    // Vibrant Bimetal Gear
    event.recipes.gtceu.alloy_smelter('vibrant_gear')
        .itemInputs('enderio:energized_gear', '4x gtceu:vibrant_alloy_ingot')
        .itemOutputs('enderio:vibrant_gear')
        .duration(200)
        .EUt(16)

		// Dark Bimetal Gear
    event.recipes.gtceu.alloy_smelter('dark_bimetal_gear')
        .itemInputs('enderio:iron_gear', '4x gtceu:dark_steel_ingot')
        .itemOutputs('enderio:dark_bimetal_gear')
        .duration(200)
        .EUt(16)


    event.remove({ output: ['enderio:pulsating_crystal', 'enderio:vibrant_crystal'] })

    event.recipes.gtceu.autoclave('green_crystal')
        .itemInputs('minecraft:emerald')
        .inputFluids(Fluid.of('gtceu:pulsating_alloy', 144))
        .itemOutputs('enderio:vibrant_crystal')
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.autoclave('blue_crystal')
        .itemInputs('minecraft:diamond')
        .inputFluids(Fluid.of('gtceu:pulsating_alloy', 144))
        .itemOutputs('enderio:pulsating_crystal')
        .duration(100)
        .EUt(30)

    // Disable EnderIO machinery

		event.remove({ id: "enderio:primitive_alloy_smelter"})
		event.remove({ id: "enderio:alloy_smelter"})
		event.remove({ id: "enderio:sag_mill"})
		event.remove({ id: "enderio:stirling_generator"})

    // Capacitors

    event.remove({ output: 'enderio:basic_capacitor' })

    var capacitorCores = [
        ['#gtceu:circuits/ulv', 1],
        ['gtceu:capacitor', 2],
        ['gtceu:smd_capacitor', 3],
        ['gtceu:advanced_smd_capacitor', 12]
    ]

    capacitorCores.forEach(core => {
        event.shaped(
            core[1] + 'x enderio:basic_capacitor', [
                ' N ',
                'NCN',
                'W W'
            ], {
                N: 'gtceu:electrical_steel_nugget',
                C: core[0],
                W: 'gtceu:tin_single_wire'
            }
        )
    })

    // Compressed caps
    event.shaped(
        'kubejs:compressed_octadic_capacitor', [
            'CCC',
            'CCC',
            'CCC'
        ], {
            C: 'enderio:octadic_capacitor'
        }
    )

    event.shaped(
        'kubejs:double_compressed_octadic_capacitor', [
            'CCC',
            'CCC',
            'CCC'
        ], {
            C: 'kubejs:compressed_octadic_capacitor'
        }
    )

		// capacitor banks
		event.remove( {id: 'enderio:advanced_capacitor_bank'} )
		event.remove( {id: 'enderio:vibrant_capacitor_bank_upgrade'} )

		event.replaceInput( {id: 'enderio:basic_capacitor_bank'}, "#forge:ingots/iron", "#forge:plates/iron")
		event.replaceInput( {id: 'enderio:advanced_capacitor_bank_upgrade'}, "#forge:ingots/energetic_alloy", "#forge:plates/electrical_steel")
		event.replaceInput( {id: 'enderio:vibrant_capacitor_bank'}, ["#forge:ingots/vibrant_alloy"], "#forge:plates/vibrant_alloy")

    // Fused Quartz
    event.recipes.gtceu.alloy_smelter("fused_quartz")
        .itemInputs('3x minecraft:quartz')
        .notConsumable('gtceu:block_casting_mold')
        .itemOutputs('enderio:fused_quartz')
        .duration(80)
        .EUt(16)

    // Enlightened fused quartz
    event.recipes.gtceu.alloy_smelter("enlightened_fused_quartz")
        .itemInputs('#enderio:fused_quartz', 'minecraft:glowstone')
        .itemOutputs('enderio:fused_quartz_e')
        .duration(160)
        .EUt(16)

    // dark fused quartz (FIXME: replace bedrock with actual AA item, was too lazy to fire up normal nomi to see)
    event.recipes.gtceu.alloy_smelter("dark_fused_quartz")
        .itemInputs('#enderio:fused_quartz', 'gtceu:black_quartz_gem')
        .itemOutputs('enderio:fused_quartz_d')
        .duration(200)
        .EUt(32)

    // Enlightened clear glass
    event.recipes.gtceu.alloy_smelter("enlightened_clear_glass")
        .itemInputs('#enderio:clear_glass', 'minecraft:glowstone')
        .itemOutputs('enderio:clear_glass_e')
        .duration(160)
        .EUt(16)

    // dark clear glass
    event.recipes.gtceu.alloy_smelter("dark_clear_glass")
        .itemInputs('#enderio:clear_glass', 'gtceu:black_quartz_gem')
        .itemOutputs('enderio:clear_glass_d')
        .duration(200)
        .EUt(32)

    // Stellar Alloy
    event.recipes.gtceu.alloy_smelter('stellar_alloy')
        .itemInputs('gtceu:end_steel_ingot', '8x enderio:grains_of_infinity')
        .itemOutputs('gtceu:stellar_alloy_ingot')
        .duration(200)
        .EUt(2000)

    // Remove useless/op conduit recipes from enderio
    event.remove({ input: '#enderio:fused_quartz', output: 'enderio:pressurized_fluid_conduit' })
    event.remove({ input: 'gtceu:vibrant_alloy_ingot', output: 'enderio:ender_fluid_conduit' })
    event.remove({ input: 'gtceu:pulsating_alloy_nugget', output: 'enderio:item_conduit' })

    // TODO: implement Simple Machine Chassis and add chassis recipe chain

    event.remove({ output: 'enderio:infinity_rod' })
    event.recipes.gtceu.alloy_smelter('infinity_rod')
        .itemInputs('gtceu:dark_steel_rod', 'enderio:grains_of_infinity')
        .itemOutputs('enderio:infinity_rod')
        .duration(200)
        .EUt(30)

    // Enchanter
    event.remove({ output: ['enderio:enchanter'] })
    event.shaped(
        'enderio:enchanter', [
            'DCD',
            'BBB',
            ' A '
        ], {
            A: 'gtceu:void_block',
            B: 'gtceu:dark_steel_ingot',
            C: 'minecraft:book',
            D: 'minecraft:diamond'
        }
    )

    // Enchanter
    event.remove({ output: ['enderio:yeta_wrench'] })
    event.shaped(
        'enderio:yeta_wrench', [
            'I I',
            ' G ',
            ' I '
        ], {
            I: 'minecraft:iron_ingot',
            G: 'gtceu:tin_ingot'
        }
    )
    event.remove({ output: 'enderio:void_chassis' })

    //Redstone Conduit
    event.replaceInput({ id: 'enderio:redstone_conduit' }, 'gtceu:red_alloy_ingot', 'gtceu:red_alloy_single_wire')

    // Soul Vials

    //Villager Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:villager"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'minecraft:emerald',
        V: 'enderio:empty_soul_vial'
    })

    //Enderman Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:enderman"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'enderio:enderman_head',
        V: 'enderio:empty_soul_vial'
    })

    //Shulker Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:shulker"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'minecraft:shulker_shell',
        V: 'enderio:empty_soul_vial'
    })

    //Zombie Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:zombie"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'minecraft:zombie_head',
        V: 'enderio:empty_soul_vial'
    })

    //Ghast Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:ghast"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'minecraft:ghast_tear',
        V: 'enderio:empty_soul_vial'
    })

    //Witch Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:witch"}}}}').strongNBT(), [
        'GEG',
        'EVE',
        'GEG'
    ], {
        E: 'minecraft:redstone',
        G: 'minecraft:glowstone_dust',
        V: 'enderio:empty_soul_vial'
    })

    //Grains
    event.recipes.gtceu.macerator('grains_of_prescience')
        .itemInputs('enderio:prescient_crystal')
        .itemOutputs('enderio:prescient_powder')
        .duration(400)
        .EUt(16)

    event.recipes.gtceu.macerator('grains_of_vibrancy')
        .itemInputs('enderio:vibrant_crystal')
        .itemOutputs('enderio:vibrant_powder')
        .duration(300)
        .EUt(16)

    event.recipes.gtceu.macerator('grains_of_piezallity')
        .itemInputs('enderio:pulsating_crystal')
        .itemOutputs('enderio:pulsating_powder')
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.macerator('grains_of_the_end')
        .itemInputs('enderio:ender_crystal')
        .itemOutputs('enderio:ender_crystal_powder')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.macerator('grains_of_innocence')
        .itemInputs('enderio:enticing_crystal')
        .itemOutputs('kubejs:grains_of_innocence')
        .duration(200)
        .EUt(16)

    // Fluid of the Void (TODO: actually use EnderIO machines when they are totally definitely for sure ported to 1.20.1)

    event.recipes.gtceu.chemical_reactor('dew_of_the_void')
        .itemInputs('enderio:pulsating_powder', 'enderio:vibrant_powder')
        .inputFluids('kubejs:resonant_ender 4000')
        .outputFluids('enderio:dew_of_the_void 2000')
        .duration(84)
        .EUt(15)

    event.recipes.gtceu.chemical_reactor('ender_star')
        .itemInputs('minecraft:nether_star')
        .inputFluids('enderio:dew_of_the_void 8000')
        .itemOutputs('kubejs:ender_star')
        .duration(2000)
        .EUt(400)

    //Painting Machine
    event.shaped('enderio:painting_machine', [
        'QDQ',
        'GHG',
        'RRR'
    ], {
        D: 'minecraft:diamond',
        G: 'gtceu:iron_gear',
        H: 'gtceu:lv_machine_hull',
        Q: 'minecraft:quartz',
        R: 'gtceu:red_alloy_ingot'
    }).id('enderio:painting_machine')

		// Crafter
    event.shaped('enderio:crafter', [
			'RCR',
			'GFG',
			'SSS'
	], {
			C: 'avaritia:compressed_crafting_table',
			F: 'gtceu:lv_machine_hull',
			G: '#forge:small_gears/steel',
			R: 'kubejs:resonating_crystal',
			S: '#forge:plates/steel'
	}).id('enderio:crafter')

    //Z-Logic Controller
    event.shaped('enderio:z_logic_controller', [
        'SHS',
        'SCS',
        'WBW'
    ], {
        B: 'gtceu:red_alloy_block',
        C: '#gtceu:circuits/mv',
        H: 'minecraft:zombie_head',
        S: '#forge:ingots/soularium',
        W: 'gtceu:silicon_wafer'
    })

    event.shaped('2x enderio:z_logic_controller', [
        'SHS',
        'SCS',
        'WBW'
    ], {
        B: 'gtceu:red_alloy_block',
        C: '#gtceu:circuits/mv',
        H: 'minecraft:zombie_head',
        S: '#forge:ingots/soularium',
        W: 'gtceu:phosphorus_wafer'
    })

    event.shaped('4x enderio:z_logic_controller', [
        'SHS',
        'SCS',
        'WBW'
    ], {
        B: 'gtceu:red_alloy_block',
        C: '#gtceu:circuits/mv',
        H: 'minecraft:zombie_head',
        S: '#forge:ingots/soularium',
        W: 'gtceu:naquadah_wafer'
    })

    event.shaped('8x enderio:z_logic_controller', [
        'SHS',
        'SCS',
        'WBW'
    ], {
        B: 'gtceu:red_alloy_block',
        C: '#gtceu:circuits/mv',
        H: 'minecraft:zombie_head',
        S: '#forge:ingots/soularium',
        W: 'gtceu:neutronium_wafer'
    })

    //Whatever
    event.replaceInput({ input: '#forge:ingots/copper_alloy' }, 'enderio:copper_alloy_ingot', 'gtceu:pulsating_iron_ingot')
    
    //Clear tank
    event.shapeless('enderio:fluid_tank', ['enderio:fluid_tank'])
})