import { By,WebDriver } from "selenium-webdriver"
import { basePage} from "./basePage";

 export class petcostore extends basePage {
     accountBtn: By = By.xpath('//button[@class="Shared__SecondaryNavigationButton-sc-1n0yg9a-1 eDBsEm"]');
     emailInput: By = By.xpath('//input[@name="logonId"]');
     passwordInput: By = By.xpath('//input[@name="logonPassword"]');
     signIn: By = By.xpath('//button[@id="WC_AccountDisplay_links_2"]')

     constructor(){
         super({url: "https://www.petco.com/shop/en/petcostore"})
     }
 }
   
 