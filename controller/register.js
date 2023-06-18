
const checkValue = (id) => {

    getID(id).addEventListener('keyup', () => {
        let isValid = true
        getID('successRegister').style.display = "none"
        getID(id).classList.remove('error')
        switch (id) {
            case id = "emailSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
                    && validation.checkEmail(getValue(id), "errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
                break
            case id = "passwordSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.")
                    && validation.checkPassword(getValue(id), "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
                break
            case id = "passwordConfirmSignUp":
                isValid &= validation.checkPasswordConfirm(getValue('passwordSignUp'), getValue(id), "errorPasswordConfirm", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again.")
                if (getValue('passwordSignUp') != getValue(id)) {
                    getID(id).classList.add('error')
                } else {
                    getID(id).classList.remove('error')
                }
                break
            case id = "nameSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.")
                    && validation.checkName(getValue(id), "errorName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect name format.")
                break
            case id = "phoneSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.")
                    && validation.checkPhone(getValue(id), "errorPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long.")
                break
            default:
                break;
        }
    })
    getID(id).addEventListener('focus', () => {
        getID('successRegister').style.display = "none"
        let isValid = true
        switch (id) {
            case id = "emailSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
                    && validation.checkEmail(getValue(id), "errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")

                break
            case id = "passwordSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.")
                    && validation.checkPassword(getValue(id), "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")

                break
            case id = "passwordConfirmSignUp":
                isValid &= validation.checkPasswordConfirm(getValue('passwordSignUp'), getValue(id), "errorPasswordConfirm", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again.")

                break
            case id = "nameSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.")
                    && validation.checkName(getValue(id), "errorName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect name format.")

                break
            case id = "phoneSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.")
                    && validation.checkPhone(getValue(id), "errorPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long.")

                break
            default:
                break;
        }
    })
    getID(id).addEventListener('focusout', () => {
        let isValid = true
        getID('successRegister').style.display = "none"
        switch (id) {
            case id = "emailSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
                    && validation.checkEmail(getValue(id), "errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
                if (isValid) {
                    getID(id).classList.remove('error')
                } else {
                    getID(id).classList.add('error')
                }
                break
            case id = "passwordSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.")
                    && validation.checkPassword(getValue(id), "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
                if (getValue(id) == '') {
                    getID(id).classList.add('error')
                }
                else if (getValue('passwordConfirmSignUp') != getValue(id)) {
                    isValid &= validation.checkPassword(getValue(id), "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
                    if (!isValid) {
                        getID(id).classList.add('error')
                    }
                    getID("passwordConfirmSignUp").classList.add('error')
                } else {
                    getID(id).classList.remove('error')
                    getID("passwordConfirmSignUp").classList.remove('error')
                }

                break
            case id = "passwordConfirmSignUp":
                isValid &= validation.checkPasswordConfirm(getValue('passwordSignUp'), getValue(id), "errorPasswordConfirm", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again.")
                if (getValue('passwordSignUp') != getValue(id)) {
                    getID(id).classList.add('error')
                } else {
                    getID(id).classList.remove('error')
                }
                break
            case id = "nameSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.")
                    && validation.checkName(getValue(id), "errorName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect name format.")
                if (isValid) {
                    getID(id).classList.remove('error')
                } else {
                    getID(id).classList.add('error')
                }
                break
            case id = "phoneSignUp":
                isValid &= validation.checkEmpty(getValue(id), "errorPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.")
                    && validation.checkPhone(getValue(id), "errorPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long.")

                if (isValid) {
                    getID(id).classList.remove('error')
                } else {
                    getID(id).classList.add('error')
                }
                break
            default:
                break;
        }
    })
}
checkValue('emailSignUp')
checkValue('passwordSignUp')
checkValue('passwordConfirmSignUp')
checkValue('nameSignUp')
checkValue('phoneSignUp')

const signUp = () => {
    const email = getValue('emailSignUp')
    const password = getValue('passwordSignUp')
    const passwordConfirm = getValue('passwordConfirmSignUp')
    const name = getValue('nameSignUp')
    const phone = getValue('phoneSignUp')
    const genderM = getID('male')
    const genderF = getID('female')

    const gender = checkGender(genderM, genderF)
    let isValid = true

    isValid &= validation.checkEmpty(email, "errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
        && validation.checkEmail(email, "errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
    isValid &= validation.checkEmpty(password, "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.")
        && validation.checkPassword(password, "errorPassword", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
    isValid &= validation.checkPasswordConfirm(password, passwordConfirm, "errorPasswordConfirm", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again.")
    isValid &= validation.checkEmpty(name, "errorName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.")
        && validation.checkName(name, "errorName", "Incorrect name format.")
    isValid &= validation.checkEmpty(phone, "errorPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.")
        && validation.checkPhone(phone, "errorPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long.")
    isValid &= validation.checkEmpty(gender, "errorGender", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please choose your gender.")


    if (isValid) {
        const user = new InforUser(email, password, name, gender, phone)
        postSignUp(user)
        if (isValid) {
            resetForm()
        }
    }
    else {
        if (email == '' && password == '' && name == '' && phone == '') {
            getID('emailSignUp').classList.add('error')
            getID('passwordSignUp').classList.add('error')
            getID('nameSignUp').classList.add('error')
            getID('phoneSignUp').classList.add('error')
        }
    }
}

const checkGender = (a, b) => {
    if (a.checked) {
        return true
    }
    else if (b.checked) {
        return false
    }
    else {
        return gender = '';
    }
}

inputGenders.forEach((inputGender) => {
    inputGender.addEventListener('click', () => {
        getID('errorGender').style.display = " none"
        getID('successRegister').style.display = "none"
    })
})

getID('register').addEventListener('click', () => {
    signUp()
})