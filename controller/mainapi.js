const getFeatureShoes = () => {
    axios({
        method: 'get',
        url: 'https://shop.cyberlearn.vn/api/Product',
    }).then(function (result) {
        showFeatureShoes(result.data.content)
    }).catch(function (error) {

    });
}

getFeatureShoes()

const showFeatureShoes = (array) => {
    let content = "";
    array.map((shoe, index) => {
        let strShoe = `
        <a href="../view/detail.html?productid=${shoe.id}" class="col-4" onclick="getDetail('${shoe.id}')">
                    <div class="productRealate">
                        <div class="bannerSale">-20%</div>
                        <div class="imgRealate" style="background-image:url(${shoe.image})"></div>
                        <h2>${shoe.name}</h2>
                        <p>${shoe.shortDescription}</p>
                        <div class="price">
                            <span class="priceRealate">${shoe.price}$</span>
                            <span class="costRealate">${shoe.price / (0.8)}$</span>
                        </div>
                    </div>
        </a>
        `
        content += strShoe
    })
    getID("feature").innerHTML = content;
}

const showRelateShoes = (array) => {
    let content = "";

    array.map((shoe, index) => {

        let strShoe = `
        <a href="../../view/detail.html?productid=${shoe.id}" class="col-4" onclick="showDetail('${shoe.id}')">
                    <div class="productRealate">
                        <div class="bannerSale">-20%</div>
                        <div class="imgRealate" style="background-image:url(${shoe.image})"></div>
                        <h2>${shoe.name}</h2>
                        <p>${shoe.shortDescription}</p>
                        <div class="price">
                            <span class="priceRealate">${shoe.price}$</span>
                            <span class="costRealate">${shoe.price / (0.8)}$</span>
                        </div>
                    </div>
        </a>
        `
        content += strShoe
    })
    getID("relateShoe").innerHTML = content;
}

const showDetail = (id) => {

    axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
    }).then(function (result) {
        const shoeDetail = result.data.content;
        const arrayRelate = result.data.content.relatedProducts
        getID('detailShoe').innerHTML =
            `<div class="col-6 left">
          <div class="imgDetail" style="background-image:url(${shoeDetail.image})">
              <div class="saleOff">20% OFF</div>
          </div>
      </div>
      <div class="col-6 right">
          <h2>${shoeDetail.name}</h2>
          <p>${shoeDetail.description}</p>
          <span>Available size</span>
          <div class="sizeDetail">
              <button class="btn active">38</button>
              <button class="btn">39</button>
              <button class="btn">40</button>
              <button class="btn">41</button>
              <button class="btn">40</button>
          </div>
          <div class="priceDetail">
              <span class="discountDetail">-20%</span>
              <span class="costDetail">${shoeDetail.price / 0.8}$</span>
              <span class="saleDetail">${shoeDetail.price}$</span>
          </div>
          <div class="quantityDetail">
              <button class="btn plusDetail" id="plusDetail">+</button>
              <span id="quantity">1</span>
              <button class="btn minusDetail" id="minusDetail">-</button>
          </div>
          <div class="addCartDetail">
              <button id="btnAddToCart">Add to cart</button>
          </div>
      </div>`
        quantityDetail()
        chooseSize()
        showRelateShoes(arrayRelate)
        getID('btnAddToCart').addEventListener('click', () => {
            if (loggedUser) {
                getCartItem(id);
            }
            else {
                alert("Xin mời đăng nhập để dùng tính năng này!")
                getID('userLogin').click()
            }
        })
    }).catch(function (error) {
    })
}

const postSignUp = (user) => {
    axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: user
    }).then(function (result) {
        getID('successRegister').innerHTML = 'Successfully Registered '
        getID('successRegister').style.display = 'block'

    }).catch(function (error) {
        console.log(error)
        validation.checkID("errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>The email address that was used!")
    });
}

const getCategory = (idCategory) => {
    axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${idCategory}`,
    }).then(function (result) {
        const arrayCategory = result.data.content
        getID('categoryText').innerHTML = idCategory.replace('_', ' ').toUpperCase()
        showFeatureShoes(arrayCategory)
    }).catch(function (error) {
        getID('categoryText').innerHTML = idCategory.toUpperCase()

    });
}

const getProductSearch = (keyword) => {
    axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
    }).then(function (result) {
        showProductSearch(result.data.content)

        getID("resultSearch").innerHTML = "Result search: " + keyword;
    }).catch(function (error) {
    });
}

const showProductSearch = (array) => {
    let content = "";
    array.map((shoe, index) => {
        let strShoe = `
        <a href="../view/detail.html?productid=${shoe.id}" class="col-4" onclick="getDetail('${shoe.id}')">
        <div class="productRealate">
        <div class="bannerSale">-20%</div>
        <div class="imgRealate" style="background-image:url(${shoe.image})"></div>
        <h2>${shoe.name}</h2>
        <p>${shoe.shortDescription}</p>
        <div class="price">
        <span class="priceRealate">${shoe.price}$</span>
        <span class="costRealate">${shoe.price / (0.8)}$</span>
        </div>
        </div>
        </a>
        `
        content += strShoe
    })
    getID("featureSearch").innerHTML = content;
}

const checkLogin = (user, password) => {
    axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signin',
        data: {
            email: user,
            password: password
        }
    }).then(function (result) {
        const userLogin = result.data.content
        localStorage.setItem('userLogin', JSON.stringify(userLogin))
        getID('userLogin').innerHTML = userLogin.email
        getID('LoginContent').classList.add('checked')
        window.location.href = "/index.html"
    }).catch(function (error) {
        alert("Please check your email address and password.")
        location.reload()
    });
}
const listProduct = new CartOder()

const getCartItem = (id) => {

    axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,

    }).then(function (result) {
        getCartLocalStorage()
        const cartItem = result.data.content;
        const qty = +getID('quantity').textContent
        const shoe = new Shoes(cartItem.id, cartItem.name, cartItem.image, cartItem.price, qty)
        if (listProduct.arrayCart.length < 1) {
            listProduct.addCart(shoe);
            setCartLocalStorage()
        } else {
          const checked = listProduct.arrayCart.find( product => product.id == shoe.id )
                 if (checked) {
                     checked.qty += shoe.qty
                    setCartLocalStorage()
                }
                else {
                    listProduct.addCart(shoe);
                    setCartLocalStorage()
                }
        }
        window.location.href = "../view/cart.html"
        quantityCart()

    }).catch(function (error) {
        console.log(error)
    });
}





