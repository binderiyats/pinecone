//in the shopping cart

      const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
      //add Meat in the beginning of the shopping cart
      shoppingCart.unshift("Meat");
      //add Meat in the end of the shopping cart
      shoppingCart.push("Sugar");
      //remove honey
      shoppingCart.splice(4, 1);
      shoppingCart.splice(3, 1, "Green tea");
      console.log(shoppingCart);

      //array-s element-g ustga

      const arr = [1, 2, 3];
      const n = 6;
      function removeArrayElement(list, digitToRemove) {
        const index = list.indexOf(digitToRemove);
        list.splice(index, 1);
      }
        console.log(removeArrayElement(arr, n));