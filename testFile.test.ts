
import { petcostore } from "./pageObject";

const petco = new petcostore

test("sign In", async () => {
    await petco.navigate()
    await petco.getElement(petco.accountBtn)
    await petco.click(petco.accountBtn)
    petco.driver.sleep(1000)
    await petco.setInput(petco.emailInput,"hidswan@gmail.com")
    await petco.setInput(petco.passwordInput, "Remynbell2dogs!")
    await petco.click(petco.signIn)

})


