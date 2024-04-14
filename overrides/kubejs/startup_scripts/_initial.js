// priority: 9999
//! This script loads first before the other startup scripts
// put your util or patches here so that you can access them at other scripts

// fake our name
Platform.mods.kubejs.name = "Nomi Labs"

/**
 * Capitalizes the first char of the string
 * @param {string} word
 * @returns
 */
const capitalize = (word) => (word[0].toUpperCase() + word.substring(1));

/**
 * Creates a placeholder item
 * @param {Registry.Item} registry
 * @param {ResourceLocation_ | string} name - item (id)
 */
const placeHolder = (registry, name) => {
	registry.create(name).texture('kubejs:item/barrier').displayName(`§eT. B. I. §r- §d${name.split('_').map(v => capitalize(v))}`);
}

//Unification regexes
// MODS TO FIX: DRACONIC EVOLUTION, THERMAL SERIES, GTCEU NEUTRONIUM, NUCLEARCRAFT
global.manualUnification = ['hammerlib:gears/netherite', 'hammerlib:gears/wooden', 'hammerlib:gears/stone', 'hammerlib:gears/copper', 'hammerlib:gears/iron', 'hammerlib:gears/gold', 'hammerlib:gears/diamond', 'draconicevolution:draconium_ingot', 'draconicevolution:draconium_nugget', 'draconicevolution:draconium_dust', 'draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_nugget', 'draconicevolution:awakened_draconium_dust', 'hammerlib:gears/stone', 'hammerlib:gears/wooden', 'gtceu:neutronium_ingot', 'gtceu:neutronium_nugget']
global.UnificationExcludedItems = ['nuclearcraft:hard_carbon_ingot', 'nuclearcraft:ferroboron_ingot', 'nuclearcraft:tough_alloy_ingot', 'enderio:wood_gear', 'enderio:stone_gear', 'enderio:iron_gear', 'enderio:energized_gear', 'enderio:vibrant_gear', 'enderio:dark_bimetal_gear']
global.unificationPattern = new RegExp(`^(?!(${global.UnificationExcludedItems.join('|')})).*(nuclearcraft|thermal|enderio):(.*(_block|_plate|_ingot|_nugget|_gear|_dust))`, 'i')