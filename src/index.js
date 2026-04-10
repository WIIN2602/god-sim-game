import { renderMainUI } from './ui.js';

// Import logic files เพื่อให้ Wrangler มัดรวม (bundle) ไปกับ Worker
import * as gameEngine from './logic/gameEngine.js';
import * as tribeLogic from './logic/tribeLogic.js';
import * as resources from './logic/resources.js';
import * as worldEvents from './logic/worldEvents.js';
import * as botAi from './logic/botAi.js';

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // ฟังก์ชันช่วยส่งไฟล์ JS
        const serveJS = (module) => {
            let content = "";
            for (const name in module) {
                if (typeof module[name] === 'function') {
                    content += `export const ${name} = ${module[name].toString()};\n`;
                } else {
                    content += `export const ${name} = ${JSON.stringify(module[name])};\n`;
                }
            }
            return new Response(content, { headers: { 'Content-Type': 'application/javascript' } });
        };

        // Routing สำหรับไฟล์ Logic
        if (url.pathname === '/logic/gameEngine.js') return serveJS(gameEngine);
        if (url.pathname === '/logic/tribeLogic.js') return serveJS(tribeLogic);
        if (url.pathname === '/logic/resources.js') return serveJS(resources);
        if (url.pathname === '/logic/worldEvents.js') return serveJS(worldEvents);
        if (url.pathname === '/logic/botAi.js') return serveJS(botAi);

        return new Response(renderMainUI(), {
            headers: { "content-type": "text/html;charset=UTF-8" },
        });
    },
};