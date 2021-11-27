const os = require('os');

// console.log(os);
setInterval(() => {
    const { arch, platform, freemem, totalmem } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;

    const stats = { 
        OS: platform(),
        Arch: arch(),
        TotalRam: `${parseInt(tRam)} MB`,
        FreeMem: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)}%`
    }
    console.clear();
    console.table(stats);

    exports.stats = stats;
}, 1000);
