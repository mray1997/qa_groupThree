import {Petco} from "./pageObject"

const petco = new Petco;

test("does a search", async () => {
await  petco.navigate();
await petco.search("YOULY St. Patty's Day Catnip Mice")
expect(await petco.getResults()).toContain("YOULY St. Patty's Day Catnip Mice")
await petco.click(petco.addToCart)
await petco.click(petco.viewCart)
await petco.driver.quit()
})