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
      location: '   Sleeping Giant Inn, Kynesgrove',
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
      name: 'Alduins Wall',
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
      location: 'Throat of the World, Sky Haven Temple or High Hrothgar, Septimus Signuss Outpost, Alftand, Blackreach, Tower of Mzark.',
      level: 1,
      reward: '',
      type: 'main',
      link: 'https://en.uesp.net/wiki/Skyrim:Elder_Knowledge'
    },
    {
      ID: 'MQ206',
      name: 'Alduins Bane',
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
      description: 'Capture and interrogate one of Alduins allies.',
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
      name: 'The World-Eaters Eyrie',
      description: 'Battle through Skuldafn Temple to reach Alduins portal to Sovngarde.',
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
      description: 'Discover the location of Magnus staff.',
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
      name: 'Arniels Endeavor',
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
      name: 'Brelynas Practice',
      description: 'Help Brelyna Maryon test spells.',
      giver: 'Brelyna Maryon',
      location: 'College of Winterhold',
      level: 1,
      reward: 'Resist Magic necklace',
      type: 'optional',
      link: 'https://www.google.com/url?q=https://en.uesp.net/wiki/Skyrim:Brelyna%27s_Practice&sa=D&source=editors&ust=1612703299110000&usg=AFQjCNGmCuwCgBO13kDvhHVU8hofl5PaSA'
    }
  ]
}
export default tableData