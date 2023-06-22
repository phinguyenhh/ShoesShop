const inputGenders = document.querySelectorAll('.checkGender input')
const inputs = document.querySelectorAll('input.input-sm')
const validation = new Validation();

const getID = (id) => {
    return document.getElementById(id)
}

const getValue = (id) => {
    return getID(id).value
}

const activeInput = () => {
    inputs.forEach((input) => {
        input.addEventListener('change', () => {
            if (input.value != '') {
                input.classList.add('active')
            } else {
                input.classList.remove('active')
            }
        })
    }
    )
}
activeInput()

function resetForm() {
    document.getElementById("form").reset();
    const btns = document.querySelectorAll('.input-group .input-sm')
    btns.forEach(btn => {
        btn.classList.remove('active')
    });
}

getID('inputSearch').addEventListener('keyup', () => {
    const inputSearch = getValue('inputSearch')
    getID('aBTN').innerHTML = `<a href="../view/search.html?keyword=${inputSearch}" id="btnSearch" type="button" class="btn search-btn"><i class="fa fa-search"></i></a>`
})

window.addEventListener('load', () => {
    const loggedUser = JSON.parse(localStorage.getItem('userLogin'))

    if (loggedUser) {
        getID('userLogin').innerHTML = loggedUser.email
        getID('LoginContent').classList.add('checked')
        getID('btnLogin').disabled = true
        getID('btnLogin').style.opacity = "1"
        getID('btnLogin').style.cursor = "pointer"
    }
})

getID('inforMenu').addEventListener('click', () => {
    localStorage.removeItem("userLogin");
    getID('LoginContent').classList.remove('checked')
})

function setCartLocalStorage() {
    localStorage.setItem('listCartItem', JSON.stringify(listProduct.arrayCart))
}
function getCartLocalStorage() {
    const cartProduct = JSON.parse(localStorage.getItem("listCartItem"));
    if (cartProduct != null) {
        listProduct.arrayCart = cartProduct;
    }
    return  listProduct.arrayCart
}


