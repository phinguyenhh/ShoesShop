
const showCartItem = (cartProducts) => {
  const content = cartProducts.map(cartProduct => {
    return `
      <tr class="table__body">
        <td scope="row">
          <label>
            <input class="checkBoxItem" type="checkbox">
            <span class="checkbox-fake"></span>
          </label>
        </td>
        <td>1</td>
        <td><img src="${cartProduct.image}" alt=""></td>
        <td>${cartProduct.name}</td>
        <td>${cartProduct.price}$</td>
        <td>
          <div class="edit__item">
            <button id="minusDetailCart">-</button>
            <input id="inputCart" type="" value="${cartProduct.qty}">
            <button id="plusDetailCart">+</button>
          </div>
        </td>
        <td class="priceCart">${cartProduct.price * cartProduct.qty}$</td>
        <td>
          <div>
            <button onclick="deleteProduct('${cartProduct.id}')" type="button" class="btn btn-secondary">Xóa</button>
          </div>
        </td>
      </tr>
      `
  })
  document.getElementById('tbody').innerHTML = content.join('')
}

getCartLocalStorage()
showCartItem(getCartLocalStorage())
const deleteProduct = (id) => {
  listProduct.deleteProduct(id)
  showCartItem(listProduct.arrayCart)
  setCartLocalStorage()
  document.getElementById('sumaryCart').innerHTML = `Tất cả(${listProduct.arrayCart.length})sản phẩm`
  document.querySelector('.cartNumber').innerHTML = listProduct.arrayCart.length
}

document.getElementById('sumaryCart').innerHTML = `Tất cả(${listProduct.arrayCart.length})sản phẩm`

document.getElementById('masterCheckBox').addEventListener('click', () => {
  const checkBoxs = document.querySelectorAll('.checkBoxItem')

  if (document.getElementById('masterCheckBox').checked) {
    checkBoxs.forEach(checkBox => {
      checkBox.checked = true
    });
  } else {
    checkBoxs.forEach(checkBox => {
      checkBox.checked = false
    })
  }
})

document.getElementById('deleteAllCart').addEventListener('click', () => {
  listProduct.arrayCart = []
  showCartItem(listProduct.arrayCart)
  setCartLocalStorage()
  document.getElementById('sumaryCart').innerHTML = `Tất cả(${listProduct.arrayCart.length})sản phẩm`
  document.querySelector('.cartNumber').innerHTML = listProduct.arrayCart.length
})

// function quantityCart() {
//   let i = +getID('inputCart').value;
// console.log(i)
//   getID('plusDetailCart').addEventListener('click', () => {

//     i += 1
//       console.log(i)
//       getID('inputCart').value = i
//       console.log( listProduct.arrayCart)
//   })

//   getID('minusDetailCart').addEventListener('click', () => {
//       i -= 1
//       if (i < 1) {
//           i = 1
//           getID('inputCart').innerHTML = i

//       }
//       getID('inputCart').innerHTML = i


//   })
// }

const btnPlus = document.querySelectorAll('#plusDetailCart')
const btnMinus = document.querySelectorAll('#minusDetailCart')
const inputPlus = document.querySelectorAll('#inputCart')
const priceCart = document.querySelectorAll('.priceCart')
btnPlus.forEach((btn, index) => {
  btn.addEventListener('click', () => {
  
    const shoe = listProduct.arrayCart[index]
    shoe.qty++
    setCartLocalStorage()
    inputPlus[index].value = shoe.qty
    priceCart[index].textContent = shoe.qty * shoe.price + "$"
  })
})
btnMinus.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const shoe = listProduct.arrayCart[index]
    shoe.qty--

  if(shoe.qty <= 1) {
    shoe.qty = 1
    setCartLocalStorage()
    inputPlus[index].value = shoe.qty
  }
    setCartLocalStorage()
    inputPlus[index].value = shoe.qty
    priceCart[index].textContent = shoe.qty * shoe.price + "$"
  })
})