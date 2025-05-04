let lname = 'Shi';
let fname = 'Jin';
let gender = 'male'
let fatepoints = 3;
let qi = 1;
let max_qi = 1;
let cultivation_realm = 'Low Foundation Forming';
let cultivation_progress = 0;
let lifespan = 120;
let totalDays = 365;
let daysleft = totalDays;
let potential_boost = 1;
let comprehension_boost = 1;
let body_boost = 1;
let psyche_boost = 1;
let menu_open = false;
let age = 13;


let cultivation_technique = 'Myriad Balance Breathing';
let cultivation_technique_level = 1;
let cultivation_technique_max_level = 5;
let foundation = 1;
let speed_per_day = 40

let technique_exp = 0
let technique_exp_req = 150
let cultivation_technique_multi = 1;

let mental_state = 79;
let mental_state_max = 100;
let mental_state_index = ['Fractured', 'Unsteady', 'Balanced', 'Calm', 'Tranquil', 'Tranquil']

let sect_points = 10;
let sect_name = 'Four Heavenly Valleys Sect';

let current_location = 'Four Heavenly Valleys Sect';

let spirit_stones = 0;


let delaybreakthrough = false;

let lesser_mind_settling_pill_count = 0
let soul_protection_pill_count = 0
let awakening_meridian_pill_count = 0
let minor_foundation_enhancing_pill_count = 0
let foundation_enhancing_pill_count = 0
let meridian_bottleneck_pill_count = 0

let lesser_spirit_leaf_count = 0
let lesser_soul_ash_count = 0
let wailshade_tear_count = 0
let whispering_bone_count = 0
let remnant_will_count = 0
let crackling_crystal_count = 0

let ashblood_powder_count = 0
let dull_dragon_pearl_count = 0
let hollow_ember_count = 0
let smoldering_dragon_scale_count = 0
let remnant_dragon_trueblood_count = 0


let charged_bone_count = 0
let thunderleaf_count = 0
let spirit_leaf_count = 0
let soul_ash_count = 0

let corrupted_blossom_lotus_count = 0
let ashen_bone_fragments_count = 0
let soulbound_shackles_count = 0
let translucent_scale_count = 0
let soulweb_silk_count = 0

let fighting = false


let loading = false;


let health = 25;
let max_health = 25;
let defense = 0;
let attack = 5;
let strength = 1; // influences attack
let resilience = 1; // influences defense
let vitality = 1; // influences health
let max_strength = 3;
let max_resilience = 3;
let max_vitality = 3;

let realm_boost = 1;
let realm_count = 0;

let can_breakthrough_to_meridian_awakening = false;
let can_enter_inner_soul_valley = false;
let can_breakthrough_to_middle_meridian_awakening = false;

let dialogue_index = 0

let combat_path = 'none';


let current_mission = {
  id: 'none',
  description: 'none',
  item: 'none',
  beast: 'none',
  current_amount: 0,
  amount: 0,
  reward: 0
}

let talisman = {
  name: 'none',
  strength_boost: 1,
  resilience_boost: 1,
  vitality_boost: 1,
  uses: 0
}

let owned_talismans = []

let combat_art = {
  name: 'Basic Combat Art',
  strength_boost: 1,
  resilience_boost: 1,
  vitality_boost: 1
}

let owned_combat_arts = ['Basic Combat Art']

let combat_technique1 = {
  name: 'Qi Punch',
  attack_power: 1,
  defense_power: 1,
  healing_power: 0,
  success_chance: 100,
  description: 'A basic qi punch that does has the same attack and defense power as your stats.'
}

let combat_technique2 = {
  name: 'Qi Shield',
  attack_power: 0.5,
  defense_power: 2,
  healing_power: 0,
  success_chance: 100,
  description: 'A basic qi shield that has double the defense power and half the attack power.'
}

let combat_technique3 = {
  name: 'Qi Needle',
  attack_power: 2.5,
  defense_power: 0.1,
  healing_power: 0,
  success_chance: 70,
  description: 'A basic qi needle that has 2.5x the attack power and 0.1x the defense power.'
}

let combat_techniques = [combat_technique1, combat_technique2, combat_technique3]

let attributes = {
  body: 3,
  comprehension: 3,
  psyche: 3,
  charm: 3,
  potential: 1
}

let enemy_stats = {
  name: 'none',
  health: 0,
  max_health: 0,
  defense: 0,
  attack: 0,
}

let body_fate_labels = ['Frail', 'Weak', 'Ordinary', 'Extraordinary', 'Harmonious', 'Perfect']
let comprehension_fate_labels = ['Slow', 'Dull', 'Ordinary', 'Insightful', 'Perceptive','Enlightened']
let psyche_fate_labels = ['Fragile', 'Shaky', 'Ordinary', 'Steady', 'Serene', 'Unshakable']
let charm_fate_labels = ['Hideous', 'Ugly', 'Ordinary', 'Alluring', 'Mesmerizing', 'Magnificent']
let potential_fate_labels = ['False Root', 'Mortal Root', 'Earth Root', 'Heavenly Root', 'Superior Root', 'Exalted Root']

let saveSlot = null

let wu_lixia = {
  name: 'Wu Lixia',
  health: 25,
  max_health: 25,
  age: 13,
  lifespan: 120,
  gender: 'female',
  max_qi: 1,
  qi: 1,
  defense: 0,
  attack: 5,
  strength: 1,
  resilience: 1, 
  vitality: 1, 
  max_strength: 3,
  max_resilience: 3,
  max_vitality: 3,
  realm_boost: 1,
  realm_count: 0,
  cultivation_realm: 'Low Foundation Forming',
  cultivation_progress: 0,
  combat_art: {
    name: 'Minor Wood Combat Art',
    strength_boost: 1.5,
    resilience_boost: 2,
    vitality_boost: 1.5
  },
  current_relationship: 'Acquaintance',
  relationship_level: 0,
  max_relationship_level: 5
}


function Wu_Lixia_progression() {
  wu_lixia.age += 1;
  if (wu_lixia.cultivation_realm == 'Low Foundation Forming') {
    random = Math.random();
    wu_lixia.cultivation_progress += random * 50;
    wu_lixia.cultivation_progress = Math.round(wu_lixia.cultivation_progress * 100) / 100
    if (wu_lixia.cultivation_progress >= 100) {
      wu_lixia.cultivation_progress = 100;
    }
    random = Math.random() * 3;
    if (random < 1) {
      if (wu_lixia.strength < wu_lixia.max_strength) {
        wu_lixia.strength += 1;
      }
    }
    else if (random < 2) {
      if (wu_lixia.resilience < wu_lixia.max_resilience) {
        wu_lixia.resilience += 1;
      }
    }
    else {
      if (wu_lixia.vitality < wu_lixia.max_vitality) {
        wu_lixia.vitality += 1;
      }
    }
    total_cultivation_progress = (wu_lixia.realm_count * 100) + wu_lixia.cultivation_progress
    wu_lixia.max_qi = ((total_cultivation_progress * 3) / 15) + 1
    wu_lixia.max_qi = Math.round(wu_lixia.max_qi * 100) / 100
    wu_lixia.qi = wu_lixia.max_qi
    if (wu_lixia.health == wu_lixia.max_health) {
      wu_lixia.max_health = 25 * wu_lixia.max_qi * wu_lixia.vitality * wu_lixia.combat_art.vitality_boost * wu_lixia.realm_boost;
      wu_lixia.health = wu_lixia.max_health;
    }
    else {
      wu_lixia.max_health = 25 * wu_lixia.max_qi * wu_lixia.vitality * wu_lixia.combat_art.vitality_boost * wu_lixia.realm_boost;
    }
  
    wu_lixia.attack = 10 * wu_lixia.strength * wu_lixia.combat_art.strength_boost * wu_lixia.realm_boost * (max_qi / 10)
    wu_lixia.defense = 10 * wu_lixia.resilience * wu_lixia.combat_art.resilience_boost * wu_lixia.realm_boost * (max_qi / 10)

    wu_lixia.max_health = Math.round(wu_lixia.max_health * 100) / 100
    wu_lixia.health = wu_lixia.max_health
    wu_lixia.attack = Math.round(wu_lixia.attack * 100) / 100
    wu_lixia.defense = Math.round(wu_lixia.defense * 100) / 100
  }
}




function play() {
  document.getElementById('opening_menu').style.display = 'none';
  document.getElementById('main_text_menu').style.display = 'flex';
}

function loadmenu() {
  document.getElementById('opening_menu').style.display = 'none';
  document.getElementById('main_text_menu').style.display = 'flex';

  const mainText = document.getElementById('main_text');
  mainText.innerHTML = ''; // Clear existing content

  const saveList = JSON.parse(localStorage.getItem('saveList') || '[]');

  if (saveList.length === 0) {
    mainText.innerHTML = '<p>No saves available.</p>';
    return;
  }

  mainText.innerHTML = '<h2>Select a Save Slot to Load</h2><div id="save_list"></div>';

  const saveListDiv = document.getElementById('save_list');

  saveList.forEach(slotName => {
    const saveEntry = document.createElement('div');
    saveEntry.className = 'save_entry';

    const saveName = document.createElement('span');
    saveName.className = 'save_name';
    saveName.textContent = slotName + '  ';
    saveEntry.appendChild(saveName);

    const loadBtn = document.createElement('button');
    loadBtn.className = 'adder_buttons';
    loadBtn.textContent = 'Load';
    loadBtn.onclick = () => {
      loadGame(slotName);
    };
    saveEntry.appendChild(loadBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'adder_buttons';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      if (confirm(`Are you sure you want to delete the save slot "${slotName}"?`)) {
        localStorage.removeItem(slotName);
        const saveList = JSON.parse(localStorage.getItem('saveList') || '[]');
        const index = saveList.indexOf(slotName);
        if (index > -1) {
          saveList.splice(index, 1);
        }
        localStorage.setItem('saveList', JSON.stringify(saveList));
        loadmenu();
      }
    };
    saveEntry.appendChild(deleteBtn);

    saveListDiv.appendChild(saveEntry);
  });
}


function convert(num) {
    if (num < 1000) {
        return num.toString();
    }
    else {
        const suffixes = ["K", "M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "No", "Dc"]
        let suffixIndex = Math.floor(Math.log10(num) / 3) - 1;
        let value = num / Math.pow(1000,suffixIndex + 1);
        return value.toFixed(2) + suffixes[suffixIndex];
    }
}

function showPlayerSection() {
  document.getElementById('player_section').style.transition = 'opacity 0.5s';
  document.getElementById('player_section').style.opacity = '1';
  document.getElementById('combat_section').style.transition = 'opacity 0.5s';
  document.getElementById('combat_section').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('combat_section').style.display = 'none';
    document.getElementById('player_section').style.display = 'block';
  }, 500);
  document.getElementById('player_header_info').style.color = 'orange';
  document.getElementById('combat_header_info').style.color = 'white';
  document.getElementById('player_header_info').style.textDecoration = 'underline';
  document.getElementById('combat_header_info').style.textDecoration = 'none';
}

function showCombatSection() {
  document.getElementById('player_section').style.transition = 'opacity 0.5s';
  document.getElementById('player_section').style.opacity = '0';
  document.getElementById('combat_section').style.transition = 'opacity 0.5s';
  document.getElementById('combat_section').style.opacity = '1';
  setTimeout(() => {
    document.getElementById('player_section').style.display = 'none';
    document.getElementById('combat_section').style.display = 'block';
  }, 500);
  document.getElementById('combat_header_info').style.color = 'orange';
  document.getElementById('player_header_info').style.color = 'white';
  document.getElementById('combat_header_info').style.textDecoration = 'underline';
  document.getElementById('player_header_info').style.textDecoration = 'none';
}



function startMission() {
  if (current_mission.id == 'none') {
    let random = Math.random();
    if (random <= 0.5) {
      current_mission = {
        id: 'lesser_soul_ash_collection',
        description: 'The sect is in need of some lesser soul ash to craft mind-settling pills. Collect 25 lesser soul ashes and return to the sect.',
        item: 'lesser_soul_ash',
        beast: 'none',
        amount: 25,
        current_amount: 0,
        reward: 8,
      }
    }
    else {
      current_mission = {
        id: 'soul_valley_culling_1',
        description: 'The sect has come to the attention that there is an overflowing amount of beasts within the outer soul valley. To avoid any chances of a beast wave attacking the sect, you must kill at least 3 Remnant Spirit Rats.',
        item: 'none',
        beast: 'remnant_spirit_rat',
        amount: 3,
        current_amount: 0,
        reward: 3,
      } 
    }
    updateDisplay()
  }
}

function completeMission() {
  if (current_mission.beast == 'none') { // item mission
    if (current_mission.item == 'lesser_soul_ash') {
      if (lesser_soul_ash_count >= current_mission.amount) {
        sect_points += current_mission.reward
        lesser_soul_ash_count -= current_mission.amount
        document.getElementById('display4').innerText = 'Mission Completed! You lost ' + current_mission.amount + ' lesser soul ashes and gained ' + current_mission.reward + ' sect points!'
        current_mission.id = 'none'
        current_mission.description = 'none'
        current_mission.item = 'none'
        current_mission.beast = 'none'
        current_mission.amount = 0
        current_mission.current_amount = 0
        current_mission.reward = 0

        setTimeout(() => {
          document.getElementById('display4').innerText = '';
        }, 5000);
        updateDisplay()
      }
      else {
        document.getElementById('display4').innerText = 'You do not have enough lesser soul ashes!'
        setTimeout(() => {
          document.getElementById('display4').innerText = '';
        }, 5000);
      }
    }
  }
  else { // beast mission
    if (current_mission.beast == 'remnant_spirit_rat') {
      if (current_mission.current_amount >= current_mission.amount) {
        sect_points += current_mission.reward
        document.getElementById('display4').innerText = 'Mission Completed! You have slain ' + current_mission.amount + ' remnant spirit rats and gained ' + current_mission.reward + ' sect points!'
        current_mission.id = 'none'
        current_mission.description = 'none'
        current_mission.item = 'none'
        current_mission.beast = 'none'
        current_mission.amount = 0
        current_mission.current_amount = 0
        current_mission.reward = 0

        setTimeout(() => {
          document.getElementById('display4').innerText = '';
        }, 5000);
        updateDisplay()
      }
      else {
        document.getElementById('display4').innerText = 'You have not slain enough remnant spirit rats!'
        setTimeout(() => {
          document.getElementById('display4').innerText = '';
        }, 5000);
      }
    }
  }
}

