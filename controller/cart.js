
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
        <td>${cartProduct.price * cartProduct.qty}$</td>
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

// document.getElementById('deleteAllCart').addEventListener('click', () => {
//   listProduct.arrayCart = []
//   showCartItem(listProduct.arrayCart)
//   setCartLocalStorage()
// })