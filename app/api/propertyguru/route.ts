import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

chromium.setGraphicsMode = false;

export async function POST() {
  const isLocal = !!process.env.CHROME_EXECUTABLE_PATH;

  const viewport = {
    deviceScaleFactor: 1,
    hasTouch: false,
    height: 1080,
    isLandscape: true,
    isMobile: false,
    width: 1920,
  };
  const browser = await puppeteer.launch({
    args: isLocal
      ? puppeteer.defaultArgs({ args: chromium.args, headless: "shell" })
      : chromium.args,
    defaultViewport: viewport,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH ||
      (await chromium.executablePath("@/opt/chromium")),
    headless: "shell",
  });
  const page = await browser.newPage();
  await page.goto("https://spacejelly.dev/");
  const pageTitle = await page.title();
  await browser.close();

  return Response.json({
    pageTitle,
  });
}
