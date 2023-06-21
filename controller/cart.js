const listProduct = new CartOder()


const showCartItem = (cartProducts) => {
    // console.log(cartItemPush);

    const content = cartProducts.map(cartProduct => {
        return         `
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
              <input type="" value="1">
              <button>+</button>
            </div>
          </td>
          <td>450$</td>
          <td>
            <div>
              <button type="button" class="btn btn-secondary">Xóa</button>
              <!-- <button type="button" class="btn btn-success">Thêm</button> -->
            </div>
          </td>
        </tr>`
    })
    
    getID('tbody').innerHTML = content.join('')
    
}

function setCartLocalStorage() {
    localStorage.setItem('listCartItem', JSON.stringify(listProduct.arrayCart))
}
function getCartLocalStorage() {
    const cartProduct = JSON.parse(localStorage.getItem("listCartItem"));
    // console.log(cartProduct);
    if (cartProduct !== null) {
        showCartItem(cartProduct);
        listProduct.arrayCart = cartProduct;

    }
}
getCartLocalStorage();


// const cartProduct = JSON.parse(localStorage.getItem("listCart"));
// console.log(cartProduct);






