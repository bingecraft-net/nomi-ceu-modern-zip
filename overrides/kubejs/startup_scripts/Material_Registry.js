// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('omnium', 130, 234, -1, null, 'Nm', false)
    event.create('draconium', 149, 234, -1, null, 'Dc', false)
    event.create('draconium_awakened', 149, 264, -1, null, 'Dc*', false)
    event.create('taranium', 149, 264, -1, null, 'Tn', false)
})

GTCEuStartupEvents.materialModification(() => {
	const INFINITY = GTMaterials.get('infinity');
	const CRYSTAL_MATRIX = GTMaterials.get('crystal_matrix');
	// const OMNIUM = GTMaterials.get('omnium');

	TagPrefix.ingot.setIgnored(CRYSTAL_MATRIX, 'avaritia:crystal_matrix_ingot');
	TagPrefix.ingot.setIgnored(INFINITY, 'avaritia:infinity_ingot');		// TODO broken-ish, block & plate wont unify properly
	// TagPrefix.ingot.setIgnored(OMNIUM, 'kubejs:omnium_ingot'); 			// TODO broken
	TagPrefix.ingot.setIgnored(GTMaterials.Neutronium, 'avaritia:neutronium_ingot');

	// TagPrefix.nugget.setIgnored(OMNIUM, 'extendedcrafting:the_ultimate_nugget');

	// somehow breaks gt compacting recipies, explicitly commenting this here
	// TagPrefix.block.setIgnored(CRYSTAL_MATRIX, 'avaritia:crystal_matrix_block');
	// TagPrefix.block.setIgnored(INFINITY, 'avaritia:infinity_block') // idk i just cant unify this block it doesnt want to be unified
	// TagPrefix.block.setIgnored(OMNIUM, 'extendedcrafting:the_ultimate_block');
	// TagPrefix.block.setIgnored(GTMaterials.Neutronium, 'avaritia:neutronium_block');

	//TagPrefix.plate.setIgnored(INFINITY, 'kubejs:infinity_plate')

	TagPrefix.dustTiny.setIgnored(GTMaterials.Neutronium, 'avaritia:pile_of_neutrons');
	INFINITY.setFormula("∞");
})

// Elemental materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("draconium")
        .ingot().fluid().ore()
        .element(GTElements.get("draconium"))
        .color(0xbe49ed)
        .iconSet('metallic')
        .blastTemp(6800)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE)
        .cableProperties('524288', '1', '0', true);

    event.create("draconium_awakened")
        .ingot().fluid()
        .element(GTElements.get("draconium_awakened"))
        .color(0xf58742)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING)

    event.create("omnium")
        .ingot().fluid()
        .element(GTElements.get("omnium"))
        .color(0x414751)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties('2147483647', '64', '0', true);

    event.create('taranium')
        .element(GTElements.get("taranium"))
        .ingot()
        .fluid()
        .color(0xff00ff)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)

})

// Chemical Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('butanol')
        .fluid()
        .color(0xc7af2e)
        .iconSet('butanol')
        .components('4x carbon', '10x hydrogen', '1x oxygen')

    event.create('phosphorus_trichloride')
        .fluid()
        .color(0xe8c474)
        .iconSet('phosphorus_trichloride')
        .components('1x phosphorus', '3x chlorine')

    event.create('tributyl_phosphate')
        .fluid()
        .color(0xe8c474)
        .iconSet('tributyl_phosphate')
        .components('12x carbon', '27x hydrogen', '4x oxygen', '1x phosphorus')

    event.create('phosphoryl_chloride')
        .fluid()
        .color(0xe8bb5b)
        .iconSet('phosphoryl_chloride')
        .components('1x phosphorus', '1x oxygen', '3x chlorine')

})


