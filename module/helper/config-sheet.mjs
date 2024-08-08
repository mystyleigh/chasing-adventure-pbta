export const configSheet = async () => {

   // pass the Chasing Adventure sheet object to sheetConfig
   game.pbta.sheetConfig = {
    rollFormula: "2d6",
    
    statToggle: {
        label: "Condition",
        modifier: 0
    },

    rollResults: {
        success: {
            start: 10,
            end: null,
            label: "Success!"
        },
        partial: {
            start: 7,
            end: 9,
            label: "Partial Success"
        },
        failure: {
            start: null,
            end: 6,
            label: "Misfortune..."
        }
    },

    actorTypes: {
        character: {
            stats: {
                str: {
                    label: "STR",
                    value: 0
                },
                dex: {
                    label: "DEX",
                    value: 0
                },
                int: {
                    label: "INT",
                    value: 0
                },
                wis: {
                    label: "WIS",
                    value: 0
                },
                cha: {
                    label: "CHA",
                    value: 0
                }
            },
            attrTop: {
                armor: {
                    label: "Armor",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Resource",
                    value: 0,
                    max: 0
                },
                xp: {
                    label: "XP",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Xp",
                    value: 0,
                    max: 10,
                    steps: [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ]
                },
                level: {
                    label: "Level",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Number",
                    value: 1
                },
                wealth: {
                    label: "Wealth",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Number",
                    value: 0
                }
            },

            attrLeft: {
                look: {
                    label: "Look",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                },
                drive: {
                    label: "Drive",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                },
                favor: {
                    label: "You favor:",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                },
                favoredby: {
                    label: "You are favored by:",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                },
                art: {
                    label: "Art",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Resource",
                    value: 0,
                    max: 0
                },
                spirit: {
                    label: "Spirit",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Resource",
                    value: 0,
                    max: 0
                },
                momentum: {
                    label: "Momentum",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Resource",
                    value: 0,
                    max: 0
                },
                prep: {
                    label: "Prep",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Resource",
                    value: 0,
                    max: 0
                },
                heat: {
                    label: "Heat",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Resource",
                    value: 0,
                    max: 0
                }
            },

            moveTypes: {
                background: {
                    label: "Background",
                    moves: []
                },
                starting: {
                    label: "Starting Moves",
                    moves: []
                },
                advanced: {
                    label: "Advanced Moves",
                    moves: []
                },
                adventure: {
                    label: "Adventure Moves",
                    moves: [],
                    creation: true,
                    playbook: false
                },
                peripheral: {
                    label: "Peripheral Moves",
                    moves: [],
                    creation: true,
                    playbook: false
                },
                chase: {
                    label: "Chase Moves",
                    moves: [],
                    creation: true,
                    playbook: false
                },
                favor: {
                    label: "Favor Moves",
                    moves: [],
                    creation: true,
                    playbook: false
                }
            },

            equipmentTypes: {
                weapons: {
                    label: "Weapons",
                    moves: []
                },
                armor: {
                    label: "Armor",
                    moves: []
                },
                equipment: {
                    label: "Equipment",
                    moves: []
                }
            }
        },

        npc: {
            attrTop: {
                harm: {
                    label: "Conditions",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Resource",
                    value: 0,
                    max: 0
                },
                armor: {
                    label: "Armor",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Resource",
                    value: 0,
                    max: 0
                }
            },

            attrLeft: {
                desc: {
                    label: "Description",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                },
                motivation: {
                    label: "Motivation",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                },
                methods: {
                    label: "Methods",
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                }
            },

            moveTypes: {
                cost: {
                    label: "Follower Costs",
                    moves: []
                },
                descriptor: {
                    label: "Follower Descriptors",
                    moves: []
                },
                quality: {
                    label: "Follower Qualities",
                    moves: []
                },
                follower: {
                    label: "Follower Moves",
                    moves: []
                },
                custom: {
                    label: "Custom Moves",
                    moves: []
                }
            },

            equipmentTypes: {
                weapons: {
                    label: "Weapons",
                    moves: []
                },
                armor: {
                    label: "Armor",
                    moves: []
                },
                equipment: {
                    label: "Equipment",
                    moves: []
                }
            }
        }
    }
}

   // check if users wants to override settings; if not, hide all PbtA sheet options
   let overrideSettings = await game.settings.get('chasing-adventure-pbta', 'settings-override');

   if (!overrideSettings) {
      await game.settings.set('pbta', 'advForward', true);
      await game.settings.set('pbta', 'hideRollFormula', true);
      await game.settings.set('pbta', 'hideForward', true);
      await game.settings.set('pbta', 'hideOngoing', true);
      await game.settings.set('pbta', 'hideHold', true);
      await game.settings.set('pbta', 'hideRollMode', false);
      await game.settings.set('pbta', 'hideUses', true);
   }

}