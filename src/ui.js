import { getStyles } from './styles.js';

export const renderMainUI = () => `
<!DOCTYPE html>
<html>
<head>
    <title>God Simulator | พัฒนาอารยธรรม</title>
    ${getStyles()}
</head>
<body class="text-slate-200 p-4 md:p-10">
    <div class="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700 p-6 shadow-2xl">
        <header class="flex justify-between items-center border-b border-slate-700 pb-4 mb-6">
            <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">GOD SIMULATOR</h1>
            <div id="god-status" class="text-sm font-mono text-emerald-400 italic">พลังพระเจ้าสถิตอยู่กับท่าน</div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
            <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                <p class="text-slate-400 text-xs uppercase tracking-widest">เผ่าพันธุ์</p>
                <p id="display-race" class="text-xl font-bold">-</p>
            </div>
            <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                <p class="text-slate-400 text-xs uppercase tracking-widest">ประชากร</p>
                <p id="display-pop" class="text-xl font-bold text-blue-400">0</p>
            </div>
            <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                <p class="text-slate-400 text-xs uppercase tracking-widest">พลังศรัทธา</p>
                <p id="display-faith" class="text-xl font-bold text-amber-400">0</p>
            </div>
        </div>

        <div id="log-window" class="log-container h-48 overflow-y-auto bg-black/40 rounded-lg p-4 mb-6 font-mono text-sm text-blue-300 border border-slate-800">
            <div>[System] โลกกำลังรอคอยการถือกำเนิด...</div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <button onclick="initGame('Human')" class="bg-slate-700 hover:bg-blue-600 transition p-3 rounded-lg text-sm font-semibold">จุติมนุษย์</button>
            <button onclick="initGame('Elf')" class="bg-slate-700 hover:bg-emerald-600 transition p-3 rounded-lg text-sm font-semibold">จุติเอลฟ์</button>
            <button onclick="initGame('Orc')" class="bg-slate-700 hover:bg-red-600 transition p-3 rounded-lg text-sm font-semibold">จุติออร์ค</button>
        </div>
    </div>

    <script type="module">
        import { initGame } from '/logic/gameEngine.js';
        window.initGame = initGame; // ทำให้ HTML เรียกใช้ฟังก์ชันจาก module ได้
    </script>
</body>
</html>
`;