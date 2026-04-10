import { getInitialStat } from './tribeLogic.js';
import { calculateResources } from './resources.js';

let gameState = {
    race: '',
    population: 0,
    faith: 0,
    food: 0,
    wood: 0,
    year: 0
};

// ฟังก์ชันภายในสำหรับอัปเดต UI
function updateUI() {
    document.getElementById('display-race').innerText = gameState.race;
    document.getElementById('display-pop').innerText = gameState.population;
    document.getElementById('display-faith').innerText = gameState.faith;
    document.getElementById('display-food').innerText = gameState.food;
    document.getElementById('display-wood').innerText = gameState.wood;
}

// ฟังก์ชันภายในสำหรับเพิ่ม Log
function addLog(msg) {
    const log = document.getElementById('log-window');
    const entry = document.createElement('div');
    entry.className = "border-l-2 border-blue-500 pl-2 mb-1";
    entry.innerText = msg;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
}

export function initGame(race) {
    const stats = getInitialStat(race);
    gameState = {
        race: race,
        population: stats.population,
        faith: stats.faith,
        food: 50, 
        wood: 20, 
        year: 1
    };

    updateUI();
    
    document.getElementById('initial-actions').classList.add('hidden');
    document.getElementById('game-actions').classList.remove('hidden');
    
    // ลบเครื่องหมาย \ ออกจากหน้า backtick
    addLog(`[System] ท่านจุติในเผ่า ${race} ปีที่ ${gameState.year}`);
    addLog(`[Trait] พลังพิเศษ: ${stats.power}`);
}

export function nextYear() {
    gameState.year++;
    const prod = calculateResources(gameState.race, gameState.population);
    
    gameState.food += prod.foodProduced;
    gameState.wood += prod.woodProduced;
    gameState.faith += prod.faithProduced;
    
    const popGrowth = Math.floor(gameState.population * 0.1);
    gameState.population += popGrowth;

    updateUI();
    addLog(`[Year ${gameState.year}] ผลผลิต: อาหาร +${prod.foodProduced}, ไม้ +${prod.woodProduced}`);
}