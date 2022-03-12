import {By} from "selenium-webdriver"
import {basePage} from "./basePage"

export class Petco extends basePage {
    searchBar: By = By.xpath('//input[@id="header-search"]');
    results: By = By.xpath('//h1[@class="EllipsisTextContainer-wz2pam-1 ihPcpc"]')
    addToCart: By = By.xpath('//button[@class="AddToCartButton-sc-1qdddxl-0 gzVKkV"]')
    viewCart: By = By.xpath('//a[text()= "VIEW CART & CHECKOUT"]')
    constructor() {
        super({url: "https://www.petco.com/shop/en/petcostore"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}
