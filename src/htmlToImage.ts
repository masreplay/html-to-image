import puppeteer from 'puppeteer';

export default async (html: string) => {
    const browser = await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
        args: [
            '--viewport="800,600,deviceScaleFactor=2"',
            '--no-sandbox',
            '--disable-setuid-sandbox'
        
        ],
        defaultViewport: {
            width: 1200,
            height: 600
        }
    });
    const page = await browser.newPage();

    await page.setContent(html);

    const content = await page.$('body');
    const imageBuffer = await content?.screenshot({ omitBackground: true });

    await page.close();
    await browser.close();

    return imageBuffer;
};