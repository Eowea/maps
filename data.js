/*
  data.js — Données du site Cartes (Battlegrounds).
  Généré / mis à jour par admin.html. À ne pas éditer à la main sauf nécessité.

  STREAMER_CONFIG : réglages communs du site (titre, réseaux, liens de navigation,
                    date de mise à jour, journal des changements, mesure d'audience).
  BATTLEGROUNDS   : la liste des cartes.
*/

const STREAMER_CONFIG = {
  "logoImage": "",
  "siteTitle": {
    "fr": "EOWEA BUILDS",
    "en": "EOWEA BUILDS"
  },
  "siteSubtitle": {
    "fr": "Recherche le build du héros qui t'intéresse grâce à la barre de recherche, aux filtres ou en cliquant dans la liste. Passe ton curseur sur les sorts et talents pour un descriptif écrit et vidéo.",
    "en": "Search for the hero build you're interested in using the search bar, filters, or by clicking in the list. Hover over spells and talents for a written and video description."
  },
  "socials": [
    {
      "label": "Twitch",
      "url": "https://www.twitch.tv/eowea",
      "icon": "twitch"
    },
    {
      "label": "YouTube",
      "url": "https://www.youtube.com/@eowea?sub_confirmation=1",
      "icon": "youtube"
    },
    {
      "label": "X",
      "url": "https://x.com/eowea_",
      "icon": "x"
    },
    {
      "label": "Discord",
      "url": "https://discord.gg/KTAKdKUe5g",
      "icon": "discord"
    },
    {
      "label": "Ko-fi",
      "url": "https://ko-fi.com/eowea",
      "icon": "kofi"
    }
  ],
  "navLinks": [
    {
      "enabled": true,
      "label": {
        "fr": "Patchs",
        "en": "Patches"
      },
      "url": "https://nexus-patch-notes.github.io",
      "newTab": true
    }
  ],
  "latestVideos": [
    {
      "title": {
        "fr": "GUIDE COMPLET: Mine Hantée",
        "en": "COMPLETE GUIDE: Haunted Mine"
      },
      "youtubeId": "https://youtu.be/6LcTtaws0yk"
    },
    {
      "title": {
        "fr": "Slapathur Master Gameplay - Aucun commentaire",
        "en": "Slapathur Master Gameplay - No commentary"
      },
      "youtubeId": "sNeMU-aHYQY"
    },
    {
      "title": {
        "fr": "Ana Grand Master Gameplay - Aucun commentaire",
        "en": "Ana Grand Master Gameplay - No commentary"
      },
      "youtubeId": "Fl23LG4v-U0"
    },
    {
      "title": {
        "fr": "Dehaka Grand Master Gameplay - Analyse & Explications",
        "en": "Dehaka Grandmaster Gameplay - Analysis & Explanations"
      },
      "youtubeId": "Nfp1w2JU-DQ"
    }
  ],
  "patchVideos": [
    {
      "title": {
        "fr": "NOUVEAU PATCH HotS : Skin Lúcio, Mine Hantée, Reworks, ...",
        "en": "NEW HotS PATCH: Lúcio Skin, Haunted Mine, Reworks, ..."
      },
      "youtubeId": "https://youtu.be/m8kifCbSy-s"
    }
  ],
  "showHeroRotation": true,
  "siteUpdate": {
    "enabled": true,
    "autoDate": true,
    "date": {
      "fr": "4 Octobre 2026",
      "en": "October 4, 2026"
    },
    "changelog": [
      {
        "date": {
          "fr": "7 Septembre 2026",
          "en": "September 7, 2026"
        },
        "items": [
          {
            "fr": "Les 90 héros sont en ligne : 38 nouvelles fiches, dont Fenix, Maiev, Méphisto, Nova, Orphéa, Qhira, Samuro et Zeratul pour boucler le roster.",
            "en": "All 90 Heroes are online: 38 new pages, including Fenix, Maiev, Mephisto, Nova, Orphea, Qhira, Samuro and Zeratul to round out the roster."
          },
          {
            "fr": "57 builds ajoutés, avec plusieurs choix sur 15 héros — jusqu'à trois sur Alarak, Chromie, Hanzo et Leoric.",
            "en": "57 builds added, with several options on 15 Heroes — up to three on Alarak, Chromie, Hanzo and Leoric."
          }
        ]
      },
      {
        "date": {
          "fr": "2 Septembre 2026",
          "en": "September 2, 2026"
        },
        "items": [
          {
            "fr": "5 nouveaux héros en ligne : Grisetête, Kel'Thuzad, Malthaël, Tassadar et Tracer.",
            "en": "5 new Heroes online: Greymane, Kel'Thuzad, Malthael, Tassadar and Tracer."
          },
          {
            "fr": "Plusieurs builds au choix sur Asmodan, Blanchetête, Cassia, Diablo, Kel'Thuzad, Ragnaros, Tassadar et Tyrande.",
            "en": "Several builds to choose from on Azmodan, Cassia, Diablo, Kel'Thuzad, Ragnaros, Tassadar, Tyrande and Whitemane."
          },
          {
            "fr": "7 codes de build corrigés sur Deckard Cain, Li-Ming, Lt. Morales, Nasibo, Sgt. Marteau et Tychus : le code que vous copiez correspond maintenant à l'arbre affiché.",
            "en": "7 build codes fixed on Deckard Cain, Li-Ming, Lt. Morales, Nazeebo, Sgt. Hammer and Tychus: the code you copy now matches the tree on the page."
          },
          {
            "fr": "Descriptions revues sur Aile de Mort, Alexstrasza, Artanis, Asmodan, Cassia, Cho, Diablo, Impérius, Malfurion, Mal'Ganis et Tyrael.",
            "en": "Descriptions reworked on Alexstrasza, Artanis, Azmodan, Cassia, Cho, Deathwing, Diablo, Imperius, Malfurion, Mal'Ganis and Tyrael."
          },
          {
            "fr": "Conseils revus sur Jaina et Sonya.",
            "en": "Tips reworked for Jaina and Sonya."
          },
          {
            "fr": "Le site mesure sa fréquentation, sans cookie ni donnée personnelle.",
            "en": "The site measures its traffic, with no cookies and no personal data."
          },
          {
            "fr": "Ajout des rotations de héros gratuits sur la page d'accueil.",
            "en": "Added free hero rotations to the home page."
          }
        ]
      },
      {
        "date": {
          "fr": "20 Août 2026",
          "en": "August 20, 2026"
        },
        "items": [
          {
            "fr": "19 nouveaux héros en ligne, dont 13 tanks.",
            "en": "19 new Heroes are live, 13 of them Tanks."
          },
          {
            "fr": "Sélecteur de forme sur les héros qui changent de capacités en combat : Abathur, Aile de Mort, Alexstrasza, Ragnaros, Tychus et Uther.",
            "en": "A form switcher on the Heroes whose abilities change mid-fight: Abathur, Deathwing, Alexstrasza, Ragnaros, Tychus and Uther."
          },
          {
            "fr": "Nouvelle carte « Bugs connus » sur les fiches concernées, avec la date du relevé.",
            "en": "New \"Known issues\" card on the Heroes concerned, with the date it was recorded."
          },
          {
            "fr": "Les conseils indiquent désormais la touche du sort dont ils parlent.",
            "en": "Tips now show the key of the Ability they mention."
          },
          {
            "fr": "La rotation gratuite se met à jour toute seule chaque semaine, et chaque héros déjà en ligne est cliquable.",
            "en": "The free rotation now updates itself every week, and every Hero already on the site is clickable."
          },
          {
            "fr": "La recherche accepte les noms sans ponctuation : « etc » trouve E.T.C.",
            "en": "Search accepts names without punctuation: \"etc\" finds E.T.C."
          }
        ]
      }
    ]
  },
  "analytics": {
    "enabled": true,
    "goatcounterCode": "eowea"
  }
};

