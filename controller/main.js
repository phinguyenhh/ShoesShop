const inputGenders = document.querySelectorAll('.checkGender input')
const inputs = document.querySelectorAll('input.input-sm')

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

const checkCategory = () => {
    const btnCategories = document.querySelectorAll('.btnCategory')
    btnCategories.forEach((btnCategory) => {

        btnCategory.addEventListener("click", () => {
            btnCategories.forEach((btnCategory) => {
                btnCategory.classList.remove('active')

             })
             btnCategory.getAttribute('href')
            btnCategory.classList.add('active')
        })

    })
}