// Taranium Line Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('hexafluorosilicic_acid')
        .fluid()
        .color(0xd00010)
        .iconSet('hexafluorosilicic_acid')
        .components('2x hydrogen', '1x silicon', '6x fluorine')

    event.create('ultraacidic_residue')
        .fluid()
        .color(0xb0babf)
        .iconSet('ultraacidic_residue')

    event.create('dirty_hexafluorosilicic_acid')
        .fluid()
        .color(0xd00010)
        .iconSet('dirty_hexafluorosilicic_acid')
        .components('2x hydrogen', '1x silicon', '6x fluorine')

    event.create('xenic_acid')
        .fluid()
        .color(0xa567db)
        .iconSet('xenic_acid')

    event.create('dusty_helium')
        .fluid()
        .color(0xa040af)
        .iconSet('dusty_helium')

    event.create('taranium_enriched_helium')
        .fluid()
        .color(0x10c050)
        .iconSet('taranium_enriched_helium')

    event.create('taranium_depleted_helium')
        .fluid()
        .color(0x006010)
        .iconSet('taranium_enriched_helium')

    event.create('tritium_hydride')
        .fluid()
        .color(0xd01010)
        .iconSet('tritium_hydride')
        .components('1x tritium', '1x hydrogen')

    event.create('dioxygen_difluoride')
        .fluid()
        .color(0xFFFFFF)
        .iconSet('dioxygen_difluoride')
        .components('2x oxygen', '2x fluorine')

    event.create('helium_hydride')
        .fluid()
        .color(0xe6d62e)
        .iconSet('helium_hydride')
})

// Platline Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('chloroplatinic_acid')
        .fluid()
        .color(0xfef0c2F)
        .iconSet('chloroplatinic_acid')
        .components('2x hydrogen', '1x platinum', '6x chlorine')

    event.create('palladium_rich_ammonia')
        .fluid()
        .color(0x808080)
        .iconSet('palladium_rich_ammonia')
        .components('2x ammonia', '1x palladium', '1x chlorine')

    event.create('rhodium_sulfate_solution')
        .fluid()
        .color(0xffbb66)
        .iconSet('rhodium_sulfate_solution')

    event.create('acidic_iridium_dioxide_solution')
        .fluid()
        .color(0x27284e)
        .iconSet('acidic_iridium_dioxide_solution')

    event.create('platinum_palladium_leachate')
        .fluid()
        .color(0xffffc5)
        .iconSet('platinum_palladium_leachate')

    event.create('methyl_formate')
        .fluid()
        .color(0xffaaaa)
        .iconSet('methyl_formate')
        .components('2x carbon', '4x hydrogen', '2x oxygen')

    event.create('formic_acid')
        .fluid()
        .color(0xffffc5)
        .iconSet('formic_acid')
        .components('1x carbon', '2x hydrogen', '2x oxygen')
})


// Microverse Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("microversium")
        .ingot()
        .color(0x9b61b8)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME)

    event.create("osmiridiumyes")
        .dust().ore()
        .components('8x osmium', '2x iridium')
        .iconSet('dull')

    event.create("iridosmineyes")
        .dust().ore()
        .components('8x iridium', '2x osmium')
        .iconSet('dull')

    event.create("kaemanite")
        .dust().ore()
        .color(0xe7413c)
        .iconSet('bright')

    event.create("fluorite")
        .dust().ore()
        .color(0xFFFC9)
        .iconSet('rough')

    event.create("darmstadtite")
        .dust().ore()
        .iconSet('rough')

    event.create("dulysite")
        .dust().ore()
        .iconSet('rough')
})

// Thermal Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("ardite")
        .ingot().fluid()
        .color(0xad2f05)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("mana")
        .element(GTElements.get("mana"))

    event.create("mana_infused_metal")
        .ingot().fluid()
        .color(0xCF83FB)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("manyullyn")
        .ingot().fluid()
        .color(0x9949cc)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING)

    event.create("signalum")
        .ingot().fluid()
        .color(0xff7f0f)
        .iconSet('shiny')
        .blastTemp(4000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(32768, 1, 0, true)

    event.create("lumium")
        .ingot().fluid()
        .blastTemp(4500)
        .color(0xf6ff99)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(8192, 1, 0, true)

    event.create("enderium")
        .ingot().fluid()
        .blastTemp(6400)
        .color(0x1f6b62)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(131072, 1, 0, true)

    event.create("electrum_flux")
        .ingot().fluid()
        .blastTemp(1100)
        .color(0xf7be20)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR);

	event.create("mythril")
        .ingot().fluid()
        .color(0x428fdb)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR);
})


