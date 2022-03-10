import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver"


interface Options {
    driver?: WebDriver;
url: string
}

export class BasePage {
    driver: WebDriver;
url: string

    constructor(options?: Options) {
        if(options && options.driver) this.driver =options.driver;
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options) this.url = options.
    }
    async navigate(url?: string): Promise<void> {
        if(url) return await this.driver.get(this.url);
        else if (this.url)
        return Promise.reject(
            "BasePage.navigate() needs a url defined on the page objects, or one passed");
        
        }
        async getElement(getElement: By): Promise<WebElement> {
          await this.driver.wait(until.elementLocated(WebElement));
          let element = await this.driver.findElement(WebElement),;
          await this.driver.wait(until.elementIsVisible(element))
          return element;

      }
     
      async click(elementBy: By): Promise<void> {
       this.driver.get('http://www.google.com');
        var searchForm = this.driver.findElement(By.name('form'));
        var searchBox = searchForm.findElement(By.name('q'));
        searchBox.sendKeys('webdriver');
      }
      async setInput(elementBy: By, keys: any): Promise<void> {
          let input = await this.getElement(elementBy);
          await input.clear();
          return input.sendKeys(keys)
      }
      async getText(elementBy: By): Promise<string> {
          return (await this.getElement(elementBy)).getText()
      }
      async getAttribute(elementBy: By, attribute: string): Promise<string> {
          return (await this.getElement(elementBy)).getAttribute(attribute)

          }
      
      
       



