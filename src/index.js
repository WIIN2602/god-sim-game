import { renderMainUI } from './ui.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ระบบ Dynamic Routing สำหรับไฟล์ใน logic
    if (url.pathname.startsWith('/logic/')) {
      try {
        const modulePath = `.${url.pathname}`;
        const module = await import(modulePath);

        let content = "";
        for (const name in module) {
          content += `export const ${name} = ${module[name].toString()};\n\n`;
        }

        return new Response(content, {
          headers: { 'Content-Type': 'application/javascript' }
        });
      } catch (e) {
        return new Response("Module not found", { status: 404 });
      }
    }

    return new Response(renderMainUI(), {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  }
};