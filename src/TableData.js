/*

Structure is:

{
  ID: 'ID',                   // In game ID
  name: 'name',               // Title of quest
  description: 'description', // Description
  giver: 'giver',             // NPC that starts the quest
  location: 'location',       // Location of start
  level: 1,                   // Player level required to start
  reward: 'reward',
  type: 'type',
  link: 'link'
},
    {
      ID: 'ID',
      name: 'name',
      description: 'description',
      giver: 'giver',
      location: 'location',
      level: 1,
      reward: 'reward',
      type: 'type',
      link: 'link'
    },

*/

const tableData = {
  mainQuest: [
    {
      ID: 'MQ101',
      name: 'Unbound',
      description: 'Escape Imperial custody and a dragon raid.',
      giver: 'N/A',
      location: 'Helgen, Helgen Keep',
      level: 1,
      reward: 'Various low level items',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Unbound'
    },
    {
      ID: 'MQ102',
      name: 'Before the Storm',
      description: 'Inform the Jarl of Whiterun about the dragon attack on Helgen.',
      giver: 'Hadvar or Ralof',
      location: 'Riverwood, Whiterun',
      level: 1,
      reward: 'Leveled Armor',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Before_the_Storm'
    },
    {
      ID: 'MQ103',
      name: 'Bleak Falls Barrow',
      description: 'Retrieve the Dragonstone.',
      giver: 'Jarl Balgruuf the Greater',
      location: 'Riverwood, Bleak Falls Barrow, Dragonsreach',
      level: 1,
      reward: 'Enchanted Leveled Armor, Permission to buy Breezehome',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Bleak_Falls_Barrow_(quest)'
    },
    {
      ID: 'MQ104',
      name: 'Dragon Rising',
      description: 'Investigate a Dragon sighting near Whiterun.',
      giver: 'Farengar Secret-Fire',
      location: 'Dragonsreach, The Western Watchtower outside Whiterun',
      level: 1,
      reward: 'Ability to use Dragon Shouts, Axe of Whiterun, Thaneship of Whiterun, Lydia as a follower',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Dragon_Rising'
    },
    {
      ID: 'MQ105',
      name: 'The Way of the Voice',
      description: 'Meet the Greybeards.',
      giver: 'Jarl Balgruuf the Greater',
      location: 'Ivarstead, High Hrothgar',
      level: 1,
      reward: 'Word for the Unrelenting Force shout, Word for the Whirlwind Sprint shout',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:The_Way_of_the_Voice'
    },
    {
      ID: 'MQ105Ustengrav',
      name: 'The Horn of Jurgen Windcaller',
      description: 'Retrieve a Greybeard artifact from Ustengrav.',
      giver: 'Arngeir',
      location: 'High Hrothgar, Ustengrav, Riverwood',
      level: 1,
      reward: 'Word for the Unrelenting Force shout, Formal recognition as Dragonborn, Free access to High Hrothgar',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:The_Horn_of_Jurgen_Windcaller'
    },
    {
      ID: 'MQ106',
      name: 'A Blade in the Dark',
      description: 'Prove you are Dragonborn to Delphine by slaying the dragon Sahloknir.',
      giver: 'Delphine',
      location: 'Sleeping Giant Inn, Kynesgrove',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:A_Blade_in_the_Dark'
    },
    {
      ID: 'MQ201',
      name: 'Diplomatic Immunity',
      description: 'Infiltrate a party at the Thalmor Embassy.',
      giver: 'Delphine',
      location: 'Riverwood, Solitude, Thalmor Embassy',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Diplomatic_Immunity'
    },
    {
      ID: 'MQ202',
      name: 'A Cornered Rat',
      description: 'Locate Esbern.',
      giver: 'Delphine',
      location: 'Riften, The Ratway',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:A_Cornered_Rat'
    },
    {
      ID: 'MQ203',
      name: 'Alduin\'s Wall',
      description: 'Locate the prophecy within Sky Haven Temple.',
      giver: 'Esbern',
      location: 'The Ratway, Riverwood, Sky Haven Temple',
      level: 1,
      reward: 'Dragonbane',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Alduin%27s_Wall'
    },
    {
      ID: 'MQ204',
      name: 'The Throat of the World',
      description: 'Receive a lesson from Paarthurnax.',
      giver: 'Arngeir',
      location: 'High Hrothgar, Throat of the World',
      level: 1,
      reward: 'One unlocked word of power for the Fire Breath shout and the whole Clear Skies shout',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:The_Throat_of_the_World'
    },
    {
      ID: 'MQ205',
      name: 'Elder Knowledge',
      description: 'Locate an Elder Scroll.',
      giver: 'Paarthurnax',
      location: 'Throat of the World, Sky Haven Temple or High Hrothgar, Septimus Signus\'s Outpost, Alftand, Blackreach, Tower of Mzark.',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Elder_Knowledge'
    },
    {
      ID: 'MQ206',
      name: 'Alduin\'s Bane',
      description: 'Exploit the Time Wound to learn Dragonrend.',
      giver: 'Paarthurnax',
      location: 'Throat of the World',
      level: 1,
      reward: 'Dragonrend shout',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Alduin%27s_Bane'
    },
    {
      ID: 'MQ301',
      name: 'The Fallen',
      description: 'Capture and interrogate one of Alduin\'s allies.',
      giver: 'Alduin',
      location: 'Throat of the World, High Hrothgar, and/or Sky Haven Temple, Dragonsreach',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:The_Fallen'
    },
    {
      ID: 'MQPaarthurnax',
      name: 'Paarthurnax',
      description: 'Deal with a potential threat.',
      giver: 'Esbern or Delphine',
      location: 'Sky Haven Temple, Throat of the World',
      level: 1,
      reward: 'Free access to Sky Haven Temple',
      type: 'optional',
      link: 'https://en.uesp.net/wiki/Skyrim:Paarthurnax_(quest)'
    },
    {
      ID: 'MQ302',
      name: 'Season Unending',
      description: 'Enforce a ceasefire to secure Dragonsreach.',
      giver: 'Jarl Balgruuf the Greater or Vignar Gray-Mane',
      location: '',
      level: 1,
      reward: 'Call Dragon Shout',
      type: 'optional',
      link: 'https://en.uesp.net/wiki/Skyrim:Season_Unending'
    },
    {
      ID: 'MQ303',
      name: 'The World-Eater\'s Eyrie',
      description: 'Battle through Skuldafn Temple to reach Alduin\'s portal to Sovngarde.',
      giver: 'Odahviing',
      location: 'Skuldafn Temple',
      level: 1,
      reward: 'Nahkriin',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:The_World-Eater%27s_Eyrie'
    },
    {
      ID: 'MQ304',
      name: 'Sovngarde',
      description: 'Seek out Alduin within Sovngarde.',
      giver: 'Automatic upon entering Sovngarde during The World-Eaters Eyrie.',
      location: 'Sovngarde',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Sovngarde_(quest)'
    },
    {
      ID: 'MQ305',
      name: 'Dragonslayer',
      description: 'Put an end to the World Eater.',
      giver: 'Hakon, Gormlaith, and Felldir',
      location: 'Hall of Valor, Sovngarde',
      level: 1,
      reward: 'Call of Valor',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Dragonslayer'
    }
  ],
  collegeOfWinterhold: [
    {
      ID: 'MG01Pointer',
      name: 'College Objective Quest',
      description: 'Visit the College of Winterhold.',
      giver: '',
      location: 'College of Winterhold',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:College_Objective_Quest'
    },
    {
      ID: 'MG01',
      name: 'First Lessons',
      description: 'Join the College of Winterhold.',
      giver: '',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Membership',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:First_Lessons'
    },
    {
      ID: 'MG02',
      name: 'Under Saarthal',
      description: 'Uncover the mysteries beneath this ancient ruin.',
      giver: 'Tolfdir',
      location: 'Saarthal, College of Winterhold',
      level: 1,
      reward: 'Staff of Magelight',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Under_Saarthal'
    },
    {
      ID: 'MG03',
      name: 'Hitting the Books',
      description: 'Find the books needed to identify the artifact found in Saarthal.',
      giver: 'Savos Aren',
      location: 'Fellglow Keep',
      level: 1,
      reward: 'Skill books',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Hitting_the_Books'
    },
    {
      ID: 'MG04',
      name: 'Good Intentions',
      description: 'Find and consult the Augur of Dunlain.',
      giver: 'Tolfdir',
      location: '',
      level: 1,
      reward: 'Mages Circlet',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Good_Intentions'
    },
    {
      ID: 'MG06',
      name: 'Revealing the Unseen',
      description: 'Discover the location of Magnus\' staff.',
      giver: 'Mirabelle Ervine',
      location: 'College of Winterhold, Mzulft',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Revealing_the_Unseen'
    },
    {
      ID: 'MG05',
      name: 'Containment',
      description: 'Deal with the aftermath of the Eyes power surge.',
      giver: '',
      location: 'Winterhold',
      level: 1,
      reward: 'Savos Arens Amulet (+50 Magicka), Torc of Labyrinthian',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Containment'
    },
    {
      ID: 'MG07',
      name: 'The Staff of Magnus',
      description: 'Retrieve the Staff of Magnus.',
      giver: 'Mirabelle Ervine',
      location: 'Labyrinthian',
      level: 1,
      reward: 'Staff of Magnus, Morokei',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:The_Staff_of_Magnus'
    },
    {
      ID: 'MG08',
      name: 'The Eye of Magnus',
      description: 'Reclaim the College and contain the Eye.',
      giver: '',
      location: '',
      level: 1,
      reward: 'Position of Arch-Mage in the College of Winterhold, Archmages Robes, key to the Arch-Mages Quarters.',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:The_Eye_of_Magnus'
    },
    {
      ID: 'MGRArniel01, MGRArniel02, MGRArniel03, MGRArniel04',
      name: 'Arniel\'s Endeavor',
      description: 'Uncover an ancient Dwemer secret.',
      giver: 'Arniel Gane',
      location: 'Part 1: College of Winterhold, Most Dwarven Ruins, Part 2: Radiant dungeon, Part 3: Various, Part 4: Radiant dungeon',
      level: 1,
      reward: 'Leveled gold, Keening, unique Conjuration spell, Summon Arniels Shade',
      type: 'optional',
      link: 'https://en.uesp.net/wiki/Skyrim:Arniel%27s_Endeavor'
    },
    {
      ID: 'MGRAppBrelyna01',
      name: 'Brelyna\'s Practice',
      description: 'Help Brelyna Maryon test spells.',
      giver: 'Brelyna Maryon',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Resist Magic necklace',
      type: 'optional',
      link: 'https://en.uesp.net/wiki/Skyrim:Brelyna\'s_Practice'
    },
    {
      ID: 'MGRAppJzargo01',
      name: 'J\'zargo\'s Experiment',
      description: 'Help J\'zargo test out a fiery new spell.',
      giver: 'J\'zargo',
      location: '',
      level: 1,
      reward: 'J\'zargo as a follower, unused scrolls',
      type: 'optional',
      link: 'https://en.uesp.net/wiki/Skyrim:J%27zargo%27s_Experiment'
    },
    {
      ID: 'MGRAppOnmund01',
      name: 'Onmund\'s Request',
      description: 'Help Onmund negotiate the return of a family amulet.',
      giver: 'Onmund',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Onmund\'s friendship and availability as follower/spouse',
      type: 'optional',
      link: 'https://en.uesp.net/wiki/Skyrim:Onmund%27s_Request'
    },
    {
      ID: 'MGR02',
      name: 'Out of Balance',
      description: 'Purify the focus points for magical energy around the College.',
      giver: 'Drevis Neloren',
      location: 'College of Winterhold, Hall of Attainment, Hall of Countenance',
      level: 1,
      reward: 'Soul gems, temporary Regenerate Magicka effect',
      type: 'optional',
      link: 'https://en.uesp.net/wiki/Skyrim:Out_of_Balance'
    },
    {
      ID: 'MGRejoinQuest',
      name: 'Rejoining the College',
      description: 'Make amends for breaking the College of Winterhold rules.',
      giver: '',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Reentry into the College',
      type: 'optional',
      link: 'https://en.uesp.net/wiki/Skyrim:Rejoining_the_College'
    },
    {
      ID: 'MGR10',
      name: 'Enchanting Pick-Up',
      description: 'Sergius wants you to pick-up an item from a client for enchanting.',
      giver: 'Sergius Turrianus',
      location: '',
      level: 1,
      reward: 'Leveled gold',
      type: 'radiant',
      link: 'https://en.uesp.net/wiki/Skyrim:Enchanting_Pick-Up'
    },
    {
      ID: 'MGR11',
      name: 'Restocking Soul Gems',
      description: 'Help Sergius Turrianus to fill his stock with soul gems.',
      giver: 'Sergius Turrianus',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Various amounts of gold',
      type: 'radiant',
      link: 'https://en.uesp.net/wiki/Skyrim:Restocking_Soul_Gems'
    },
    {
      ID: 'ID',
      name: 'Tolfdir The Absent-Minded',
      description: 'Help Tolfdir find his missing alembic.',
      giver: 'Tolfdir',
      location: '',
      level: 1,
      reward: '',
      type: 'radiant',
      link: 'https://en.uesp.net/wiki/Skyrim:Tolfdir_The_Absent-Minded'
    },
    {
      ID: 'MGR30',
      name: 'Aftershock',
      description: 'Put an end to the rupture caused by the Eye of Magnus.',
      giver: 'Tolfdir',
      location: 'College of Winterhold, Radiant location',
      level: 1,
      reward: 'Leveled gold',
      type: 'radiant',
      link: 'https://en.uesp.net/wiki/Skyrim:Aftershock'
    },
    {
      ID: 'MGR20, MGR20B',
      name: 'Fetch me that Book!',
      description: 'Fetch a book for Urag gro-Shub.',
      giver: 'Urag gro-Shub',
      location: 'The Arcanaeum',
      level: 1,
      reward: 'Small amount of leveled gold',
      type: 'radiant',
      link: 'https://en.uesp.net/wiki/Skyrim:Fetch_me_that_Book!'
    },
    {
      ID: 'MGR21',
      name: 'Shalidor\'s Insights',
      description: 'Discover the writings of Shalidor and benefit from his wisdom.',
      giver: 'Urag gro-Shub',
      location: 'The Arcanaeum, various dungeons',
      level: 1,
      reward: 'Three identical "Shalidor\'s Insights" scrolls or a magic skill boost',
      type: 'radiant',
      link: 'https://en.uesp.net/wiki/Skyrim:Shalidor%27s_Insights'
    },
    {
      ID: 'MGRitual05',
      name: 'Alteration Ritual Spell',
      description: 'Find the Fang and use it to get Heartscales from a dragon.',
      giver: 'Tolfdir',
      location: 'College of Winterhold, random dungeon',
      level: 1,
      reward: 'Dragonhide spell tome, ability to purchase Master level Alteration Spells',
      type: 'master skill',
      link: 'https://en.uesp.net/wiki/Skyrim:Alteration_Ritual_Spell'
    },
    {
      ID: 'MGRitual03',
      name: 'Conjuration Ritual Spell',
      description: 'Find a Sigil Stone by summoning a Daedra.',
      giver: 'Phinis Gestor',
      location: 'College of Winterhold - Hall of Attainment',
      level: 1,
      reward: 'Flame Thrall spell tome, ability to purchase Master level Conjuration spells, Sigil Stone',
      type: 'master skill',
      link: 'https://en.uesp.net/wiki/Skyrim:Conjuration_Ritual_Spell'
    },
    {
      ID: 'MGRitual01',
      name: 'Destruction Ritual Spell',
      description: 'Learn the most powerful Destruction spells in Skyrim.',
      giver: 'Faralda',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Fire Storm spell tome, ability to purchase Master level Destruction spells',
      type: 'master skill',
      link: 'https://en.uesp.net/wiki/Skyrim:Destruction_Ritual_Spell'
    },
    {
      ID: 'MGRitual02',
      name: 'Illusion Ritual Spell',
      description: 'Find some books about Illusion Magic to learn Master Spells.',
      giver: 'Drevis Neloren',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Hysteria spell tome, ability to purchase Master level Illusion spells',
      type: 'master skill',
      link: 'https://en.uesp.net/wiki/Skyrim:Illusion_Ritual_Spell'
    },
    {
      ID: 'MGRitual04',
      name: 'Restoration Ritual Spell',
      description: 'Find the Augur of Dunlain and learn more about Restoration Magic.',
      giver: 'Colette Marence',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Bane of the Undead, ability to purchase Master level Restoration spells and Master level Alteration spells, due to a bug.',
      type: 'master skill',
      link: 'https://en.uesp.net/wiki/Skyrim:Restoration_Ritual_Spell'
    }
  ],
  bardsCollege: [
    {
      ID: 'MS05',
      name: 'Tending the Flames',
      description: 'Unveil the truth about a King; become a member of Bards College.',
      giver: 'Viarmo',
      location: 'Bards College, Dead Men\'s Respite, Blue Palace',
      level: 1,
      reward: 'Leveled gold, Bards College membership',
      type: 'side',
      link: 'https://en.uesp.net/wiki/Skyrim:Tending_the_Flames'
    },    
  ]
}
export default tableData