document.getElementById('apply')
    .addEventListener('click', () => {
        let username = document.forms['form']['username'].value;
        console.log(username);
        let password = document.forms['form']['password'].value;
        let passwordrepeat = document.forms['form']['passwordrepeat'].value;
        let email = document.forms['form']['email'].value;
        let date_of_birth = document.forms['form']['date_of_birth'].value;

        if (username.length < 5 || username.length > 16) {
            alert("A felhasználónévnek 5 és 16 karakter közöttinek kell lennie!");
        }
        if (password !== passwordrepeat) {
            alert(" a jelszónak és az ellenőrző jelszónak meg kell egyeznie!");
        }
        if (password.length < 5) {
            alert("A jelszónak legalább 5 karakternek kell lennie!");
        }
        let registration = {
            Felhasznalonev: username,
            jelszo: password,
            email_cim: email,
            születesi_ido: date_of_birth,
        };
        console.log(registration);

    })