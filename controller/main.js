const getID = (id) => {
    return document.getElementById(id)
}


function setLocalStorage(array) {
    localStorage.setItem("shoesDetail", JSON.stringify(array))
}

function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("shoesDetail"))
    if (dataLocal !== null) {
        showDetail(dataLocal.id)
        shoe = dataLocal
    }
}

function quantityDetail() {
    let i = 1;

    getID('plusDetail').addEventListener('click', () => {
        i += 1
        getID('quantity').innerHTML = i
    })

    getID('minusDetail').addEventListener('click', () => {
        i -= 1
        if (i < 1) {
            i = 1
            getID('quantity').innerHTML = i

        }
        getID('quantity').innerHTML = i


    })
}

function chooseSize() {
    const btns = document.querySelectorAll('.sizeDetail .btn')
    btns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            btns.forEach(btn => {
            btn.classList.remove('active')

            })
            btn.classList.add('active')
        })
    });
}