const inforUser = new InforUser();
const validation = new Validation();
const inputs = document.querySelectorAll('input.input-sm')


const getID = (id) => {
    return document.getElementById(id)
}

const getValue = (id) => {
    return getID(id).value
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
        btn.addEventListener('click', () => {
            btns.forEach(btn => {
                btn.classList.remove('active')

            })
            btn.classList.add('active')
        })
    });
}

const activeInput = () => {
    inputs.forEach((input) => {
        input.onkeyup = () => {            
            if (input.value != '') {
                input.classList.add('active')
            } else {
                input.classList.remove('active')
            }            
        }
    })
}
activeInput()

function resetForm() {
    document.getElementById("form").reset();
}

const signUp = () => {
    const email = getValue('emailSignUp')
    const password = getValue('passwordSignUp')
    const passwordConfirm = getValue('passwordConfirmSignUp')
    const name = getValue('nameSignUp')
    const phone = getValue('phoneSignUp')
    const genderM = getID('male')
    const genderF = getID('female')

    const gender = checkGender(genderM, genderF)

    let isValid = true;
    
    
    
    isValid &= validation.checkEmpty(email, "errorEmail", "Please enter your email address.")
        && validation.checkEmail(email, "errorEmail", "Incorrect email format.")
    isValid &= validation.checkEmpty(password, "errorPassword", "Please enter your password.")
        && validation.checkPassword(password, "errorPassword", "Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
    isValid &= validation.checkPasswordConfirm(password, passwordConfirm, "errorPasswordConfirm", "Please check your password again.")
    isValid &= validation.checkEmpty(name, "errorName", "Please enter your name.")
        && validation.checkName(name, "errorName", "Incorrect name format.")
    isValid &= validation.checkEmpty(phone, "errorPhone", "Please enter your phone.")
        && validation.checkPhone(phone, "errorPhone", "Incorrect phone format.<br> + Be at least 9-10 number long.")
    isValid &= validation.checkEmpty(gender, "errorGender", "Please choose your gender.")

    if (isValid) {
        const user = new InforUser(email, password, name, gender, phone)
        postSignUp(user)
    }
}

getID('register').addEventListener('click', () => {
    signUp()
    resetForm() 
})



const checkGender = (radio1, radio2) => {
    if (radio1.checked) {
        return true
    }
    else if (radio2.checked) {
        return false
    }
    else {
        return gender = '';
    }

}