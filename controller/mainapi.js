// Get number ID
window.onload = function () {
    const urlID = new URLSearchParams(window.location.search)
    const id = urlID.get('productid')
    showDetail(id)
}

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
        <a href="./view/detail.html?productid=${shoe.id}" class="col-4" onclick="getDetail('${shoe.id}')">
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
              <button>Add to cart</button>
          </div>
      </div>`

        quantityDetail()
        chooseSize()
        showRelateShoes(arrayRelate)

    }).catch(function (error) {
    })
}

const postSignUp = (user) => {
    axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: user
    }).then(function (result) {
        alert('thang cong')

    }).catch(function (error) {
        const message = error.response.data.message
        validation.checkID( "errorEmail",message)
    });
}



