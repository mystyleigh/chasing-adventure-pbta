import { configSheet } from "./helper/config-sheet.mjs";

// once the game has initialized, set up the module
Hooks.once('init', () => {

   // register Chasing Adventure settings
   game.settings.register('chasing-adventure-pbta', 'settings-override', {
      name: "Override Setting Selections",
      default: false,
      type: Boolean,
      scope: 'world',
      config: true,
      hint: "The Chasing Adventure module automatically hides all PbtA sheet options (formula, forward, ongoing, roll mode). If you want to make your own selections, please check this option off.",
      requiresReload: true
   });

   // Define custom PbtA system tags.
   game.pbta.tagConfigOverride = {
      // Tags available to any actor and item
      actor: {
          // Tags available to all actors
          all: '',
          // Tags available to a specific actor type set up on game.pbta.sheetConfig.actorTypes (e.g. "character", "npc")
          character: '',
          npc: ''
      },
      item: {
          // Tags available to all actors
          all: '',
          // Tags available to a specific item type (e.g. "equipment", "move")
          equipment: '[{"value":"Area", "description":"Hits or affects everything in an area"},{"value":"1 Armor", "description":": Provides 1 Armor"},{"value":"2 Armor", "description":": Provides 2 Armor"},{"value":"+1 Armor", "description":": Increases total armor by 1"},{"value":"Awkward", "description":"Unwieldy and difficult to use properly"},{"value":"Clumsy", "description":"So cumbersome that you have Disadvantag on DEX rolls while using it"},{"value":"Dangerous", "description":"Unsafe; take precautions when using it or the GM may freely invoke the consequences"},{"value":"Distinctive", "description":"Has an obvious and unique sound, appearance, or impression when used"},{"value":"Fiery", "description":"Burns, sears, and causes things to catch fire. Painfully hot to the touch"},{"value":"Forceful", "description":"Inflicts powerful, crushing blows that knock targets back and down"},{"value":"Heavy", "description":"Requires two hands to wield properly"},{"value":"Infinite", "description":"Too many to keep count"},{"value":"Messy", "description":"Particularly destructive and can tear people and things apart"},{"value":"Piercing", "description":"Ignores Armor"},{"value":"Reload", "description":"Takes time to reload or recharge between uses"},{"value":"Slow", "description":"Takes a while to use - at least a minute, if not more"},{"value":"Unbreakable", "description":"Cannot be broken or destroyed by normal means"},{"value":"Valuable", "description":"Worth 1 Wealth to the right person"},{"value":"Vicious", "description":"Harms foes in an especially painful, cruel, or debilitating way"},{"value":"1 Wealth", "description":"It typically costs 1 Wealth to purchase"},{"value":"2 Wealth", "description":"It typically costs 2 Wealth to purchase"},{"value":"3 Wealth", "description":"It typically costs 3 Wealth to purchase"},{"value":"Intimate", "description":"Target is close enough to whisper in your ear"},{"value":"Close", "description":"Target is a few feet away, close enough to read your expressions"},{"value":"Near", "description":"Target is close enough to speak with, even if you have to raise your voice a bit to be heard clearly"},{"value":"Far", "description":"Target is close enough to see clearly, or to hear you yell at the top of your lungs"}]'
      }
  };
})

Hooks.once('pbtaSheetConfig', () => {

   // Disable the sheet config form.
   game.settings.set('pbta', 'sheetConfigOverride', true);

   // Replace the game.pbta.sheetConfig with the Chasing Adventures version.
   configSheet();

});
