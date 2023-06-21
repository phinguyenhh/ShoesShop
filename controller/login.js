
getID('user').addEventListener('keyup', () => {
    const user = getID('user').value
    isValid = true;
    isValid &= validation.checkEmail(user, "errorEmailLogin", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
    getID('user').classList.remove('error')



    if (isValid) {
        getID('user').classList.remove('error')
    } else {
        // getID('user').classList.add('error')
    }
})


getID('password').addEventListener('keyup', () => {
    const password = getID('password').value
    isValid = true;
    isValid &= validation.checkEmpty(password, "errorPasswordLogin", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")

    if (isValid) {
        getID('password').classList.remove('error')
    }
})

getID('signIn').addEventListener('click', () => {
    const user = getID('user').value
    const password = getID('password').value

    isValid = true;
    isValid &= validation.checkEmpty(user, "errorEmailLogin", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
        && validation.checkEmail(user, "errorEmailLogin", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")

    if (isValid) {
        checkLogin(user, password)
        getID('closeModal').click()
        getID('btnLogin').disabled = true
        getID('btnLogin').style.opacity = "1"
        getID('btnLogin').style.opacity = "1"
        getID('btnLogin').style.cursor = "pointer"
    } else {
        if (getID('user').value == '') {
            getID('user').classList.add('error')
        } else {
            getID('user').classList.remove('error')
        }
        getID('password').classList.add('error')
    }
})


