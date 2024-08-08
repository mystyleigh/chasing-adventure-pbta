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

})

Hooks.once('pbtaSheetConfig', () => {

   // Disable the sheet config form.
   game.settings.set('pbta', 'sheetConfigOverride', true);

   // Replace the game.pbta.sheetConfig with the Chasing Adventures version.
   configSheet();

});