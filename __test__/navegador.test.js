const puppeteer = require('puppeteer')

describe('Mi Primer test en Puppetter',()=>{
    it('Debe de abrir y cerrar el navegador', async ()=>{
        const browser = await puppeteer.launch({
            headless: false, // Lo hacemos asi para ver en vivo lo que hace
            executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',

        })
        const page = await browser.newPage();
        await page.goto('https://www.google.com/');
        await page.waitForTimeout(5000);
        await browser.close();

    })
})