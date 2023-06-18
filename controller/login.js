getID('signIn').addEventListener('click', () => {
        const user = getID('user').value
        const password = getID('password').value
        isValid = true;
        isValid &= validation.checkEmail(user, "errorEmailLogin", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
    
        if(isValid) {
            checkLogin(user,password)
            getID('closeModal').click()            
            getID('btnLogin').disabled = true        
            getID('btnLogin').style.opacity = "1"        
            getID('btnLogin').style.opacity = "1"   
            getID('btnLogin').style.cursor = "pointer"  
        }
    })