const BATTLEGROUNDS = [
  {
    "id": "mine-hantee",
    "enabled": true,
    "name": {
      "fr": "Mine Hantée",
      "en": "Haunted Mines"
    },
    "image": "assets/maps/mine-hantee/portrait.jpg",
    "minimapImage": "assets/maps/mine-hantee/minimap.jpg",
    "headline": {
      "fr": "Deux lignes en surface, une mine ouverte en permanence en dessous. La première équipe à y ramasser 55 crânes maudits déclenche les golems sépulcraux.",
      "en": "Two lanes above ground, a permanently open mine below. The first team to gather 55 Cursed Skulls down there triggers the Grave Golems."
    },
    "objectives": {
      "fr": "À 3:00, l'armée de morts-vivants se lève dans la mine, qui reste ouverte jusqu'à la fin de la partie. Huit groupes de mineurs et un golem sépulcral y lâchent 110 crânes maudits en tout : chaque mineur en donne 2, et le golem souterrain 8 par tranche de 25 % de vie perdue, plus 6 à sa mort — 38 à lui seul. La première équipe à en ramasser 55 met fin à la phase. Les deux camps reçoivent alors leur propre golem sépulcral, qui part pousser une ligne : chaque crâne récolté lui ajoute 7 % de puissance. L'armée réapparaît 2:00 après la mort des golems.",
      "en": "At 3:00 the Undead Army rises inside the mine, which then stays open for the rest of the game. Eight groups of miners and one Grave Golem drop 110 Cursed Skulls in total: each miner gives 2, and the underground Golem gives 8 for every 25% of health it loses, plus 6 on death — 38 on its own. The first team to gather 55 ends the phase. Both sides then get their own Grave Golem, which walks down a lane to push: every skull collected adds 7% to its power. The Army returns 2:00 after the Golems die."
    },
    "tips": [
      {
        "fr": "Les groupes de mineurs en haut à droite et en bas à gauche rapportent 10 crânes au lieu de 8. Commence toujours par eux, puis enchaîne sur les groupes voisins encore debout.",
        "en": "The miner groups in the top-right and bottom-left drop 10 skulls instead of 8. Always start there, then move on to the nearest groups still standing."
      },
      {
        "fr": "Sous terre, la vision des héros tombe de 12 à 6,5 : on ne voit plus arriver l'équipe adverse, et certaines compétences perdent de la portée. Reste près d'un allié ou d'une unité qui donne de la vision avant d'engager.",
        "en": "Underground, Hero vision drops from 12 to 6.5: you no longer see the enemy team coming, and some Abilities lose range. Stay near an ally or a unit that grants vision before committing."
      },
      {
        "fr": "Les deux tours de guet gardent les entrées gauche et droite de la mine. Les tenir, c'est voir l'équipe adverse descendre avant qu'elle n'atteigne les crânes.",
        "en": "The two Watch Towers overlook the left and right entrances to the mine. Holding them means seeing the enemy team go down before they reach the skulls."
      },
      {
        "fr": "Prends le camp de sapeurs dès 0:30, avant que la mine n'ouvre : c'est de la pression gratuite tant que personne ne peut y répondre.",
        "en": "Take the Sapper Camp as early as 0:30, before the mine opens: it is free pressure while nobody can answer it."
      },
      {
        "fr": "Enchaîne sur le camp de géants de siège vers 2:20–2:40, juste avant l'apparition de l'armée : les géants poussent pendant que les dix héros sont sous terre.",
        "en": "Follow up with the Siege Camp around 2:20–2:40, right before the Army spawns: the giants push while all ten Heroes are underground."
      },
      {
        "fr": "Descendre à cinq n'a rien d'obligatoire. Si ton équipe pousse mieux qu'elle ne se bat, laisser une ligne travailler pendant que les autres ramassent rapporte parfois plus que les crânes eux-mêmes.",
        "en": "Going down five-strong is never mandatory. If your team pushes better than it fights, leaving someone to work a lane while the rest collect can pay more than the skulls themselves."
      },
      {
        "fr": "Entre la fin de la phase et l'arrivée des golems, il reste une trentaine de secondes : c'est le moment de prendre le camp de siège de ton côté pour accompagner ton golem.",
        "en": "There is about half a minute between the end of the phase and the Golems arriving: that is the window to take the Siege Camp on your side and escort your Golem."
      },
      {
        "fr": "La mine est pleine de murs infranchissables. Les compétences de contrôle et de déplacement y valent bien plus qu'en surface, dans un sens comme dans l'autre.",
        "en": "The mine is full of impassable terrain. Crowd control and mobility Abilities are worth far more down there than above ground — for both teams."
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "GUIDE COMPLET : Mine Hantée",
          "en": "COMPLETE GUIDE: Haunted Mines"
        },
        "youtubeId": "https://youtu.be/6LcTtaws0yk"
      }
    ],
    "hotspots": [
      {
        "id": "p1",
        "type": "camp",
        "x": 16,
        "y": 37.5,
        "name": {
          "fr": "Camp de sapeurs — haut",
          "en": "Sapper Camp — top"
        },
        "description": {
          "fr": "Un au centre de chaque ligne. Trois sapeurs qui foncent sur la première structure venue et explosent dessus. Disponible à 0:30, réapparaît 2:30 après avoir été pris. Un étourdissement, un silence ou une projection suffit à interrompre leur course.",
          "en": "One in the middle of each lane. Three Sappers that sprint at the nearest structure and explode on it. Available at 0:30, respawns 2:30 after being taken. A stun, a silence or a knockback is enough to stop their run."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8000",
        "type": "camp",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Camp de sapeurs — bas",
          "en": "Sapper Camp — bottom"
        },
        "description": {
          "fr": "Un au centre de chaque ligne. Trois sapeurs qui foncent sur la première structure venue et explosent dessus. Disponible à 0:30, réapparaît 2:30 après avoir été pris. Un étourdissement, un silence ou une projection suffit à interrompre leur course.",
          "en": "One in the middle of each lane. Three Sappers that sprint at the nearest structure and explode on it. Available at 0:30, respawns 2:30 after being taken. A stun, a silence or a knockback is enough to stop their run."
        },
        "image": ""
      },
      {
        "id": "p2",
        "type": "camp",
        "x": 16,
        "y": 65.5,
        "name": {
          "fr": "Camp de géants de siège — haut, gauche",
          "en": "Siege Camp — top, left"
        },
        "description": {
          "fr": "À gauche de la ligne du haut et à droite de la ligne du bas. Deux géants qui lancent des rochers esquivables et infligent 100 % de dégâts supplémentaires aux structures, sans avoir besoin de s'en approcher. Disponible à 0:30, réapparaît 3:00 après avoir été pris.",
          "en": "Left side of the top lane, right side of the bottom lane. Two Siege Giants that throw dodgeable boulders and deal 100% bonus damage to structures, without having to close in. Available at 0:30, respawns 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8001",
        "type": "camp",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Camp de géants de siège — bas, droite",
          "en": "Siege Camp — bottom, right"
        },
        "description": {
          "fr": "À gauche de la ligne du haut et à droite de la ligne du bas. Deux géants qui lancent des rochers esquivables et infligent 100 % de dégâts supplémentaires aux structures, sans avoir besoin de s'en approcher. Disponible à 0:30, réapparaît 3:00 après avoir été pris.",
          "en": "Left side of the top lane, right side of the bottom lane. Two Siege Giants that throw dodgeable boulders and deal 100% bonus damage to structures, without having to close in. Available at 0:30, respawns 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8002",
        "type": "objectif",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Entrée de la mine — voie du haut",
          "en": "Mine entrance — top lane"
        },
        "description": {
          "fr": "L'un des quatre puits de la mine : au milieu de la voie du haut, au milieu de celle du bas, et près de chaque tour de guet. On y entre en interagissant avec le puits. Sous terre, la vision des héros tombe de 12 à 6,5.",
          "en": "One of the four Mine Shafts: middle of the top lane, middle of the bottom lane, and near each Watch Tower. Interact with the shaft to go in. Underground, Hero vision drops from 12 to 6.5."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8003",
        "type": "objectif",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Entrée de la mine — voie du bas",
          "en": "Mine entrance — bottom lane"
        },
        "description": {
          "fr": "L'un des quatre puits de la mine : au milieu de la voie du haut, au milieu de celle du bas, et près de chaque tour de guet. On y entre en interagissant avec le puits. Sous terre, la vision des héros tombe de 12 à 6,5.",
          "en": "One of the four Mine Shafts: middle of the top lane, middle of the bottom lane, and near each Watch Tower. Interact with the shaft to go in. Underground, Hero vision drops from 12 to 6.5."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8004",
        "type": "objectif",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Entrée de la mine — gauche",
          "en": "Mine entrance — left"
        },
        "description": {
          "fr": "L'un des quatre puits de la mine : au milieu de la voie du haut, au milieu de celle du bas, et près de chaque tour de guet. On y entre en interagissant avec le puits. Sous terre, la vision des héros tombe de 12 à 6,5.",
          "en": "One of the four Mine Shafts: middle of the top lane, middle of the bottom lane, and near each Watch Tower. Interact with the shaft to go in. Underground, Hero vision drops from 12 to 6.5."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8005",
        "type": "objectif",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Entrée de la mine — droite",
          "en": "Mine entrance — right"
        },
        "description": {
          "fr": "L'un des quatre puits de la mine : au milieu de la voie du haut, au milieu de celle du bas, et près de chaque tour de guet. On y entre en interagissant avec le puits. Sous terre, la vision des héros tombe de 12 à 6,5.",
          "en": "One of the four Mine Shafts: middle of the top lane, middle of the bottom lane, and near each Watch Tower. Interact with the shaft to go in. Underground, Hero vision drops from 12 to 6.5."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8006",
        "type": "tour",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Tour de guet — gauche",
          "en": "Watch Tower — left"
        },
        "description": {
          "fr": "Près de l'entrée gauche de la mine. Elle donne la vision sur le puits voisin : qui la tient voit qui entre dans la mine et qui en sort. On la capture en restant dans la zone ; elle redevient neutre après 45 secondes sans personne.",
          "en": "Near the left entrance to the Mines. It gives vision of the nearby shaft: whoever holds it sees who goes in and out. Capture it by standing in the area; it turns neutral again after 45 seconds unoccupied."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8007",
        "type": "tour",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Tour de guet — droite",
          "en": "Watch Tower — right"
        },
        "description": {
          "fr": "Le symétrique de la tour de gauche, près de l'entrée droite de la mine. Même rôle : voir qui emprunte le puits voisin.",
          "en": "The mirror of the left tower, near the right entrance to the Mines. Same job: seeing who uses the nearby shaft."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8008",
        "type": "fontaine",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8009",
        "type": "fontaine",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      }
    ]
  },
  {
    "id": "passe-alterac",
    "enabled": true,
    "name": {
      "fr": "Passe d'Alterac",
      "en": "Alterac Pass"
    },
    "image": "assets/maps/passe-alterac/portrait.jpg",
    "minimapImage": "assets/maps/passe-alterac/minimap.jpg",
    "headline": {
      "fr": "Deux camps d'emprisonnement à prendre et à tenir : chacun libère une cavalerie qui charge les voies. Les idoles sont remplacées par des généraux.",
      "en": "Two Prison Camps to take and hold: each one releases a Cavalry that charges down the lanes. The Cores are replaced by Generals."
    },
    "objectives": {
      "fr": "Premier objectif à 3:00, puis toutes les 1:50 à 2:30. Chaque équipe libère la cavalerie enfermée dans le camp adverse : trois secondes d'incantation pour lancer la capture, puis un décompte de 25 secondes — 10 de plus à chaque phase, jusqu'à 55. Les camps se reprennent, héros comme serviteurs peuvent les retourner. La cavalerie libérée descend les trois voies et donne 30 % de vitesse et 10 % de dégâts aux héros alliés proches.",
      "en": "First objective at 3:00, then every 1:50 to 2:30. Each team frees the Cavalry held in the enemy camp: a three-second channel starts the capture, then a 25-second countdown — 10 more each phase, up to 55. Camps can be retaken, by Heroes and Minions alike. The freed Cavalry marches down all three lanes and grants nearby allied Heroes 30% Movement Speed and 10% more damage."
    },
    "tips": [
      {
        "fr": "Les idoles sont remplacées par des généraux. Ils se déplacent et se défendent : charge toutes les 6 secondes, tourbillon toutes les 12, et environ 1 % de vie regagnée par seconde hors combat.",
        "en": "The Cores are replaced by Generals. They move and fight back: Charge every 6 seconds, Whirlwind every 12, and about 1% Health regained per second out of combat."
      },
      {
        "fr": "Un général gagne 20 points d'armure par voie où un fort ou un bastion tient encore. Abattre les bastions, c'est le déshabiller avant de l'attaquer.",
        "en": "A General gains 20 Armor for each lane where a Fort or Keep still stands. Taking down Keeps strips him before you attack."
      },
      {
        "fr": "Avant de plonger sur le général : descends un bastion sous 50 % de vie s'il en reste deux, sous 30 % s'il n'en reste qu'un.",
        "en": "Before diving the General: bring a Keep below 50% Health if two remain, below 30% if only one does."
      },
      {
        "fr": "Le premier objectif rapporte peu. Soaker les lignes pendant qu'il se joue vaut souvent mieux que de le contester à cinq.",
        "en": "The first objective pays little. Soaking the lanes while it plays out often beats contesting it five-strong."
      },
      {
        "fr": "Utilise la fontaine avant 1:00 : elle sera de nouveau disponible pour le premier objectif à 3:00.",
        "en": "Use the fountain before 1:00: it will be back up for the first objective at 3:00."
      },
      {
        "fr": "Les six fosses de boue en bordure ralentissent de 16 % par seconde, jusqu'à 60 %. On récupère à 50 % par seconde une fois au sec.",
        "en": "The six mud pits along the edges slow by 16% per second, up to 60%. You recover at 50% per second once back on solid ground."
      },
      {
        "fr": "Les catapultes sont remplacées par des reavers, qui marchent devant les serviteurs. Une vague accumulée fait très mal aux structures.",
        "en": "Catapults are replaced by Reavers, which walk ahead of the minions. A stacked wave hurts structures badly."
      },
      {
        "fr": "Les gardes des camps ne se régénèrent pas : inutile de les tuer si tu peux simplement lancer la capture.",
        "en": "Camp Guards do not regenerate: no need to kill them if you can simply start the capture."
      }
    ],
    "hotspots": [
      {
        "id": "ppas1",
        "type": "objectif",
        "x": 44.4,
        "y": 41.8,
        "name": {
          "fr": "Camp d'emprisonnement — haut, gauche",
          "en": "Prison Camp — top, left"
        },
        "description": {
          "fr": "Un par équipe. Trois secondes d'incantation lancent la capture ; l'adversaire peut la mettre en pause en incantant à son tour, et l'arrêter après trois secondes sans interruption. Des gardes sortent des maisons voisines — un au départ, jusqu'à quatre à la quatrième phase.",
          "en": "One per team. A three-second channel starts the capture; the enemy can pause it by channelling in turn, and stop it after three uninterrupted seconds. Guards come out of the nearby houses — one at first, up to four by the fourth phase."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800a",
        "type": "objectif",
        "x": 55.9,
        "y": 38,
        "name": {
          "fr": "Camp d'emprisonnement — haut, droite",
          "en": "Prison Camp — top, right"
        },
        "description": {
          "fr": "Un par équipe. Trois secondes d'incantation lancent la capture ; l'adversaire peut la mettre en pause en incantant à son tour, et l'arrêter après trois secondes sans interruption. Des gardes sortent des maisons voisines — un au départ, jusqu'à quatre à la quatrième phase.",
          "en": "One per team. A three-second channel starts the capture; the enemy can pause it by channelling in turn, and stop it after three uninterrupted seconds. Guards come out of the nearby houses — one at first, up to four by the fourth phase."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800b",
        "type": "objectif",
        "x": 44.5,
        "y": 60.4,
        "name": {
          "fr": "Camp d'emprisonnement — bas, gauche",
          "en": "Prison Camp — bottom, left"
        },
        "description": {
          "fr": "Un par équipe. Trois secondes d'incantation lancent la capture ; l'adversaire peut la mettre en pause en incantant à son tour, et l'arrêter après trois secondes sans interruption. Des gardes sortent des maisons voisines — un au départ, jusqu'à quatre à la quatrième phase.",
          "en": "One per team. A three-second channel starts the capture; the enemy can pause it by channelling in turn, and stop it after three uninterrupted seconds. Guards come out of the nearby houses — one at first, up to four by the fourth phase."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800c",
        "type": "objectif",
        "x": 55.9,
        "y": 56.3,
        "name": {
          "fr": "Camp d'emprisonnement — bas, droite",
          "en": "Prison Camp — bottom, right"
        },
        "description": {
          "fr": "Un par équipe. Trois secondes d'incantation lancent la capture ; l'adversaire peut la mettre en pause en incantant à son tour, et l'arrêter après trois secondes sans interruption. Des gardes sortent des maisons voisines — un au départ, jusqu'à quatre à la quatrième phase.",
          "en": "One per team. A three-second channel starts the capture; the enemy can pause it by channelling in turn, and stop it after three uninterrupted seconds. Guards come out of the nearby houses — one at first, up to four by the fourth phase."
        },
        "image": ""
      },
      {
        "id": "ppas2",
        "type": "autre",
        "x": 22.4,
        "y": 50.6,
        "name": {
          "fr": "Général — gauche",
          "en": "General — left"
        },
        "description": {
          "fr": "Remplace l'idole de chaque équipe. Il charge toutes les 6 secondes, tourbillonne toutes les 12, et récupère environ 1 % de vie par seconde hors combat. Sa vie maximale monte de 405 points par minute pendant vingt minutes.",
          "en": "Replaces each team's Core. He charges every 6 seconds, whirlwinds every 12, and regains about 1% Health per second out of combat. His maximum Health rises by 405 per minute for twenty minutes."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800d",
        "type": "autre",
        "x": 77,
        "y": 47.7,
        "name": {
          "fr": "Général — droite",
          "en": "General — right"
        },
        "description": {
          "fr": "Remplace l'idole de chaque équipe. Il charge toutes les 6 secondes, tourbillonne toutes les 12, et récupère environ 1 % de vie par seconde hors combat. Sa vie maximale monte de 405 points par minute pendant vingt minutes.",
          "en": "Replaces each team's Core. He charges every 6 seconds, whirlwinds every 12, and regains about 1% Health per second out of combat. His maximum Health rises by 405 per minute for twenty minutes."
        },
        "image": ""
      },
      {
        "id": "ppas3",
        "type": "camp",
        "x": 36.5,
        "y": 56.7,
        "name": {
          "fr": "Camp de siège — gnolls, milieu gauche",
          "en": "Siege Camp — Gnolls, middle left"
        },
        "description": {
          "fr": "Deux camps sur la voie du milieu, trois gnolls chacun. Ils réduisent l'armure des structures qu'ils frappent. Disponibles à 0:30, ils réapparaissent 1:30 après avoir été pris — le délai le plus court de toutes les cartes.",
          "en": "Two camps on the middle lane, three Gnolls each. They reduce the Armor of the structures they hit. Available at 0:30, back 1:30 after being taken — the shortest respawn of any map."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800e",
        "type": "camp",
        "x": 63.4,
        "y": 41.4,
        "name": {
          "fr": "Camp de siège — gnolls, milieu droite",
          "en": "Siege Camp — Gnolls, middle right"
        },
        "description": {
          "fr": "Deux camps sur la voie du milieu, trois gnolls chacun. Ils réduisent l'armure des structures qu'ils frappent. Disponibles à 0:30, ils réapparaissent 1:30 après avoir été pris — le délai le plus court de toutes les cartes.",
          "en": "Two camps on the middle lane, three Gnolls each. They reduce the Armor of the structures they hit. Available at 0:30, back 1:30 after being taken — the shortest respawn of any map."
        },
        "image": ""
      },
      {
        "id": "ppas4",
        "type": "camp",
        "x": 48.1,
        "y": 19.6,
        "name": {
          "fr": "Camp de boss — géant de glace, haut",
          "en": "Boss Camp — Ice Giant, top"
        },
        "description": {
          "fr": "Un de chaque côté, sur les voies du haut et du bas. Disponible à 5:00, réapparaît 5:00 après avoir été pris. Immunisé contre la corruption.",
          "en": "One on each side, on the top and bottom lanes. Available at 5:00, back 5:00 after being taken. Immune to Bribe."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800f",
        "type": "camp",
        "x": 51.9,
        "y": 77.6,
        "name": {
          "fr": "Camp de boss — géant de glace, bas",
          "en": "Boss Camp — Ice Giant, bottom"
        },
        "description": {
          "fr": "Un de chaque côté, sur les voies du haut et du bas. Disponible à 5:00, réapparaît 5:00 après avoir été pris. Immunisé contre la corruption.",
          "en": "One on each side, on the top and bottom lanes. Available at 5:00, back 5:00 after being taken. Immune to Bribe."
        },
        "image": ""
      },
      {
        "id": "ppas5",
        "type": "fontaine",
        "x": 25.6,
        "y": 38.3,
        "name": {
          "fr": "Fontaine de soins — haut, gauche",
          "en": "Healing fountain — top, left"
        },
        "description": {
          "fr": "Deux minutes de recharge. À dépenser avant 1:00 pour la retrouver disponible au premier objectif.",
          "en": "Two-minute cooldown. Spend it before 1:00 to have it back for the first objective."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v0",
        "type": "fontaine",
        "x": 31.6,
        "y": 52.8,
        "name": {
          "fr": "Fontaine de soins — milieu, gauche",
          "en": "Healing fountain — middle, left"
        },
        "description": {
          "fr": "Deux minutes de recharge. À dépenser avant 1:00 pour la retrouver disponible au premier objectif.",
          "en": "Two-minute cooldown. Spend it before 1:00 to have it back for the first objective."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v1",
        "type": "fontaine",
        "x": 27.7,
        "y": 62.4,
        "name": {
          "fr": "Fontaine de soins — bas, gauche",
          "en": "Healing fountain — bottom, left"
        },
        "description": {
          "fr": "Deux minutes de recharge. À dépenser avant 1:00 pour la retrouver disponible au premier objectif.",
          "en": "Two-minute cooldown. Spend it before 1:00 to have it back for the first objective."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800g",
        "type": "fontaine",
        "x": 72.4,
        "y": 35.8,
        "name": {
          "fr": "Fontaine de soins — haut, droite",
          "en": "Healing fountain — top, right"
        },
        "description": {
          "fr": "Deux minutes de recharge. À dépenser avant 1:00 pour la retrouver disponible au premier objectif.",
          "en": "Two-minute cooldown. Spend it before 1:00 to have it back for the first objective."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v2",
        "type": "fontaine",
        "x": 68.4,
        "y": 45.3,
        "name": {
          "fr": "Fontaine de soins — milieu, droite",
          "en": "Healing fountain — middle, right"
        },
        "description": {
          "fr": "Deux minutes de recharge. À dépenser avant 1:00 pour la retrouver disponible au premier objectif.",
          "en": "Two-minute cooldown. Spend it before 1:00 to have it back for the first objective."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v3",
        "type": "fontaine",
        "x": 74.7,
        "y": 60.2,
        "name": {
          "fr": "Fontaine de soins — bas, droite",
          "en": "Healing fountain — bottom, right"
        },
        "description": {
          "fr": "Deux minutes de recharge. À dépenser avant 1:00 pour la retrouver disponible au premier objectif.",
          "en": "Two-minute cooldown. Spend it before 1:00 to have it back for the first objective."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v4",
        "type": "autre",
        "x": 41.3,
        "y": 33.3,
        "name": {
          "fr": "Fosse de boue — haut, gauche",
          "en": "Mud Pit — top, left"
        },
        "description": {
          "fr": "Six fosses aux abords de la zone centrale, près des voies latérales. Un héros qui y entre perd 16 % de vitesse de déplacement par seconde, jusqu'à 60 %, tant qu'il y reste ; une fois sur la terre ferme, il la regagne à raison de 50 % par seconde.",
          "en": "Six pits at the edges of the middle area, close to the side lanes. A Hero who steps in loses 16% Movement Speed per second, up to 60%, for as long as they stay; back on solid ground, they regain it at 50% per second."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v5",
        "type": "autre",
        "x": 49.4,
        "y": 32.8,
        "name": {
          "fr": "Fosse de boue — haut, milieu",
          "en": "Mud Pit — top, middle"
        },
        "description": {
          "fr": "Six fosses aux abords de la zone centrale, près des voies latérales. Un héros qui y entre perd 16 % de vitesse de déplacement par seconde, jusqu'à 60 %, tant qu'il y reste ; une fois sur la terre ferme, il la regagne à raison de 50 % par seconde.",
          "en": "Six pits at the edges of the middle area, close to the side lanes. A Hero who steps in loses 16% Movement Speed per second, up to 60%, for as long as they stay; back on solid ground, they regain it at 50% per second."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v6",
        "type": "autre",
        "x": 61,
        "y": 37.6,
        "name": {
          "fr": "Fosse de boue — haut, droite",
          "en": "Mud Pit — top, right"
        },
        "description": {
          "fr": "Six fosses aux abords de la zone centrale, près des voies latérales. Un héros qui y entre perd 16 % de vitesse de déplacement par seconde, jusqu'à 60 %, tant qu'il y reste ; une fois sur la terre ferme, il la regagne à raison de 50 % par seconde.",
          "en": "Six pits at the edges of the middle area, close to the side lanes. A Hero who steps in loses 16% Movement Speed per second, up to 60%, for as long as they stay; back on solid ground, they regain it at 50% per second."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v7",
        "type": "autre",
        "x": 38.9,
        "y": 60,
        "name": {
          "fr": "Fosse de boue — bas, gauche",
          "en": "Mud Pit — bottom, left"
        },
        "description": {
          "fr": "Six fosses aux abords de la zone centrale, près des voies latérales. Un héros qui y entre perd 16 % de vitesse de déplacement par seconde, jusqu'à 60 %, tant qu'il y reste ; une fois sur la terre ferme, il la regagne à raison de 50 % par seconde.",
          "en": "Six pits at the edges of the middle area, close to the side lanes. A Hero who steps in loses 16% Movement Speed per second, up to 60%, for as long as they stay; back on solid ground, they regain it at 50% per second."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v8",
        "type": "autre",
        "x": 49.9,
        "y": 64.3,
        "name": {
          "fr": "Fosse de boue — bas, milieu",
          "en": "Mud Pit — bottom, middle"
        },
        "description": {
          "fr": "Six fosses aux abords de la zone centrale, près des voies latérales. Un héros qui y entre perd 16 % de vitesse de déplacement par seconde, jusqu'à 60 %, tant qu'il y reste ; une fois sur la terre ferme, il la regagne à raison de 50 % par seconde.",
          "en": "Six pits at the edges of the middle area, close to the side lanes. A Hero who steps in loses 16% Movement Speed per second, up to 60%, for as long as they stay; back on solid ground, they regain it at 50% per second."
        },
        "image": ""
      },
      {
        "id": "paltmutq392v9",
        "type": "autre",
        "x": 58.3,
        "y": 63.8,
        "name": {
          "fr": "Fosse de boue — bas, droite",
          "en": "Mud Pit — bottom, right"
        },
        "description": {
          "fr": "Six fosses aux abords de la zone centrale, près des voies latérales. Un héros qui y entre perd 16 % de vitesse de déplacement par seconde, jusqu'à 60 %, tant qu'il y reste ; une fois sur la terre ferme, il la regagne à raison de 50 % par seconde.",
          "en": "Six pits at the edges of the middle area, close to the side lanes. A Hero who steps in loses 16% Movement Speed per second, up to 60%, for as long as they stay; back on solid ground, they regain it at 50% per second."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "jardins-de-terreur",
    "enabled": true,
    "name": {
      "fr": "Jardins de terreur",
      "en": "Garden of Terror"
    },
    "image": "assets/maps/jardins-de-terreur/portrait.jpg",
    "minimapImage": "assets/maps/jardins-de-terreur/minimap.jpg",
    "headline": {
      "fr": "La reine Belladone fait pousser des graines gardées par des traîne-racines. Trois graines réunies, et une terreur de jardin part sur chaque voie.",
      "en": "Queen Nightshade grows Seeds guarded by Shamblers. Gather three and a Garden Terror burrows to every lane."
    },
    "objectives": {
      "fr": "Premier objectif à 2:30. La reine Belladone fait pousser une graine, gardée par des traîne-racines qu'il faut abattre ; ramasser la graine demande six secondes d'incantation. Trois graines réunies font surgir une terreur de jardin sur chaque voie. Chacune répand une prolifération qui neutralise les structures ennemies jusqu'à dix secondes et leur inflige 10 % de leur vie maximale par seconde. Les graines suivantes arrivent 0:50 à 1:20 après une récolte, ou 1:30 à 2:00 après la mort des terreurs.",
      "en": "First objective at 2:30. Queen Nightshade grows a Seed, guarded by Shamblers that have to be cleared; picking the Seed up takes a six-second channel. Three Seeds bring out a Garden Terror in every lane. Each spreads an Overgrowth that disables enemy Structures for up to ten seconds and deals 10% of their maximum Health per second. The next Seeds arrive 0:50 to 1:20 after a pickup, or 1:30 to 2:00 after the Terrors die."
    },
    "tips": [
      {
        "fr": "Six camps sur cette carte, plus que sur la plupart : trois de siège et trois de bruisers. Il y a toujours quelque chose à prendre.",
        "en": "Six camps on this map, more than most: three Siege and three Bruiser. There is always something to take."
      },
      {
        "fr": "Prends le camp de siège du milieu entre 0:30 et 0:42 : il arrive en ligne devant tes serviteurs.",
        "en": "Take the middle Siege Camp between 0:30 and 0:42: it reaches the lane ahead of your minions."
      },
      {
        "fr": "Conteste l'objectif à quatre et laisse le cinquième défendre contre les mercenaires adverses — c'est le moment où ils poussent.",
        "en": "Contest the objective four-strong and leave the fifth to defend against enemy mercenaries — that is when they push."
      },
      {
        "fr": "Une terreur de jardin qui neutralise les structures ouvre la porte : plonge pendant que la prolifération tient.",
        "en": "A Garden Terror that disables structures opens the door: dive while the Overgrowth holds."
      },
      {
        "fr": "En défense, détruis la prolifération en priorité. Tant qu'elle tient, tes tours ne tirent pas.",
        "en": "On defence, destroy the Overgrowth first. While it stands, your towers do not fire."
      },
      {
        "fr": "Les traîne-racines qui gardent la graine se tuent vite à plusieurs. Seul, l'incantation de six secondes sera interrompue.",
        "en": "The Shamblers guarding the Seed die fast to several Heroes. Alone, the six-second channel will be interrupted."
      }
    ],
    "hotspots": [
      {
        "id": "pjar6",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Graine — haut, gauche",
          "en": "Seed — top, left"
        },
        "description": {
          "fr": "Invoquée régulièrement par la reine Belladone et gardée par des traîne-racines. Six secondes d'incantation pour la ramasser. Trois graines suffisent à lancer les terreurs de jardin.",
          "en": "Summoned periodically by Queen Nightshade and guarded by Shamblers. A six-second channel to pick it up. Three Seeds are enough to launch the Garden Terrors."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800h",
        "type": "objectif",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Graine — haut, milieu",
          "en": "Seed — top, middle"
        },
        "description": {
          "fr": "Invoquée régulièrement par la reine Belladone et gardée par des traîne-racines. Six secondes d'incantation pour la ramasser. Trois graines suffisent à lancer les terreurs de jardin.",
          "en": "Summoned periodically by Queen Nightshade and guarded by Shamblers. A six-second channel to pick it up. Three Seeds are enough to launch the Garden Terrors."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800i",
        "type": "objectif",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Graine — haut, droite",
          "en": "Seed — top, right"
        },
        "description": {
          "fr": "Invoquée régulièrement par la reine Belladone et gardée par des traîne-racines. Six secondes d'incantation pour la ramasser. Trois graines suffisent à lancer les terreurs de jardin.",
          "en": "Summoned periodically by Queen Nightshade and guarded by Shamblers. A six-second channel to pick it up. Three Seeds are enough to launch the Garden Terrors."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800j",
        "type": "objectif",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Graine — bas, gauche",
          "en": "Seed — bottom, left"
        },
        "description": {
          "fr": "Invoquée régulièrement par la reine Belladone et gardée par des traîne-racines. Six secondes d'incantation pour la ramasser. Trois graines suffisent à lancer les terreurs de jardin.",
          "en": "Summoned periodically by Queen Nightshade and guarded by Shamblers. A six-second channel to pick it up. Three Seeds are enough to launch the Garden Terrors."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800k",
        "type": "objectif",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Graine — bas, milieu",
          "en": "Seed — bottom, middle"
        },
        "description": {
          "fr": "Invoquée régulièrement par la reine Belladone et gardée par des traîne-racines. Six secondes d'incantation pour la ramasser. Trois graines suffisent à lancer les terreurs de jardin.",
          "en": "Summoned periodically by Queen Nightshade and guarded by Shamblers. A six-second channel to pick it up. Three Seeds are enough to launch the Garden Terrors."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800l",
        "type": "objectif",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Graine — bas, droite",
          "en": "Seed — bottom, right"
        },
        "description": {
          "fr": "Invoquée régulièrement par la reine Belladone et gardée par des traîne-racines. Six secondes d'incantation pour la ramasser. Trois graines suffisent à lancer les terreurs de jardin.",
          "en": "Summoned periodically by Queen Nightshade and guarded by Shamblers. A six-second channel to pick it up. Three Seeds are enough to launch the Garden Terrors."
        },
        "image": ""
      },
      {
        "id": "pjar7",
        "type": "camp",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Camp de siège — haut, gauche",
          "en": "Siege Camp — top, left"
        },
        "description": {
          "fr": "Quatre camps — à gauche de la voie du haut, deux au milieu, à droite de la voie du bas —, deux géants de siège chacun. Ils infligent 100 % de dégâts supplémentaires aux structures. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Four camps — left of the top lane, two in the middle, right of the bottom lane — with two Siege Giants each. They deal 100% bonus damage to Structures. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800m",
        "type": "camp",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Camp de siège — milieu, gauche",
          "en": "Siege Camp — middle, left"
        },
        "description": {
          "fr": "Quatre camps — à gauche de la voie du haut, deux au milieu, à droite de la voie du bas —, deux géants de siège chacun. Ils infligent 100 % de dégâts supplémentaires aux structures. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Four camps — left of the top lane, two in the middle, right of the bottom lane — with two Siege Giants each. They deal 100% bonus damage to Structures. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800n",
        "type": "camp",
        "x": 68,
        "y": 26,
        "name": {
          "fr": "Camp de siège — milieu, droite",
          "en": "Siege Camp — middle, right"
        },
        "description": {
          "fr": "Quatre camps — à gauche de la voie du haut, deux au milieu, à droite de la voie du bas —, deux géants de siège chacun. Ils infligent 100 % de dégâts supplémentaires aux structures. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Four camps — left of the top lane, two in the middle, right of the bottom lane — with two Siege Giants each. They deal 100% bonus damage to Structures. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800o",
        "type": "camp",
        "x": 82,
        "y": 26,
        "name": {
          "fr": "Camp de siège — bas, droite",
          "en": "Siege Camp — bottom, right"
        },
        "description": {
          "fr": "Quatre camps — à gauche de la voie du haut, deux au milieu, à droite de la voie du bas —, deux géants de siège chacun. Ils infligent 100 % de dégâts supplémentaires aux structures. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Four camps — left of the top lane, two in the middle, right of the bottom lane — with two Siege Giants each. They deal 100% bonus damage to Structures. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pjar8",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — haut, droite",
          "en": "Bruiser Camp — top, right"
        },
        "description": {
          "fr": "Deux camps, sur les voies du haut et du bas : trois chevaliers et un sorcier. Le sorcier pose un champ d'armure des sorts autour des unités proches. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps, on the top and bottom lanes: three Knights and a Wizard. The Wizard lays a Spell Armor field around nearby units. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800p",
        "type": "camp",
        "x": 12,
        "y": 40,
        "name": {
          "fr": "Camp de bruisers — bas, gauche",
          "en": "Bruiser Camp — bottom, left"
        },
        "description": {
          "fr": "Deux camps, sur les voies du haut et du bas : trois chevaliers et un sorcier. Le sorcier pose un champ d'armure des sorts autour des unités proches. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps, on the top and bottom lanes: three Knights and a Wizard. The Wizard lays a Spell Armor field around nearby units. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pjar9",
        "type": "fontaine",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge. Avec un objectif toutes les minutes environ, elle se gère comme une ressource de phase.",
          "en": "Two-minute cooldown. With an objective roughly every minute, treat it as a per-phase resource."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800q",
        "type": "fontaine",
        "x": 26,
        "y": 40,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge. Avec un objectif toutes les minutes environ, elle se gère comme une ressource de phase.",
          "en": "Two-minute cooldown. With an objective roughly every minute, treat it as a per-phase resource."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "temple-hanamura",
    "enabled": true,
    "name": {
      "fr": "Temple d'Hanamura",
      "en": "Hanamura Temple"
    },
    "image": "assets/maps/temple-hanamura/portrait.jpg",
    "minimapImage": "assets/maps/temple-hanamura/minimap.jpg",
    "headline": {
      "fr": "Un seul convoi, au centre, que les deux équipes se disputent. Mené à destination, il bombarde les forts adverses.",
      "en": "A single payload at the centre, contested by both teams. Escorted to its destination, it bombards the enemy forts."
    },
    "objectives": {
      "fr": "Un convoi, et un seul, apparaît au centre toutes les trois minutes. Il avance tant que des héros se tiennent à côté : un héros donne 50 % de vitesse, deux 60 %, trois 70 % — au-delà, rien de plus. Trois trajets possibles, de 16 à 36 secondes selon le nombre d'escorteurs. Arrivé à destination, le convoi tire 12 salves en 15 secondes, à 2 280 points de dégâts par tir sur les structures ; les idoles encaissent 20 % de moins. L'équipe victorieuse récupère des globes de régénération.",
      "en": "One payload, and only one, spawns at the centre every three minutes. It moves as long as Heroes stand beside it: one Hero gives 50% speed, two 60%, three 70% — beyond that, nothing more. Three possible routes, 16 to 36 seconds depending on the escort. On arrival the payload fires 12 shots over 15 seconds, 2,280 damage each against structures; Cores take 20% less. The winning team picks up Regeneration Globes."
    },
    "tips": [
      {
        "fr": "Deux voies seulement, et six camps : la carte se joue autant sur les mercenaires que sur le convoi.",
        "en": "Only two lanes, and six camps: this map is played on the mercenaries as much as on the payload."
      },
      {
        "fr": "Les camps de reconnaissance réapparaissent une seconde après avoir été pris. Repasse dessus dès que tu passes à côté.",
        "en": "Recon Camps come back one second after being taken. Retake them every time you walk past."
      },
      {
        "fr": "Garde les tourelles du camp de fortification pour la fin de partie plutôt que de les poser tôt : 90 dégâts par seconde pendant 45 secondes pèsent plus lourd sur une base entamée.",
        "en": "Save the Fortification Camp turrets for the late game rather than dropping them early: 90 damage per second for 45 seconds weighs more on a worn-down base."
      },
      {
        "fr": "Un seul héros suffit à faire avancer le convoi. Les quatre autres valent mieux ailleurs — sauf si la course est serrée.",
        "en": "One Hero is enough to move the payload. The other four are worth more elsewhere — unless the race is close."
      },
      {
        "fr": "À haut niveau, il est courant d'ignorer complètement la zone d'objectif et de pousser ailleurs pendant que l'adversaire escorte.",
        "en": "At a high level it is common to ignore the objective area entirely and push elsewhere while the enemy escorts."
      },
      {
        "fr": "Le terrain entre les deux voies est infranchissable tant que le convoi n'est pas actif. Les rotations coûtent cher : anticipe-les.",
        "en": "The ground between the two lanes is impassable while the payload is inactive. Rotations are expensive: plan them early."
      }
    ],
    "hotspots": [
      {
        "id": "ptem10",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Convoi",
          "en": "Payload"
        },
        "description": {
          "fr": "Apparaît au centre toutes les trois minutes. Un seul convoi pour les deux équipes : il n'avance que si l'une des deux est seule à côté. Trois trajets possibles vers la base adverse.",
          "en": "Spawns at the centre every three minutes. One payload for both teams: it only moves if one side stands beside it alone. Three possible routes to the enemy base."
        },
        "image": ""
      },
      {
        "id": "ptem11",
        "type": "tour",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Camp de reconnaissance — haut",
          "en": "Recon Camp — top"
        },
        "description": {
          "fr": "Deux camps au centre, en haut et en bas. Une fois pris, le camp se comporte comme une tour de guet et donne la vision. Il réapparaît une seconde après : on peut le reprendre en permanence.",
          "en": "Two camps at the centre, top and bottom. Once taken, the camp behaves as a watch tower and grants vision. It comes back one second later: it can be retaken constantly."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800r",
        "type": "tour",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Camp de reconnaissance — bas",
          "en": "Recon Camp — bottom"
        },
        "description": {
          "fr": "Deux camps au centre, en haut et en bas. Une fois pris, le camp se comporte comme une tour de guet et donne la vision. Il réapparaît une seconde après : on peut le reprendre en permanence.",
          "en": "Two camps at the centre, top and bottom. Once taken, the camp behaves as a watch tower and grants vision. It comes back one second later: it can be retaken constantly."
        },
        "image": ""
      },
      {
        "id": "ptem12",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de fortification — haut, gauche",
          "en": "Fortification Camp — top, left"
        },
        "description": {
          "fr": "Deux camps. Ils laissent une tourelle à ramasser, qui inflige 90 dégâts par seconde pendant 45 secondes une fois posée. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps. They drop a Turret to pick up, dealing 90 damage per second for 45 seconds once placed. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800s",
        "type": "camp",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Camp de fortification — bas, droite",
          "en": "Fortification Camp — bottom, right"
        },
        "description": {
          "fr": "Deux camps. Ils laissent une tourelle à ramasser, qui inflige 90 dégâts par seconde pendant 45 secondes une fois posée. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps. They drop a Turret to pick up, dealing 90 damage per second for 45 seconds once placed. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "ptem13",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de samouraïs — haut, droite",
          "en": "Samurai Camp — top, right"
        },
        "description": {
          "fr": "Deux camps. Ils envoient une unité d'élite dans la voie correspondante, dont la taillade horizontale revient toutes les 8 secondes. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps. They send an elite unit into the matching lane, whose Horizontal Slash comes back every 8 seconds. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800t",
        "type": "camp",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Camp de samouraïs — bas, gauche",
          "en": "Samurai Camp — bottom, left"
        },
        "description": {
          "fr": "Deux camps. Ils envoient une unité d'élite dans la voie correspondante, dont la taillade horizontale revient toutes les 8 secondes. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps. They send an elite unit into the matching lane, whose Horizontal Slash comes back every 8 seconds. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "ptem14",
        "type": "fontaine",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Plusieurs fontaines réparties sur les deux voies, deux minutes de recharge chacune.",
          "en": "Several fountains spread along both lanes, two-minute cooldown each."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800u",
        "type": "fontaine",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Plusieurs fontaines réparties sur les deux voies, deux minutes de recharge chacune.",
          "en": "Several fountains spread along both lanes, two-minute cooldown each."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "fonderie-volskaya",
    "enabled": true,
    "name": {
      "fr": "Fonderie Volskaya",
      "en": "Volskaya Foundry"
    },
    "image": "assets/maps/fonderie-volskaya/portrait.jpg",
    "minimapImage": "assets/maps/fonderie-volskaya/minimap.jpg",
    "headline": {
      "fr": "Des points de contrôle qui débloquent un méca géant, le protecteur Triglav, piloté à deux joueurs.",
      "en": "Control points that unlock a giant mech, the Triglav Protector, crewed by two players."
    },
    "objectives": {
      "fr": "Un point de contrôle unique s'active à 3:00, puis toutes les trois minutes après la mort du méca. La capture progresse de 2 % par seconde sur 45 secondes et se met en pause si le point est abandonné plus de douze secondes. L'équipe qui la termine reçoit le protecteur Triglav, un véhicule à deux places : un pilote, un artilleur. Occupées toutes les deux, elles rechargent 25 % plus vite et regagnent 25 % d'énergie en plus. Le méca dure 50 secondes, plus 3 par minute de jeu écoulée.",
      "en": "A single control point activates at 3:00, then every three minutes after the mech dies. Capture builds at 2% per second over 45 seconds and pauses if the point is left for more than twelve seconds. The team that finishes it gets the Triglav Protector, a two-seat vehicle: one pilot, one gunner. With both seats filled, abilities recharge 25% faster and energy regenerates 25% quicker. The mech lasts 50 seconds, plus 3 per minute of game time elapsed."
    },
    "tips": [
      {
        "fr": "Quitte le point avant 74 % de progression si tu dois lâcher : au-delà, tu offres le méca à l'adversaire.",
        "en": "Leave the point before 74% progress if you have to give it up: past that, you hand the mech to the enemy."
      },
      {
        "fr": "Le poing-fusée du pilote neutralise une structure pendant 4 secondes et tue les serviteurs d'un coup. La charge inflige 500 % de dégâts supplémentaires aux bâtiments.",
        "en": "The pilot's Rocket Fist disables a structure for 4 seconds and one-shots minions. Charge deals 500% bonus damage to buildings."
      },
      {
        "fr": "Le premier protecteur de la partie se dépense de préférence sur les structures de la voie du haut.",
        "en": "The game's first Protector is best spent on the top lane structures."
      },
      {
        "fr": "Nettoie le camp de fortification allié à 0:30, puis prends le camp de siège à 2:40 pour qu'il arrive avec la vague.",
        "en": "Clear the allied Fortification Camp at 0:30, then take the Siege Camp at 2:40 so it arrives with the wave."
      },
      {
        "fr": "Place les héros les plus résistants sur le point : la capture demande d'y rester, pas d'y gagner un combat.",
        "en": "Put your most durable Heroes on the point: capturing asks you to stay, not to win a fight there."
      },
      {
        "fr": "À haut niveau, beaucoup d'équipes ignorent l'objectif et vont chercher la valeur ailleurs, en défendant contre le véhicule par le placement.",
        "en": "At a high level many teams ignore the objective and look for value elsewhere, defending against the vehicle by positioning."
      }
    ],
    "hotspots": [
      {
        "id": "pfon15",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Point de contrôle",
          "en": "Control point"
        },
        "description": {
          "fr": "Unique, au centre. S'active à 3:00. La capture monte de 2 % par seconde et se met en pause si personne ne tient le point pendant douze secondes. À 100 %, l'équipe reçoit le protecteur Triglav.",
          "en": "A single point, at the centre. Activates at 3:00. Capture builds 2% per second and pauses if nobody holds the point for twelve seconds. At 100%, the team receives the Triglav Protector."
        },
        "image": ""
      },
      {
        "id": "pfon16",
        "type": "camp",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Camp de siège — haut, gauche",
          "en": "Siege Camp — top, left"
        },
        "description": {
          "fr": "Deux camps sur la voie du haut, des fantassins d'assaut. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Two camps on the top lane, Assault Troopers. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800v",
        "type": "camp",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Camp de siège — haut, droite",
          "en": "Siege Camp — top, right"
        },
        "description": {
          "fr": "Deux camps sur la voie du haut, des fantassins d'assaut. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Two camps on the top lane, Assault Troopers. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pfon17",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de fortification — gauche",
          "en": "Fortification Camp — left"
        },
        "description": {
          "fr": "Deux camps entre le milieu et le bas. Ils laissent une tourelle à ramasser et à poser où tu veux. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps between mid and bottom. They drop a Turret to pick up and place where you like. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800w",
        "type": "camp",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Camp de fortification — droite",
          "en": "Fortification Camp — right"
        },
        "description": {
          "fr": "Deux camps entre le milieu et le bas. Ils laissent une tourelle à ramasser et à poser où tu veux. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps between mid and bottom. They drop a Turret to pick up and place where you like. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pfon18",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de soutien",
          "en": "Support Camp"
        },
        "description": {
          "fr": "Un seul camp, entre le haut et le milieu. Il laisse un émetteur biotique. Immunisé contre la corruption. Disponible à 0:30, il réapparaît 3:00 après.",
          "en": "A single camp, between top and mid. It drops a Biotic Emitter. Immune to Bribe. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "pfon19",
        "type": "fontaine",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux fontaines, deux minutes de recharge. L'objectif revenant toutes les trois minutes, elle est presque toujours disponible au bon moment.",
          "en": "Two fountains, two-minute cooldown. With the objective every three minutes, it is nearly always up when it matters."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800x",
        "type": "fontaine",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux fontaines, deux minutes de recharge. L'objectif revenant toutes les trois minutes, elle est presque toujours disponible au bon moment.",
          "en": "Two fountains, two-minute cooldown. With the objective every three minutes, it is nearly always up when it matters."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "tours-du-destin",
    "enabled": true,
    "name": {
      "fr": "Tours du destin",
      "en": "Towers of Doom"
    },
    "image": "assets/maps/tours-du-destin/portrait.jpg",
    "minimapImage": "assets/maps/tours-du-destin/minimap.jpg",
    "headline": {
      "fr": "Les idoles sont intouchables : on gagne en activant des autels, et chaque clocher tenu ajoute des dégâts.",
      "en": "The Cores cannot be touched: you win by activating Altars, and every Bell Tower you hold adds damage."
    },
    "objectives": {
      "fr": "Les idoles ont 40 points de vie et ne peuvent pas être attaquées directement. On les entame par les autels, qui s'élèvent à partir de 3:00 : six secondes d'incantation pour en capturer un, puis 1 point de dégât à l'idole adverse quatre secondes plus tard — plus 1 par clocher que ton équipe contrôle. Les clochers sont les forts et bastions de la carte : les détruire les fait passer chez toi. Tenir les six d'un coup déclenche un bombardement automatique.",
      "en": "The Cores have 40 Health and cannot be attacked directly. You chip at them through the Altars, which rise from 3:00 onward: a six-second channel to capture one, then 1 damage to the enemy Core four seconds later — plus 1 for each Bell Tower your team controls. The Bell Towers are the map's Forts and Keeps: destroying them flips them to you. Holding all six at once triggers an automatic bombardment."
    },
    "tips": [
      {
        "fr": "Frapper une idole ne sert à rien : elle est derrière une barrière. Tout passe par les autels, le boss, les sapeurs ou le six-cap.",
        "en": "Hitting a Core achieves nothing: it sits behind a barrier. Everything runs through Altars, the Boss, Sappers, or the six-cap."
      },
      {
        "fr": "Détruis les clochers adverses avant une phase d'autels : chaque clocher tenu ajoute un point de dégât par autel capturé.",
        "en": "Destroy enemy Bell Towers before an Altar phase: each tower held adds one damage per Altar captured."
      },
      {
        "fr": "Le six-cap se tente quand trois adversaires ou plus sont morts : capturer tous les clochers restants en même temps lance un bombardement qui ne s'arrête qu'à la perte d'une tour.",
        "en": "Go for the six-cap when three or more enemies are dead: capturing every remaining tower at once starts a bombardment that only stops when you lose one."
      },
      {
        "fr": "Les sapeurs escortés jusqu'à la zone mortelle adverse lancent leur tête sur l'idole : 1 point chacun, 3 en tout, quel que soit le nombre de clochers tenus.",
        "en": "Sappers escorted into the enemy Kill Zone launch their heads at the Core: 1 damage each, 3 in total, whatever your tower count."
      },
      {
        "fr": "La zone mortelle autour de chaque idole inflige 150 dégâts toutes les demi-secondes, et 25 de plus par minute jusqu'à 900 à 30:00. On n'y entre pas par distraction.",
        "en": "The Kill Zone around each Core deals 150 damage every half second, plus 25 per minute up to 900 at 30:00. You do not wander into it."
      },
      {
        "fr": "Ne t'inquiète de tes points de vie d'idole qu'en dessous de 10. Au-dessus, c'est une ressource comme une autre.",
        "en": "Only worry about your Core Health below 10. Above that it is a resource like any other."
      },
      {
        "fr": "Le portail qui relie chaque idole au centre s'ouvre vers 12:00, plus tard si des autels sont actifs. Deux secondes d'incantation pour le traverser.",
        "en": "The Waygate linking each Core to the centre opens around 12:00, later if Altars are active. A two-second channel to go through."
      }
    ],
    "hotspots": [
      {
        "id": "ptou20",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Autel — haut, gauche",
          "en": "Altar — top, left"
        },
        "description": {
          "fr": "S'élève périodiquement à partir de 3:00. Six secondes d'incantation pour le capturer. Quatre secondes plus tard, l'idole adverse perd 1 point de vie, plus 1 par clocher que tu contrôles.",
          "en": "Rises periodically from 3:00 onward. A six-second channel to capture. Four seconds later the enemy Core loses 1 Health, plus 1 for each Bell Tower you control."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800y",
        "type": "objectif",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Autel — haut, droite",
          "en": "Altar — top, right"
        },
        "description": {
          "fr": "S'élève périodiquement à partir de 3:00. Six secondes d'incantation pour le capturer. Quatre secondes plus tard, l'idole adverse perd 1 point de vie, plus 1 par clocher que tu contrôles.",
          "en": "Rises periodically from 3:00 onward. A six-second channel to capture. Four seconds later the enemy Core loses 1 Health, plus 1 for each Bell Tower you control."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e800z",
        "type": "objectif",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Autel — milieu",
          "en": "Altar — middle"
        },
        "description": {
          "fr": "S'élève périodiquement à partir de 3:00. Six secondes d'incantation pour le capturer. Quatre secondes plus tard, l'idole adverse perd 1 point de vie, plus 1 par clocher que tu contrôles.",
          "en": "Rises periodically from 3:00 onward. A six-second channel to capture. Four seconds later the enemy Core loses 1 Health, plus 1 for each Bell Tower you control."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8010",
        "type": "objectif",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Autel — bas",
          "en": "Altar — bottom"
        },
        "description": {
          "fr": "S'élève périodiquement à partir de 3:00. Six secondes d'incantation pour le capturer. Quatre secondes plus tard, l'idole adverse perd 1 point de vie, plus 1 par clocher que tu contrôles.",
          "en": "Rises periodically from 3:00 onward. A six-second channel to capture. Four seconds later the enemy Core loses 1 Health, plus 1 for each Bell Tower you control."
        },
        "image": ""
      },
      {
        "id": "ptou21",
        "type": "objectif",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Clocher",
          "en": "Bell Tower"
        },
        "description": {
          "fr": "Les forts et bastions de la carte. Détruire celui d'en face le fait passer sous ton contrôle. Ils deviennent des bastions à l'ouverture du portail, vers 12:00. En tenir six déclenche un bombardement automatique.",
          "en": "The map's Forts and Keeps. Destroying an enemy one brings it under your control. They upgrade to Keeps when the Waygate opens, around 12:00. Holding six triggers an automatic bombardment."
        },
        "image": ""
      },
      {
        "id": "ptou22",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de sapeurs — haut",
          "en": "Sapper Camp — top"
        },
        "description": {
          "fr": "Trois camps : un en haut, deux en bas. Trois sapeurs qui poussent la voie ; escortés dans la zone mortelle adverse, ils lancent leur tête sur l'idole pour 1 point chacun. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Three camps: one top, two bottom. Three Sappers that push the lane; escorted into the enemy Kill Zone, they launch their heads at the Core for 1 damage each. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8011",
        "type": "camp",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Camp de sapeurs — bas, gauche",
          "en": "Sapper Camp — bottom, left"
        },
        "description": {
          "fr": "Trois camps : un en haut, deux en bas. Trois sapeurs qui poussent la voie ; escortés dans la zone mortelle adverse, ils lancent leur tête sur l'idole pour 1 point chacun. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Three camps: one top, two bottom. Three Sappers that push the lane; escorted into the enemy Kill Zone, they launch their heads at the Core for 1 damage each. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8012",
        "type": "camp",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Camp de sapeurs — bas, droite",
          "en": "Sapper Camp — bottom, right"
        },
        "description": {
          "fr": "Trois camps : un en haut, deux en bas. Trois sapeurs qui poussent la voie ; escortés dans la zone mortelle adverse, ils lancent leur tête sur l'idole pour 1 point chacun. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Three camps: one top, two bottom. Three Sappers that push the lane; escorted into the enemy Kill Zone, they launch their heads at the Core for 1 damage each. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "ptou23",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de boss — cavalier sans tête",
          "en": "Boss Camp — Headless Horseman"
        },
        "description": {
          "fr": "Un seul camp, entre les voies du haut et du milieu. Pris, il disparaît et inflige 4 points à l'idole adverse cinq secondes plus tard. Immunisé contre la corruption. Disponible à 5:00, il réapparaît 5:00 après.",
          "en": "A single camp, between the top and middle lanes. Once taken it vanishes and deals 4 damage to the enemy Core five seconds later. Immune to Bribe. Available at 5:00, back 5:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8013",
        "type": "autre",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Portail — gauche",
          "en": "Waygate — left"
        },
        "description": {
          "fr": "Relie l'idole au centre du champ de bataille, près du buisson de la voie du milieu, en deux secondes d'incantation. Fermé en début de partie, il ouvre vers 12:00, plus tard si des autels sont actifs. Aller simple : impossible de rentrer à la base par là.",
          "en": "Links the Core to the middle of the battlefield, near the middle-lane bush, on a two-second channel. Closed early on, it opens around 12:00, later if Altars are active. One way only: you cannot go back to base through it."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8014",
        "type": "autre",
        "x": 68,
        "y": 26,
        "name": {
          "fr": "Portail — droite",
          "en": "Waygate — right"
        },
        "description": {
          "fr": "Relie l'idole au centre du champ de bataille, près du buisson de la voie du milieu, en deux secondes d'incantation. Fermé en début de partie, il ouvre vers 12:00, plus tard si des autels sont actifs. Aller simple : impossible de rentrer à la base par là.",
          "en": "Links the Core to the middle of the battlefield, near the middle-lane bush, on a two-second channel. Closed early on, it opens around 12:00, later if Altars are active. One way only: you cannot go back to base through it."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8015",
        "type": "fontaine",
        "x": 82,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8016",
        "type": "fontaine",
        "x": 12,
        "y": 40,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "sanctuaires-infernaux",
    "enabled": true,
    "name": {
      "fr": "Sanctuaires infernaux",
      "en": "Infernal Shrines"
    },
    "image": "assets/maps/sanctuaires-infernaux/portrait.jpg",
    "minimapImage": "assets/maps/sanctuaires-infernaux/minimap.jpg",
    "headline": {
      "fr": "Un sanctuaire s'allume, 40 gardiens à tuer avant l'adversaire, et un dominateur part sur une voie.",
      "en": "A shrine lights up, 40 Guardians to kill before the enemy, and a Punisher walks a lane."
    },
    "objectives": {
      "fr": "Les sanctuaires s'activent à 3:00, puis trois minutes après la mort du dominateur. Une fois l'un d'eux allumé, des gardiens sortent sans discontinuer — dix au maximum en même temps, avec 20 points d'armure des sorts. La première équipe à en tuer 40 invoque un dominateur, qui part pousser une voie. Trois emplacements possibles pour le sanctuaire : au-dessus de la voie du haut, au-dessus du milieu, ou entre le milieu et le bas.",
      "en": "The shrines activate at 3:00, then three minutes after the Punisher dies. Once one lights up, Guardians pour out without pause — ten at most at a time, with 20 Spell Armor. The first team to kill 40 summons a Punisher, which goes off to push a lane. Three possible shrine locations: above the top lane, above mid, or between mid and bottom."
    },
    "tips": [
      {
        "fr": "Sois en place 30 à 40 secondes avant l'activation. Cinq secondes de retard offrent 10 gardiens à l'adversaire ; dix secondes, 20 — soit un dominateur presque gratuit.",
        "en": "Be in place 30 to 40 seconds before activation. Five seconds late gifts the enemy 10 Guardians; ten seconds, 20 — very nearly a free Punisher."
      },
      {
        "fr": "Trois dominateurs possibles : l'arcanique et ses rayons tournants, le glacial et ses bombes qui immobilisent et neutralisent les structures, le mortier et ses bombes incendiaires.",
        "en": "Three possible Punishers: the Arcane one with rotating beams, the Frost one with bombs that root and disable structures, and the Mortar one with firebombs."
      },
      {
        "fr": "Un dominateur saute sur les portes et sur les héros, inflige des dégâts et étourdit. Il vise les portes en priorité, sans se laisser distraire.",
        "en": "A Punisher jumps on gates and Heroes, dealing damage and stunning. It goes for gates first and does not take the bait."
      },
      {
        "fr": "Prends le camp de siège allié du milieu à 0:30, puis le camp neutre du bas si tu as l'avantage.",
        "en": "Take the allied middle Siege Camp at 0:30, then the neutral bottom one if you are ahead."
      },
      {
        "fr": "Nettoie le camp de bruisers allié vers 2:15 et capture-le vers 2:40 : il arrive juste avant la phase.",
        "en": "Clear the allied Bruiser Camp around 2:15 and capture it around 2:40: it lands right before the phase."
      },
      {
        "fr": "Après un objectif gagné, détruis les murs latéraux à côté des portes : ça ouvre de la place pour les engagements suivants.",
        "en": "After winning an objective, destroy the side walls next to the gates: it opens up room for the fights that follow."
      },
      {
        "fr": "L'idole tire deux salves d'orbes glacées toutes les 12 secondes, à 5 % de vie maximale et 1,5 seconde d'immobilisation.",
        "en": "The Core fires two volleys of Frozen Orbs every 12 seconds, for 5% maximum Health and a 1.5-second root."
      }
    ],
    "hotspots": [
      {
        "id": "psan24",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Sanctuaire — haut",
          "en": "Shrine — top"
        },
        "description": {
          "fr": "Trois emplacements possibles : au-dessus de la voie du haut, au-dessus du milieu, ou entre le milieu et le bas. Le sanctuaire accumule de la puissance et s'allume à 3:00, puis trois minutes après la mort du dominateur.",
          "en": "Three possible spots: above the top lane, above mid, or between mid and bottom. The shrine gathers power and lights up at 3:00, then three minutes after the Punisher dies."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8017",
        "type": "objectif",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Sanctuaire — milieu",
          "en": "Shrine — middle"
        },
        "description": {
          "fr": "Trois emplacements possibles : au-dessus de la voie du haut, au-dessus du milieu, ou entre le milieu et le bas. Le sanctuaire accumule de la puissance et s'allume à 3:00, puis trois minutes après la mort du dominateur.",
          "en": "Three possible spots: above the top lane, above mid, or between mid and bottom. The shrine gathers power and lights up at 3:00, then three minutes after the Punisher dies."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8018",
        "type": "objectif",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Sanctuaire — bas",
          "en": "Shrine — bottom"
        },
        "description": {
          "fr": "Trois emplacements possibles : au-dessus de la voie du haut, au-dessus du milieu, ou entre le milieu et le bas. Le sanctuaire accumule de la puissance et s'allume à 3:00, puis trois minutes après la mort du dominateur.",
          "en": "Three possible spots: above the top lane, above mid, or between mid and bottom. The shrine gathers power and lights up at 3:00, then three minutes after the Punisher dies."
        },
        "image": ""
      },
      {
        "id": "psan25",
        "type": "objectif",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Dominateur",
          "en": "Punisher"
        },
        "description": {
          "fr": "Invoqué par la première équipe à tuer 40 gardiens. Il arrive avec l'un de trois pouvoirs — arcanique, glacial ou mortier — et s'en prend aux portes en priorité.",
          "en": "Summoned by the first team to kill 40 Guardians. It arrives with one of three powers — Arcane, Frost or Mortar — and goes for the gates first."
        },
        "image": ""
      },
      {
        "id": "psan26",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de siège — empaleurs, milieu gauche",
          "en": "Siege Camp — Impalers, middle left"
        },
        "description": {
          "fr": "Deux camps au milieu, un en bas, trois empaleurs chacun. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Two camps at mid, one at the bottom, three Impalers each. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e8019",
        "type": "camp",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Camp de siège — empaleurs, milieu droite",
          "en": "Siege Camp — Impalers, middle right"
        },
        "description": {
          "fr": "Deux camps au milieu, un en bas, trois empaleurs chacun. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Two camps at mid, one at the bottom, three Impalers each. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801a",
        "type": "camp",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Camp de siège — empaleurs, bas",
          "en": "Siege Camp — Impalers, bottom"
        },
        "description": {
          "fr": "Deux camps au milieu, un en bas, trois empaleurs chacun. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "Two camps at mid, one at the bottom, three Impalers each. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "psan27",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — damnés, haut gauche",
          "en": "Bruiser Camp — Fallen, top left"
        },
        "description": {
          "fr": "Deux camps sur la voie du haut : un chaman damné et deux molosses. Le chaman réinvoque des molosses au fil du combat. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps on the top lane: a Fallen Shaman and two Hounds. The Shaman keeps summoning new Hounds as the fight goes on. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801b",
        "type": "camp",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Camp de bruisers — damnés, haut droite",
          "en": "Bruiser Camp — Fallen, top right"
        },
        "description": {
          "fr": "Deux camps sur la voie du haut : un chaman damné et deux molosses. Le chaman réinvoque des molosses au fil du combat. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps on the top lane: a Fallen Shaman and two Hounds. The Shaman keeps summoning new Hounds as the fight goes on. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "psan28",
        "type": "fontaine",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux fontaines, deux minutes de recharge chacune.",
          "en": "Two fountains, two-minute cooldown each."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801c",
        "type": "fontaine",
        "x": 68,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux fontaines, deux minutes de recharge chacune.",
          "en": "Two fountains, two-minute cooldown each."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "champs-eternite",
    "enabled": true,
    "name": {
      "fr": "Champs de l'éternité",
      "en": "Battlefield of Eternity"
    },
    "image": "assets/maps/champs-eternite/portrait.jpg",
    "minimapImage": "assets/maps/champs-eternite/minimap.jpg",
    "headline": {
      "fr": "Deux Immortels s'affrontent sans fin. Aider le sien à l'emporter lâche un allié qui rase les forts adverses.",
      "en": "Two Immortals fight without end. Helping yours prevail releases an ally that levels the enemy forts."
    },
    "objectives": {
      "fr": "L'ange Ilarian et le seigneur démon Beleth se livrent un combat sans fin au centre de la carte. Ils ne se font aucun dégât : c'est aux héros d'abattre celui d'en face. Le premier affrontement démarre à 3:00, et l'Immortel vainqueur part ensuite dévaster les bâtiments adverses, dans la voie la moins endommagée. L'accompagner vaut mieux que le laisser seul — sa puissance ne remplace pas une équipe.",
      "en": "The angel Ilarian and the demon lord Beleth are locked in an endless duel at the centre of the map. They deal no damage to each other: it falls to the Heroes to bring the opposing one down. The first clash starts at 3:00, and the winning Immortal then walks into the lane with the least structural damage to wreck the enemy's buildings. Escorting it beats leaving it alone — its power does not replace a team."
    },
    "tips": [
      {
        "fr": "L'objectif tombe à 3:00, puis 1:45 après la mort du dernier Immortel parti en ligne. Arriver cinq secondes en retard offre 25 % d'avance à l'adversaire ; dix secondes, 50 %.",
        "en": "The objective starts at 3:00, then 1:45 after the last laning Immortal dies. Showing up five seconds late hands the enemy a 25% lead; ten seconds, 50%."
      },
      {
        "fr": "Les deux Immortels ne se blessent pas entre eux. Seuls les héros peuvent entamer celui d'en face — frapper le vôtre ne sert à rien.",
        "en": "The two Immortals deal no damage to each other. Only Heroes can bring the opposing one down — hitting your own achieves nothing."
      },
      {
        "fr": "Pendant la phase d'objectif, chaque Immortel porte un bouclier égal à ses points de vie restants : il y a donc deux fois plus à abattre qu'il n'y paraît.",
        "en": "During the objective phase each Immortal carries a shield equal to its remaining Health: there is twice as much to chew through as the bar suggests."
      },
      {
        "fr": "À 50 % de vie, les Immortels mettent dix secondes à échanger leurs places, et sont intouchables pendant ce temps. C'est la fenêtre pour se replacer, se soigner ou prendre un camp.",
        "en": "At 50% health the Immortals take ten seconds to swap places, and cannot be damaged meanwhile. That is the window to reposition, heal, or take a camp."
      },
      {
        "fr": "Leurs deux attaques ont 14 secondes de recharge, 16 une fois en ligne : l'une projette et étourdit une demi-seconde, l'autre frappe une zone après deux secondes et étourdit deux secondes. Les deux tuent un serviteur d'un seul coup.",
        "en": "Their two attacks have a 14-second cooldown, 16 once in a lane: one knocks back and stuns for half a second, the other hits an area after a two-second delay and stuns for two. Both one-shot minions."
      },
      {
        "fr": "Pousser un adversaire sous la zone d'explosion avec une projection cumule les dégâts et l'étourdissement — c'est le meilleur usage des compétences de déplacement sur cette carte.",
        "en": "Shoving an opponent under the delayed explosion with a knockback stacks the damage and the stun — the best use of displacement abilities on this map."
      },
      {
        "fr": "L'Immortel vainqueur part dans la voie la moins endommagée, et deux globes de régénération apparaissent au centre du champ de bataille.",
        "en": "The winning Immortal walks into the lane with the least structural damage, and two Regeneration Globes appear at the centre of the battleground."
      },
      {
        "fr": "Prendre le camp de bruisers vers 2:45 le fait arriver avec la vague de serviteurs, juste avant le début de la phase.",
        "en": "Taking the Bruiser camp around 2:45 lands it with the minion wave, right before the phase begins."
      },
      {
        "fr": "Les camps disparaissent dès que les Immortels entrent en ligne — sauf si des mercenaires y sont déjà engagés — et reviennent à la mort de l'Immortel.",
        "en": "Camps vanish as soon as the Immortals enter the lanes — unless mercenaries are already fighting there — and come back when the Immortal dies."
      },
      {
        "fr": "L'idole tire deux salves d'orbes glacées toutes les 12 secondes : elles explosent pour 5 % de vie maximale et immobilisent 1,5 seconde. Plonger sur une idole n'est jamais gratuit.",
        "en": "The Core fires two volleys of Frozen Orbs every 12 seconds: they explode for 5% maximum Health and root for 1.5 seconds. Diving a Core is never free."
      }
    ],
    "hotspots": [
      {
        "id": "be1",
        "type": "objectif",
        "x": 49.4,
        "y": 38.2,
        "name": {
          "fr": "Beleth, le seigneur démon",
          "en": "Beleth, the Demon Lord"
        },
        "description": {
          "fr": "L'Immortel de l'équipe du côté démoniaque. Il occupe la plateforme nord de l'arène et bascule au sud à 50 % de vie. Le faire tomber, c'est libérer Ilarian sur une voie.",
          "en": "The Immortal fighting for the demonic side. He holds the northern platform of the arena and swaps south at 50% health. Bringing him down releases Ilarian into a lane."
        },
        "image": "assets/maps/champs-eternite/captures/2.jpg"
      },
      {
        "id": "il1",
        "type": "objectif",
        "x": 49.9,
        "y": 60.6,
        "name": {
          "fr": "Ilarian, l'ange",
          "en": "Ilarian, the Angel"
        },
        "description": {
          "fr": "L'Immortel de l'équipe du côté angélique. Il occupe la plateforme sud et bascule au nord à 50 % de vie. Les deux Immortels se battent sans jamais s'entamer : tout dépend des héros.",
          "en": "The Immortal fighting for the angelic side. He holds the southern platform and swaps north at 50% health. The two Immortals fight without ever hurting each other: everything rests on the Heroes."
        },
        "image": "assets/maps/champs-eternite/captures/1.jpg"
      },
      {
        "id": "ca1",
        "type": "camp",
        "x": 36.3,
        "y": 22.8,
        "name": {
          "fr": "Camp de mercenaires — côté angélique",
          "en": "Mercenary camp — angelic side"
        },
        "description": {
          "fr": "Le champ de bataille compte quatre camps : deux de siège sur les voies du haut et du bas, deux de bruisers en diagonale. Disponibles dès 0:30, ils réapparaissent en 3:00 pour le siège et 4:00 pour les bruisers.",
          "en": "The battleground has four camps: two Siege on the top and bottom lanes, two Bruiser set diagonally. Available from 0:30, they respawn in 3:00 for Siege and 4:00 for Bruiser."
        },
        "image": ""
      },
      {
        "id": "ca2",
        "type": "camp",
        "x": 63.3,
        "y": 75,
        "name": {
          "fr": "Camp de mercenaires — côté démoniaque",
          "en": "Mercenary camp — demonic side"
        },
        "description": {
          "fr": "Le symétrique du camp d'en face. Les bruisers infligent 100 % de dégâts supplémentaires aux serviteurs et aux structures ; les impaleurs du camp de siège frappent les bâtiments sans entrer à leur portée.",
          "en": "The mirror of the camp opposite. Bruisers deal 100% bonus damage to minions and structures; the Siege camp Impalers hit buildings without walking into their range."
        },
        "image": "assets/maps/champs-eternite/captures/5.jpg"
      },
      {
        "id": "fo1",
        "type": "fontaine",
        "x": 26.4,
        "y": 14.4,
        "name": {
          "fr": "Fontaine de soins — côté angélique",
          "en": "Healing fountain — angelic side"
        },
        "description": {
          "fr": "Deux minutes de recharge. Sur une carte où la phase d'objectif revient toutes les 1:45, savoir si la fontaine est disponible pèse autant que les points de vie restants.",
          "en": "Two-minute cooldown. On a map where the objective comes back every 1:45, knowing whether the fountain is up matters as much as the health bars."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801d",
        "type": "fontaine",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Fontaine de soins — côté démoniaque",
          "en": "Healing fountain — demonic side"
        },
        "description": {
          "fr": "Deux minutes de recharge. Sur une carte où la phase d'objectif revient toutes les 1:45, savoir si la fontaine est disponible pèse autant que les points de vie restants.",
          "en": "Two-minute cooldown. On a map where the objective comes back every 1:45, knowing whether the fountain is up matters as much as the health bars."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801e",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de siège — empaleurs, haut",
          "en": "Siege Camp — Impalers, top"
        },
        "description": {
          "fr": "Trois empaleurs : des unités à distance qui frappent les structures sans s'exposer, mais nettoient mal les vagues. Le camp disparaît quand un Immortel part en voie et revient à sa mort.",
          "en": "Three Impalers: ranged units that hit Structures from safety but clear waves poorly. The camp disappears when an Immortal goes down a lane and comes back when it dies."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801f",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de siège — empaleurs, bas",
          "en": "Siege Camp — Impalers, bottom"
        },
        "description": {
          "fr": "Trois empaleurs : des unités à distance qui frappent les structures sans s'exposer, mais nettoient mal les vagues. Le camp disparaît quand un Immortel part en voie et revient à sa mort.",
          "en": "Three Impalers: ranged units that hit Structures from safety but clear waves poorly. The camp disappears when an Immortal goes down a lane and comes back when it dies."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "tombe-reine-araignee",
    "enabled": true,
    "name": {
      "fr": "Tombe de la reine araignée",
      "en": "Tomb of the Spider Queen"
    },
    "image": "assets/maps/tombe-reine-araignee/portrait.jpg",
    "minimapImage": "assets/maps/tombe-reine-araignee/minimap.jpg",
    "headline": {
      "fr": "Des gemmes ramassées sur les morts, à rapporter aux autels avant de mourir soi-même.",
      "en": "Gems dropped by the dead, to be handed in at the altars before you die yourself."
    },
    "objectives": {
      "fr": "Les gemmes tombent des serviteurs et des héros abattus : un serviteur à distance en donne 1, un héros 3. On en porte 100 au maximum, et une gemme laissée au sol disparaît au bout de huit secondes. La première livraison demande 50 gemmes, puis 5 de plus à chaque fois. Le seuil atteint, trois tisserands sortent quinze secondes plus tard, un par voie, avec une vague de mort toutes les 7 secondes et deux rampe-cryptes invoqués toutes les 20.",
      "en": "Gems drop from slain minions and Heroes: a ranged minion gives 1, a Hero 3. You can carry 100 at most, and a Gem left on the ground disappears after eight seconds. The first turn-in costs 50 Gems, then 5 more each time. Once the threshold is met, three Webweavers come out fifteen seconds later, one per lane, with a Death Wave every 7 seconds and two Cryptcrawlers summoned every 20."
    },
    "tips": [
      {
        "fr": "Dès que tu portes 10 gemmes ou plus, va payer. Mourir avec, c'est tout perdre d'un coup.",
        "en": "As soon as you carry 10 Gems or more, go and pay. Dying with them loses the lot at once."
      },
      {
        "fr": "Prends les camps à 1:05, ou cinq secondes après l'apparition d'une vague : les mercenaires arrivent alors devant tes serviteurs.",
        "en": "Take camps at 1:05, or five seconds after a minion wave spawns: the mercenaries then arrive ahead of your minions."
      },
      {
        "fr": "Après 10:00, paie tes gemmes en gardant le boss au contact : le camp ne disparaît pas tant qu'il est en combat, et tu pousses des deux côtés à la fois.",
        "en": "After 10:00, pay your Gems while keeping the Boss engaged: the camp does not vanish while it is fighting, and you push on two fronts at once."
      },
      {
        "fr": "En défense, casse la symétrie des vagues et empêche surtout le porteur adverse le plus chargé d'aller payer.",
        "en": "On defence, break the symmetry of the waves and above all stop the enemy's fullest carrier from paying."
      },
      {
        "fr": "Murky, les Vikings perdus et Misha ne donnent qu'une gemme, comme un serviteur à distance. Les tuer ne finance pas une livraison.",
        "en": "Murky, the Lost Vikings and Misha only drop one Gem, like a ranged minion. Killing them does not fund a turn-in."
      },
      {
        "fr": "Les camps disparaissent quand les tisserands sortent, sauf ceux déjà en combat, et reviennent à leur mort.",
        "en": "Camps vanish when the Webweavers come out, except those already fighting, and return when they die."
      }
    ],
    "hotspots": [
      {
        "id": "ptom29",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Autel de la reine araignée",
          "en": "Spider Queen's Altar"
        },
        "description": {
          "fr": "C'est là qu'on livre les gemmes. 50 pour la première fois, puis 5 de plus à chaque livraison. Mourir avec ses gemmes sur soi, c'est les perdre toutes.",
          "en": "This is where Gems are handed in. 50 the first time, then 5 more with each turn-in. Dying with your Gems loses every one."
        },
        "image": ""
      },
      {
        "id": "ptom30",
        "type": "camp",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — chevaliers, milieu gauche",
          "en": "Bruiser Camp — Knights, middle left"
        },
        "description": {
          "fr": "Deux camps sur la voie du milieu : trois chevaliers et un sorcier, qui pose un champ d'armure des sorts. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps on the middle lane: three Knights and a Wizard, who lays a Spell Armor field. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801g",
        "type": "camp",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — chevaliers, milieu droite",
          "en": "Bruiser Camp — Knights, middle right"
        },
        "description": {
          "fr": "Deux camps sur la voie du milieu : trois chevaliers et un sorcier, qui pose un champ d'armure des sorts. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps on the middle lane: three Knights and a Wizard, who lays a Spell Armor field. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "ptom31",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de siège — géants",
          "en": "Siege Camp — Giants"
        },
        "description": {
          "fr": "Sur la voie du bas, deux géants de siège qui infligent 100 % de dégâts supplémentaires aux structures. Disponible à 0:30, il réapparaît 3:00 après.",
          "en": "On the bottom lane, two Siege Giants dealing 100% bonus damage to Structures. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "ptom32",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de boss — golem de sable",
          "en": "Boss Camp — Sand Golem"
        },
        "description": {
          "fr": "Sur la voie du haut. Disponible à 5:00, il réapparaît 5:00 après avoir été pris. Immunisé contre la corruption. Le garder en combat empêche le camp de disparaître pendant la phase des tisserands.",
          "en": "On the top lane. Available at 5:00, back 5:00 after being taken. Immune to Bribe. Keeping it engaged stops the camp vanishing during the Webweaver phase."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801h",
        "type": "fontaine",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801i",
        "type": "fontaine",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "temple-celeste",
    "enabled": true,
    "name": {
      "fr": "Temple céleste",
      "en": "Sky Temple"
    },
    "image": "assets/maps/temple-celeste/portrait.jpg",
    "minimapImage": "assets/maps/temple-celeste/minimap.jpg",
    "headline": {
      "fr": "Des temples à capturer et à tenir, sous le feu de gardiens qui cherchent à les reprendre.",
      "en": "Temples to capture and hold, under fire from Guardians trying to take them back."
    },
    "objectives": {
      "fr": "Jusqu'à deux temples s'activent à la fois, à partir de 3:00, puis deux minutes après la fin d'une phase. Se tenir sur un temple non contesté le capture en deux secondes ; il tire ensuite une fois par seconde pendant 40 secondes, à 450 points de dégâts par tir, plus 20 par minute de jeu. Chaque temple sort un gardien et deux défenseurs, puis deux défenseurs de plus. Le gardien projette les ennemis toutes les 12 secondes ; les défenseurs, eux, ne réapparaissent pas.",
      "en": "Up to two Temples activate at once, from 3:00 onward, then two minutes after a phase ends. Standing on an uncontested Temple captures it in two seconds; it then fires once per second for 40 seconds, at 450 damage a shot, plus 20 per minute of game time. Each Temple spawns a Guardian and two Defenders, then two more Defenders. The Guardian knocks enemies back every 12 seconds; the Defenders do not respawn."
    },
    "tips": [
      {
        "fr": "Pendant une phase, place au moins un héros sur chaque temple : il commence à tirer tout de suite au lieu d'attendre le regroupement.",
        "en": "During a phase, put at least one Hero on each Temple: it starts firing immediately instead of waiting for the team to gather."
      },
      {
        "fr": "Un temple abandonné tire encore deux fois avant de s'éteindre. Lâcher au dernier moment coûte moins cher qu'on ne croit.",
        "en": "An abandoned Temple still fires twice before going quiet. Letting go at the last second costs less than it looks."
      },
      {
        "fr": "Devant en structures, échange les temples et évite les combats d'équipe. Derrière, provoque-les : laisser passer une phase entière creuse l'écart.",
        "en": "Ahead on structures, trade Temples and avoid team fights. Behind, start them: letting a whole phase through widens the gap."
      },
      {
        "fr": "La tour de guet entre le milieu et le haut donne la vision sur le temple du milieu. C'est elle qui dit si la phase est contestée.",
        "en": "The Watch Tower between mid and top gives vision on the middle Temple. It is what tells you whether the phase is contested."
      },
      {
        "fr": "Prends le premier camp de bruisers allié à 1:05 pour qu'il arrive en ligne avec la vague.",
        "en": "Take the first allied Bruiser Camp at 1:05 so it reaches the lane with the wave."
      },
      {
        "fr": "Les héros globaux couvrent les voies les plus éloignées des temples actifs : c'est là que l'adversaire ira chercher sa valeur.",
        "en": "Global Heroes cover the lanes furthest from the active Temples: that is where the enemy will look for value."
      },
      {
        "fr": "Après 10:00 avec l'avantage, prends le boss et pousse avec lui pendant que l'adversaire garde les temples.",
        "en": "After 10:00 with the advantage, take the Boss and push with it while the enemy watches the Temples."
      }
    ],
    "hotspots": [
      {
        "id": "ptem33",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Temple — haut",
          "en": "Temple — top"
        },
        "description": {
          "fr": "Deux temples actifs au maximum par phase, selon une rotation : haut et milieu d'abord, bas ensuite, puis variable. Deux secondes pour le capturer, 40 tirs plus 5 bonus à 450 dégâts chacun.",
          "en": "Two active Temples at most per phase, on a rotation: top and mid first, bottom next, then variable. Two seconds to capture, 40 shots plus 5 bonus at 450 damage each."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801j",
        "type": "objectif",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Temple — milieu",
          "en": "Temple — middle"
        },
        "description": {
          "fr": "Deux temples actifs au maximum par phase, selon une rotation : haut et milieu d'abord, bas ensuite, puis variable. Deux secondes pour le capturer, 40 tirs plus 5 bonus à 450 dégâts chacun.",
          "en": "Two active Temples at most per phase, on a rotation: top and mid first, bottom next, then variable. Two seconds to capture, 40 shots plus 5 bonus at 450 damage each."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801k",
        "type": "objectif",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Temple — bas",
          "en": "Temple — bottom"
        },
        "description": {
          "fr": "Deux temples actifs au maximum par phase, selon une rotation : haut et milieu d'abord, bas ensuite, puis variable. Deux secondes pour le capturer, 40 tirs plus 5 bonus à 450 dégâts chacun.",
          "en": "Two active Temples at most per phase, on a rotation: top and mid first, bottom next, then variable. Two seconds to capture, 40 shots plus 5 bonus at 450 damage each."
        },
        "image": ""
      },
      {
        "id": "ptem34",
        "type": "tour",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Tour de guet",
          "en": "Watch Tower"
        },
        "description": {
          "fr": "Une seule, entre la voie du milieu et celle du haut. Elle donne la vision sur le temple du milieu — la seule information qui compte à l'ouverture d'une phase.",
          "en": "Just the one, between the middle and top lanes. It gives vision on the middle Temple — the one piece of information that matters as a phase opens."
        },
        "image": ""
      },
      {
        "id": "ptem35",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — chevaliers, haut gauche",
          "en": "Bruiser Camp — Knights, top left"
        },
        "description": {
          "fr": "Deux camps sur la voie du haut : trois chevaliers et un sorcier, qui pose un champ d'armure des sorts. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps on the top lane: three Knights and a Wizard, who lays a Spell Armor field. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801l",
        "type": "camp",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Camp de bruisers — chevaliers, haut droite",
          "en": "Bruiser Camp — Knights, top right"
        },
        "description": {
          "fr": "Deux camps sur la voie du haut : trois chevaliers et un sorcier, qui pose un champ d'armure des sorts. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps on the top lane: three Knights and a Wizard, who lays a Spell Armor field. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "ptem36",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de siège — géants, bas gauche",
          "en": "Siege Camp — Giants, bottom left"
        },
        "description": {
          "fr": "Deux camps sur la voie du bas, deux géants chacun. Leurs rochers sont esquivables, et ils infligent 100 % de dégâts supplémentaires aux structures. Disponibles à 0:30, ils réapparaissent 3:00 après.",
          "en": "Two camps on the bottom lane, two Giants each. Their stones are dodgeable, and they deal 100% bonus damage to Structures. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801m",
        "type": "camp",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Camp de siège — géants, bas droite",
          "en": "Siege Camp — Giants, bottom right"
        },
        "description": {
          "fr": "Deux camps sur la voie du bas, deux géants chacun. Leurs rochers sont esquivables, et ils infligent 100 % de dégâts supplémentaires aux structures. Disponibles à 0:30, ils réapparaissent 3:00 après.",
          "en": "Two camps on the bottom lane, two Giants each. Their stones are dodgeable, and they deal 100% bonus damage to Structures. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "ptem37",
        "type": "camp",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Camp de boss — golem de sable",
          "en": "Boss Camp — Sand Golem"
        },
        "description": {
          "fr": "Sur la voie du bas. Écrasement toutes les 10 secondes, tourbillon de sable toutes les 15. Immunisé contre la corruption. Disponible à 5:00, il réapparaît 5:00 après.",
          "en": "On the bottom lane. Mega Smash every 10 seconds, Whirling Sands every 15. Immune to Bribe. Available at 5:00, back 5:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801n",
        "type": "fontaine",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801o",
        "type": "fontaine",
        "x": 68,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "baie-coeur-noir",
    "enabled": true,
    "name": {
      "fr": "Baie de Cœur-Noir",
      "en": "Blackheart's Bay"
    },
    "image": "assets/maps/baie-coeur-noir/portrait.jpg",
    "minimapImage": "assets/maps/baie-coeur-noir/minimap.jpg",
    "headline": {
      "fr": "Des doublons arrachés aux coffres et aux mercenaires, à livrer au pirate fantôme qui bombarde ensuite.",
      "en": "Doubloons taken from chests and mercenaries, handed to the ghost pirate who then opens fire."
    },
    "objectives": {
      "fr": "Premier objectif à 1:30, puis toutes les trois minutes. Il faut livrer 8 doublons à Cœur-Noir, plus 2 de plus à chaque paiement déjà effectué par ton équipe, avec cinq secondes d'incantation. Payé, il bombarde : 12 boulets en 40 secondes, 3 000 points de dégâts chacun sur les structures, les bastions encaissant 20 % de moins. Les doublons viennent des coffres au trésor — 5 par coffre — et des camps de mercenaires, qui en donnent 2 chacun.",
      "en": "First objective at 1:30, then every three minutes. You hand Blackheart 8 Doubloons, plus 2 more for every payment your team has already made, with a five-second channel. Once paid, he bombards: 12 cannonballs over 40 seconds, 3,000 damage each against structures, with Keeps taking 20% less. Doubloons come from Treasure Chests — 5 apiece — and from mercenary camps, worth 2 each."
    },
    "tips": [
      {
        "fr": "Va payer dès que tu portes 5 doublons ou plus. Mourir avec, c'est les semer sur place.",
        "en": "Go and pay as soon as you carry 5 Doubloons or more. Dying with them scatters the lot."
      },
      {
        "fr": "Le premier bombardement fait presque tomber deux tours, une porte et un fort. Casse une tour avant, et le fort tombe pour de bon.",
        "en": "The first bombardment nearly takes down two Towers, a Gate and a Fort. Break one Tower beforehand and the Fort goes down for good."
      },
      {
        "fr": "Commence le camp de siège allié à 0:30, ou 30 à 40 secondes avant la phase suivante.",
        "en": "Start the allied Siege Camp at 0:30, or 30 to 40 seconds before the next phase."
      },
      {
        "fr": "Envoie ouvrir les coffres les héros qui frappent vite et souvent : c'est la cadence qui compte, pas les gros coups.",
        "en": "Send the Heroes who hit fast and often to open chests: it is tick rate that counts, not big hits."
      },
      {
        "fr": "Les coffres arrivent par vagues croissantes : un au début sur la voie du haut, puis deux, puis trois.",
        "en": "Chests come in growing waves: one at first on the top lane, then two, then three."
      },
      {
        "fr": "Les deux tours de guet entre le milieu et le bas couvrent la zone de paiement. Les tenir, c'est voir venir le porteur adverse.",
        "en": "The two Watch Towers between mid and bottom cover the turn-in area. Holding them means seeing the enemy carrier coming."
      }
    ],
    "hotspots": [
      {
        "id": "pbai38",
        "type": "objectif",
        "x": 49.4,
        "y": 61.1,
        "name": {
          "fr": "Cœur-Noir",
          "en": "Blackheart"
        },
        "description": {
          "fr": "Le pirate fantôme à qui l'on livre les doublons, cinq secondes d'incantation. 8 pour la première fois, plus 2 à chaque paiement déjà fait. Une fois servi, il bombarde les forts adverses depuis son navire.",
          "en": "The ghost pirate you hand the Doubloons to, on a five-second channel. 8 the first time, plus 2 for each payment already made. Once served, he bombards the enemy forts from his ship."
        },
        "image": ""
      },
      {
        "id": "pbai39",
        "type": "objectif",
        "x": 49.4,
        "y": 27.6,
        "name": {
          "fr": "Coffre au trésor",
          "en": "Treasure Chest"
        },
        "description": {
          "fr": "Cinq doublons par coffre. Le premier apparaît à 1:30 sur la voie du haut, puis toutes les trois minutes, par deux puis par trois.",
          "en": "Five Doubloons per chest. The first appears at 1:30 on the top lane, then every three minutes, in twos and then threes."
        },
        "image": ""
      },
      {
        "id": "pmutm0i5v0w9t",
        "type": "objectif",
        "x": 49.4,
        "y": 72.2,
        "name": {
          "fr": "Coffre au trésor",
          "en": "Treasure Chest"
        },
        "description": {
          "fr": "Cinq doublons par coffre. Le premier apparaît à 1:30 sur la voie du haut, puis toutes les trois minutes, par deux puis par trois.",
          "en": "Five Doubloons per chest. The first appears at 1:30 on the top lane, then every three minutes, in twos and then threes."
        },
        "image": ""
      },
      {
        "id": "pmutm0d83dc6m",
        "type": "objectif",
        "x": 49.4,
        "y": 45.4,
        "name": {
          "fr": "Coffre au trésor",
          "en": "Treasure Chest"
        },
        "description": {
          "fr": "Cinq doublons par coffre. Le premier apparaît à 1:30 sur la voie du haut, puis toutes les trois minutes, par deux puis par trois.",
          "en": "Five Doubloons per chest. The first appears at 1:30 on the top lane, then every three minutes, in twos and then threes."
        },
        "image": ""
      },
      {
        "id": "pbai40",
        "type": "camp",
        "x": 34.4,
        "y": 63.6,
        "name": {
          "fr": "Camp à doublons — pirates squelettes",
          "en": "Doubloon Camp — Skeletal Pirates"
        },
        "description": {
          "fr": "Deux camps de deux pirates squelettes. Ils ne poussent pas de voie : ils donnent deux doublons. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps of two Skeletal Pirates. They do not push a lane: they hand over two Doubloons. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e801p",
        "type": "camp",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Camp à doublons — entre haut et milieu, gauche",
          "en": "Doubloon Camp — between top and middle, left"
        },
        "description": {
          "fr": "Deux camps de deux pirates squelettes. Ils ne poussent pas de voie : ils donnent deux doublons. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps of two Skeletal Pirates. They do not push a lane: they hand over two Doubloons. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pmutlywxjq0no",
        "type": "camp",
        "x": 64.4,
        "y": 63.4,
        "name": {
          "fr": "Camp à doublons — pirates squelettes",
          "en": "Doubloon Camp — Skeletal Pirates"
        },
        "description": {
          "fr": "Deux camps de deux pirates squelettes. Ils ne poussent pas de voie : ils donnent deux doublons. Disponibles à 0:30, ils réapparaissent 2:30 après.",
          "en": "Two camps of two Skeletal Pirates. They do not push a lane: they hand over two Doubloons. Available at 0:30, back 2:30 after."
        },
        "image": ""
      },
      {
        "id": "pbai41",
        "type": "camp",
        "x": 29.9,
        "y": 70.7,
        "name": {
          "fr": "Camp de siège — géants",
          "en": "Siege Camp — Giants"
        },
        "description": {
          "fr": "Deux camps sur la voie du bas, deux géants chacun. Ils rejoignent la voie et rapportent deux doublons. Disponibles à 0:30, ils réapparaissent 3:00 après.",
          "en": "Two camps on the bottom lane, two Giants each. They join the lane and pay two Doubloons. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutlzc8zyokd",
        "type": "camp",
        "x": 69,
        "y": 70.9,
        "name": {
          "fr": "Camp de siège — géants",
          "en": "Siege Camp — Giants"
        },
        "description": {
          "fr": "Deux camps sur la voie du bas, deux géants chacun. Ils rejoignent la voie et rapportent deux doublons. Disponibles à 0:30, ils réapparaissent 3:00 après.",
          "en": "Two camps on the bottom lane, two Giants each. They join the lane and pay two Doubloons. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "pbai42",
        "type": "camp",
        "x": 49.5,
        "y": 5.1,
        "name": {
          "fr": "Camp de boss — golem sépulcral",
          "en": "Boss Camp — Grave Golem"
        },
        "description": {
          "fr": "Sur la voie du haut. Immunisé contre la corruption, il rapporte lui aussi deux doublons. Disponible à 5:00, il réapparaît 5:00 après.",
          "en": "On the top lane. Immune to Bribe, it also pays two Doubloons. Available at 5:00, back 5:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901r",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — haut, gauche",
          "en": "Bruiser Camp — top, left"
        },
        "description": {
          "fr": "Trois chevaliers et un sorcier, qui pose un champ d'armure des sorts autour des unités proches. Comme tous les camps de la carte, il rapporte deux doublons. Disponible à 0:30, il réapparaît 4:00 après avoir été pris.",
          "en": "Three Knights and a Wizard, who lays a Spell Armor field around nearby units. Like every camp on this map, it pays two Doubloons. Available at 0:30, back 4:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901s",
        "type": "camp",
        "x": 32.1,
        "y": 34.7,
        "name": {
          "fr": "Camp de bruisers — haut, droite",
          "en": "Bruiser Camp — top, right"
        },
        "description": {
          "fr": "Trois chevaliers et un sorcier, qui pose un champ d'armure des sorts autour des unités proches. Comme tous les camps de la carte, il rapporte deux doublons. Disponible à 0:30, il réapparaît 4:00 après avoir été pris.",
          "en": "Three Knights and a Wizard, who lays a Spell Armor field around nearby units. Like every camp on this map, it pays two Doubloons. Available at 0:30, back 4:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutnocty2ymj",
        "type": "camp",
        "x": 66.6,
        "y": 34.7,
        "name": {
          "fr": "Camp de bruisers — haut, droite",
          "en": "Bruiser Camp — top, right"
        },
        "description": {
          "fr": "Trois chevaliers et un sorcier, qui pose un champ d'armure des sorts autour des unités proches. Comme tous les camps de la carte, il rapporte deux doublons. Disponible à 0:30, il réapparaît 4:00 après avoir été pris.",
          "en": "Three Knights and a Wizard, who lays a Spell Armor field around nearby units. Like every camp on this map, it pays two Doubloons. Available at 0:30, back 4:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901t",
        "type": "camp",
        "x": 49.5,
        "y": 91,
        "name": {
          "fr": "Camp de bruisers — bas",
          "en": "Bruiser Camp — bottom"
        },
        "description": {
          "fr": "Trois chevaliers et un sorcier, qui pose un champ d'armure des sorts autour des unités proches. Comme tous les camps de la carte, il rapporte deux doublons. Disponible à 0:30, il réapparaît 4:00 après avoir été pris.",
          "en": "Three Knights and a Wizard, who lays a Spell Armor field around nearby units. Like every camp on this map, it pays two Doubloons. Available at 0:30, back 4:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901u",
        "type": "tour",
        "x": 41,
        "y": 63.4,
        "name": {
          "fr": "Tour de guet — gauche",
          "en": "Watch Tower — left"
        },
        "description": {
          "fr": "Entre la voie du milieu et celle du bas, sur les chemins qui mènent à Cœur-Noir. La tenir, c'est voir qui part livrer des doublons. On la capture en restant dans la zone ; elle redevient neutre après 45 secondes sans personne.",
          "en": "Between the middle and bottom lanes, on the paths leading to Blackheart. Holding it means seeing who goes to turn in Doubloons. Capture it by standing in the area; it turns neutral again after 45 seconds unoccupied."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901v",
        "type": "tour",
        "x": 57.8,
        "y": 63.4,
        "name": {
          "fr": "Tour de guet — droite",
          "en": "Watch Tower — right"
        },
        "description": {
          "fr": "Entre la voie du milieu et celle du bas, sur les chemins qui mènent à Cœur-Noir. La tenir, c'est voir qui part livrer des doublons. On la capture en restant dans la zone ; elle redevient neutre après 45 secondes sans personne.",
          "en": "Between the middle and bottom lanes, on the paths leading to Blackheart. Holding it means seeing who goes to turn in Doubloons. Capture it by standing in the area; it turns neutral again after 45 seconds unoccupied."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901w",
        "type": "fontaine",
        "x": 37.5,
        "y": 22.6,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutpq8w4kdn3",
        "type": "fontaine",
        "x": 16.6,
        "y": 38.5,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutnovld3wh1",
        "type": "fontaine",
        "x": 39,
        "y": 34.4,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutpqcqt2kd9",
        "type": "fontaine",
        "x": 28,
        "y": 60.4,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutnouk4z7im",
        "type": "fontaine",
        "x": 37.4,
        "y": 86,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutpqmrlmf3m",
        "type": "fontaine",
        "x": 17,
        "y": 71.3,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901x",
        "type": "fontaine",
        "x": 61.5,
        "y": 22.9,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutpp73biwn7",
        "type": "fontaine",
        "x": 82.2,
        "y": 38.5,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutnpxef0of5",
        "type": "fontaine",
        "x": 60.3,
        "y": 34.6,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutpp8t6jkye",
        "type": "fontaine",
        "x": 70.8,
        "y": 60.5,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutnpwqx37v1",
        "type": "fontaine",
        "x": 61.4,
        "y": 85.9,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutpp9vlgwuq",
        "type": "fontaine",
        "x": 81.8,
        "y": 71.1,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "comte-du-dragon",
    "enabled": true,
    "name": {
      "fr": "Comté du dragon",
      "en": "Dragon Shire"
    },
    "image": "assets/maps/comte-du-dragon/portrait.jpg",
    "minimapImage": "assets/maps/comte-du-dragon/minimap.jpg",
    "headline": {
      "fr": "Deux sanctuaires à tenir en même temps, puis un héros à envoyer dans la statue pour incarner le chevalier dragon.",
      "en": "Two shrines to hold at once, then a Hero sent into the statue to become the Dragon Knight."
    },
    "objectives": {
      "fr": "Deux sanctuaires apparaissent à 1:30, puis deux minutes après la mort du chevalier dragon. Il faut tenir les deux en même temps pour activer la statue de la voie du milieu : quatre secondes pour capturer un sanctuaire neutre, huit s'il est à l'adversaire. La statue active, un héros s'y rend et incarne le chevalier dragon pendant trois secondes d'incantation. Il tient 55 secondes, plus 2 par minute de jeu écoulée.",
      "en": "Two Shrines appear at 1:30, then two minutes after the Dragon Knight dies. You have to hold both at once to activate the statue in the middle lane: four seconds to capture a neutral Shrine, eight if the enemy holds it. With the statue active, a Hero walks up and becomes the Dragon Knight over a three-second channel. It lasts 55 seconds, plus 2 per minute of game time elapsed."
    },
    "tips": [
      {
        "fr": "Le chevalier dragon inflige 100 % de dégâts supplémentaires aux structures et aux serviteurs, encaisse 60 % de moins des structures, et explose à sa mort.",
        "en": "The Dragon Knight deals 100% bonus damage to Structures and Minions, takes 60% less from Structures, and explodes when it dies."
      },
      {
        "fr": "Son souffle de flammes revient toutes les 6 secondes, sa charge sauvage toutes les 10 — elle projette et frappe pour 450 points, plus 17 par minute.",
        "en": "Flame Breath comes back every 6 seconds, Savage Charge every 10 — it knocks back and hits for 450, plus 17 per minute."
      },
      {
        "fr": "Premier dragon : vise deux tours et si possible un fort dans une voie latérale. Deuxième dragon : va chercher un fort dans l'autre.",
        "en": "First Dragon: aim for two Towers and if possible a Fort in a side lane. Second Dragon: go for a Fort in the other one."
      },
      {
        "fr": "Prends le camp de siège à 0:42 et le camp de bruisers à 1:30 pour qu'ils arrivent avec les vagues.",
        "en": "Take the Siege Camp at 0:42 and the Bruiser Camp at 1:30 so they arrive with the waves."
      },
      {
        "fr": "À l'apparition des sanctuaires, place un héros résistant sur chacun : la capture demande de tenir, pas de gagner un duel.",
        "en": "When the Shrines appear, put a durable Hero on each: capturing asks you to hold, not to win a duel."
      },
      {
        "fr": "La fontaine s'utilise dès qu'elle est prête plutôt que d'être gardée pour l'objectif : celui-ci revient trop souvent pour qu'on l'attende.",
        "en": "Use the fountain as soon as it is up rather than saving it for the objective: that comes back too often to wait for."
      }
    ],
    "hotspots": [
      {
        "id": "pdrg1",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Sanctuaire du soleil",
          "en": "Sun Shrine"
        },
        "description": {
          "fr": "L'un des deux sanctuaires à tenir. Quatre secondes pour le capturer s'il est neutre, huit s'il appartient à l'adversaire. Le tenir seul ne sert à rien : la statue ne s'active que si les deux sont à toi en même temps.",
          "en": "One of the two Shrines to hold. Four seconds to capture if neutral, eight if the enemy owns it. Holding it alone achieves nothing: the statue only activates when both are yours at the same time."
        },
        "image": "assets/maps/comte-du-dragon/captures/5.jpg"
      },
      {
        "id": "pdrg2",
        "type": "objectif",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Sanctuaire de la lune",
          "en": "Moon Shrine"
        },
        "description": {
          "fr": "Le second sanctuaire, mêmes règles que celui du soleil. C'est la simultanéité qui compte : perdre l'un pendant qu'on prend l'autre remet le compteur à zéro.",
          "en": "The second Shrine, same rules as the Sun one. Simultaneity is what counts: losing one while taking the other puts you back to nothing."
        },
        "image": "assets/maps/comte-du-dragon/captures/3.jpg"
      },
      {
        "id": "pdrg3",
        "type": "objectif",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Statue du chevalier dragon",
          "en": "Dragon Knight's statue"
        },
        "description": {
          "fr": "Au centre de la voie du milieu. Les deux sanctuaires tenus l'activent ; un héros s'y rend alors et incante trois secondes pour incarner le dragon. Il tient 55 secondes, plus 2 par minute de jeu écoulée. La statue redevient disponible deux minutes après la mort du chevalier.",
          "en": "At the centre of the middle lane. Both Shrines held activate it; a Hero then walks up and channels for three seconds to become the Dragon. It lasts 55 seconds, plus 2 per minute of game time elapsed. The statue comes back two minutes after the Dragon Knight dies."
        },
        "image": "assets/maps/comte-du-dragon/objectifs/2.jpg"
      },
      {
        "id": "pdrg4",
        "type": "objectif",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Chevalier dragon",
          "en": "Dragon Knight"
        },
        "description": {
          "fr": "Ce qui sort de la statue. Souffle de flammes toutes les 6 secondes, charge sauvage toutes les 10 — elle projette et frappe pour 450 points, plus 17 par minute. Il inflige 100 % de dégâts supplémentaires aux structures et aux serviteurs, encaisse 60 % de moins des structures, et explose à sa mort.",
          "en": "What comes out of the statue. Flame Breath every 6 seconds, Savage Charge every 10 — it knocks back and hits for 450, plus 17 per minute. It deals 100% bonus damage to Structures and Minions, takes 60% less from Structures, and explodes when it dies."
        },
        "image": "assets/maps/comte-du-dragon/captures/4.jpg"
      },
      {
        "id": "pdrg5",
        "type": "camp",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — haut, côté bleu",
          "en": "Bruiser Camp — top, blue side"
        },
        "description": {
          "fr": "Trois chevaliers et un sorcier. Le sorcier pose un champ d'armure des sorts qui réduit les dégâts subis par les unités proches. Disponible à 0:30, il réapparaît 4:00 après avoir été pris. À capturer vers 1:30 pour qu'il arrive en ligne avec la vague.",
          "en": "Three Knights and a Wizard. The Wizard lays a Spell Armor field that cuts the damage nearby units take. Available at 0:30, back 4:00 after being taken. Worth capturing around 1:30 so it reaches the lane with the wave."
        },
        "image": "assets/maps/comte-du-dragon/captures/2.jpg"
      },
      {
        "id": "pdrg6",
        "type": "camp",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — haut, côté rouge",
          "en": "Bruiser Camp — top, red side"
        },
        "description": {
          "fr": "Le symétrique du camp d'en face, même composition. Sur cette carte les bruisers sont en haut et le siège en bas : la voie du haut se dispute donc plus longtemps.",
          "en": "The mirror of the camp opposite, same composition. On this map the Bruisers sit at the top and the Siege camps at the bottom: the top lane is contested longer as a result."
        },
        "image": "assets/maps/comte-du-dragon/captures/2.jpg"
      },
      {
        "id": "pdrg7",
        "type": "camp",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Camp de bruisers — bas",
          "en": "Bruiser Camp — bottom"
        },
        "description": {
          "fr": "Le cinquième camp de la carte, seul de son espèce en bas. Trois chevaliers et un sorcier, comme ceux du haut. Disponible à 0:30, il réapparaît 4:00 après.",
          "en": "The map's fifth camp, the only one of its kind at the bottom. Three Knights and a Wizard, like those at the top. Available at 0:30, back 4:00 after."
        },
        "image": "assets/maps/comte-du-dragon/captures/2.jpg"
      },
      {
        "id": "pdrg8",
        "type": "camp",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Camp de siège — bas, côté bleu",
          "en": "Siege Camp — bottom, blue side"
        },
        "description": {
          "fr": "Deux géants de siège. Leurs rochers sont esquivables, et ils infligent 100 % de dégâts supplémentaires aux structures. Disponible à 0:30, il réapparaît 3:00 après. À prendre vers 0:42 pour qu'il parte avec la vague.",
          "en": "Two Siege Giants. Their stones are dodgeable, and they deal 100% bonus damage to Structures. Available at 0:30, back 3:00 after. Worth taking around 0:42 so it leaves with the wave."
        },
        "image": ""
      },
      {
        "id": "pdrg9",
        "type": "camp",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Camp de siège — bas, côté rouge",
          "en": "Siege Camp — bottom, red side"
        },
        "description": {
          "fr": "Le symétrique du précédent, même composition. Les deux camps de siège sont sur la voie du bas, à l'opposé des bruisers.",
          "en": "The mirror of the previous one, same composition. Both Siege camps sit on the bottom lane, opposite the Bruisers."
        },
        "image": ""
      },
      {
        "id": "pdrg10",
        "type": "fontaine",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté bleu",
          "en": "Healing fountain — blue side"
        },
        "description": {
          "fr": "Deux minutes de recharge. L'objectif revenant deux minutes après la mort du dragon, la fontaine se dépense dès qu'elle est prête plutôt que d'être gardée : elle sera de nouveau là au moment voulu.",
          "en": "Two-minute cooldown. With the objective back two minutes after the Dragon dies, spend the fountain as soon as it is up rather than saving it: it will be there again when it matters."
        },
        "image": ""
      },
      {
        "id": "pdrg11",
        "type": "fontaine",
        "x": 68,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté rouge",
          "en": "Healing fountain — red side"
        },
        "description": {
          "fr": "La fontaine adverse. Savoir si elle est disponible change la valeur d'un plongeon dans leur base autant que leurs points de vie restants.",
          "en": "The enemy fountain. Knowing whether it is up changes the worth of diving their base as much as their remaining health does."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "val-maudit",
    "enabled": true,
    "name": {
      "fr": "Val maudit",
      "en": "Cursed Hollow"
    },
    "image": "assets/maps/val-maudit/portrait.jpg",
    "minimapImage": "assets/maps/val-maudit/minimap.jpg",
    "headline": {
      "fr": "Trois tributs du seigneur corbeau, et l'équipe adverse se retrouve maudite : forts muets, serviteurs à un point de vie.",
      "en": "Three of the Raven Lord's Tributes, and the enemy team is cursed: silent forts, Minions on one Health."
    },
    "objectives": {
      "fr": "Le premier tribut apparaît à 3:00, les suivants 0:50 à 1:30 après une récolte, ou 2:00 à 2:40 après la fin d'une malédiction. Il faut six secondes d'incantation pour s'en emparer, et trois tributs pour maudire l'équipe adverse pendant 70 secondes : ses serviteurs tombent à un point de vie et ses forts cessent de tirer.",
      "en": "The first Tribute appears at 3:00, the next ones 0:50 to 1:30 after a pickup, or 2:00 to 2:40 after a Curse ends. It takes a six-second channel to claim one, and three Tributes to curse the enemy team for 70 seconds: their Minions drop to one Health and their Forts stop firing."
    },
    "tips": [
      {
        "fr": "Soixante-dix secondes de malédiction, c'est long. Pousse les voies latérales pendant qu'elle tient plutôt que de chercher le combat au centre.",
        "en": "Seventy seconds of Curse is a long time. Push the side lanes while it holds rather than looking for a fight at the centre."
      },
      {
        "fr": "Des forts qui ne tirent pas, c'est l'occasion de plonger : ce qui est suicidaire le reste du temps devient gratuit.",
        "en": "Forts that do not fire are an invitation to dive: what is suicidal the rest of the time becomes free."
      },
      {
        "fr": "Conteste les tributs à quatre et laisse le cinquième défendre contre les mercenaires adverses.",
        "en": "Contest Tributes four-strong and leave the fifth to defend against enemy mercenaries."
      },
      {
        "fr": "Prends les camps dès 0:30 : la première phase n'arrive qu'à 3:00, tu as le temps d'en enchaîner deux.",
        "en": "Take the camps from 0:30: the first phase only lands at 3:00, so there is time for two of them."
      },
      {
        "fr": "Les deux tours de guet donnent la vision près des camps de siège, mais seulement tant que le fort de la voie latérale voisine tient encore.",
        "en": "The two Watch Towers give vision near the Siege Camps, but only while the Fort in the adjacent side lane still stands."
      },
      {
        "fr": "Après 10:00 avec l'avantage, prends les camps de boss et pousse avec eux : il y en a deux sur cette carte.",
        "en": "After 10:00 with the advantage, take the Boss Camps and push with them: there are two on this map."
      }
    ],
    "hotspots": [
      {
        "id": "pval47",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Tribut — haut, gauche",
          "en": "Tribute — top, left"
        },
        "description": {
          "fr": "Six secondes d'incantation pour s'en emparer. Trois tributs déclenchent la malédiction : 70 secondes pendant lesquelles les forts adverses ne tirent plus et leurs serviteurs tombent à un point de vie.",
          "en": "A six-second channel to claim it. Three Tributes trigger the Curse: 70 seconds during which enemy Forts stop firing and their Minions drop to one Health."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901y",
        "type": "objectif",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Tribut — haut, milieu",
          "en": "Tribute — top, middle"
        },
        "description": {
          "fr": "Six secondes d'incantation pour s'en emparer. Trois tributs déclenchent la malédiction : 70 secondes pendant lesquelles les forts adverses ne tirent plus et leurs serviteurs tombent à un point de vie.",
          "en": "A six-second channel to claim it. Three Tributes trigger the Curse: 70 seconds during which enemy Forts stop firing and their Minions drop to one Health."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e901z",
        "type": "objectif",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Tribut — haut, droite",
          "en": "Tribute — top, right"
        },
        "description": {
          "fr": "Six secondes d'incantation pour s'en emparer. Trois tributs déclenchent la malédiction : 70 secondes pendant lesquelles les forts adverses ne tirent plus et leurs serviteurs tombent à un point de vie.",
          "en": "A six-second channel to claim it. Three Tributes trigger the Curse: 70 seconds during which enemy Forts stop firing and their Minions drop to one Health."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9020",
        "type": "objectif",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Tribut — bas, gauche",
          "en": "Tribute — bottom, left"
        },
        "description": {
          "fr": "Six secondes d'incantation pour s'en emparer. Trois tributs déclenchent la malédiction : 70 secondes pendant lesquelles les forts adverses ne tirent plus et leurs serviteurs tombent à un point de vie.",
          "en": "A six-second channel to claim it. Three Tributes trigger the Curse: 70 seconds during which enemy Forts stop firing and their Minions drop to one Health."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9021",
        "type": "objectif",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Tribut — bas, milieu",
          "en": "Tribute — bottom, middle"
        },
        "description": {
          "fr": "Six secondes d'incantation pour s'en emparer. Trois tributs déclenchent la malédiction : 70 secondes pendant lesquelles les forts adverses ne tirent plus et leurs serviteurs tombent à un point de vie.",
          "en": "A six-second channel to claim it. Three Tributes trigger the Curse: 70 seconds during which enemy Forts stop firing and their Minions drop to one Health."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9022",
        "type": "objectif",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Tribut — bas, droite",
          "en": "Tribute — bottom, right"
        },
        "description": {
          "fr": "Six secondes d'incantation pour s'en emparer. Trois tributs déclenchent la malédiction : 70 secondes pendant lesquelles les forts adverses ne tirent plus et leurs serviteurs tombent à un point de vie.",
          "en": "A six-second channel to claim it. Three Tributes trigger the Curse: 70 seconds during which enemy Forts stop firing and their Minions drop to one Health."
        },
        "image": ""
      },
      {
        "id": "pval48",
        "type": "camp",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Camp de siège — géants, haut gauche",
          "en": "Siege Camp — Giants, top left"
        },
        "description": {
          "fr": "Deux camps, deux géants chacun, dont les rochers sont esquivables. 100 % de dégâts supplémentaires aux structures. Disponibles à 0:30, ils réapparaissent 3:00 après.",
          "en": "Two camps, two Giants each, whose stones are dodgeable. 100% bonus damage to Structures. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9023",
        "type": "camp",
        "x": 68,
        "y": 26,
        "name": {
          "fr": "Camp de siège — géants, bas droite",
          "en": "Siege Camp — Giants, bottom right"
        },
        "description": {
          "fr": "Deux camps, deux géants chacun, dont les rochers sont esquivables. 100 % de dégâts supplémentaires aux structures. Disponibles à 0:30, ils réapparaissent 3:00 après.",
          "en": "Two camps, two Giants each, whose stones are dodgeable. 100% bonus damage to Structures. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "pval49",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — chevaliers, milieu gauche",
          "en": "Bruiser Camp — Knights, middle left"
        },
        "description": {
          "fr": "Deux camps de trois chevaliers et un sorcier, qui pose un champ d'armure des sorts autour des unités proches. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps of three Knights and a Wizard, who lays a Spell Armor field around nearby units. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9024",
        "type": "camp",
        "x": 82,
        "y": 26,
        "name": {
          "fr": "Camp de bruisers — chevaliers, milieu droite",
          "en": "Bruiser Camp — Knights, middle right"
        },
        "description": {
          "fr": "Deux camps de trois chevaliers et un sorcier, qui pose un champ d'armure des sorts autour des unités proches. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps of three Knights and a Wizard, who lays a Spell Armor field around nearby units. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pval50",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de boss — golem sépulcral, haut droite",
          "en": "Boss Camp — Grave Golem, top right"
        },
        "description": {
          "fr": "Deux camps sur cette carte. Écrasement toutes les 10 secondes, racines toutes les 15. Immunisés contre la corruption. Disponibles à 5:00, ils réapparaissent 5:00 après.",
          "en": "Two camps on this map. Mega Smash every 10 seconds, Binding Roots every 15. Immune to Bribe. Available at 5:00, back 5:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9025",
        "type": "camp",
        "x": 12,
        "y": 40,
        "name": {
          "fr": "Camp de boss — golem sépulcral, bas gauche",
          "en": "Boss Camp — Grave Golem, bottom left"
        },
        "description": {
          "fr": "Deux camps sur cette carte. Écrasement toutes les 10 secondes, racines toutes les 15. Immunisés contre la corruption. Disponibles à 5:00, ils réapparaissent 5:00 après.",
          "en": "Two camps on this map. Mega Smash every 10 seconds, Binding Roots every 15. Immune to Bribe. Available at 5:00, back 5:00 after."
        },
        "image": ""
      },
      {
        "id": "pval51",
        "type": "tour",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Tour de guet — haut, gauche",
          "en": "Watch Tower — top, left"
        },
        "description": {
          "fr": "Deux tours, près des camps de siège. Elles ne donnent la vision que tant que le fort de la voie latérale voisine tient encore.",
          "en": "Two towers, near the Siege Camps. They only give vision while the Fort in the adjacent side lane still stands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9026",
        "type": "tour",
        "x": 26,
        "y": 40,
        "name": {
          "fr": "Tour de guet — bas, droite",
          "en": "Watch Tower — bottom, right"
        },
        "description": {
          "fr": "Deux tours, près des camps de siège. Elles ne donnent la vision que tant que le fort de la voie latérale voisine tient encore.",
          "en": "Two towers, near the Siege Camps. They only give vision while the Fort in the adjacent side lane still stands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9027",
        "type": "fontaine",
        "x": 40,
        "y": 40,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9028",
        "type": "fontaine",
        "x": 54,
        "y": 40,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "laboratoire-braxis",
    "enabled": true,
    "name": {
      "fr": "Laboratoire de Braxis",
      "en": "Braxis Holdout"
    },
    "image": "assets/maps/laboratoire-braxis/portrait.jpg",
    "minimapImage": "assets/maps/laboratoire-braxis/minimap.jpg",
    "headline": {
      "fr": "Deux balises à capturer pour remplir sa cellule de Zergs — et les vagues partent des deux côtés à la fois.",
      "en": "Two beacons to capture to fill your cell with Zerg — and the waves go out on both sides at once."
    },
    "objectives": {
      "fr": "Deux balises s'activent à 1:30, puis 2:10 après la mort des vagues précédentes. Capturer une balise prend trois secondes si elle est neutre, six si elle appartient à l'adversaire ; la progression monte de 2 % toutes les 0,75 seconde, soit environ 40 secondes pour la remplir. Dès qu'une des deux cellules est pleine, les deux s'ouvrent et lâchent leur vague dans la voie opposée. À 100 %, la vague compte 6 zerglings, 10 banelings, 4 hydralisks, 3 gardiens et 3 ultralisks.",
      "en": "Two Beacons activate at 1:30, then 2:10 after the previous waves die. Capturing a Beacon takes three seconds if neutral, six if the enemy holds it; progress climbs 2% every 0.75 seconds, about 40 seconds to fill. As soon as either cell is full, both open and send their wave into the opposite lane. At 100%, the wave holds 6 Zerglings, 10 Banelings, 4 Hydralisks, 3 Guardians and 3 Ultralisks."
    },
    "tips": [
      {
        "fr": "Ta vague part en même temps que celle d'en face. Remplir sa cellule ne sert qu'à rendre la sienne plus grosse que l'autre.",
        "en": "Your wave leaves at the same time as theirs. Filling your cell only makes yours bigger than the other."
      },
      {
        "fr": "Tiens au moins une balise, et tiens-la longtemps sans mourir. Contester les deux à cinq revient souvent à n'en garder aucune.",
        "en": "Hold at least one Beacon, and hold it a long time without dying. Contesting both five-strong often means keeping neither."
      },
      {
        "fr": "Si l'adversaire s'engage en haut, va prendre celle du bas plutôt que de suivre.",
        "en": "If the enemy commits at the top, go and take the bottom one rather than following."
      },
      {
        "fr": "À 0:30, ou juste après la mort des vagues, nettoie le camp de bruisers allié. Le camp de siège se prend à 1:10 pour arriver avec la vague.",
        "en": "At 0:30, or right after the waves die, clear the allied Bruiser Camp. Take the Siege Camp at 1:10 to arrive with the wave."
      },
      {
        "fr": "Deux générateurs de globes, au-dessus de la voie du haut et sous celle du bas, produisent un globe neutre toutes les 45 secondes après ramassage.",
        "en": "Two Globe Spawners, above the top lane and below the bottom one, produce a neutral globe every 45 seconds after pickup."
      },
      {
        "fr": "Les zergs s'en prennent aux héros, pas seulement aux structures. S'engager pendant une vague est plus risqué qu'il n'y paraît.",
        "en": "The Zerg go for Heroes, not just structures. Engaging during a wave is riskier than it looks."
      }
    ],
    "hotspots": [
      {
        "id": "plab52",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Balise — haut",
          "en": "Beacon — top"
        },
        "description": {
          "fr": "Deux balises. Trois secondes de capture si elle est neutre, six si l'adversaire la tient. La progression monte de 2 % toutes les 0,75 seconde et remplit la cellule de détention de zergs.",
          "en": "Two Beacons. Three seconds to capture if neutral, six if the enemy holds it. Progress climbs 2% every 0.75 seconds and fills the Holding Cell with Zerg."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e9029",
        "type": "objectif",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Balise — bas",
          "en": "Beacon — bottom"
        },
        "description": {
          "fr": "Deux balises. Trois secondes de capture si elle est neutre, six si l'adversaire la tient. La progression monte de 2 % toutes les 0,75 seconde et remplit la cellule de détention de zergs.",
          "en": "Two Beacons. Three seconds to capture if neutral, six if the enemy holds it. Progress climbs 2% every 0.75 seconds and fills the Holding Cell with Zerg."
        },
        "image": ""
      },
      {
        "id": "plab53",
        "type": "objectif",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Cellule de détention — gauche",
          "en": "Holding Cell — left"
        },
        "description": {
          "fr": "Une par équipe. Dès que l'une est pleine, les deux s'ouvrent : ta vague et celle d'en face partent ensemble, dans des voies opposées. La composition dépend du pourcentage atteint.",
          "en": "One per team. As soon as either is full, both open: your wave and theirs leave together, into opposite lanes. The composition depends on the percentage reached."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902a",
        "type": "objectif",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Cellule de détention — droite",
          "en": "Holding Cell — right"
        },
        "description": {
          "fr": "Une par équipe. Dès que l'une est pleine, les deux s'ouvrent : ta vague et celle d'en face partent ensemble, dans des voies opposées. La composition dépend du pourcentage atteint.",
          "en": "One per team. As soon as either is full, both open: your wave and theirs leave together, into opposite lanes. The composition depends on the percentage reached."
        },
        "image": ""
      },
      {
        "id": "plab54",
        "type": "camp",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Camp de siège — hellions, haut droite",
          "en": "Siege Camp — Hellbats, top right"
        },
        "description": {
          "fr": "Un camp par voie, deux hellions chacun. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "One camp per lane, two Hellbats each. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902b",
        "type": "camp",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Camp de siège — hellions, bas gauche",
          "en": "Siege Camp — Hellbats, bottom left"
        },
        "description": {
          "fr": "Un camp par voie, deux hellions chacun. Disponibles à 0:30, ils réapparaissent 3:00 après avoir été pris.",
          "en": "One camp per lane, two Hellbats each. Available at 0:30, back 3:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "plab55",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — goliaths, haut gauche",
          "en": "Bruiser Camp — Goliaths, top left"
        },
        "description": {
          "fr": "Un camp par voie : trois goliaths et un corbeau. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "One camp per lane: three Goliaths and a Raven. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902c",
        "type": "camp",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Camp de bruisers — goliaths, bas droite",
          "en": "Bruiser Camp — Goliaths, bottom right"
        },
        "description": {
          "fr": "Un camp par voie : trois goliaths et un corbeau. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "One camp per lane: three Goliaths and a Raven. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "plab56",
        "type": "camp",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Camp de boss — archange",
          "en": "Boss Camp — Archangel"
        },
        "description": {
          "fr": "Au centre de la carte. Immunisé contre la corruption. Disponible à 5:00, il réapparaît 5:00 après. Le prendre tôt demande une composition faite pour ça.",
          "en": "At the centre of the map. Immune to Bribe. Available at 5:00, back 5:00 after. Taking it early asks for a composition built for it."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902d",
        "type": "autre",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Générateur de globes — haut",
          "en": "Globe Spawner — top"
        },
        "description": {
          "fr": "Un générateur au-dessus de la voie du haut, un autre sous celle du bas. Ils sont placés de façon qu'un héros qui tient la balise voisine ne puisse pas ramasser le globe de régénération sans la quitter.",
          "en": "One spawner above the top lane, another below the bottom lane. They sit where a Hero holding the nearby Beacon cannot grab the Regeneration Globe without leaving it."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902e",
        "type": "autre",
        "x": 68,
        "y": 26,
        "name": {
          "fr": "Générateur de globes — bas",
          "en": "Globe Spawner — bottom"
        },
        "description": {
          "fr": "Un générateur au-dessus de la voie du haut, un autre sous celle du bas. Ils sont placés de façon qu'un héros qui tient la balise voisine ne puisse pas ramasser le globe de régénération sans la quitter.",
          "en": "One spawner above the top lane, another below the bottom lane. They sit where a Hero holding the nearby Beacon cannot grab the Regeneration Globe without leaving it."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902f",
        "type": "fontaine",
        "x": 82,
        "y": 26,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902g",
        "type": "fontaine",
        "x": 12,
        "y": 40,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "menace-nucleaire",
    "enabled": true,
    "name": {
      "fr": "Menace nucléaire",
      "en": "Warhead Junction"
    },
    "image": "assets/maps/menace-nucleaire/portrait.jpg",
    "minimapImage": "assets/maps/menace-nucleaire/minimap.jpg",
    "headline": {
      "fr": "Des ogives éparpillées sur la carte : en ramasser une arme une frappe, mourir avec la fait perdre.",
      "en": "Warheads scattered across the map: picking one up arms a nuke, dying with it loses it."
    },
    "objectives": {
      "fr": "Les ogives apparaissent à partir de 3:00, deux à quatre à la fois, réparties sur les trois voies ; elles reviennent 2:55 après que toutes ont été ramassées. Cinq secondes d'incantation pour en prendre une, puis trois secondes d'incantation et quatre de délai avant l'explosion. L'impact inflige 1 750 points, plus 70 par minute pendant 25 minutes, et enflamme les structures dix secondes. Forts, bastions et idoles encaissent 125 % de dégâts en plus.",
      "en": "Warheads appear from 3:00 onward, two to four at a time, spread across the three lanes; they come back 2:55 after all of them are picked up. A five-second channel to take one, then a three-second channel and a four-second delay before it detonates. Impact deals 1,750 damage, plus 70 per minute for 25 minutes, and sets structures alight for ten seconds. Forts, Keeps and Cores take 125% more damage."
    },
    "tips": [
      {
        "fr": "Vise au moins la moitié des ogives disponibles. Le reste du travail consiste à harceler ceux qui ramassent et à interrompre ceux qui lancent.",
        "en": "Aim for at least half the available Warheads. The rest of the job is harassing whoever is picking up and interrupting whoever is launching."
      },
      {
        "fr": "Garde les ogives pour la fin : trois d'entre elles font environ 110 % de la vie d'une idole, bouclier de 50 % compris.",
        "en": "Save Warheads for the endgame: three of them deal roughly 110% of a Core's health, 50% shield included."
      },
      {
        "fr": "Les fenêtres de tir suivent les vagues. Pour un fort ou une tour : :09 et :39 au milieu, :16 et :46 en haut, :17 et :57 en bas.",
        "en": "Launch windows follow the waves. For a Fort or Tower: :09 and :39 at mid, :16 and :46 at the top, :17 and :57 at the bottom."
      },
      {
        "fr": "Pour viser un bastion : :28 et :58 au milieu, :29 et :59 en haut comme en bas.",
        "en": "To hit a Keep: :28 and :58 at mid, :29 and :59 at the top and bottom alike."
      },
      {
        "fr": "Le tunnel d'égout relie le haut et le bas en deux secondes d'incantation. Deux tours de guet en surveillent les entrées.",
        "en": "The Sewage Tunnel links top and bottom on a two-second channel. Two Watch Towers watch its mouths."
      },
      {
        "fr": "Prends le camp de bruisers allié à 0:45 : il envoie les mêmes unités se battre pour toi dans la voie correspondante.",
        "en": "Take the allied Bruiser Camp at 0:45: it sends the same units to fight for you in the matching lane."
      },
      {
        "fr": "Une ogive non lancée est perdue à la mort. Entre la garder et la tirer sur une tour, tirer vaut toujours mieux que mourir avec.",
        "en": "An unlaunched Warhead is lost on death. Between holding it and firing it at a Tower, firing always beats dying with it."
      }
    ],
    "hotspots": [
      {
        "id": "pmen57",
        "type": "objectif",
        "x": 12,
        "y": 12,
        "name": {
          "fr": "Ogive — haut, gauche",
          "en": "Warhead — top, left"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902h",
        "type": "objectif",
        "x": 82,
        "y": 12,
        "name": {
          "fr": "Ogive — haut, centre",
          "en": "Warhead — top, centre"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902i",
        "type": "objectif",
        "x": 12,
        "y": 26,
        "name": {
          "fr": "Ogive — haut, droite",
          "en": "Warhead — top, right"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902j",
        "type": "objectif",
        "x": 26,
        "y": 26,
        "name": {
          "fr": "Ogive — milieu, gauche",
          "en": "Warhead — middle, left"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902k",
        "type": "objectif",
        "x": 40,
        "y": 26,
        "name": {
          "fr": "Ogive — milieu, centre",
          "en": "Warhead — middle, centre"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902l",
        "type": "objectif",
        "x": 54,
        "y": 26,
        "name": {
          "fr": "Ogive — milieu, droite",
          "en": "Warhead — middle, right"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902m",
        "type": "objectif",
        "x": 68,
        "y": 26,
        "name": {
          "fr": "Ogive — bas, gauche",
          "en": "Warhead — bottom, left"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902n",
        "type": "objectif",
        "x": 82,
        "y": 26,
        "name": {
          "fr": "Ogive — bas, centre",
          "en": "Warhead — bottom, centre"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902o",
        "type": "objectif",
        "x": 12,
        "y": 40,
        "name": {
          "fr": "Ogive — bas, droite",
          "en": "Warhead — bottom, right"
        },
        "description": {
          "fr": "Deux à quatre apparaissent à la fois sur les trois voies. Cinq secondes d'incantation pour en ramasser une, puis trois secondes pour la lancer et quatre de délai avant l'explosion.",
          "en": "Two to four appear at a time across the three lanes. A five-second channel to pick one up, then three seconds to launch and a four-second delay before it lands."
        },
        "image": ""
      },
      {
        "id": "pmen58",
        "type": "tour",
        "x": 26,
        "y": 12,
        "name": {
          "fr": "Tour de guet — au-dessus du milieu",
          "en": "Watch Tower — above the middle"
        },
        "description": {
          "fr": "Deux tours, qui donnent la vision sur les entrées du tunnel d'égout. Il faut rester dans la zone jusqu'à la capture, et elles redeviennent neutres après 45 secondes sans personne.",
          "en": "Two towers, giving vision on the Sewage Tunnel mouths. You have to stay in the area until capture, and they go neutral again after 45 seconds unoccupied."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902p",
        "type": "tour",
        "x": 26,
        "y": 40,
        "name": {
          "fr": "Tour de guet — sous le milieu",
          "en": "Watch Tower — below the middle"
        },
        "description": {
          "fr": "Deux tours, qui donnent la vision sur les entrées du tunnel d'égout. Il faut rester dans la zone jusqu'à la capture, et elles redeviennent neutres après 45 secondes sans personne.",
          "en": "Two towers, giving vision on the Sewage Tunnel mouths. You have to stay in the area until capture, and they go neutral again after 45 seconds unoccupied."
        },
        "image": ""
      },
      {
        "id": "pmen59",
        "type": "autre",
        "x": 40,
        "y": 12,
        "name": {
          "fr": "Tunnel d'égout — entrée du haut",
          "en": "Sewage Tunnel — top entrance"
        },
        "description": {
          "fr": "Relie la voie du haut à celle du bas, deux secondes d'incantation pour le traverser. C'est lui qui rend les rotations possibles sur cette carte.",
          "en": "Links the top lane to the bottom one, a two-second channel to go through. It is what makes rotations possible on this map."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902q",
        "type": "autre",
        "x": 40,
        "y": 40,
        "name": {
          "fr": "Tunnel d'égout — entrée du bas",
          "en": "Sewage Tunnel — bottom entrance"
        },
        "description": {
          "fr": "Relie la voie du haut à celle du bas, deux secondes d'incantation pour le traverser. C'est lui qui rend les rotations possibles sur cette carte.",
          "en": "Links the top lane to the bottom one, a two-second channel to go through. It is what makes rotations possible on this map."
        },
        "image": ""
      },
      {
        "id": "pmen60",
        "type": "camp",
        "x": 54,
        "y": 12,
        "name": {
          "fr": "Camp de siège — hellions, bas gauche",
          "en": "Siege Camp — Hellbats, bottom left"
        },
        "description": {
          "fr": "Deux camps sur la voie du bas. Leurs hellions réduisent l'armure des structures de 4 points, cumulables jusqu'à 20. Disponibles à 0:30, ils réapparaissent 3:00 après.",
          "en": "Two camps on the bottom lane. Their Hellbats reduce Structure Armor by 4, stacking up to 20. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902r",
        "type": "camp",
        "x": 54,
        "y": 40,
        "name": {
          "fr": "Camp de siège — hellions, bas droite",
          "en": "Siege Camp — Hellbats, bottom right"
        },
        "description": {
          "fr": "Deux camps sur la voie du bas. Leurs hellions réduisent l'armure des structures de 4 points, cumulables jusqu'à 20. Disponibles à 0:30, ils réapparaissent 3:00 après.",
          "en": "Two camps on the bottom lane. Their Hellbats reduce Structure Armor by 4, stacking up to 20. Available at 0:30, back 3:00 after."
        },
        "image": ""
      },
      {
        "id": "pmen61",
        "type": "camp",
        "x": 68,
        "y": 12,
        "name": {
          "fr": "Camp de bruisers — goliaths, haut gauche",
          "en": "Bruiser Camp — Goliaths, top left"
        },
        "description": {
          "fr": "Deux camps sur la voie du haut : trois goliaths et un corbeau, dont le missile traqueur révèle sa cible. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps on the top lane: three Goliaths and a Raven, whose seeker missile reveals its target. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902s",
        "type": "camp",
        "x": 68,
        "y": 40,
        "name": {
          "fr": "Camp de bruisers — goliaths, haut droite",
          "en": "Bruiser Camp — Goliaths, top right"
        },
        "description": {
          "fr": "Deux camps sur la voie du haut : trois goliaths et un corbeau, dont le missile traqueur révèle sa cible. Disponibles à 0:30, ils réapparaissent 4:00 après.",
          "en": "Two camps on the top lane: three Goliaths and a Raven, whose seeker missile reveals its target. Available at 0:30, back 4:00 after."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902t",
        "type": "camp",
        "x": 82,
        "y": 40,
        "name": {
          "fr": "Camp de boss — haut",
          "en": "Boss Camp — top"
        },
        "description": {
          "fr": "Sur la voie du haut. Un boss gluant qui crache une flaque de vase à esquiver toutes les 14 secondes, puis fait éclore des larves quelques secondes après. Immunisé contre la corruption. Disponible à 5:00, il réapparaît 5:00 après avoir été pris.",
          "en": "On the top lane. A Slime Boss that spits a slime pool to dodge every 14 seconds, then hatches spawn pods a few seconds later. Immune to Bribe. Available at 5:00, back 5:00 after being taken."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902u",
        "type": "fontaine",
        "x": 12,
        "y": 54,
        "name": {
          "fr": "Fontaine de soins — côté gauche",
          "en": "Healing fountain — left side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      },
      {
        "id": "pmutmu1e902v",
        "type": "fontaine",
        "x": 26,
        "y": 54,
        "name": {
          "fr": "Fontaine de soins — côté droit",
          "en": "Healing fountain — right side"
        },
        "description": {
          "fr": "Deux minutes de recharge après utilisation. Savoir si celle d'en face est disponible change la valeur d'un plongeon autant que les points de vie restants.",
          "en": "Two-minute cooldown after use. Knowing whether the enemy one is up changes the worth of a dive as much as their remaining health does."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  }
];
