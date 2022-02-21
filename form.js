document.getElementById('order')
    .addEventListener('click', () => {
        let full_name = document.forms['form']['name'].value;
        let phone_number = document.forms['form']['phone_number'].value;
        let address = document.forms['form']['address'].value;
        let base = document.forms['form']['base'].value;
        let toppings = document.forms['form']['toppings[]'];
        let toppings_chosen = [];
        for (let index = 0; index < toppings.length; index++) {
            const element = toppings[index];
            if (element.type == 'checkbox' && element.checked == true) {
                toppings_chosen.push(element.value);
            }
        }
        let note = document.forms['form']['note'].value;
        let order = {
            Teljes_nev: full_name,
            Telefonszam: phone_number,
            Cim: address,
            Pizza_alap: base,
            Pizza_feltet: toppings_chosen,
            Megjegyzes: note,
        };
        console.log(order);
    })