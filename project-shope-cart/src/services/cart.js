async function addItemCart(userCart, item) {
  userCart.push(item);
}

async function calculateTotalItemCart(userCart) {
  const resultTotalCart = userCart.reduce(
    (total, item) => total + item.subtotal(),
    0
  );
  console.log(`Total do carrinho R$ ${resultTotalCart.toFixed(2)}\n`);
  return resultTotalCart;
}

async function deleteItemCart(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    return userCart.splice(index, 1);
  }

  return;
}

async function removeItemCartByIndex(userCart, index) {
  const deleteIndex = index - 1;

  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

async function displayItemCart(userCart) {
  console.log("\nShopee cart:\n");
  const allItensCart = userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} - ${
        item.quantity
      } itens | Subtotal R$ ${item.subtotal().toFixed(2)}\n`
    );
  });
  return allItensCart;
}

async function removeItemCartQuantity(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    console.log("item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

export {
  addItemCart,
  removeItemCartQuantity,
  calculateTotalItemCart,
  deleteItemCart,
  removeItemCartByIndex,
  displayItemCart,
};
