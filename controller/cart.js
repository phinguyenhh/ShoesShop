
const showCartItem = (cartProducts) => {
  const content = cartProducts.map(cartProduct => {
    return `
      <tr class="table__body">
        <td scope="row">
          <label>
            <input type="checkbox">
            <span class="checkbox-fake"></span>
          </label>
        </td>
        <td>1</td>
        <td><img src="${cartProduct.image}" alt=""></td>
        <td>${cartProduct.name}</td>
        <td>${cartProduct.price}</td>
        <td>
          <div class="edit__item">
            <button>-</button>
            <input id="inputCart" type="" value="${cartProduct.qty}">
            <button>+</button>
          </div>
        </td>
        <td>450$</td>
        <td>
          <div>
            <button onclick="deleteProduct('${cartProduct.id}')" type="button" class="btn btn-secondary">Xóa</button>
          </div>
        </td>
      </tr>`
  })
  document.getElementById('tbody').innerHTML = content.join('')
}
getCartLocalStorage()
showCartItem(getCartLocalStorage())
const deleteProduct = (id) => {
  listProduct.deleteProduct(id)
  showCartItem(listProduct.arrayCart)
  setCartLocalStorage()
}