function toggle_1st_valley_menu() {
  const menu = document.getElementById('first_valley_menu');
  const worldMenu = document.getElementById('world_menu2');

  if (menu.style.display === 'none') {
    worldMenu.style.display = 'none';
  } else {
    worldMenu.style.display = 'block';
  }

  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function toggle_relationships_menu() {
  const menu = document.getElementById('relationships_menu');
  const worldMenu = document.getElementById('world_menu2');

  if (menu.style.display === 'none') {
    worldMenu.style.display = 'none';
  } else {
    worldMenu.style.display = 'block';
  }

  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function dialogue_continue() {
  dialogue_index += 1;
  if (dialogue_index == 1) {
    document.getElementById('main_text').innerText = 'When a person dies and their soul leaves their body, their soul ascends into the void and travels till they end up in the afterlife. However, as your soul makes its way through the void in the direction of the afterlife, a mysterious and all-mighty force shoots towards your soul and instantly the void surrounding your soul collapses!'
  }
  if (dialogue_index == 2) {
    document.getElementById('main_text').innerText = 'Your soul is quickly dragged away by the force, teleporting through the void at a speed thousands of times greater than your previous speed! Before long, a structure can be seen in the distance. As your soul gets closer, the structure grows larger in its view and by the time you are up to the structure, it appears to be larger than planet earth itself! It seems to be some kind of shrine; however, due to its immense size, theres no way it could possibly be used by humans. The mysterious force all the sudden throws you into the shrine with its full force, launching your soul so fast that it could barely withstand it!'
  }
  if (dialogue_index == 3) {
    document.getElementById('main_text').innerText = 'Once your soul enters the shrine, it arrives in a room that goes on seemingly endlessly in every direction. As your soul slows to a stop, a set of indecipherable, incomprehensible runes appear in front of it! Somehow, even if your soul hasnt ever seen these runes, it could immediately understand their meaning - "Cycle of Reincarnation". In an instant, you come to the realization that you have now arrived within the cycle of reincarnation!'
  }
  if (dialogue_index == 4) {
    document.getElementById('main_text').innerText = 'Within the cycle of reincarnation, you design your next bodys fate using karma (fate points) earned from your past life!'
    document.getElementById('dialogue_btn1').style.display = 'none';
    document.getElementById('fate_body').style.display = 'block';

  }
}

function rest() {
  if (daysleft >= 5) {
    daysleft -= 5;
    health = max_health;
    updateDisplay()
  }
}

function train_strength() {
  if (daysleft < 5 || strength >= max_strength) {
    updateDisplay()
    return
  }
  daysleft -= 5
  strength += (0.10 / strength) * body_boost
  strength = Math.round(strength * 100) / 100
  if (strength > max_strength) {
    strength = max_strength
  }
  updateDisplay()
}

function train_resilience() {
  if (daysleft < 5 || resilience >= max_resilience) {
    updateDisplay()
    return
  }
  daysleft -= 5
  resilience += (0.10 / resilience) * body_boost
  resilience = Math.round(resilience * 100) / 100
  if (resilience > max_resilience) {
    resilience = max_resilience
  }
  updateDisplay()
}

function train_vitality() {
  if (daysleft < 5 || vitality >= max_vitality) {
    updateDisplay()
    return
  }
  daysleft -= 5
  vitality += (0.10 / vitality) * body_boost
  vitality = Math.round(vitality * 100) / 100
  if (vitality > max_vitality) {
    vitality = max_vitality
  }
  updateDisplay()
}

function alchemy_item_display(item) {
  if (item == 'Lesser Mind-Settling Pill') {
    document.getElementById('alchemy_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Lesser Mind-Settling Pill</p>
    <p>You have <span id='display2'></span></p>
    <p>Calms the mind and magically elevates the users psyche!</p>
    <p>Ingredients: 5 lesser spirit leafs and 1 lesser soul ash</p>
    <p>50% chance of success</p>
    <p>You have: <span id='herbdisplay'></span></p>
    <button class='normal_buttons' onclick='create_item("Lesser Mind-Settling Pill")'>Create</button>

    `
    document.getElementById('herbdisplay').innerText = `x${lesser_spirit_leaf_count} lesser spirit leafs, and x${lesser_soul_ash_count} lesser soul ash`;
    document.getElementById('display2').innerText = `x${lesser_mind_settling_pill_count} Lesser Mind-Settling Pills`;
  }

  if (item == 'Soul Protection Pill') {
    document.getElementById('alchemy_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Soul Protection Pill</p>
    <p>You have <span id='display2'></span></p>
    <p>Protects the user's soul, allowing entry into the inner soul valley!</p>
    <p>Ingredients: 10 thunderleafs, 10 lesser spirit leafs, 2 crackling crystals and 15 remnant wills</p>
    <p>50% chance of success</p>
    <p>You have: <span id='herbdisplay'></span></p>
    <button class='normal_buttons' onclick='create_item("Soul Protection Pill")'>Create</button>

    `
    document.getElementById('herbdisplay').innerText = `x${thunderleaf_count} thunderleafs, x${lesser_spirit_leaf_count} lesser spirit leafs, x${lesser_soul_ash_count} lesser soul ash, x${remnant_will_count} remnant wills, x${crackling_crystal_count} crackling crystals`;
    document.getElementById('display2').innerText = `x${soul_protection_pill_count} Soul Protection Pills`;
  }

  if (item == 'Awakening Meridian Pill') {
    document.getElementById('alchemy_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Awakening Meridian Pill</p>
    <p>You have <span id='display2'></span></p>
    <p>Allows you to unlock the hidden potential within your body, awakening your meridians and advancing to a higher plane of existence!</p>
    <p>Ingredients: 2 crackling crystals, 4 charged bones, 5 thunderleafs, 8 lesser soul ashes, 10 lesser spirit leaves and 5 remnant wills</p>
    <p>50% chance of success</p>
    <p>You have: <span id='herbdisplay'></span></p>
    <button class='normal_buttons' onclick='create_item("Awakening Meridian Pill")'>Create</button>

    `
    document.getElementById('herbdisplay').innerText = `x${crackling_crystal_count} crackling crystals, and x${charged_bone_count} charged bones, and x${thunderleaf_count} thunderleafs, and x${lesser_soul_ash_count} lesser soul ashes, and x${lesser_spirit_leaf_count} lesser spirit leaves, and x${remnant_will_count} remnant wills`;
    document.getElementById('display2').innerText = `x${awakening_meridian_pill_count} Awakening Meridian Pills`;
  }

  if (item == 'Minor Foundation Enhancing Pill') {
    document.getElementById('alchemy_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Foundation Enhancing Pill</p>
    <p>You have <span id='display2'></span></p>
    <p>Enhances your foundation by 0.10, increasing chances of a future breakthrough.</p>
    <p>Ingredients: 5 lesser spirit leafs, 2 whispering bones, 1 remnant will, 1 wailshade tear and 3 lesser soul ashes</p>
    <p>80% chance of success</p>
    <p>You have: <span id='herbdisplay'></span></p>
    <button class='normal_buttons' onclick='create_item("Minor Foundation Enhancing Pill")'>Create</button>

    `
    document.getElementById('herbdisplay').innerText = `x${lesser_spirit_leaf_count} lesser spirit leafs, and x${whispering_bone_count} whispering bones, and x${remnant_will_count} remnant wills, and x${wailshade_tear_count} wailshade tears, and x${lesser_soul_ash_count} lesser soul ashes`;
    document.getElementById('display2').innerText = `x${minor_foundation_enhancing_pill_count} Minor Foundation Enhancing Pills`;
  }

  if (item == 'Meridian Bottleneck Pill') {
    document.getElementById('alchemy_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Meridian Bottleneck Pill</p>
    <p>You have <span id='display2'></span></p>
    <p>Allows you to further unlock the hidden potential within your body, strengthening your meridians and advancing your meridians to become more powerful! (unlocks breakthrough to Middle Meridian Awakening)</p>
    <p>Ingredients: 2 soulbound shackles, 3 corrupted blossom lotuses, 10 spirit leafs, 8 soul ashes, 5 translucent scales and 2 soulweb silk</p>
    <p>50% chance of success</p>
    <p>You have: <span id='herbdisplay'></span></p>
    <button class='normal_buttons' onclick='create_item("Meridian Bottleneck Pill")'>Create</button>

    `
    document.getElementById('herbdisplay').innerText = `x${soulbound_shackles_count} soulbound shackles, and x${corrupted_blossom_lotus_count} corrupted blossom lotuses, and x${spirit_leaf_count} spirit leafs, and x${soul_ash_count} soul ashes, and x${translucent_scale_count} translucent scales, and x${soulweb_silk_count} soulweb silk`;
    document.getElementById('display2').innerText = `x${meridian_bottleneck_pill_count} Meridian Bottleneck Pills`;

  }
  updateDisplay()
}


function create_item(item) {
  if (item == 'Lesser Mind-Settling Pill') {
    let rando = Math.random()
    if (lesser_spirit_leaf_count >= 5 && lesser_soul_ash_count >= 1 && rando <= 0.5) {
      lesser_spirit_leaf_count -= 5
      lesser_soul_ash_count -= 1
      lesser_mind_settling_pill_count += 1
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You successfully crafted a Lesser Mind-Settling Pill!`
    }
    else if (lesser_spirit_leaf_count >= 5 && lesser_soul_ash_count >= 1) {
      lesser_spirit_leaf_count -= 5
      lesser_soul_ash_count -= 1
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You failed to craft a Lesser Mind-Settling Pill...`
    }
    else {
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You don't have enough ingredients to craft a Lesser Mind-Settling Pill...`
    }

    document.getElementById('alchemy_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Lesser Mind-Settling Pill</p>
    <p>You have <span id='display3'></span></p>
    <p>Calms the mind and magically elevates the users psyche!</p>
    <p>Ingredients: 5 lesser spirit leafs and 1 lesser soul ash</p>
    <p>50% chance of success</p>
    <p>You have: <span id='herbdisplay'></span></p>
    <button class='normal_buttons' onclick='create_item("Lesser Mind-Settling Pill")'>Create</button>

    `
    document.getElementById('herbdisplay').innerText = `x${lesser_spirit_leaf_count} lesser spirit leafs, and x${lesser_soul_ash_count} lesser soul ash`;
    document.getElementById('display2').innerText = `x${lesser_mind_settling_pill_count} Lesser Mind-Settling Pills`;
  }
  if (item == 'Soul Protection Pill') {
    let rando = Math.random()
    if (thunderleaf_count >= 10 && lesser_spirit_leaf_count >= 10 && crackling_crystal_count >= 2 && remnant_will_count >= 15 && rando <= 0.5) {
      thunderleaf_count -= 10
      lesser_spirit_leaf_count -= 10
      crackling_crystal_count -= 2
      remnant_will_count -= 15
      soul_protection_pill_count += 1
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You successfully crafted a Soul Protection Pill!`
    }
    else if (thunderleaf_count >= 10 && lesser_spirit_leaf_count >= 10 && crackling_crystal_count >= 2 && remnant_will_count >= 15) {
      thunderleaf_count -= 10
      lesser_spirit_leaf_count -= 10
      crackling_crystal_count -= 2
      remnant_will_count -= 15
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You failed to craft a Soul Protection Pill...`
    }
    else {
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You don't have enough ingredients to craft a Soul Protection Pill...`
    }
  }
  if (item == 'Awakening Meridian Pill') {
    let rando = Math.random()
    if (crackling_crystal_count >= 2 && charged_bone_count >= 4 && thunderleaf_count >= 5 && lesser_soul_ash_count >= 8 && lesser_spirit_leaf_count >= 10 && remnant_will_count >= 5 && rando <= 0.5) {
      crackling_crystal_count -= 2
      charged_bone_count -= 4
      thunderleaf_count -= 5
      lesser_soul_ash_count -= 8
      lesser_spirit_leaf_count -= 10
      remnant_will_count -= 5
      awakening_meridian_pill_count += 1
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You successfully crafted an Awakening Meridian Pill!`
    }
    else if (crackling_crystal_count >= 2 && charged_bone_count >= 4 && thunderleaf_count >= 5 && lesser_soul_ash_count >= 8 && lesser_spirit_leaf_count >= 10 && remnant_will_count >= 5) {
      crackling_crystal_count -= 2
      charged_bone_count -= 4
      thunderleaf_count -= 5
      lesser_soul_ash_count -= 8
      lesser_spirit_leaf_count -= 10
      remnant_will_count -= 5

      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You failed to craft an Awakening Meridian Pill...`
    }
    else {
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You don't have enough ingredients to craft an Awakening Meridian Pill...`
    }
  }
  if (item == 'Minor Foundation Enhancing Pill') {
    let rando = Math.random()
    if (lesser_spirit_leaf_count >= 5 && whispering_bone_count >= 2 && remnant_will_count >= 1 && wailshade_tear_count >= 1 && lesser_soul_ash_count >= 3 && rando <= 0.8) {
      lesser_spirit_leaf_count -= 5
      whispering_bone_count -= 2
      remnant_will_count -= 1
      wailshade_tear_count -= 1
      lesser_soul_ash_count -= 3
      minor_foundation_enhancing_pill_count += 1
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You successfully crafted a Minor Foundation Enhancing Pill!`
    }
    else if (lesser_spirit_leaf_count >= 5 && whispering_bone_count >= 2 && remnant_will_count >= 1 && wailshade_tear_count >= 1 && lesser_soul_ash_count >= 3) {
      lesser_spirit_leaf_count -= 5
      whispering_bone_count -= 2
      remnant_will_count -= 1
      wailshade_tear_count -= 1
      lesser_soul_ash_count -= 3
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You failed to craft a Minor Foundation Enhancing Pill...`
    }
    else {
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You don't have enough ingredients to craft a Minor Foundation Enhancing Pill...`
    }
  }
  if (item == 'Meridian Bottleneck Pill') {
    let rando = Math.random()
    if (soulbound_shackles_count >= 2 && corrupted_blossom_lotus_count >= 3 && spirit_leaf_count >= 10 && soul_ash_count >= 8 && translucent_scale_count >= 5 && soulweb_silk_count >= 2 && rando <= 0.5) {
      soulbound_shackles_count -= 2;
      corrupted_blossom_lotus_count -= 3;
      spirit_leaf_count -= 10;
      soul_ash_count -= 8;
      translucent_scale_count -= 5;
      soulweb_silk_count -= 2;
      meridian_bottleneck_pill_count += 1;
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You successfully crafted a Meridian Bottleneck Pill!`;
    }
    else if (soulbound_shackles_count >= 2 && corrupted_blossom_lotus_count >= 3 && spirit_leaf_count >= 10 && soul_ash_count >= 8 && translucent_scale_count >= 5 && soulweb_silk_count >= 2) {
      soulbound_shackles_count -= 2;
      corrupted_blossom_lotus_count -= 3;
      spirit_leaf_count -= 10;
      soul_ash_count -= 8;
      translucent_scale_count -= 5;
      soulweb_silk_count -= 2;
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You failed to craft a Meridian Bottleneck Pill...`;
    }
    else {
      document.getElementById('alchemy_menu_items_info').innerHTML += `<br><br> You don't have enough ingredients to craft a Meridian Bottleneck Pill...`;
    }
  }
  updateDisplay();
}

function shop_item_display(item) {
  if (item == 'Lesser Mind-Settling Pill') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Lesser Mind-Settling Pill</p>
    <p>Calms the mind and magically elevates the users psyche!</p>
    <p>Costs 5 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Lesser Mind-Settling Pill")'>Buy</button>

    `
    
  }
  if (item == 'Minor Dragon Empowering Talisman') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Dragon Empowering Talisman</p>
    <p>Grants you a 10% boost to attack power, descended directly from the remnant scales and blood of ancient dragons.</p>
    <p>Costs 25 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Minor Dragon Empowering Talisman")'>Buy</button>
    `
  }
  if (item == 'Remnant Trueblood Vitality Talisman') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Remnant Trueblood Vitality Talisman</p>
    <p>Grants you a 10% boost to health, descended directly from the remnant blood of ancient dragons.</p>
    <p>Costs 25 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Remnant Trueblood Vitality Talisman")'>Buy</button>
    `
  }
  if (item == 'Minor Dragon Scale Protection Talisman') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Dragon Scale Protection Talisman</p>
    <p>Grants you a 10% boost to defense, descended directly from the remnant scales of ancient dragons.</p>
    <p>Costs 25 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Minor Dragon Scale Protection Talisman")'>Buy</button>
    `
  }
  if (item == 'Cracked Crystalized Heart Talisman') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Cracked Crystalized Heart Talisman</p>
    <p>Grants you the ability to recover 25% of your health once during combat, created from the gathering of crackling crystals and charged bones.</p>
    <p>Costs 50 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Cracked Crystalized Heart Talisman")'>Buy</button>
    `
  }
  if (item == 'Minor Earth Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Earth Combat Art</p>
    <p>A basic earth combat art that guarrantees strong defense and mediocre offense</p>
    <p>Costs 10 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Minor Earth Combat Art")'>Buy</button>

    `
  }
  if (item == 'Minor Water Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Water Combat Art</p>
    <p>A basic water combat art that has mediocre offense and weak defense, but also contains a healing attribute</p>
    <p>Costs 10 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Minor Water Combat Art")'>Buy</button>

    `
  }
  if (item == 'Minor Fire Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Fire Combat Art</p>
    <p>A basic fire combat art that has very strong offense and weak defense, and also contains a burning attribute</p>
    
    <p>Costs 10 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Minor Fire Combat Art")'>Buy</button>
    
    `
  }
  if (item == 'Minor Air Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Air Combat Art</p>
    <p>A basic air combat art that has mediocre offense and mediocre defense, but also contains a flight attribute</p>
    
    <p>Costs 10 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Minor Air Combat Art")'>Buy</button>
    
    `
  }
  if (item == 'Minor Metal Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Metal Combat Art</p>
    <p>A basic metal combat art that has strong offense and strong defense</p>
    
    <p>Costs 15 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Minor Metal Combat Art")'>Buy</button>
    
    `
  }
  if (item == 'Minor Wood Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Wood Combat Art</p>
    <p>A basic wood combat art that provides increased vitality, has mediocre offense and strong defense, and contains a strong healing attribute</p>
    
    <p>Costs 15 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Minor Wood Combat Art")'>Buy</button>
    
    `
  }
  if (item == 'Advanced Metal Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Advanced Metal Combat Art</p>
    <p>An advanced metal combat art that has strong offense and very strong defense</p>
    
    <p>Costs 30 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Advanced Metal Combat Art")'>Buy</button>
    
    `
  }
  updateDisplay()
}

function buy_item(item) {
  if (item == 'Lesser Mind-Settling Pill' && sect_points >= 5) {
    lesser_mind_settling_pill_count += 1;
    sect_points -= 5;
    updateDisplay();
  }
  if (item == 'Minor Dragon Empowering Talisman' && sect_points >= 25) {
    sect_points -= 25;
    talisman.name = 'Minor Dragon Empowering Talisman';
    talisman.strength_boost = 1.1;
    talisman.resilience_boost = 1;
    talisman.vitality_boost = 1;
    talisman.uses = 0;
    owned_talismans.push('Minor Dragon Empowering Talisman');
    document.getElementById('minor_dragon_empowering_talisman_display').style.display = 'none';
    updateDisplay();
  }
  if (item == 'Remnant Trueblood Vitality Talisman' && sect_points >= 25) {
    sect_points -= 25;
    talisman.name = 'Remnant Trueblood Vitality Talisman';
    talisman.strength_boost = 1;
    talisman.resilience_boost = 1;
    talisman.vitality_boost = 1.1;
    talisman.uses = 0;
    owned_talismans.push('Remnant Trueblood Vitality Talisman');
    document.getElementById('remnant_trueblood_vitality_talisman_display').style.display = 'none';
    updateDisplay();
  }
  if (item == 'Minor Dragon Scale Protection Talisman' && sect_points >= 25) {
    sect_points -= 25;
    talisman.name = 'Minor Dragon Scale Protection Talisman';
    talisman.strength_boost = 1;
    talisman.resilience_boost = 1.1;
    talisman.vitality_boost = 1;
    talisman.uses = 0;
    owned_talismans.push('Minor Dragon Scale Protection Talisman');
    document.getElementById('minor_dragon_scale_protection_talisman_display').style.display = 'none';
    updateDisplay();
  }
  if (item == 'Cracked Crystalized Heart Talisman' && sect_points >= 50) {
    sect_points -= 50;
    talisman.name = 'Cracked Crystalized Heart Talisman';
    talisman.strength_boost = 1;
    talisman.resilience_boost = 1;
    talisman.vitality_boost = 1.1;
    talisman.uses = 1;
    owned_talismans.push('Cracked Crystalized Heart Talisman');
    document.getElementById('cracked_crystalized_heart_display').style.display = 'none';
    updateDisplay();
  }
  if (item == 'Minor Earth Combat Art' && sect_points >= 10) {
    combat_art.name = 'Minor Earth Combat Art';
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.1;
    sect_points -= 10;
    owned_combat_arts.push('Minor Earth Combat Art');

    combat_technique1.name = 'Earth Strike'
    combat_technique1.attack_power = attack
    combat_technique1.defense_power = defense
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic earth-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Earth Stomp'
    combat_technique2.attack_power = attack * 1.5
    combat_technique2.defense_power = defense
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 80
    combat_technique2.description = 'A basic earth-based attack that has 1.5x base attack and base defense and has a 80% success chance.'
    
    combat_technique3.name = 'Earth Arrow'
    combat_technique3.attack_power = attack * 2
    combat_technique3.defense_power = defense * 0.7
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 75
    combat_technique3.description = 'A basic earth-based attack that has 2x base attack and 0.7x base defense and has a 75% success chance.'
    
    updateDisplay();
  }
  if (item == 'Minor Water Combat Art' && sect_points >= 10) {
    combat_art.name = 'Minor Water Combat Art';
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 1.25;
    combat_art.vitality_boost = 1.25;
    sect_points -= 10;
    owned_combat_arts.push('Minor Water Combat Art');

    combat_art.name = 'Minor Water Combat Art'
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 1.25;
    combat_art.vitality_boost = 1.25;

    combat_technique1.name = 'Water Strike'
    combat_technique1.attack_power = attack
    combat_technique1.defense_power = defense
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic water-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Water Wall'
    combat_technique2.attack_power = attack * 0.3
    combat_technique2.defense_power = defense * 3
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 80
    combat_technique2.description = 'A basic water-based attack that has 0.3x base attack and 3x base defense and has a 80% success chance.'
    
    combat_technique3.name = 'Water Arrow'
    combat_technique3.attack_power = attack * 2
    combat_technique3.defense_power = defense * 0.7
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 75
    combat_technique3.description = 'A basic water-based attack that has 2x base attack and 0.7x base defense and has a 75% success chance.'
    
    updateDisplay();
  }
  if (item == 'Minor Fire Combat Art' && sect_points >= 10) {
    combat_art.name = 'Minor Fire Combat Art';
    combat_art.strength_boost = 2.5;
    combat_art.resilience_boost = 1.25;
    combat_art.vitality_boost = 1.1;
    sect_points -= 10;
    owned_combat_arts.push('Minor Fire Combat Art');

    combat_technique1.name = 'Fire Strike'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic fire-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Fire Fist'
    combat_technique2.attack_power = 2.5
    combat_technique2.defense_power = 0.7
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 65
    combat_technique2.description = 'A basic fire-based attack that has 2.5x base attack and 0.7x base defense and has a 65% success chance.'
    
    combat_technique3.name = 'Fire Arrow'
    combat_technique3.attack_power = 3
    combat_technique3.defense_power = 0.8
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 60
    combat_technique3.description = 'A basic fire-based attack that has 3x base attack and 0.8x base defense and has a 60% success chance.'
    
    updateDisplay();
  }
  if (item == 'Minor Air Combat Art' && sect_points >= 10) {
    combat_art.name = 'Minor Air Combat Art'
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 1.5;
    combat_art.vitality_boost = 1.25;
    sect_points -= 10;
    owned_combat_arts.push('Minor Air Combat Art');


    combat_technique1.name = 'Air Strike'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic air-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Condensed Wind Beam'
    combat_technique2.attack_power = 1.5
    combat_technique2.defense_power = 1.5
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 75
    combat_technique2.description = 'A basic air-based attack that has 1.5x base attack and 1.5x base defense and has a 75% success chance.'
    
    combat_technique3.name = 'Air Platform'
    combat_technique3.attack_power = 0.5
    combat_technique3.defense_power = 2.5
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 100
    combat_technique3.description = 'A basic air-based attack that has 0.5x base attack and 2.5x base defense and has a 100% success chance.'
    
    updateDisplay();
  }
  if (item == 'Minor Metal Combat Art' && sect_points >= 15) {
    combat_art.name = 'Minor Metal Combat Art';
    combat_art.strength_boost = 2;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.1;
    sect_points -= 15;
    owned_combat_arts.push('Minor Metal Combat Art');

    combat_technique1.name = 'Metal Knuckles'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic metal-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Metal Arrow'
    combat_technique2.attack_power = 2
    combat_technique2.defense_power = 0.7
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 75
    combat_technique2.description = 'A basic metal-based attack that has 2x base attack and 0.7x base defense and has a 75% success chance.'
    
    combat_technique3.name = 'Metal Shards'
    combat_technique3.attack_power = 3
    combat_technique3.defense_power = 0.8
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 60
    combat_technique3.description = 'A basic metal-based attack that has 3x base attack and 0.8x base defense and has a 60% success chance.'
        
    updateDisplay();
  }
  if (item == 'Minor Wood Combat Art' && sect_points >= 15) {
    combat_art.name = 'Minor Wood Combat Art';
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.5;
    sect_points -= 15;
    owned_combat_arts.push('Minor Wood Combat Art');

    combat_technique1.name = 'Wooden Needles'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic wood-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Entangled Roots'
    combat_technique2.attack_power = 0.8
    combat_technique2.defense_power = 2.5
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 70
    combat_technique2.description = 'A basic wood-based attack that has 0.8x base attack and 2.5x base defense and has a 70% success chance.'
    
    combat_technique3.name = "World Trees Minor Blessing"
    combat_technique3.attack_power = 0.5
    combat_technique3.defense_power = 0.5
    combat_technique3.healing_power = attack
    combat_technique3.success_chance = 60
    combat_technique3.description = 'A basic wood-based attack that has 0.5x base attack and 0.5x base defense which heals your health by the value of your attack power and has a 60% success chance.'
    
    updateDisplay();
  }

  if (item == 'Advanced Metal Combat Art') {
    combat_art.name = 'Advanced Metal Combat Art';
    combat_art.strength_boost = 2;
    combat_art.resilience_boost = 2.5;
    combat_art.vitality_boost = 1.1;
    sect_points -= 30;
    owned_combat_arts.push('Advanced Metal Combat Art');

    combat_technique1.name = 'Metal Knuckles'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic metal-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Metal Arrow'
    combat_technique2.attack_power = 2
    combat_technique2.defense_power = 0.7
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 75
    combat_technique2.description = 'A basic metal-based attack that has 2x base attack and 0.7x base defense and has a 75% success chance.'
    
    combat_technique3.name = 'Metal Shards'
    combat_technique3.attack_power = 3
    combat_technique3.defense_power = 0.8
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 60
    combat_technique3.description = 'A basic metal-based attack that has 3x base attack and 0.8x base defense and has a 60% success chance.'
        
    
    updateDisplay();
  }
  updateDisplay();
}

function use_item(item) {
  if (item == 'Lesser Mind-Settling Pill') {
    lesser_mind_settling_pill_count -= 1
    mental_state += 5
    if (mental_state > 100) mental_state = 100;
    updateDisplay();
  }
  else if (item == 'Soul Protection Pill') {
    soul_protection_pill_count -= 1
    can_enter_inner_soul_valley = true;
    updateDisplay();
  }
  else if (item == 'Awakening Meridian Pill') {
    awakening_meridian_pill_count -= 1
    can_breakthrough_to_meridian_awakening = true;
    updateDisplay();
  }
  else if (item == 'Minor Foundation Enhancing Pill') {
    minor_foundation_enhancing_pill_count -= 1
    foundation += 0.10
    updateDisplay();
  }
  else if (item == 'Meridian Bottleneck Pill') {
    meridian_bottleneck_pill_count -= 1
    can_breakthrough_to_middle_meridian_awakening = true;
    updateDisplay();
  }
}
function doSectTask(points, days_amt) {
  if (daysleft - days_amt >= 0) {
    daysleft -= days_amt;
    sect_points += points;
    updateDisplay();
  }
}

function doCultivation() {
  const input = document.getElementById('day_input');
  let days = parseInt(input.value);
  if (isNaN(days) || days < 1 || days > daysleft) {
    alert("Enter a valid number of days");
    return;
  }
  daysleft -= days;
  cultivation_progress += (days / speed_per_day) * potential_boost * cultivation_technique_multi;
  if (cultivation_progress > 100)  {
    
    foundation += ((cultivation_progress - 100) / 100) * (speed_per_day / 40)
    foundation = Math.round(foundation * 100) / 100

    cultivation_progress = 100;
  }
  updateDisplay()
}

function learn_technique() {
  const input = document.getElementById('day_input2');
  let days = parseInt(input.value);
  if (isNaN(days) || days < 1 || days > daysleft) {
    alert("Enter a valid number of days");
    return;
  }
  daysleft -= days;
  old_technique_exp = technique_exp
  technique_exp += days * comprehension_boost;
  if (technique_exp >= technique_exp_req && cultivation_technique_level >= cultivation_technique_max_level) {
    technique_exp = technique_exp_req
    daysleft += Math.round((technique_exp_req - old_technique_exp) / (comprehension_boost))
    updateDisplay()
    return
  }
  if (technique_exp >= technique_exp_req) level_up_technique();


  updateDisplay()
}

function level_up_technique() {
  if (technique_exp >= technique_exp_req) {
    technique_exp -= technique_exp_req;
    cultivation_technique_level += 1;
    technique_exp_req *= 1.5;
    cultivation_technique_multi += 0.5
    updateDisplay()
    if (technique_exp >= technique_exp_req) level_up_technique();
  }
}

function mentalGainPerDay(current_state) {
  if (current_state < 50) return 1;
  if (current_state < 60) return 1 / 5;
  if (current_state < 70) return 1 / 10;
  if (current_state < 80) return 1 / 20;
  if (current_state < 90) return 1 / 30;
  if (current_state < 100) return 1 / 40;
  return 0;
}

function meditate() {
  const input = document.getElementById('day_input3');
  let days = parseInt(input.value);
  if (isNaN(days) || days < 1 || days > daysleft) {
    alert("Enter a valid number of days");
    return;
  }

  let spentDays = 0;
  while (spentDays < days && mental_state < mental_state_max) {
    const gain = mentalGainPerDay(mental_state) * psyche_boost;
    mental_state += gain;
    spentDays++;
  }

  daysleft -= spentDays;
  if (mental_state > mental_state_max) mental_state = mental_state_max;

  updateDisplay();
}


function calculateMentalGain(startingState, days, boost = psyche_boost) {
  let simulatedState = startingState;
  let gain = 0;
  
  for (let i = 0; i < days && simulatedState < mental_state_max; i++) {
    const dailyGain = mentalGainPerDay(simulatedState) * boost;
    simulatedState += dailyGain;
    gain += dailyGain;
  }

  return gain;
}

function toggle_spatial_ring_menu() {
  let spatial_ring_menu = document.getElementById('spatial_ring_menu2');
  let isVisible = spatial_ring_menu.style.display === 'block';

  closeAllMenus();
  spatial_ring_menu.style.display = isVisible ? 'none' : 'block';
  let main_text_menu = document.getElementById('main_text_menu');
  if (isVisible) {
    main_text_menu.style.opacity = '1';
  } else {
    main_text_menu.style.opacity = '0';
  }
  
}


function toggle_cultivation_chamber_menu() {
  let menu = document.getElementById('cultivation_chamber_menu2');
  let isVisible = menu.style.display === 'block';

  closeAllMenus();
  menu.style.display = isVisible ? 'none' : 'block';
  let main_text_menu = document.getElementById('main_text_menu');
  if (isVisible) {
    main_text_menu.style.opacity = '1';
  } else {
    main_text_menu.style.opacity = '0';
  }
  
}

function toggle_world_menu() {
  let world_menu2 = document.getElementById('world_menu2');
  let isVisible = world_menu2.style.display === 'block';

  closeAllMenus();
  world_menu2.style.display = isVisible ? 'none' : 'block';
  let main_text_menu = document.getElementById('main_text_menu');
  if (isVisible) {
    main_text_menu.style.opacity = '1';
  } else {
    main_text_menu.style.opacity = '0';
  }
  
}





function toggle_info_menu() {
  let info_menu2 = document.getElementById('info_menu2');
  let isVisible = info_menu2.style.display === 'block';

  closeAllMenus();
  info_menu2.style.display = isVisible ? 'none' : 'block';
  let main_text_menu = document.getElementById('main_text_menu');
  if (isVisible) {
    main_text_menu.style.opacity = '1';
  } else {
    main_text_menu.style.opacity = '0';
  }
  
}


function closeAllMenus() {
  document.getElementById('cultivation_chamber_menu2').style.display = 'none';
  document.getElementById('info_menu2').style.display = 'none';
  document.getElementById('world_menu2').style.display = 'none';
  document.getElementById('spatial_ring_menu2').style.display = 'none';
  document.getElementById('first_valley_menu').style.display = 'none';
  document.getElementById('relationships_menu').style.display = 'none';
  let main_text_menu = document.getElementById('main_text_menu');
  main_text_menu.style.opacity = '1';
}


function go_to_spirit_garden() {
  if (daysleft >= 4) {
    document.body.style.backgroundImage = 'url("images/spirit garden.png")';
    daysleft -= 4;
    current_location = 'Spirit Garden';
    document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
    <br><br>
    <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
    <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
    <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>
    `;
    closeAllMenus();
  }
  
  updateDisplay();
}

function gather_herbs() {
  const input = document.getElementById('spirit_garden_day_input');
  let days = parseInt(input.value);
  if (isNaN(days) || days < 1 || days > daysleft - 4) {
    alert("Enter a valid number of days");
    return;
  }
  daysleft -= days;

  let chance = days * 10;
  let herbs = chance / 100;

  let random_num = Math.floor(Math.random() * 3) - 1;
  
  if (herbs > 2) {
    lesser_spirit_leaf_count += herbs + random_num;
  }

  else {
    let rando = Math.random()
    if (rando < herbs) {
      lesser_spirit_leaf_count += Math.round(herbs)
    }
  }

  lesser_spirit_leaf_count = Math.round(lesser_spirit_leaf_count);

  document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
  <br><br>
  <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
  <br><br>
  <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
  <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
  <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>

  You now have <span id='herbcount'></span> lesser spirit leafs.
  `;
  document.getElementById('herbcount').innerText = lesser_spirit_leaf_count;
  updateDisplay();
}

function go_to_thunderhowl_plateau() {
  if (daysleft >= 7) {
    daysleft -= 7;
    current_location = 'Thunderhowl Plateau';
    document.body.style.backgroundImage = 'url("images/thunderhowl plateau.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
    `;
    updateDisplay();
  }
}

function explore_thunderhowl_plateau() {
  if (daysleft >= 5) {
    daysleft -= 5;
    current_location = 'Thunderhowl Plateau';
    document.body.style.backgroundImage = 'url("images/thunderhowl plateau.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
    <p id='display1'></p>
    `;
    
    let rando = Math.random();
    if (rando < 0.25) {
      lesser_spirit_leaf_count += 3;
      document.getElementById('display1').innerText = 'You found 3 lesser spirit leaves!'
    }
    else if (rando < 0.5) {
      thunderleaf_count += 2
      document.getElementById('display1').innerText = 'You found 2 thunderleafs!'
    }
    else if (rando < 0.64) {
      fight_enemy('Stormcaller Wolf')
      fighting = true
    }
    else if (rando < 0.78) { // fight
      fight_enemy('Arcflare Roc')
      fighting = true
    }
    else if (rando < 0.92) { // fight
      fight_enemy('Thundering Stag')
      fighting = true
    }
    else {
      fight_enemy('Stormcaller Wolf Alpha')
      fighting = true
    }
    closeAllMenus();
  }
  updateDisplay();
}
function go_to_outer_soul_valley() {
  if (daysleft >= 6) {
    daysleft -= 6;
    current_location = 'Outer Soul Valley';
    document.body.style.backgroundImage = 'url("images/soul valley.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  updateDisplay();
}

function explore_outer_soul_valley() {
  if (daysleft >= 5) {
    daysleft -= 5;
    current_location = 'Outer Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    
    
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
    
    <br><br>
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    <br><br>
    <p id='display1'></p>
    `;
    let rando = Math.random();
    if (rando < 0.25) {
      lesser_spirit_leaf_count += 1;
      document.getElementById('display1').innerText = 'You found 1 lesser spirit leaf!'
    }
    else if (rando < 0.5) {
      lesser_soul_ash_count += 1;
      document.getElementById('display1').innerText = 'You found 1 lesser soul ash!'
    }
    else if (rando < 0.66) {
      fight_enemy('Wandering Wailshade')
      fighting = true
    }
    else if (rando < 0.83) { // fight
      fight_enemy('Remnant Spirit Rat')
      fighting = true
    }
    else { // fight
      fight_enemy('Grudgebound Wisp')
      fighting = true
    }
    closeAllMenus();
  }
  updateDisplay();
}

function go_to_minor_ashen_hollowvein() {
  if (daysleft >= 3) {
    daysleft -= 3;
    current_location = 'Minor Ashen Hollowvein';
    document.body.style.backgroundImage = 'url("images/minor ashen hollowvein.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  updateDisplay();
}

function explore_minor_ashen_hollowvein() {
  if (daysleft >= 3) {
    daysleft -= 3;
    current_location = 'Minor Ashen Hollowvein';
    document.body.style.backgroundImage = 'url("images/minor ashen hollowvein.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
    <br><br>
    <p id='display1'></p>
    `;
    let rando = Math.random();
    if (rando < 0.2) {
      hollow_ember_count += 1;
      document.getElementById('display1').innerText = 'You found 1 hollow ember!'
    }
    else if (rando < 0.4) {
      ashblood_powder_count += 1;
      document.getElementById('display1').innerText = 'You found 1 ashblood powder!'
    }
    else if (rando < 0.53) {
      fight_enemy('Fallen Ashwing')
      fighting = true
    }
    else if (rando < 0.66) { // fight
      fight_enemy('Dull Dragoneye')
      fighting = true
    }
    else if (rando < 0.79) { // fight
      fight_enemy('Corporeal Divine Ember')
      fighting = true
    }
    else if (rando < 0.92) {
      fight_enemy('Ashen Dragonling')
      fighting = true
    }
    else {
      fight_enemy('Pure Ashen Dragonling')
      fighting = true
    }
    closeAllMenus();
  }
  updateDisplay();
}

function go_to_inner_soul_valley() {
  if (daysleft >= 8) {
    daysleft -= 8;
    current_location = 'Inner Soul Valley';
    document.body.style.backgroundImage = 'url("images/inner soul valley.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  updateDisplay();
}

function explore_inner_soul_valley() {
  if (daysleft >= 5) {
    daysleft -= 5;
    current_location = 'Inner Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
    
    
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
    
    <br><br>
    <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
    <br><br>
    <p id='display1'></p>
    `;
    let rando = Math.random();
    if (rando < 0.2) {
      spirit_leaf_count += 1;
      lesser_soul_ash_count += 5;
      document.getElementById('display1').innerText = 'You found 1 spirit leaf and 5 lesser soul ashes!'
    }
    else if (rando < 0.4) {
      soul_ash_count += 1;
      lesser_spirit_leaf_count += 4;
      document.getElementById('display1').innerText = 'You found 1 soul ash and 4 lesser spirit leaves!'
    }
    else if (rando < 0.53) {
      fight_enemy('Crying Lotus Shade')
      fighting = true
    }
    else if (rando < 0.66) { // fight
      fight_enemy('Haunting Boneflame')
      fighting = true
    }
    else if (rando < 0.79) { // fight
      fight_enemy('Soulcage Widow')
      fighting = true
    }
    else if (rando < 0.92) {
      fight_enemy('Witherjaw Serpent')
      fighting = true
    }
    else {
      fight_enemy('Ghastbrand Guardian')
      fighting = true
    }
    closeAllMenus();
  }
  updateDisplay();
}

function fight_enemy(enemy) {
  if (talisman.name == 'Cracked Crystalized Heart Talisman') talisman.uses = 1
  if (enemy == 'Remnant Spirit Rat') {
    enemy_stats.name = 'Remnant Spirit Rat';
    enemy_stats.health = 200;
    enemy_stats.max_health = 200;
    enemy_stats.defense = 15;
    enemy_stats.attack = 10;
    updateFight();
  }
  if (enemy == 'Wandering Wailshade') {
    enemy_stats.name = 'Wandering Wailshade';
    enemy_stats.health = 500;
    enemy_stats.max_health = 500;
    enemy_stats.defense = 10;
    enemy_stats.attack = 10;
    updateFight();
  }
  if (enemy == 'Grudgebound Wisp') {
    enemy_stats.name = 'Grudgebound Wisp';
    enemy_stats.health = 250;
    enemy_stats.max_health = 250;
    enemy_stats.defense = 10;
    enemy_stats.attack = 20;
    updateFight();
  }

  if (enemy == 'Fallen Ashwing') {
    enemy_stats.name = 'Fallen Ashwing';
    enemy_stats.health = 5000;
    enemy_stats.max_health = 5000;
    enemy_stats.defense = 250;
    enemy_stats.attack = 500;
    updateFight();
  }
  if (enemy == 'Dull Dragoneye') {
    enemy_stats.name = 'Dull Dragoneye';
    enemy_stats.health = 4000;
    enemy_stats.max_health = 4000;
    enemy_stats.defense = 400;
    enemy_stats.attack = 800;
    updateFight();
  }
  if (enemy == 'Corporeal Divine Ember') {
    enemy_stats.name = 'Corporeal Divine Ember';
    enemy_stats.health = 2000;
    enemy_stats.max_health = 2000;
    enemy_stats.defense = 200;
    enemy_stats.attack = 2000;
    updateFight();
  }
  if (enemy == 'Ashen Dragonling') {
    enemy_stats.name = 'Ashen Dragonling';
    enemy_stats.health = 7500;
    enemy_stats.max_health = 7500;
    enemy_stats.defense = 500;
    enemy_stats.attack = 500;
    updateFight();
  }
  if (enemy == 'Pure Ashen Dragonling') {
    enemy_stats.name = 'Pure Ashen Dragonling';
    enemy_stats.health = 10000;
    enemy_stats.max_health = 10000;
    enemy_stats.defense = 800;
    enemy_stats.attack = 600;
    updateFight();
  }
  if (enemy == 'Stormcaller Wolf') {
    enemy_stats.name = 'Stormcaller Wolf';
    enemy_stats.health = 7500;
    enemy_stats.max_health = 7500;
    enemy_stats.defense = 500;
    enemy_stats.attack = 500;
    updateFight();
  }
  if (enemy == 'Arcflare Roc') {
      enemy_stats.name = 'Arcflare Roc';
      enemy_stats.health = 6000;
      enemy_stats.max_health = 6000;
      enemy_stats.defense = 350;
      enemy_stats.attack = 100;
      updateFight();
  }
  if (enemy == 'Thundering Stag') {
      enemy_stats.name = 'Thundering Stag';
      enemy_stats.health = 10000;
      enemy_stats.max_health = 10000;
      enemy_stats.defense = 700;
      enemy_stats.attack = 600;
      updateFight();
  }
  if (enemy == 'Stormcaller Wolf Alpha') {
      enemy_stats.name = 'Stormcaller Wolf Alpha';
      enemy_stats.health = 20000;
      enemy_stats.max_health = 20000;
      enemy_stats.defense = 1100;
      enemy_stats.attack = 1000;
      updateFight();
  }
  if (enemy == 'Crying Lotus Shade') {
    enemy_stats.name = 'Crying Lotus Shade';
    enemy_stats.health = 100000;
    enemy_stats.max_health = 100000;
    enemy_stats.defense = 5000;
    enemy_stats.attack = 8000;
    updateFight();
  }
  if (enemy == 'Haunting Boneflame') {
    enemy_stats.name = 'Haunting Boneflame';
    enemy_stats.health = 120000;
    enemy_stats.max_health = 120000;
    enemy_stats.defense = 6000;
    enemy_stats.attack = 7000;
    updateFight();
  }
  if (enemy == 'Ghastbrand Guardian') {
    enemy_stats.name = 'Ghastbrand Guardian';
    enemy_stats.health = 190000;
    enemy_stats.max_health = 190000;
    enemy_stats.defense = 13000;
    enemy_stats.attack = 12000;
    updateFight();
  }
  if (enemy == 'Witherjaw Serpent') {
    enemy_stats.name = 'Witherjaw Serpent';
    enemy_stats.health = 110000;
    enemy_stats.max_health = 110000;
    enemy_stats.defense = 7000;
    enemy_stats.attack = 7000;
    updateFight();
  }
  if (enemy == 'Soulcage Widow') {
    enemy_stats.name = 'Soulcage Widow';
    enemy_stats.health = 50000;
    enemy_stats.max_health = 50000;
    enemy_stats.defense = 3000;
    enemy_stats.attack = 15000;
    updateFight();
  }
  
}
      
let combatListenerAdded = false;

function setupCombatControls() {
  if (combatListenerAdded) return; // prevent stacking
  combatListenerAdded = true;

  let keyDown = {};

  document.addEventListener('keydown', function(event) {
    if (keyDown[event.keyCode]) return;
    keyDown[event.keyCode] = true;

    switch (event.keyCode) {
      case 49:
        if (fighting) attack_enemy(enemy_stats.name, 1);
        break;
      case 50:
        if (fighting) attack_enemy(enemy_stats.name, 2);
        break;
      case 51:
        if (fighting) attack_enemy(enemy_stats.name, 3);
        break;
    }
  });

  document.addEventListener('keyup', function(event) {
    keyDown[event.keyCode] = false;
  });
}

function useTalisman1() {
  if (talisman.name == 'Cracked Crystalized Heart Talisman') {
    if (talisman.uses > 0) {
      health += max_health / 4
      if (health > max_health) {
        health = max_health;
      }
      health = Math.round(health * 100) / 100;
      talisman.uses -= 1;
    }
    else {
      document.getElementById('item1').style.display = 'none';
    }
    updateFight()
  }
}

function updateFight() {
  if (current_location == 'Outer Soul Valley') document.getElementById('main_text').innerHTML = `<button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>`
  else if (current_location == 'Inner Soul Valley') document.getElementById('main_text').innerHTML = `<button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>`
  else if (current_location == 'Minor Ashen Hollowvein') document.getElementById('main_text').innerHTML = `<button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>`
  else if (current_location == 'Thunderhowl Plateau') document.getElementById('main_text').innerHTML = `<button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>`
  document.getElementById('main_text').innerHTML += `
  
  <br><br>
  <p id='yourhealthdisplay'>Your Health</p>
  <progress id="healthBar" value="${health}" max="${max_health}"></progress>
  <br><br>

  <div onclick='attack_enemy("${enemy_stats.name}", 1)' class='tooltip'> <span id="combat_technique1" class="attack_buttons"></span>
    <span class="tooltiptext">${combat_technique1.description}</span>
  </div>
  <br><br>
  <div onclick='attack_enemy("${enemy_stats.name}", 2)' class='tooltip'>
    <span id="combat_technique2" class="attack_buttons"></span>
    <span class="tooltiptext">${combat_technique2.description}</span>
  </div>
  <br><br>
  <div onclick='attack_enemy("${enemy_stats.name}", 3)' class='tooltip'>
    <span id="combat_technique3" class="attack_buttons"></span>
    <span class="tooltiptext">${combat_technique3.description}</span>
  </div>
  <br><br>
  <div class="dropdown">
        <button class="dropbtn">Use Combat Items</button>
        <div class="dropdown-content" id='drop1'>

        </div>
      </div>
  <br><br>
  <p id='enemyhealthdisplay'></p>
  <progress id="enemyHealthBar" value="${enemy_stats.health}" max="${enemy_stats.max_health}"></progress>
  <p id='display1'></p>
  `;
  document.getElementById('drop1').innerHTML = ``;
  if (talisman.name == 'Cracked Crystalized Heart Talisman' && talisman.uses > 0) {
    document.getElementById('drop1').innerHTML += `<a onclick='useTalisman1()' id='item1'>Use Cracked Crystalized Heart Talisman, healing health by 25% (1 use)</a> `
  }




  document.getElementById('combat_technique1').innerText = combat_technique1.name + ' (1)';
  document.getElementById('combat_technique2').innerText = combat_technique2.name + ' (2)';
  document.getElementById('combat_technique3').innerText = combat_technique3.name + ' (3)';
  document.getElementById('yourhealthdisplay').innerText = 'Your Health: ' + convert(health) + ' / ' + convert(max_health);
  document.getElementById('enemyhealthdisplay').innerText = enemy_stats.name + ' Health: ' + convert(enemy_stats.health) + ' / ' + convert(enemy_stats.max_health);

  const dropBtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropBtn.addEventListener('click', function (event) {
    dropdownContent.classList.toggle('show');
    event.stopPropagation();
  });

  window.addEventListener('click', function () {
    dropdownContent.classList.remove('show');
  });

  const style = document.createElement('style');
  style.innerHTML = `
    progress {
      width: 100%;
      height: 20px;
      border: 1px solid black;
    }

    progress::-webkit-progress-bar {
      background-color: red;
    }

    progress::-webkit-progress-value {
      background-color: green;
    }

    progress::-moz-progress-bar {
      background-color: green;
    }
  `;
  document.head.appendChild(style);
}
function attack_enemy(enemy, technique) {

  // console.log('attacking enemy, technique: ' + technique);
  let attack_damage = 0
  let defense_power = 0
  let healing = 0
  let success_chance = 100
  if (technique == 1) {
    attack_damage = attack * combat_technique1.attack_power;
    defense_power = defense * combat_technique1.defense_power;
    healing = combat_technique1.healing_power;
    success_chance = combat_technique1.success_chance;
  }
  if (technique == 2) {
    attack_damage = attack * combat_technique2.attack_power;
    defense_power = defense * combat_technique2.defense_power;
    healing = combat_technique2.healing_power;
    success_chance = combat_technique2.success_chance;
  }
  if (technique == 3) {
    attack_damage = attack * combat_technique3.attack_power;
    defense_power = defense * combat_technique3.defense_power;
    healing = combat_technique3.healing_power;
    success_chance = combat_technique3.success_chance;
  }
  const attackDamage = Math.max(attack_damage * 0.1, attack_damage * (attack_damage / (attack_damage + enemy_stats.defense)));
  const enemyAttackDamage = Math.max(enemy_stats.attack * 0.1, enemy_stats.attack * (enemy_stats.attack / (enemy_stats.attack + defense_power)));
  const damage = Math.round(attackDamage * 100) / 100;
  const enemyDamage = Math.round(enemyAttackDamage * 100) / 100;
  let rando = Math.random() * 100;
  if (rando < success_chance) {
    enemy_stats.health -= damage;
  }
  health -= enemyDamage;
  if (technique == 3 && combat_technique3.name == "World Trees Minor Blessing") {
    healing = attack;
  }

  if (healing > 0 && rando < success_chance) {
    health += healing;
  }
  health = Math.min(health, max_health);
  health = Math.round(health * 100) / 100;
  enemy_stats.health = Math.round(enemy_stats.health * 100) / 100;
  
  if (enemy_stats.health > 0) {
    updateFight();
  }
  else {
    fighting = false
    if (talisman.name == 'Cracked Crystalized Heart Talisman') talisman.uses = 1;
    switch (enemy) {
      case 'Remnant Spirit Rat':
        Increase = 0;
        if (realm_count >= 0 || realm_count < 2) {
          Increase = 1 / (realm_count + 1) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
        <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've slain the Remnant Spirit Rat and gained 3 lesser soul ashes and 1 whispering bone. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        lesser_soul_ash_count += 3;
        whispering_bone_count += 1;
        if (current_mission.beast == 'remnant_spirit_rat') {
          current_mission.current_amount += 1;
        }
        break;
      case 'Wandering Wailshade':
        Increase = 0;
        if (realm_count >= 0 || realm_count < 2) {
          Increase = 1 / (realm_count + 1) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
        <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've slain the Wandering Wailshade and gained 1 lesser soul ashes and 2 wailshade tears. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        lesser_soul_ash_count += 1;
        wailshade_tear_count += 2;
        break;
      case 'Grudgebound Wisp':
        Increase = 0;
        if (realm_count >= 0 || realm_count < 2) {
          Increase = 1 / (realm_count + 1) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
        <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've slain the Grudgebound Wisp and gained 2 lesser soul ashes and 1 remnant will. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        lesser_soul_ash_count += 2;
        remnant_will_count += 1;
        break;
      
      case 'Fallen Ashwing':
        Increase = 0;
        if (realm_count >= 1 || realm_count < 3) {
          Increase = 1 / realm_count *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
        <br><br>
        You've slain the Fallen Ashwing and gained 4 ashblood powder. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        ashblood_powder_count += 4;
        break;
      case 'Dull Dragoneye':
        Increase = 0;
        if (realm_count >= 1 || realm_count < 3) {
          Increase = 1 / realm_count *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
        <br><br>
        You've slain the Dull Dragoneye and gained 1 dull dragon pearl. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        dull_dragon_pearl_count += 1;
        break;
      case 'Corporeal Divine Ember':
        Increase = 0;
        if (realm_count >= 1 || realm_count < 3) {
          Increase = 1 / realm_count *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
        <br><br>
        You've slain the Corporeal Divine Ember and gained 1 hollow ember. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        hollow_ember_count += 1;
        break;
      case 'Ashen Dragonling':
        Increase = 0;
        if (realm_count >= 1 || realm_count < 3) {
          Increase = 1 / realm_count *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
        <br><br>
        You've slain the Ashen Dragonling and gained 1 smoldering dragon scale. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        smoldering_dragon_scale_count += 1;
        break;
      case 'Pure Ashen Dragonling':
        Increase = 0;
        if (realm_count >= 1 || realm_count < 3) {
          Increase = 2 / realm_count *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
        <br><br>
        You've slain the Pure Ashen Dragonling and gained 1 remnant dragon trueblood, 3 smoldering dragon scales, and 2 dull dragon pearls. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        remnant_dragon_trueblood_count += 1;
        smoldering_dragon_scale_count += 3;
        dull_dragon_pearl_count += 2;
        
        break;
      case 'Stormcaller Wolf':
        Increase = 0;
        if (realm_count >= 2 || realm_count < 4) {
          Increase = 1 / (realm_count - 1) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
        <br><br>
        You've slain the Stormcaller Wolf and gained 3 thunderleafs and 1 charged bone. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        thunderleaf_count += 3;
        charged_bone_count += 1;
        break;
      case 'Arcflare Roc':
        Increase = 0;
        if (realm_count >= 2 || realm_count < 4) {
          Increase = 1 / (realm_count - 1) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
        <br><br>
        You've slain the Arcflare Roc and gained 2 thunderleafs and 2 charged bones. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        thunderleaf_count += 2;
        charged_bone_count += 2;
        break;
      case 'Thundering Stag':
        Increase = 0;
        if (realm_count >= 2 || realm_count < 4) {
          Increase = 1 / (realm_count - 1) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
        <br><br>
        You've slain the Thundering Stag and gained 6 thunderleafs and 1 charged bone. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        thunderleaf_count += 6;
        charged_bone_count += 1;
        break;
      case 'Stormcaller Wolf Alpha':
        Increase = 0;
        if (realm_count >= 2 || realm_count < 4) {
          Increase = 2 / (realm_count - 1) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
        <br><br>
        You've slain the Stormcaller Wolf Alpha and gained 1 crackling crystal, 3 thunderleafs, and 2 charged bones. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        crackling_crystal_count += 1;
        charged_bone_count += 2;
        thunderleaf_count += 3;
        break;
      case 'Crying Lotus Shade':
        Increase = 0;
        if (realm_count >= 3 || realm_count < 5) {
          Increase = 1 / (realm_count - 3) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
        
        <br><br>
        <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've slain the Crying Lotus Shade and gained 3 soul ashes and 1 corrupted blossom lotus. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        soul_ash_count += 3;
        corrupted_blossom_lotus_count += 1
        break;
      case 'Haunting Boneflame':
        Increase = 0;
        if (realm_count >= 3 || realm_count < 5) {
          Increase = 1 / (realm_count - 3) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've slain the Haunting Boneflame and gained 3 ashen bone fragments. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        ashen_bone_fragments_count += 3;
        break;
      case 'Ghastbrand Guardian':
        Increase = 0;
        if (realm_count >= 3 || realm_count < 5) {
          Increase = 2 / (realm_count - 3) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've slain the Ghastbrand Guardian and gained 2 soulbound shackles. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        soulbound_shackles_count += 2;
        break;
      case 'Witherjaw Serpent':
        Increase = 0;
        if (realm_count >= 3 || realm_count < 5) {
          Increase = 1 / (realm_count - 3) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've slain the Witherjaw Serpent and gained 1 translucent scale. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        translucent_scale_count += 1;
        break;
      case 'Soulcage Widow':
        Increase = 0;
        if (realm_count >= 3 || realm_count < 5) {
          Increase = 1 / (realm_count - 3) *  potential_boost
          cultivation_progress += Increase
          cultivation_progress = Math.round(cultivation_progress * 100) / 100;
          if (cultivation_progress >= 100) {
            cultivation_progress = 100;
          }
        }
        document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've slain the Soulcage Widow and gained 1 soulweb silk. Additionally, your cultivation progress has increased by ${Increase}.
        <p id='display1'></p>
        `;
        soulweb_silk_count += 1;
        break;
    }
    updateDisplay();
  }

  if (health <= 0) {
    if (current_location == 'Outer Soul Valley') {
      document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
      <br><br>
      <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
      
      <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
      <br><br>
      You've been defeated by ${enemy}.
      <p id='display1'></p>
      `;
    }
    else if (current_location == 'Inner Soul Valley') {
      document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
        <br><br>
        You've been defeated by ${enemy}.
        <p id='display1'></p>
        `;
    }
    else if (current_location == 'Thunderhowl Plateau') {
      document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
        <br><br>
        You've been defeated by ${enemy}.
        <p id='display1'></p>
        `;
    }
    else if (current_location == 'Minor Ashen Hollowvein') {
      document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
        <br><br>
        <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
        <br><br>
        <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
        <br><br>
        You've been defeated by ${enemy}.
        <p id='display1'></p>
        `;
    }

    health = 0;
    updateDisplay();
  }
}


function go_to_sect(time) {
  if (daysleft >= time) {
    fighting = false
    current_location = 'Four Heavenly Valleys Sect';
    document.body.style.backgroundImage = "url('images/background (new).png')"
    daysleft -= time;
    document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
    <br><br>
    As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
    <br><br>
    Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
    <br><br>
    (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
    `
    document.getElementById('cultivation_base').innerText = cultivation_realm;
    document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  }
  updateDisplay();
}

function continue_game_2() {
  document.getElementById('bottom_bar').style.display = 'block';
  delaybreakthrough = false
  if (current_location == 'Spirit Garden') {
    current_location = 'Spirit Garden';
    document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
    <br><br>
    <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
    <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
    <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Thunderhowl Plateau') {
    current_location = 'Thunderhowl Plateau';
    document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Outer Soul Valley') {
    current_location = 'Outer Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
      
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Minor Ashen Hollowvein') {
    current_location = 'Minor Ashen Hollowvein';
    document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Inner Soul Valley') {
    current_location = 'Inner Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Four Heavenly Valleys Sect') {
    current_location = 'Four Heavenly Valleys Sect';
    document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
    <br><br>
    As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
    <br><br>
    Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
    <br><br>
    (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
    `
    document.getElementById('cultivation_base').innerText = cultivation_realm;
    document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  }
  updateDisplay();
}
function continue_game() {
  daysleft = 365
  age += 1
  fighting = false

  if (age >= lifespan) {
    death()
    return
  }
  closeAllMenus();

  document.getElementById('main_text_menu').style.opacity = '1';

  let decayDays = Math.floor(Math.random() * 46) + 15;
  let decayAmount = 0
  if (mental_state < 100) {
    decayAmount = calculateMentalGain(mental_state, decayDays);
  }
  else {
    decayAmount = 5
  }
  

  if (sect_points >= 2) {
    sect_points -= 2;
  }
  else {
    sect_points -= 4;
  }

  if (current_location == 'Spirit Garden') {
    current_location = 'Spirit Garden';
    document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
    <br><br>
    <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
    <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
    <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Thunderhowl Plateau') {
    current_location = 'Thunderhowl Plateau';
    document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Outer Soul Valley') {
    current_location = 'Outer Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
      
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Minor Ashen Hollowvein') {
    current_location = 'Minor Ashen Hollowvein';
    document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Inner Soul Valley') {
    current_location = 'Inner Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Four Heavenly Valleys Sect') {
    current_location = 'Four Heavenly Valleys Sect';
    document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
    <br><br>
  As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
  <br><br>
  Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
  <br><br>
  (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
  `
    document.getElementById('cultivation_base').innerText = cultivation_realm;
    document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  }
  Wu_Lixia_progression();
  
  updateDisplay();

  if (sect_points <= -12) {
    document.getElementById('main_text').innerHTML = `While walking around outside at the sect market, you notice an old man with a large white beard charging towards you.
    <br><br>
    As he approaches, you feel an overwhelming sense of dread, as you recognize him as the 1st valley elder in charge of finances and sect points... Could the problem be the fact that you haven't paid your sect points in at least 3 years?
    <br><br>
    In an instant, the 1st valley elder had already appeared right in front of you, and he begins to yell at you.
    <br><br>
    "You! You still haven't paid your sect points! How dare you disregard the rules of the sect!"
    <br><br>
    "I forgave you the past few years and only deducted 2 extra sect points from your balance, but it has been too long, I have had enough!"
    <br><br>
    You feel a stinging slap whip across your face, ripping off a piece of your cheek! Stunned and stumbling, you fall backwards onto the ground.
    <br><br>
    "Hmph!" The 1st valley elder sneers, "You will pay the price for your actions! According to the rules of the sect, you will face a slight crippling of your cultivation!"
    <br><br>
    You shudder, remembering the sect rules you had read when you first entered the sect. Indeed, your cultivation was to be crippled by draining all cultivation progress within the current realm.
    <br><br>
    `
    if (attributes.charm >= 3) {
      document.getElementById('main_text').innerHTML += `
      "Please, I beg for your forgiveness! I will make sure to pay the sect points next year, just don't cripple all of my cultivation!"
      <br><br>
      The 1st valley elder hesitates for a moment, then nods in approval, swayed by your performance. (your charm is at least 3)
      <br><br>
      "I forgive you this time, but next year you will pay the price for your actions! I'll only drain half of your dantian."
      <br><br>
      You bow in gratitude, and the 1st valley elder nods in approval. He lightly taps you on the shoulder, draining your dantian by half in an instant. Then he dissapears, leaving you alone in the street.
      <br><br>
      `
      if (cultivation_progress > 0) cultivation_progress -= cultivation_progress / 2;
      if (cultivation_progress < 0) cultivation_progress = 0;
    }
    else {
      document.getElementById('main_text').innerHTML += `
      "Please, I beg for your forgiveness! I will make sure to pay the sect points next year, just don't cripple all of my cultivation!"
      <br><br>
      The 1st valley elder hesitates for a moment, then glares at you in disagreement. (your charm is less than 3)
      <br><br>
      "I will not forgive you! You will pay the price for your actions!"
      <br><br>
      The 1st valley elder swats you with a staff, causing you to fall backwards onto the ground once again. At the same moment, you feel a stinging sensation from inside you, and in an instant you recognize the signs of an empty dantian! He then dissapears, leaving you alone in the street.
      <br><br>
      `
      cultivation_progress = 0;
    }
    document.getElementById('main_text').innerHTML += `<button id='continue_button3' onclick='display_breakthrough()' class='normal_buttons'>Continue</button>`
  }
  else {
    display_breakthrough();
  }
  delaybreakthrough = false

  mental_state -= decayAmount;
  if (mental_state < 0) mental_state = 0;
  updateDisplay();

}

function continue_game_3() {
  display_breakthrough();
}

function display_breakthrough() {
  if (cultivation_progress >= 100 && delaybreakthrough == false && realm_count < 3) {
    document.getElementById('bottom_bar').style.display = 'none';
    document.getElementById('main_text').innerHTML = `While you're sitting in your room in the outer valley of the Four heavenly Valleys Sect, you check your cultivation base and realize that you've reached the peak of the <span id='cultivation_base1'></span>.
    <br><br>
    You have a foundation of <span id='foundation'></span> your original foundation.
    <br><br>
    Due to your work at learning your technique, your foundation is additionally boosted by <span id='learning_boost'></span>.
    <br><br>
    Because of your mental state, your foundation is further changed by a factor of <span id='psyche_boost'></span>.
    <br><br>
    Because of your body, your foundation is further changed by a factor of <span id='body_boost'></span>.
    <br><br>
    Currently, your chances at a successful breakthrough is <span id='breakthrough_chance'></span> <span id='breakthrough_chance_percent'></span>.
    <br><br>
    What will you do?
    <br><br>
    <button id='continue_cultivation_button' onclick="continue_game_2()" class='normal_buttons'>Delay breakthrough</button>
    <button id='break_through_btn' onclick="breakthrough()" class='normal_buttons'>Breakthrough</button>
    `
    document.getElementById('cultivation_base1').innerText = cultivation_realm;
    document.getElementById('cultivation_base1').style.color = 'rgb(255, 207, 119)';
    document.getElementById('foundation').innerText = foundation + 'x'
    document.getElementById('foundation').style.color = 'rgb(255, 207, 119)';
    document.getElementById('learning_boost').innerText = cultivation_technique_multi + 'x';
    document.getElementById('learning_boost').style.color = 'rgb(255, 207, 119)';
    document.getElementById('psyche_boost').innerText = Math.round(((mental_state / 100) + 0.3) * 100) / 100 + 'x';
    document.getElementById('psyche_boost').style.color = 'rgb(255, 207, 119)';
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    document.getElementById('body_boost').innerText = body_increase_boost + 'x';
    document.getElementById('body_boost').style.color = 'rgb(255, 207, 119)';
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    if (cultivation_realm == 'Low Foundation Forming') breakthroughchance_num *= 8;
    if (cultivation_realm == 'Middle Foundation Forming') breakthroughchance_num *= 7;
    if (cultivation_realm == 'High Foundation Forming') breakthroughchance_num *= 6;
    if (breakthroughchance_num > 100) {
        breakthroughchance_num = 100
    }
        breakthroughchance = ''
        if (breakthroughchance_num < 15) {
            breakthroughchance = 'low'
        }
        else if (breakthroughchance_num < 30) {
            breakthroughchance = 'slim'
        }
        else if (breakthroughchance_num < 49) {
            breakthroughchance = 'less than half'
        }

        else if (breakthroughchance_num < 60) {
            breakthroughchance = 'half'
        }

        else if (breakthroughchance_num < 75) {
            breakthroughchance = 'decent'
        }

        else if (breakthroughchance_num < 90) {
            breakthroughchance = 'high'
        }

        else {
            breakthroughchance = 'very high'
        }
    document.getElementById('breakthrough_chance').innerText = breakthroughchance;
    document.getElementById('breakthrough_chance').style.color = 'rgb(255, 207, 119)';
    
    document.getElementById('breakthrough_chance_percent').innerText = '(' + Math.round(breakthroughchance_num * 100) / 100 + '%)';
    document.getElementById('breakthrough_chance_percent').style.color = 'rgb(255, 207, 119)';
  }
  else if (realm_count == 3 && can_breakthrough_to_meridian_awakening && cultivation_progress >= 100) {
    document.getElementById('bottom_bar').style.display = 'none';
    document.getElementById('main_text').innerHTML = `While you're sitting in your room in the outer valley of the Four heavenly Valleys Sect, you check your cultivation base and realize that you've reached the peak of the <span id='cultivation_base1'></span>.
    <br><br>
    You have a foundation of <span id='foundation'></span> your original foundation.
    <br><br>
    Due to your work at learning your technique, your foundation is additionally boosted by <span id='learning_boost'></span>.
    <br><br>
    Because of your mental state, your foundation is further changed by a factor of <span id='psyche_boost'></span>.
    <br><br>
    Because of your body, your foundation is further changed by a factor of <span id='body_boost'></span>.
    <br><br>
    Currently, your chances at a successful breakthrough is <span id='breakthrough_chance'></span> <span id='breakthrough_chance_percent'></span>.
    <br><br>
    What will you do?
    <br><br>
    <button id='continue_cultivation_button' onclick="continue_game_2()" class='normal_buttons'>Delay breakthrough</button>
    <button id='break_through_btn' onclick="breakthrough()" class='normal_buttons'>Breakthrough</button>
    `
    document.getElementById('cultivation_base1').innerText = cultivation_realm;
    document.getElementById('cultivation_base1').style.color = 'rgb(255, 207, 119)';
    document.getElementById('foundation').innerText = foundation + 'x'
    document.getElementById('foundation').style.color = 'rgb(255, 207, 119)';
    document.getElementById('learning_boost').innerText = cultivation_technique_multi + 'x';
    document.getElementById('learning_boost').style.color = 'rgb(255, 207, 119)';
    document.getElementById('psyche_boost').innerText = Math.round(((mental_state / 100) + 0.3) * 100) / 100 + 'x';
    document.getElementById('psyche_boost').style.color = 'rgb(255, 207, 119)';
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    document.getElementById('body_boost').innerText = body_increase_boost + 'x';
    document.getElementById('body_boost').style.color = 'rgb(255, 207, 119)';
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    breakthroughchance_num *= 3;
    if (breakthroughchance_num > 100) breakthroughchance_num = 100;
    breakthroughchance = ''
    if (breakthroughchance_num < 15) {
      breakthroughchance = 'low'
    }
    else if (breakthroughchance_num < 30) {
      breakthroughchance = 'slim'
    }
    else if (breakthroughchance_num < 49) {
      breakthroughchance = 'less than half'
    }

    else if (breakthroughchance_num < 60) {
      breakthroughchance = 'half'
    }

    else if (breakthroughchance_num < 75) {
      breakthroughchance = 'decent'
    }

    else if (breakthroughchance_num < 90) {
      breakthroughchance = 'high'
    }

    else {
      breakthroughchance = 'very high'
    }
    document.getElementById('breakthrough_chance').innerText = breakthroughchance;
    document.getElementById('breakthrough_chance').style.color = 'rgb(255, 207, 119)';
    
    document.getElementById('breakthrough_chance_percent').innerText = '(' + Math.round(breakthroughchance_num * 100) / 100 + '%)';
    document.getElementById('breakthrough_chance_percent').style.color = 'rgb(255, 207, 119)';
  }

  else if (realm_count == 4 && cultivation_progress >= 100 && can_breakthrough_to_middle_meridian_awakening) {
    document.getElementById('bottom_bar').style.display = 'none';
    document.getElementById('main_text').innerHTML = `While you're sitting in your room in the outer valley of the Four heavenly Valleys Sect, you check your cultivation base and realize that you've reached the peak of the <span id='cultivation_base1'></span>.
    <br><br>
    You have a foundation of <span id='foundation'></span> your original foundation.
    <br><br>
    Due to your work at learning your technique, your foundation is additionally boosted by <span id='learning_boost'></span>.
    <br><br>
    Because of your mental state, your foundation is further changed by a factor of <span id='psyche_boost'></span>.
    <br><br>
    Because of your body, your foundation is further changed by a factor of <span id='body_boost'></span>.
    <br><br>
    Currently, your chances at a successful breakthrough is <span id='breakthrough_chance'></span> <span id='breakthrough_chance_percent'></span>.
    <br><br>
    What will you do?
    <br><br>
    <button id='continue_cultivation_button' onclick="continue_game_2()" class='normal_buttons'>Delay breakthrough</button>
    <button id='break_through_btn' onclick="breakthrough()" class='normal_buttons'>Breakthrough</button>
    `
    document.getElementById('cultivation_base1').innerText = cultivation_realm;
    document.getElementById('cultivation_base1').style.color = 'rgb(255, 207, 119)';
    document.getElementById('foundation').innerText = foundation + 'x'
    document.getElementById('foundation').style.color = 'rgb(255, 207, 119)';
    document.getElementById('learning_boost').innerText = cultivation_technique_multi + 'x';
    document.getElementById('learning_boost').style.color = 'rgb(255, 207, 119)';
    document.getElementById('psyche_boost').innerText = Math.round(((mental_state / 100) + 0.3) * 100) / 100 + 'x';
    document.getElementById('psyche_boost').style.color = 'rgb(255, 207, 119)';
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    if (cultivation_realm == 'Low Foundation Forming') breakthroughchance_num *= 8;
    if (cultivation_realm == 'Middle Foundation Forming') breakthroughchance_num *= 7;
    if (cultivation_realm == 'High Foundation Forming') breakthroughchance_num *= 6;
    if (realm_count == 4) {
      body_increase_boost =  Math.round(((((strength / 6) + (resilience / 6) + (vitality / 6)) / 3) + 0.5) * 100) / 100
      breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
      breakthroughchance_num *= 2
    }
    document.getElementById('body_boost').innerText = body_increase_boost + 'x';
    document.getElementById('body_boost').style.color = 'rgb(255, 207, 119)';
    if (breakthroughchance_num > 100) {
        breakthroughchance_num = 100
    }
        breakthroughchance = ''
        if (breakthroughchance_num < 15) {
            breakthroughchance = 'low'
        }
        else if (breakthroughchance_num < 30) {
            breakthroughchance = 'slim'
        }
        else if (breakthroughchance_num < 49) {
            breakthroughchance = 'less than half'
        }

        else if (breakthroughchance_num < 60) {
            breakthroughchance = 'half'
        }

        else if (breakthroughchance_num < 75) {
            breakthroughchance = 'decent'
        }

        else if (breakthroughchance_num < 90) {
            breakthroughchance = 'high'
        }

        else {
            breakthroughchance = 'very high'
        }
    document.getElementById('breakthrough_chance').innerText = breakthroughchance;
    document.getElementById('breakthrough_chance').style.color = 'rgb(255, 207, 119)';
    
    document.getElementById('breakthrough_chance_percent').innerText = '(' + Math.round(breakthroughchance_num * 100) / 100 + '%)';
    document.getElementById('breakthrough_chance_percent').style.color = 'rgb(255, 207, 119)';
  }
  
  else {
    continue_game_2();
  }
}

function breakthrough() {
  if (cultivation_realm == 'Low Foundation Forming') {
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost;
    random = Math.random() * 100
    breakthroughchance_num *= 8

    if (random < breakthroughchance_num) {
      cultivation_realm = 'Middle Foundation Forming'
      realm_count += 1
      cultivation_progress = 0
      speed_per_day = speed_per_day * 1.5
      speed_per_day = Math.round(speed_per_day * 1000) / 1000
      realm_boost += 0.5;
      max_strength += 1;
      max_resilience += 1;
      max_vitality += 1;
      continue_game_2()
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
    }
    updateDisplay()
    return
  }

  if (cultivation_realm == 'Middle Foundation Forming') {
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    random = Math.random() * 100
    breakthroughchance_num *= 7

    if (random < breakthroughchance_num) {
      cultivation_realm = 'High Foundation Forming'
      realm_count += 1
      cultivation_progress = 0
      speed_per_day = speed_per_day * 1.5
      speed_per_day = Math.round(speed_per_day * 1000) / 1000
      realm_boost += 0.5
      max_strength += 1
      max_resilience += 1
      max_vitality += 1
      continue_game_2()
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
      return
    }
    updateDisplay()
  }

  if (cultivation_realm == 'High Foundation Forming') {
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    random = Math.random() * 100
    breakthroughchance_num *= 6

    if (random < breakthroughchance_num) {
      cultivation_realm = 'Peak Foundation Forming'
      realm_count += 1
      cultivation_progress = 0
      speed_per_day = speed_per_day * 1.5
      speed_per_day = Math.round(speed_per_day * 1000) / 1000
      realm_boost += 0.5
      max_strength += 1
      max_resilience += 1
      max_vitality += 1
      continue_game_2()
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
      return
    }
    updateDisplay()
  }

  if (cultivation_realm == 'Peak Foundation Forming' && can_breakthrough_to_meridian_awakening) {
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    random = Math.random() * 100
    breakthroughchance_num *= 3

    if (random < breakthroughchance_num) {
      cultivation_realm = 'Low Meridian Awakening'
      realm_count += 1
      cultivation_progress = 0
      lifespan += 80;
      speed_per_day = speed_per_day * 1.5
      speed_per_day = Math.round(speed_per_day * 1000) / 1000
      realm_boost += 1.5;
      max_strength += 2;
      max_resilience += 2;
      max_vitality += 2;
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      You have successfully broken through to the realm of Meridian Awakening!
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)'; 
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
      return
    }
  }

  if (realm_count == 4 && can_breakthrough_to_middle_meridian_awakening) {
    body_increase_boost =  Math.round(((((strength / 6) + (resilience / 6) + (vitality / 6)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    breakthroughchance_num *= 2
    random = Math.random() * 100

    if (random < breakthroughchance_num) {
      cultivation_realm = 'Middle Meridian Awakening'
      realm_count += 1
      cultivation_progress = 0
      speed_per_day = speed_per_day * 1.5
      speed_per_day = Math.round(speed_per_day * 1000) / 1000
      realm_boost += 1;
      max_strength += 2;
      max_resilience += 2;
      max_vitality += 2;
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      You have successfully broken through to the realm of Middle Meridian Awakening!
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)'; 
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
      return
    }
  }
}



function changeFatePoints(change, attribute) {
  if (change == '+' && fatepoints < 1) return;
  if (attributes[attribute] <= 1 && change == '-') return;

  if (attribute == 'potential') {
    changePotential(change);
    updateDisplay();
    return;
  }

  attributes[attribute] = Math.max(1, attributes[attribute] + (change == '+' ? 1 : -1));

  if (change == '+') fatepoints--;
  else fatepoints++;

  if (attributes[attribute] < 1) attributes[attribute] = 1;
  updateDisplay();
}

function changePotential(change) {
  let currentLevel = attributes['potential'];

  if (change === '+') {
    if (currentLevel >= 6) return;

    let nextLevel = currentLevel + 1;
    let cost = (nextLevel * (nextLevel - 1)) / 2;

    if (fatepoints >= cost) {
      attributes['potential'] = nextLevel;
      fatepoints -= cost;
    }
  } else if (change === '-') {
    if (currentLevel <= 1) return;

    let refund = (currentLevel * (currentLevel - 1)) / 2;
    attributes['potential'] = currentLevel - 1;
    fatepoints += refund;
  }
}

function death() {
  document.getElementById('bottom_bar').style.display = 'none';
  document.getElementById('main_text').innerHTML = `At the age of ${age}, you have passed away.
  <br><br>
  Over the course of your lifetime, you have accrued ${realm_count} Fate Points due to your efforts in cultivation. However, as you are ascending into the afterlife, you feel a sudden force pulling you away, dragging you into the cycle of reincarnation!
  <br><br>
  <button onclick='death2()' class='normal_buttons'>Continue</button>`
}

function death2() {
  document.getElementById('fate_body').style.display = 'block';
  fatepoints = realm_count;
  document.getElementById('main_text').innerHTML = `As you are being formed, you feel a sense of control over your fate fill your mind.
  You have to manipulate your fate using the power of your soul.`
  document.getElementById('loadgamebtn').style.display = 'none';

  lname = 'Shi';
  fname = 'Jin';
  qi = 1;
  max_qi = 1;
  cultivation_realm = 'Low Foundation Forming';
  cultivation_progress = 0;
  lifespan = 120;
  totalDays = 365;
  daysleft = totalDays;
  age = 13;


  cultivation_technique = 'Myriad Balance Breathing';
  cultivation_technique_level = 1;
  cultivation_technique_max_level = 5;
  foundation = 1;
  speed_per_day = 40

  technique_exp = 0
  technique_exp_req = 150
  cultivation_technique_multi = 1;

  mental_state = 79;
  mental_state_max = 100;

  sect_points = 0;
  sect_name = 'Four Heavenly Valleys Sect';

  current_location = 'Four Heavenly Valleys Sect';

  spirit_stones = 0;


  delaybreakthrough = false;

  lesser_mind_settling_pill_count = 0
  awakening_meridian_pill_count = 0
  minor_foundation_enhancing_pill_count = 0
  foundation_enhancing_pill_count = 0

  lesser_spirit_leaf_count = 0
  lesser_soul_ash_count = 0
  wailshade_tear_count = 0
  whispering_bone_count = 0
  remnant_will_count = 0
  crackling_crystal_count = 0
  charged_bone_count = 0
  thunderleaf_count = 0


  health = 25;
  max_health = 25;
  defense = 0;
  attack = 5;
  strength = 1;
  resilience = 1; 
  vitality = 1; 
  max_strength = 3;
  max_resilience = 3;
  max_vitality = 3;

  realm_boost = 1;
  realm_count = 0;

  can_breakthrough_to_meridian_awakening = false;

  combat_art = {
    name: 'Basic Combat Art',
    strength_boost: 1,
    resilience_boost: 1,
    vitality_boost: 1
  }
  
  owned_combat_arts = ['Basic Combat Art']
  
  combat_technique1 = {
    name: 'Qi Punch',
    attack_power: 1,
    defense_power: 1,
    healing_power: 0,
    success_chance: 100,
    description: 'A basic qi punch that does has the same attack and defense power as your stats.'
  }
  
  combat_technique2 = {
    name: 'Qi Shield',
    attack_power: 0.5,
    defense_power: 2,
    healing_power: 0,
    success_chance: 100,
    description: 'A basic qi shield that has double the defense power and half the attack power.'
  }
  
  combat_technique3 = {
    name: 'Qi Needle',
    attack_power: 2.5,
    defense_power: 0.1,
    healing_power: 0,
    success_chance: 70,
    description: 'A basic qi needle that has 2.5x the attack power and 0.1x the defense power.'
  }

}


function go_to_location() {
  if (current_location == 'Spirit Garden') {
    current_location = 'Spirit Garden';
    document.body.style.backgroundImage = 'url("images/spirit garden.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
    <br><br>
    <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
    <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
    <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Thunderhowl Plateau') {
    current_location = 'Thunderhowl Plateau';
    document.body.style.backgroundImage = 'url("images/thunderhowl plateau.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Thunderhowl Plateau. You can feel the spiritual energy of the plateau.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(7)'>Go back to sect (7 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_thunderhowl_plateau()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Outer Soul Valley') {
    current_location = 'Outer Soul Valley';
    document.body.style.backgroundImage = 'url("images/soul valley.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
      
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Minor Ashen Hollowvein') {
    current_location = 'Minor Ashen Hollowvein';
    document.body.style.backgroundImage = 'url("images/minor ashen hollowvein.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Minor Ashen Hollowvein. Based on the words of the elders of the 1st valley, this mysterious tunnel is said to be carved out by a young ancient dragon. Due to this, the tunnel overtime has transformed into an ashen dragonvein that is very impure compared to other dragonveins. But, as it still is a dragonvein, many creatures and rare opportunities can be found here.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(3)'>Go back to sect (3 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_minor_ashen_hollowvein()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Inner Soul Valley') {
    current_location = 'Inner Soul Valley';
    document.body.style.backgroundImage = 'url("images/inner soul valley.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Inner Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(8)'>Go back to sect (8 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_inner_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Four Heavenly Valleys Sect') {
    current_location = 'Four Heavenly Valleys Sect';
    document.body.style.backgroundImage = "url('images/background (new).png')"
    document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
    <br><br>
  As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
  <br><br>
  Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
  <br><br>
  (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
  `
    document.getElementById('cultivation_base').innerText = cultivation_realm;
    document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  }
}

function selectCombatPath(path) {
  combat_path = path;

  loading = false;
  potential_boost = attributes['potential'];
  comprehension_boost = (attributes['comprehension'] - 2) / 2 + 0.5;
  body_boost = (attributes['body'] - 2) / 2 + 0.5;
  psyche_boost = (attributes['psyche'] - 2) / 2 + 0.5;
  document.getElementById('fate_body').style.display = 'none';
  document.getElementById('bottom_bar').style.display = 'block';
  document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
  <br><br>
  As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
  <br><br>
  Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
  <br><br>
  (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
  `
  
  document.getElementById('cultivation_base').innerText = cultivation_realm;
  document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  go_to_location()
  
}

function StartGame() {
  if (!loading) {
    const genderInput = document.querySelector('input[name="gender"]:checked');
    if (!genderInput) {
      alert("Please select a gender");
      return;
    }
    gender = genderInput.value;
    const input1 = document.getElementById('name1');
    const input2 = document.getElementById('name2');
    if (!input1.value instanceof String || !input2.value instanceof String) {
      alert("Enter a valid name");
      return;
    }
    lname = input1.value;
    fname = input2.value;

    document.getElementById('fate_body').style.display = 'none';
    document.getElementById('bottom_bar').style.display = 'block';
    document.getElementById('continue_button').style.display = 'block';
    document.getElementById('dialogue_btn1').style.display = 'none';
    document.getElementById('main_text').innerHTML = `
    As you enter the Four Heavenly Valleys sect for the first time, you're greeted by an elder whom guides you through the 1st valley.
    <br><br>
    Eventually, you arrive at a pavilion, where you are forced to choose between 6 combat paths that you will pursue for the rest of your current life.
    <br><br>
    <div onclick='selectCombatPath("Iron")' class='tooltip'>
      <span id="select_iron" class="attack_buttons">Iron</span>
      <span class="tooltiptext">Select this to follow the Iron path</span>
    </div>
    <br><br>
    <div onclick='selectCombatPath("Wind")' class='tooltip'>
      <span id="select_wind" class="attack_buttons">Wind</span>
      <span class="tooltiptext">Select this to follow the Wind path</span>
    </div>
    <br><br>
    <div onclick='selectCombatPath("Karma")' class='tooltip'>
      <span id="select_karma" class="attack_buttons">Karma</span>
      <span class="tooltiptext">Select this to follow the Karma path</span>
    </div>
    <br><br>
    <div onclick='selectCombatPath("Flame")' class='tooltip'>
      <span id="select_flame" class="attack_buttons">Flame</span>
      <span class="tooltiptext">Select this to follow the Flame path</span>
    </div>
    <br><br>
    <div onclick='selectCombatPath("Storm")' class='tooltip'>
      <span id="select_storm" class="attack_buttons">Storm</span>
      <span class="tooltiptext">Select this to follow the Storm path</span>
    </div>
    <br><br>
    <div onclick='selectCombatPath("Weapon")' class='tooltip'>
      <span id="select_weapon" class="attack_buttons">Weapon</span>
      <span class="tooltiptext">Select this to follow the Weapon path</span>
    </div>
    `
    return
  }
  document.getElementById('continue_button').style.display = 'block';
  document.getElementById('dialogue_btn1').style.display = 'none';
  loading = false;
  potential_boost = attributes['potential'];
  comprehension_boost = (attributes['comprehension'] - 2) / 2 + 0.5;
  body_boost = (attributes['body'] - 2) / 2 + 0.5;
  psyche_boost = (attributes['psyche'] - 2) / 2 + 0.5;
  document.getElementById('fate_body').style.display = 'none';
  document.getElementById('bottom_bar').style.display = 'block';
  document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
  <br><br>
  As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
  <br><br>
  Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
  <br><br>
  (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
  `
  
  document.getElementById('cultivation_base').innerText = cultivation_realm;
  document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  go_to_location()
}

function selectCombatArt(art) {

  if (art == 'Minor Earth Combat Art') {
    combat_art.name = 'Minor Earth Combat Art'
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.1;

    combat_technique1.name = 'Earth Strike'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic earth-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Earth Stomp'
    combat_technique2.attack_power = 1.5
    combat_technique2.defense_power = 1
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 80
    combat_technique2.description = 'A basic earth-based attack that has 1.5x base attack and base defense and has a 80% success chance.'
    
    combat_technique3.name = 'Earth Arrow'
    combat_technique3.attack_power = 2
    combat_technique3.defense_power = 0.7
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 75
    combat_technique3.description = 'A basic earth-based attack that has 2x base attack and 0.7x base defense and has a 75% success chance.'

    updateDisplay();
  }
  if (art == 'Minor Water Combat Art') {
    combat_art.name = 'Minor Water Combat Art'
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 1.25;
    combat_art.vitality_boost = 1.25;

    combat_technique1.name = 'Water Strike'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic water-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Water Wall'
    combat_technique2.attack_power = 0.3
    combat_technique2.defense_power = 3
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 80
    combat_technique2.description = 'A basic water-based attack that has 0.3x base attack and 3x base defense and has a 80% success chance.'
    
    combat_technique3.name = 'Water Arrow'
    combat_technique3.attack_power = 2
    combat_technique3.defense_power = 0.7
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 75
    combat_technique3.description = 'A basic water-based attack that has 2x base attack and 0.7x base defense and has a 75% success chance.'

    updateDisplay();
  }
  if (art == 'Minor Fire Combat Art') {
    combat_art.name = 'Minor Fire Combat Art'
    combat_art.strength_boost = 2.5;
    combat_art.resilience_boost = 1.25;
    combat_art.vitality_boost = 1.1;

    combat_technique1.name = 'Fire Strike'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic fire-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Fire Fist'
    combat_technique2.attack_power = 2.5
    combat_technique2.defense_power = 0.7
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 65
    combat_technique2.description = 'A basic fire-based attack that has 2.5x base attack and 0.7x base defense and has a 65% success chance.'
    
    combat_technique3.name = 'Fire Arrow'
    combat_technique3.attack_power = 3
    combat_technique3.defense_power = 0.8
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 60
    combat_technique3.description = 'A basic fire-based attack that has 3x base attack and 0.8x base defense and has a 60% success chance.'

    updateDisplay();
  }
  if (art == 'Minor Air Combat Art') {
    combat_art.name = 'Minor Air Combat Art'
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 1.5;
    combat_art.vitality_boost = 1.25;

    combat_technique1.name = 'Air Strike'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic air-based attack that has the base attack and defense and has a 100% success chance.'

    combat_technique2.name = 'Condensed Wind Beam'
    combat_technique2.attack_power = 1.5
    combat_technique2.defense_power = 1.5
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 75
    combat_technique2.description = 'A basic air-based attack that has 1.5x base attack and 1.5x base defense and has a 75% success chance.'
    
    combat_technique3.name = 'Air Platform'
    combat_technique3.attack_power = 0.5
    combat_technique3.defense_power = 2.5
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 100
    combat_technique3.description = 'A basic air-based attack that has 0.5x base attack and 2.5x base defense and has a 100% success chance.'

    updateDisplay();
  }
  if (art == 'Minor Metal Combat Art') {
    combat_art.name = 'Minor Metal Combat Art'
    combat_art.strength_boost = 2;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.1;

    combat_technique1.name = 'Metal Knuckles'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic metal-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Metal Arrow'
    combat_technique2.attack_power = 2
    combat_technique2.defense_power = 0.7
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 75
    combat_technique2.description = 'A basic metal-based attack that has 2x base attack and 0.7x base defense and has a 75% success chance.'
    
    combat_technique3.name = 'Metal Shards'
    combat_technique3.attack_power = 3
    combat_technique3.defense_power = 0.8
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 60
    combat_technique3.description = 'A basic metal-based attack that has 3x base attack and 0.8x base defense and has a 60% success chance.'

    updateDisplay();
  }
  if (art == 'Minor Wood Combat Art') {
    combat_art.name = 'Minor Wood Combat Art'
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.5;

    combat_technique1.name = 'Wooden Needles'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic wood-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Entangled Roots'
    combat_technique2.attack_power = 0.8
    combat_technique2.defense_power = 2.5
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 70
    combat_technique2.description = 'A basic wood-based attack that has 0.8x base attack and 2.5x base defense and has a 70% success chance.'
    
    combat_technique3.name = "World Trees Minor Blessing"
    combat_technique3.attack_power = 0.5
    combat_technique3.defense_power = 0.5
    combat_technique3.healing_power = attack
    combat_technique3.success_chance = 60
    combat_technique3.description = 'A basic wood-based attack that has 0.5x base attack and 0.5x base defense which heals your health by the value of your attack power and has a 60% success chance.'

    updateDisplay();
  }

  if (art == 'Advanced Metal Combat Art') {
    combat_art.name = 'Advanced Metal Combat Art';
    combat_art.strength_boost = 2;
    combat_art.resilience_boost = 2.5;
    combat_art.vitality_boost = 1.1;


    combat_technique1.name = 'Metal Knuckles'
    combat_technique1.attack_power = 1
    combat_technique1.defense_power = 1
    combat_technique1.healing_power = 0
    combat_technique1.success_chance = 100
    combat_technique1.description = 'A basic metal-based attack that has the base attack and defense and has a 100% success chance.'
    
    combat_technique2.name = 'Metal Arrow'
    combat_technique2.attack_power = 2
    combat_technique2.defense_power = 0.7
    combat_technique2.healing_power = 0
    combat_technique2.success_chance = 75
    combat_technique2.description = 'A basic metal-based attack that has 2x base attack and 0.7x base defense and has a 75% success chance.'
    
    combat_technique3.name = 'Metal Shards'
    combat_technique3.attack_power = 3
    combat_technique3.defense_power = 0.8
    combat_technique3.healing_power = 0
    combat_technique3.success_chance = 60
    combat_technique3.description = 'A basic metal-based attack that has 3x base attack and 0.8x base defense and has a 60% success chance.'
    
    updateDisplay();
  }
  if (art == 'Basic Combat Art') {
    combat_art.name = 'Basic Combat Art';
    combat_art.strength_boost = 1;
    combat_art.resilience_boost = 1;
    combat_art.vitality_boost = 1;

    combat_technique1 = {
      name: 'Qi Punch',
      attack_power: 1,
      defense_power: 1,
      healing_power: 0,
      success_chance: 100,
      description: 'A basic qi punch that does has the same attack and defense power as your stats.'
    }
    
    combat_technique2 = {
      name: 'Qi Shield',
      attack_power: 0.5,
      defense_power: 2,
      healing_power: 0,
      success_chance: 100,
      description: 'A basic qi shield that has double the defense power and half the attack power.'
    }
    
    combat_technique3 = {
      name: 'Qi Needle',
      attack_power: 2.5,
      defense_power: 0.1,
      healing_power: 0,
      success_chance: 70,
      description: 'A basic qi needle that has 2.5x the attack power and 0.1x the defense power.'
    }
    
    
    updateDisplay();
  }
  if (fighting) updateFight();
}

function selectTalisman(talisman2) {
  if (talisman2 == 'Minor Dragon Empowering Talisman') {
    talisman.name = 'Minor Dragon Empowering Talisman';
    talisman.strength_boost = 1.1;
    talisman.resilience_boost = 1;
    talisman.vitality_boost = 1;
    uses = 0;
    updateDisplay();
  }
  if (talisman2 == 'Remnant Trueblood Vitality Talisman') {
    talisman.name = 'Remnant Trueblood Vitality Talisman';
    talisman.strength_boost = 1;
    talisman.resilience_boost = 1;
    talisman.vitality_boost = 1.1;
    uses = 0;
    updateDisplay();
  }
  if (talisman2 == 'Minor Dragon Scale Protection Talisman') {
    talisman.name = 'Minor Dragon Scale Protection Talisman';
    talisman.strength_boost = 1;
    talisman.resilience_boost = 1.1;
    talisman.vitality_boost = 1;
    uses = 0;
    updateDisplay();
  }
  if (talisman2 == 'Cracked Crystalized Heart Talisman') {
    talisman.name = 'Cracked Crystalized Heart Talisman';
    talisman.strength_boost = 1;
    talisman.resilience_boost = 1;
    talisman.vitality_boost = 1.1;
    uses = 1;
    updateDisplay();
  }
}

function updateDisplay() {
  foundation = Math.round(foundation * 100) / 100;
  if (owned_combat_arts.includes('Minor Earth Combat Art')) document.getElementById('minor_earth_combat_art_display').style.display = 'none';
  else document.getElementById('minor_earth_combat_art_display').style.display = 'block';

  if (owned_combat_arts.includes('Minor Water Combat Art')) document.getElementById('minor_water_combat_art_display').style.display = 'none';
  else document.getElementById('minor_water_combat_art_display').style.display = 'block';

  if (owned_combat_arts.includes('Minor Fire Combat Art')) document.getElementById('minor_fire_combat_art_display').style.display = 'none';
  else document.getElementById('minor_fire_combat_art_display').style.display = 'block';

  if (owned_combat_arts.includes('Minor Air Combat Art')) document.getElementById('minor_air_combat_art_display').style.display = 'none';
  else document.getElementById('minor_air_combat_art_display').style.display = 'block';

  if (owned_combat_arts.includes('Minor Metal Combat Art')) document.getElementById('minor_metal_combat_art_display').style.display = 'none';
  else document.getElementById('minor_metal_combat_art_display').style.display = 'block';

  if (owned_combat_arts.includes('Minor Wood Combat Art')) document.getElementById('minor_wood_combat_art_display').style.display = 'none';
  else document.getElementById('minor_wood_combat_art_display').style.display = 'block';

  if (owned_combat_arts.includes('Advanced Metal Combat Art') || realm_count < 4) document.getElementById('advanced_metal_combat_art_display').style.display = 'none';
  else document.getElementById('advanced_metal_combat_art_display').style.display = 'block';

  if (owned_talismans.includes('Minor Dragon Empowering Talisman')) document.getElementById('minor_dragon_empowering_talisman_display').style.display = 'none';
  else document.getElementById('minor_dragon_empowering_talisman_display').style.display = 'block';

  owned_combat_arts = [...new Set(owned_combat_arts)];
  owned_talismans = [...new Set(owned_talismans)];

  if (realm_count >= 4) document.getElementById('meridian_bottleneck_pill_display_alc').style.display = 'block';
  else document.getElementById('meridian_bottleneck_pill_display_alc').style.display = 'none';


  if (current_location == 'Four Heavenly Valleys Sect') {
    document.getElementById('cultivation_chamber_menu1').style.display = 'block';
  } else {
    document.getElementById('cultivation_chamber_menu1').style.display = 'none';
  }
  total_cultivation_progress = (realm_count * 100) + cultivation_progress
  max_qi = ((total_cultivation_progress * foundation) / 25) + 5
  qi = (max_qi * (mental_state / 100))
  max_qi = Math.round(max_qi * 100) / 100
  qi = Math.round(qi * 100) / 100
  document.getElementById('fatepoints').textContent = fatepoints;
  const attributesKeys = ['body', 'comprehension', 'psyche', 'charm'];
  const fateLabels = {
    body: body_fate_labels,
    comprehension: comprehension_fate_labels,
    psyche: psyche_fate_labels,
    charm: charm_fate_labels
  };

  attributesKeys.forEach((key) => {
    let value = attributes[key];
    let labelIndex = value <= 3 ? value - 1 :
                     (value == 4 || value == 5) ? 3 :
                     (value >= 6 && value <= 10) ? 4 : 5;
    document.getElementById(`${key}_fate_value`).textContent = fateLabels[key][labelIndex] + ' (' + value + ')';
  });

  const potentialIndex = Math.min(attributes['potential'] - 1, potential_fate_labels.length - 1);
  document.getElementById('potential_fate_value').textContent = potential_fate_labels[potentialIndex] + ' (' + attributes['potential'] + ')';
  
  document.getElementById('cultivation_progress').textContent = Math.round(cultivation_progress * 1000) / 1000 + '%';

  document.getElementById('days_left_display').textContent = daysleft;
  document.getElementById('days_left_topdisplay').textContent = daysleft;

  document.getElementById('sect_points_topdisplay').innerText = sect_points;

  document.getElementById('age_topdisplay').innerText = age + ' / ' + lifespan;

  document.getElementById('player_header_info').textContent = lname + ' ' + fname
  document.getElementById('info_age').textContent = age
  document.getElementById('info_gender').textContent = gender
  document.getElementById('info_health').textContent = convert(health) + ' / ' + convert(max_health);
  document.getElementById('info_attack').textContent = convert(attack);
  document.getElementById('info_defense').textContent = convert(defense);
  document.getElementById('info_strength').textContent = strength;
  document.getElementById('info_resilience').textContent = resilience;
  document.getElementById('info_vitality').textContent = vitality;
  document.getElementById('info_qi').textContent = qi + ' / ' + max_qi
  document.getElementById('info_realm').textContent = cultivation_realm;
  document.getElementById('cultivation_realm_display').textContent = cultivation_realm;
  document.getElementById('info_foundation').textContent = foundation;
  document.getElementById('info_progress').textContent = cultivation_progress.toFixed(1) + '%';
  document.getElementById('info_days_left').textContent = daysleft;
  document.getElementById('info_cultivation_technique').innerText = cultivation_technique
  document.getElementById('info_cultivation_technique_level').innerText = cultivation_technique_level + ' / ' + cultivation_technique_max_level
  document.getElementById('info_cultivation_technique_progress').innerText = technique_exp.toFixed(1) + ' / ' + technique_exp_req.toFixed(1)
  document.getElementById('info_combat_art').innerText = combat_art.name
  document.getElementById('info_talisman').innerText = talisman.name
  if (realm_count == 3) {
    if (can_breakthrough_to_meridian_awakening) {
      document.getElementById('info_major_realm_bottleneck').textContent = 'Can breakthrough to Meridian Awakening!'
    } else {
      document.getElementById('info_major_realm_bottleneck').textContent = 'Cannot breakthrough to Meridian Awakening...'
    }
  }
  else if (realm_count == 4) {
    if (can_breakthrough_to_middle_meridian_awakening) {
      document.getElementById('info_major_realm_bottleneck').textContent = 'Can breakthrough to Middle Meridian Awakening!'
    } else {
      document.getElementById('info_major_realm_bottleneck').textContent = 'Cannot breakthrough to Middle Meridian Awakening...'
    }
  }
  
  
  document.getElementById('info_psyche').innerText = mental_state_index[Math.floor(mental_state / 20)] + ' (' + mental_state.toFixed(2) + ' / ' + mental_state_max +  ')'
  attributesKeys.forEach((key) => {
    let value = attributes[key];
    let labelIndex = value <= 3 ? value - 1 :
                     (value == 4 || value == 5) ? 3 :
                     (value >= 6 && value <= 10) ? 4 : 5;
    document.getElementById(`info_${key}_fate`).textContent = fateLabels[key][labelIndex] + ' (' + value + ')';
  });
  document.getElementById('info_potential_fate').textContent = potential_fate_labels[potentialIndex] + ' (' + attributes['potential'] + ')';

  document.getElementById('info_combat_art2').innerHTML = ''

  owned_combat_arts.forEach((art) => {
    const isEquipped = art === combat_art.name
    const equippedText = isEquipped ? ', Equipped' : ''
    const colorStyle = isEquipped ? 'style="color: rgb(255, 207, 119);"' : ''
    
    const imgSrc = `images/${art.toLowerCase().replace(/\s/g, '_')}.png`
    document.getElementById('info_combat_art2').innerHTML += `
      <div style="display: flex; align-items: center; justify-content: left;">
        <p onclick='selectCombatArt("${art}")' ${colorStyle}>${art}${equippedText}</p>
      </div>
    `
  })
  document.getElementById('info_talisman2').innerHTML = ''
  owned_talismans.forEach((talisman2) => {
    const isEquipped = talisman2 === talisman.name
    const equippedText = isEquipped ? ', Equipped' : ''
    const colorStyle = isEquipped ? 'style="color: rgb(255, 207, 119);"' : ''
    
    const imgSrc = `images/${talisman2.toLowerCase().replace(/\s/g, '_')}.png`
    document.getElementById('info_talisman2').innerHTML += `
      <div style="display: flex; align-items: center; justify-content: left;">
        <p onclick='selectTalisman("${talisman2}")' ${colorStyle}>${talisman2}${equippedText}</p>
      </div>
    ` //         <img src="${imgSrc}" width="50" height="50" style="vertical-align: middle; border: 3px solid gray; margin-right: 5px;" />
  })


  const items = [
    {
      name: 'Lesser Mind-Settling Pill',
      id: 'lesser_mind_settling_pill',
      count: lesser_mind_settling_pill_count,
      hasButton: true,
      description: 'Calms the mind and magically elevates the users psyche!'
    },
    {
      name: 'Soul Protection Pill',
      id: 'soul_protection_pill',
      count: soul_protection_pill_count,
      hasButton: true,
      description: 'A powerful pill that protects the users soul from harm, allowing one to enter the inner soul valley when consumed.'
    },
    {
      name: 'Minor Foundation Enhancing Pill',
      id: 'minor_foundation_enhancing_pill',
      count: minor_foundation_enhancing_pill_count,
      hasButton: true,
      description: 'A minor foundation enhancing pill that slightly enhances the users foundation.'
    },
    {
      name: 'Awakening Meridian Pill',
      id: 'awakening_meridian_pill',
      count: awakening_meridian_pill_count,
      hasButton: true,
      description: 'A powerful pill that awakens the users meridian, allowing one to have the ability to breakthrough to meridian awakening when consumed.'
    },
    {
      name: 'Meridian Bottleneck Pill',
      id: 'meridian_bottleneck_pill',
      count: meridian_bottleneck_pill_count,
      hasButton: true,
      description: 'A powerful pill that awakens the users meridian, allowing one to have the ability to breakthrough past the low meridian awakening bottleneck when consumed and reach middle meridian awakening.'
    },
    {
      name: 'Lesser Spirit Leaf',
      id: 'lesser_spirit_leaf',
      count: lesser_spirit_leaf_count,
      hasButton: false,
      description: 'A powerful leaf that originates from many areas such as the spirit garden'
    },
    {
      name: 'Lesser Soul Ash',
      id: 'lesser_soul_ash',
      count: lesser_soul_ash_count,
      hasButton: false,
      description: 'A weak ash that originates from beasts in the outer soul valley.'
    },
    {
      name: 'Wailshade Tear',
      id: 'wailshade_tear',
      count: wailshade_tear_count,
      hasButton: false,
      description: 'A small tear that originates from the wandering wailshade.'
    },
    {
      name: 'Whispering Bone',
      id: 'whispering_bone',
      count: whispering_bone_count,
      hasButton: false,
      description: 'A weak bone that originates from the remnant spirit rat.'
    },
    {
      name: 'Remnant Will',
      id: 'remnant_will',
      count: remnant_will_count,
      hasButton: false,
      description: 'A weak will that originates from a grudgebound wisp.'
    },
    {
      name: 'Ashblood Powder',
      id: 'ashblood_powder',
      count: ashblood_powder_count,
      hasButton: false,
      description: 'powder formed from the mix of blood and ash, originates from a Fallen Ashwing in the Minor Ashen Hollowvein.'
    },
    {
      name: 'Dull Dragon Pearl',
      id: 'dull_dragon_pearl',
      count: dull_dragon_pearl_count,
      hasButton: false,
      description: 'A dull dragon pearl that originates from a dull dragoneye in the Minor Ashen Hollowvein.'
    },
    {
      name: 'Hollow Ember',
      id: 'hollow_ember',
      count: hollow_ember_count,
      hasButton: false,
      description: 'A hollow ember that originates from a corporeal divine ember in the Minor Ashen Hollowvein.'
    },
    {
      name: 'Smoldering Dragon Scale',
      id: 'smoldering_dragon_scale',
      count: smoldering_dragon_scale_count,
      hasButton: false,
      description: 'A smoldering dragon scale that originates from an Ashen Dragonling in the Minor Ashen Hollowvein.'
    },
    {
      name: 'Remnant Dragon Trueblood',
      id: 'remnant_dragon_trueblood',
      count: remnant_dragon_trueblood_count,
      hasButton: false,
      description: 'A remnant dragon trueblood that originates from a Pure Ashen Dragonling in the Minor Ashen Hollowvein.'
    },
    {
      name: 'Crackling Crystal',
      id: 'crackling_crystal',
      count: crackling_crystal_count,
      hasButton: false,
      description: 'A crackling crystal that originates from a stormcaller wolf alpha in the Thunderhowl Plateau.'
    },
    {
      name: 'Charged Bone',
      id: 'charged_bone',
      count: charged_bone_count,
      hasButton: false,
      description: 'A charged bone that originates from any beast in the Thunderhowl Plateau.'
    },
    {
      name: 'Thunderleaf',
      id: 'thunderleaf',
      count: thunderleaf_count,
      hasButton: false,
      description: 'A thunderleaf that originates from the Thunderhowl Plateau.'
    },
    {
      name: 'Spirit Leaf',
      id: 'spirit_leaf',
      count: spirit_leaf_count,
      hasButton: false,
      description: 'A spirit leaf that originates from many places, including the inner soul valley.'
    },
    {
      name: 'Soul Ash',
      id: 'soul_ash',
      count: soul_ash_count,
      hasButton: false,
      description: 'A powerful soul ash that originates from the inner soul valley.'
    },
    {
      name: 'Corrupted Blossom Lotus',
      id: 'corrupted_blossom_lotus',
      count: corrupted_blossom_lotus_count,
      hasButton: false,
      description: 'A corrupted blossom lotus that originates from the inner soul valley.'
    },
    {
      name: 'Ashen Bone Fragments',
      id: 'ashen_bone_fragments',
      count: ashen_bone_fragments_count,
      hasButton: false,
      description: 'Ashen bone fragments that originate from the inner soul valley.'
    },
    {
      name: 'Soulbound Shackles',
      id: 'soulbound_shackles',
      count: soulbound_shackles_count,
      hasButton: false,
      description: 'A soulbound shackles that originate from the inner soul valley.'
    },
    {
      name: 'Translucent Scale',
      id: 'translucent_scale',
      count: translucent_scale_count,
      hasButton: false,
      description: 'A translucent scale that originates from the inner soul valley.'
    },
    {
      name: 'Soulweb Silk',
      id: 'soulweb_silk',
      count: soulweb_silk_count,
      hasButton: false,
      description: 'A soulweb silk that originates from the inner soul valley.'
    }
  ];
  
  items.forEach(item => {
    const display = document.getElementById(`${item.id}_display_count`);
    const display2Id = `${item.id}_display_count2`;
  
    if (item.count > 0) {
      let html = `${item.name} x<span id='${display2Id}'></span>`;
      if (item.hasButton) {
        html += ` <button class="adder_buttons" onclick="use_item('${item.name}')">Use</button>`;
      }
      html += `<span class='tooltiptext'>${item.description}</span>`;
      html += `<br>`;
      display.innerHTML = html;
      document.getElementById(display2Id).innerText = item.count;
      display.style.display = 'block';
    } else {
      display.style.display = 'none';
    }

  });
  

  document.getElementById('technique_name').textContent = cultivation_technique;
  document.getElementById('technique_level').textContent = cultivation_technique_level + ' / ' + cultivation_technique_max_level
  document.getElementById('technique_progress').textContent = convert(technique_exp) + ' / ' + convert(technique_exp_req)

  document.getElementById('mental_state_display').innerText = mental_state_index[Math.floor(mental_state / 20)] + ' (' + mental_state.toFixed(2) + ' / ' + mental_state_max +  ')'

  document.getElementById('sect_name').innerText = sect_name
  document.getElementById('sect_points').innerText = sect_points

  document.getElementById('strength_value').innerText = strength + ' / ' + max_strength
  document.getElementById('resilience_value').innerText = resilience + ' / ' + max_resilience
  document.getElementById('vitality_value').innerText = vitality + ' / ' + max_vitality
  document.getElementById('health_value1').innerText = health + ' / ' + max_health;

  if (health == max_health) {
    max_health = 25 * max_qi * vitality * combat_art.vitality_boost * talisman.vitality_boost * realm_boost;
    health = max_health;
  }
  else {
    max_health = 25 * max_qi * vitality * combat_art.vitality_boost * talisman.vitality_boost * realm_boost;
  }

  attack = 10 * strength * combat_art.strength_boost * talisman.strength_boost * realm_boost * (max_qi / 10)
  defense = 10 * resilience * combat_art.resilience_boost * talisman.resilience_boost * realm_boost * (max_qi / 10)

  max_health = Math.round(max_health * 100) / 100;
  health = Math.round(health * 100) / 100;
  attack = Math.round(attack * 100) / 100;
  defense = Math.round(defense * 100) / 100;
  strength = Math.round(strength * 100) / 100;
  resilience = Math.round(resilience * 100) / 100;
  vitality = Math.round(vitality * 100) / 100;

  if (body_boost == 0) {
    body_boost = 0.25;
  }
  if (psyche_boost == 0) {
    psyche_boost = 0.25;
  }
  if (comprehension_boost == 0) {
    comprehension_boost = 0.25;
  }

  if (realm_count > 3) {
    document.getElementById('sect_task2').style.display = 'inline-block';
  }
  else {
    document.getElementById('sect_task2').style.display = 'none';
  }
  if (can_enter_inner_soul_valley) document.getElementById('go_to_inner_soul_valley_button').style.display = 'block'
  else document.getElementById('go_to_inner_soul_valley_button').style.display = 'none'

  if (current_mission.id != 'none') {
    document.getElementById('start_mission_btn').style.display = 'none';
    document.getElementById('complete_mission_btn').style.display = 'block';
  }
  else {
    document.getElementById('start_mission_btn').style.display = 'block';
    document.getElementById('complete_mission_btn').style.display = 'none';
  }
  document.getElementById('sect_task_description').innerText = current_mission.description;

  if (current_mission.item != 'none') {
    if (current_mission.item == 'lesser_soul_ash') {
      document.getElementById('amount_for_task').innerText = 'Amount needed: ' + lesser_soul_ash_count + '/' + current_mission.amount;

    }
  }
  else if (current_mission.beast != 'none') {
    document.getElementById('amount_for_task').innerText = 'Beasts slain: ' + current_mission.current_amount + '/' + current_mission.amount;
  }

  if (document.getElementById('relationships_menu').style.display == 'block') {
    document.getElementById('wu_lixia_age').innerText = wu_lixia.age + ' / ' + wu_lixia.lifespan;
    document.getElementById('wu_lixia_gender').innerText = wu_lixia.gender;
    document.getElementById('wu_lixia_health').innerText = wu_lixia.health + ' / ' + wu_lixia.max_health;
    document.getElementById('wu_lixia_attack').innerText = wu_lixia.attack;
    document.getElementById('wu_lixia_defense').innerText = wu_lixia.defense;
    document.getElementById('wu_lixia_strength').innerText = wu_lixia.strength + ' / ' + wu_lixia.max_strength;
    document.getElementById('wu_lixia_resilience').innerText = wu_lixia.resilience + ' / ' + wu_lixia.max_resilience;
    document.getElementById('wu_lixia_vitality').innerText = wu_lixia.vitality + ' / ' + wu_lixia.max_vitality;
    document.getElementById('wu_lixia_realm').innerText = wu_lixia.cultivation_realm
    document.getElementById('wu_lixia_qi').innerText = wu_lixia.qi + ' / ' + wu_lixia.max_qi;
    document.getElementById('wu_lixia_cultivation_progress').innerText = wu_lixia.cultivation_progress + ' / 100';
    document.getElementById('wu_lixia_combat_art').innerText = wu_lixia.combat_art.name;
  }
}
function saveGame(slotName) {
  if (slotName == null) {
    saveSlot = prompt('Enter a save slot name:');
    saveGame(saveSlot);
    return
  }
  if (!slotName) {
    return;
  }
  localStorage.setItem(slotName, JSON.stringify({
    lname,
    fname,
    gender,
    fatepoints,
    qi,
    max_qi,
    cultivation_realm,
    cultivation_progress,
    totalDays,
    daysleft,
    potential_boost,
    comprehension_boost,
    body_boost,
    psyche_boost,
    
    menu_open,
    age,
    cultivation_technique,
    cultivation_technique_level,
    cultivation_technique_max_level,
    foundation,
    speed_per_day,

    technique_exp,
    technique_exp_req,
    cultivation_technique_multi,

    mental_state,
    mental_state_max,

    sect_points,

    lesser_mind_settling_pill_count,
    soul_protection_pill_count,
    awakening_meridian_pill_count,
    minor_foundation_enhancing_pill_count,
    foundation_enhancing_pill_count,
    
    lesser_spirit_leaf_count,
    lesser_soul_ash_count,
    wailshade_tear_count,
    whispering_bone_count,
    remnant_will_count,
    
    ashblood_powder_count,
    dull_dragon_pearl_count,
    hollow_ember_count,
    smoldering_dragon_scale_count,
    remnant_dragon_trueblood_count,
    
    crackling_crystal_count,
    charged_bone_count,
    thunderleaf_count,
    spirit_leaf_count,
    soul_ash_count,
    corrupted_blossom_lotus_count,
    ashen_bone_fragments_count,
    soulbound_shackles_count,
    translucent_scale_count,
    soulweb_silk_count,

    meridian_bottleneck_pill_count,


    health,
    max_health,
    defense,
    attack,
    strength,
    resilience,
    vitality,
    max_strength,
    max_resilience,
    max_vitality,

    realm_boost,
    realm_count,

    can_breakthrough_to_meridian_awakening,
    can_enter_inner_soul_valley,
    can_breakthrough_to_middle_meridian_awakening,
    lifespan,
    
    spirit_stones,

    current_location,

    talisman: {
      name: talisman.name,
      strength_boost: talisman.strength_boost,
      resilience_boost: talisman.resilience_boost,
      vitality_boost: talisman.vitality_boost,
      uses: talisman.uses
    },
    owned_talismans,

    owned_combat_arts,

    combat_path,

    combat_art: {
      name: combat_art.name,
      strength_boost: combat_art.strength_boost,
      resilience_boost: combat_art.resilience_boost,
      vitality_boost: combat_art.vitality_boost
    },

    current_mission: {
      id: current_mission.id,
      description: current_mission.description,
      item: current_mission.item,
      amount: current_mission.amount,
      current_amount: current_mission.current_amount,
      beast: current_mission.beast,
      reward: current_mission.reward
    },

    attributes: {
      body: attributes.body,
      comprehension: attributes.comprehension,
      psyche: attributes.psyche,
      charm: attributes.charm,
      potential: attributes.potential
    },

    combat_technique1: {
      name: combat_technique1.name,
      attack_power: combat_technique1.attack_power,
      defense_power: combat_technique1.defense_power,
      healing_power: combat_technique1.healing_power,
      success_chance: combat_technique1.success_chance
    },
    combat_technique2: {
      name: combat_technique2.name,
      attack_power: combat_technique2.attack_power,
      defense_power: combat_technique2.defense_power,
      healing_power: combat_technique2.healing_power,
      success_chance: combat_technique2.success_chance
    },
    combat_technique3: {
      name: combat_technique3.name,
      attack_power: combat_technique3.attack_power,
      defense_power: combat_technique3.defense_power,
      healing_power: combat_technique3.healing_power,
      success_chance: combat_technique3.success_chance
    },

    wu_lixia: {
      name: wu_lixia.name,
      health: wu_lixia.health,
      max_health: wu_lixia.max_health,
      age: wu_lixia.age,
      lifespan: wu_lixia.lifespan,
      gender: wu_lixia.gender,
      max_qi: wu_lixia.max_qi,
      qi: wu_lixia.qi,
      defense: wu_lixia.defense,
      attack: wu_lixia.attack,
      strength: wu_lixia.strength,
      resilience: wu_lixia.resilience,
      vitality: wu_lixia.vitality,
      max_strength: wu_lixia.max_strength,
      max_resilience: wu_lixia.max_resilience,
      max_vitality: wu_lixia.max_vitality,
      realm_boost: wu_lixia.realm_boost,
      realm_count: wu_lixia.realm_count,
      cultivation_realm: wu_lixia.cultivation_realm,
      cultivation_progress: wu_lixia.cultivation_progress,
      combat_art: wu_lixia.combat_art,
    }

  }));

  let saveList = JSON.parse(localStorage.getItem('saveList') || '[]');
  if (!saveList.includes(slotName)) {
    saveList.push(slotName);
    localStorage.setItem('saveList', JSON.stringify(saveList));
  }
}


function loadGame(slotName) {
  const saveData = localStorage.getItem(slotName);
  if (!saveData) {
    alert(`No save found in slot: ${slotName}`);
    return;
  }
  const save = JSON.parse(saveData);
  saveSlot = slotName;
  lname = save.lname || '';
  fname = save.fname || '';
  gender = save.gender || 'male';
  fatepoints = save.fatepoints || 0;
  qi = save.qi || 0;
  max_qi = save.max_qi || 0;
  cultivation_realm = save.cultivation_realm || 'Low Foundation Forming';
  cultivation_progress = save.cultivation_progress || 0;
  totalDays = save.totalDays || 365;
  daysleft = (save.daysleft !== undefined) ? save.daysleft : 365;
  potential_boost = save.potential_boost || 1;
  comprehension_boost = save.comprehension_boost || 1;
  body_boost = save.body_boost || 1;
  psyche_boost = save.psych_boost || 1;
  menu_open = save.menu_open || false;
  age = save.age || 13;
  cultivation_technique = save.cultivation_technique || 'Myriad Balance Breathing';
  cultivation_technique_level = save.cultivation_technique_level || 1;
  cultivation_technique_max_level = save.cultivation_technique_max_level || 5;
  foundation = save.foundation || 1;
  speed_per_day = save.speed_per_day || 40;
  technique_exp = save.technique_exp || 0;
  technique_exp_req = save.technique_exp_req || 150;
  cultivation_technique_multi = save.cultivation_technique_multi || 1;
  mental_state = save.mental_state || 79;
  mental_state_max = save.mental_state_max || 100;
  sect_points = save.sect_points || 0;
  lesser_mind_settling_pill_count = save.lesser_mind_settling_pill_count || 0;
  soul_protection_pill_count = save.soul_protection_pill_count || 0;
  awakening_meridian_pill_count = save.awakening_meridian_pill_count || 0;
  minor_foundation_enhancing_pill_count = save.minor_foundation_enhancing_pill_count || 0;
  foundation_enhancing_pill_count = save.foundation_enhancing_pill_count || 0;
  lesser_spirit_leaf_count = save.lesser_spirit_leaf_count || 0;
  lesser_soul_ash_count = save.lesser_soul_ash_count || 0;
  wailshade_tear_count = save.wailshade_tear_count || 0;
  whispering_bone_count = save.whispering_bone_count || 0;
  remnant_will_count = save.remnant_will_count || 0;
  
  ashblood_powder_count = save.ashblood_powder_count || 0;
  dull_dragon_pearl_count = save.dull_dragon_pearl_count || 0;
  hollow_ember_count = save.hollow_ember_count || 0;
  smoldering_dragon_scale_count = save.smoldering_dragon_scale_count || 0;
  remnant_dragon_trueblood_count = save.remnant_dragon_trueblood_count || 0;
  
  crackling_crystal_count = save.crackling_crystal_count || 0;
  charged_bone_count = save.charged_bone_count || 0;
  thunderleaf_count = save.thunderleaf_count || 0;
  spirit_leaf_count = save.spirit_leaf_count || 0;
  soul_ash_count = save.soul_ash_count || 0;
  corrupted_blossom_lotus_count = save.corrupted_blossom_lotus_count || 0;
  ashen_bone_fragments_count = save.ashen_bone_fragments_count || 0;
  soulbound_shackles_count = save.soulbound_shackles_count || 0;
  translucent_scale_count = save.translucent_scale_count || 0;
  soulweb_silk_count = save.soulweb_silk_count || 0;
  meridian_bottleneck_pill_count = save.meridian_bottleneck_pill_count || 0;
  current_location = save.current_location || 'Four Heavenly Valleys Sect';
  health = save.health || 25;
  max_health = save.max_health || 25;
  defense = save.defense || 0;
  attack = save.attack || 5;
  strength = save.strength || 1;
  resilience = save.resilience || 1;
  vitality = save.vitality || 1;
  max_strength = save.max_strength || 3;
  max_resilience = save.max_resilience || 3;
  max_vitality = save.max_vitality || 3;
  spirit_stones = save.spirit_stones || 0;
  realm_boost = save.realm_boost || 1;
  realm_count = save.realm_count || 0;
  lifespan = save.lifespan || 120;
  can_breakthrough_to_meridian_awakening = save.can_breakthrough_to_meridian_awakening || false;
  can_enter_inner_soul_valley = save.can_enter_inner_soul_valley || false;
  can_breakthrough_to_middle_meridian_awakening = save.can_breakthrough_to_middle_meridian_awakening || false;
  owned_talismans = save.owned_talismans || [];
  combat_path = save.combat_path || 'none';
  talisman = save.talisman || {
    name: 'none',
    strength_boost: 1,
    resilience_boost: 1,
    vitality_boost: 1,
    uses: 0
  };
  owned_combat_arts = save.owned_combat_arts || [];
  combat_art = save.combat_art || {
    name: 'none',
    strength_boost: 1,
    resilience_boost: 1,
    vitality_boost: 1
  };
  current_mission = save.current_mission || {
    id: 'none',
    description: 'none',
    item: 'none',
    amount: 0,
    current_amount: 0,
    beast: 'none',
    reward: 0
  };
  attributes = save.attributes || {
    body: 3,
    comprehension: 3,
    psyche: 3,
    charm: 3,
    potential: 1
  };
  combat_technique1 = save.combat_technique1 || {
    name: 'none',
    attack_power: 1,
    defense_power: 1,
    healing_power: 1,
    success_chance: 1
  };
  combat_technique2 = save.combat_technique2 || {
    name: 'none',
    attack_power: 1,
    defense_power: 1,
    healing_power: 1,
    success_chance: 1
  };
  combat_technique3 = save.combat_technique3 || {
    name: 'none',
    attack_power: 1,
    defense_power: 1,
    healing_power: 1,
    success_chance: 1
  };

  wu_lixia = save.wu_lixia || {
    name: 'Wu Lixia',
    health: 25,
    max_health: 25,
    age: 13,
    lifespan: 120,
    gender: 'female',
    max_qi: 1,
    qi: 1,
    defense: 0,
    attack: 5,
    strength: 1,
    resilience: 1, 
    vitality: 1, 
    max_strength: 3,
    max_resilience: 3,
    max_vitality: 3,
    realm_boost: 1,
    realm_count: 0,
    cultivation_realm: 'Low Foundation Forming',
    cultivation_progress: 0,
    combat_art: {
      name: 'Minor Wood Combat Art',
      strength_boost: 1.5,
      resilience_boost: 2,
      vitality_boost: 1.5
    },
    current_relationship: 'Acquaintance',
    relationship_level: 0,
    max_relationship_level: 5
  }
  loading = true;
  StartGame()
  selectCombatArt(combat_art.name)
  updateDisplay()

}

function getSaveSlots() {
  return JSON.parse(localStorage.getItem('saveList') || '[]');
}


setInterval(updateDisplay, 1000)
updateDisplay()





const valleyMenu = document.getElementById("first_valley_menu");
const valleyTrack = document.getElementById("first_valley_areas");
const relationshipsTrack = document.getElementById("relationships");
const relationshipsMenu = document.getElementById("relationships_menu");

valleyTrack.dataset.mouseDownAt = "0";
valleyTrack.dataset.prevTranslate = "0";
relationshipsTrack.dataset.mouseDownAt = "0";
relationshipsTrack.dataset.prevTranslate = "0";

const handleOnDown = (e) => {
  valleyTrack.dataset.mouseDownAt = e.clientX;
  relationshipsTrack.dataset.mouseDownAt = e.clientX;
};

const handleOnUp = () => {
  valleyTrack.dataset.mouseDownAt = "0";
  valleyTrack.dataset.prevTranslate = valleyTrack.dataset.currentTranslate || "0";
  relationshipsTrack.dataset.mouseDownAt = "0";
  relationshipsTrack.dataset.prevTranslate = relationshipsTrack.dataset.currentTranslate || "0";
};

const handleOnMove = (e) => {
  if (valleyTrack.dataset.mouseDownAt === "0") return;
  if (relationshipsTrack.dataset.mouseDownAt === "0") return;

  const mouseDelta = e.clientX - parseFloat(valleyTrack.dataset.mouseDownAt);
  const relationshipsMouseDelta = e.clientX - parseFloat(relationshipsTrack.dataset.mouseDownAt);
  const prevTranslate = parseFloat(valleyTrack.dataset.prevTranslate || "0");
  const relationshipsPrevTranslate = parseFloat(relationshipsTrack.dataset.prevTranslate || "0");

  let newTranslate = prevTranslate + mouseDelta;
  let relationshipsNewTranslate = relationshipsPrevTranslate + relationshipsMouseDelta;
  
  // Constrain so we can't scroll past start or end
  const maxScroll = (valleyTrack.scrollWidth - valleyTrack.clientWidth);
  const relationshipsMaxScroll = (relationshipsTrack.scrollWidth - relationshipsTrack.clientWidth);
  const maxTranslate = 0;
  const relationshipsMaxTranslate = 0;
  const minTranslate = -maxScroll;
  const relationshipsMinTranslate = -relationshipsMaxScroll;

  newTranslate = Math.max(Math.min(newTranslate, maxTranslate), minTranslate);
  relationshipsNewTranslate = Math.max(Math.min(relationshipsNewTranslate, relationshipsMaxTranslate), relationshipsMinTranslate);

  valleyTrack.dataset.currentTranslate = newTranslate;
  relationshipsTrack.dataset.currentTranslate = relationshipsNewTranslate;

  valleyTrack.style.transform = `translateX(${newTranslate}px)`;
  relationshipsTrack.style.transform = `translateX(${relationshipsNewTranslate}px)`;
};

// Mouse Events
valleyMenu.addEventListener("mousedown", handleOnDown);
window.addEventListener("mouseup", handleOnUp);
window.addEventListener("mousemove", handleOnMove);
relationshipsMenu.addEventListener("mousedown", handleOnDown);
window.addEventListener("mouseup", handleOnUp);
window.addEventListener("mousemove", handleOnMove);

// Touch Events
valleyMenu.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
window.addEventListener("touchend", (e) => handleOnUp(e.changedTouches[0]));
window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
relationshipsMenu.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
window.addEventListener("touchend", (e) => handleOnUp(e.changedTouches[0]));
window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));


setupCombatControls();