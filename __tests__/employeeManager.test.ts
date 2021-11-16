import { WebDriver, By } from "selenium-webdriver";
import { empInfo } from '../testData';


require('chromedriver');

export const empVerify = async(driver: WebDriver, empNumber: number) => {
    await (await driver.findElement(By.xpath(`//*[text()=${empInfo[empNumber].name}]`)))
}

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.quit()
})