// EnderIO Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("dark_steel")
        .ingot().fluid()
        .color(0x414751)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME)

    event.create("conductive_alloy")
        .ingot().fluid()
        .color(0xf7b29b)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(32, 1, 0, true)

    event.create("energetic_alloy")
        .ingot().fluid()
        .color(0xffb545)
        .iconSet('shiny')
        .blastTemp(1250)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(128, 1, 0, true)

    event.create("vibrant_alloy")
        .ingot().fluid()
        .color(0xa4ff70)
        .iconSet('shiny')
        .blastTemp(1350)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW)
        .cableProperties(512, 1, 0, true)

    event.create("pulsating_alloy")
        .ingot().fluid()
        .color(0x6ae26e)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(8, 1, 0, true)

    event.create("electrical_steel")
        .ingot().fluid()
        .color(0xb2c0c1)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    event.create("soularium")
        .ingot().fluid()
        .color(0x7c674d)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("dark_soularium")
        .ingot().fluid()
        .color(0x7c674d)
        .iconSet('metallic')

    event.create("end_steel")
        .ingot().fluid()
        .color(0xd6d980)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(2048, 1, 0, true)

    event.create("stellar_alloy")
        .ingot().fluid()
        .color(0xc5c8c8)
        .iconSet('metallic')



})

// Endgame stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("crystal_matrix")
        .ingot().fluid()
        .color(0x66ffff)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE); // yeah you can smash the plates
    event.create("draconic_superconductor")
        .ingot().fluid()
        .element(GTElements.get("draconic_superconductor"))
        .color(0xffffff)
        .iconSet('shiny')
		.flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_SMASHING)
        .cableProperties(2147483647, 4, 0, true)
	event.create('infinity')
		.ingot()
		.color(0x000000)
		.iconSet("shiny")
		.flags(GTMaterialFlags.GENERATE_PLATE)
		.components('5x neutronium');
})


//AE2 Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fluix')
        .gem()
        .dust()
        .color(0x7f5bb3)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create('charged_certus_quartz')
        .gem()
        .dust()
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.QUARTZ)
})

//Space Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("dilithium")
        .dust()
        .color(0xd1b5b4)
        .iconSet(GTMaterialIconSet.CERTUS)
})

//PERFECT GEMS

GTCEuStartupEvents.registry('gtceu:material_icon_type', event => {
    event.create('perfect')
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('perfect').parent(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('perfect')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.getByName('perfect'))
        .generationCondition(ItemGenerationCondition.hasGemProperty)
})

// AA gems
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('restonia')
        .gem()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.OPAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('enori')
        .gem()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('void')
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('palis')
        .gem()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.OPAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('diamatine')
        .gem()
        .color(0x8B8DF3)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('emeradic')
        .gem()
        .color(0x09E103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('black_quartz')
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.QUARTZ)
})

// AA empowered gems
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('restonia_empowered')
        .gem().fluid()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.OPAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('enori_empowered')
        .gem().fluid()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('void_empowered')
        .gem().fluid()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('palis_empowered')
        .gem().fluid()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.OPAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('diamatine_empowered')
        .gem().fluid()
        .color(0x8B8DF3)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('emeradic_empowered')
        .gem().fluid()
        .color(0x09E103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
})

// Sunnarium
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('sunnarium')
        .dust()
        .color(0xDDD692)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE)

    event.create('enriched_sunnarium')
        .dust()
        .color(0xACFFC2)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE)
})

// Misc
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('elemental_reduction_fluid')
        .fluid()
        .color(0xbbddbd)
        .iconSet('elemental_reduction_fluid')
})
