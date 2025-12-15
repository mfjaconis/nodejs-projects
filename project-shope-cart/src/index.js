import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("teclado", 120.5, 5);
const item2 = await createItem("mouse", 80.99, 4);

await cartService.addItemCart(myCart, item1);
await cartService.addItemCart(myCart, item2);

// await cartService.deleteItemCart(myCart, item1.name);

// await cartService.removeItemCartByIndex(myCart, 1);

await cartService.removeItemCartQuantity(myCart, item1);
await cartService.removeItemCartQuantity(myCart, item2);
await cartService.removeItemCartQuantity(myCart, item2);
await cartService.removeItemCartQuantity(myCart, item2);
await cartService.removeItemCartQuantity(myCart, item2);

await cartService.displayItemCart(myCart);

await cartService.calculateTotalItemCart(myCart);
