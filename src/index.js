import { renderMainUI } from './ui.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // จัดการระบบ Routing เบื้องต้น
    if (url.pathname === '/logic/gameEngine.js') {
      return new Response(gameEngineJS, { headers: { 'Content-Type': 'application/javascript' } });
    }

    return new Response(renderMainUI(), {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};

// จำลองการดึงไฟล์ JS แยก (ใน Worker จริงอาจต้องใช้ระบบ Build หรือรับผ่าน Variable)
const gameEngineJS = `
  export function initGame(race) {
    const log = document.getElementById('log-window');
    document.getElementById('display-race').innerText = race;
    const entry = document.createElement('div');
    entry.innerText = '[System] ท่านได้สร้างอารยธรรม ' + race + ' ขึ้นแล้ว';
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
  }
`;