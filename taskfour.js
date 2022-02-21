document.getElementById('apply')
    .addEventListener('click', () => {
        let character_name = document.forms['hero_generation']['name'].value;
        let gender = document.forms['hero_generation']['gender'].value;
        let age = document.forms['hero_generation']['age'].value;
        let race = document.forms['hero_generation']['race'].value;
        let kaszt = document.forms['hero_generation']['kaszt'].value;

        let abilities = document.forms['hero_generation']['ability[]'];
        let chosen_abilities = [];
        for (let index = 0; index < abilities.length; index++) {
            const element = abilities[index];
            if (element.type == 'checkbox' && element.checked == true) {
                chosen_abilities.push(element.value);
            }
        }
        let hero = {
            Hos_nev: character_name,
            Neme: gender,
            Eletkor: age,
            Faj: race,
            Kaszt: kaszt,
            kepessegek: chosen_abilities,
        };
        if (character_name === '' || gender === '' || age === '' || race === '' || race === '' || kaszt === '' || chosen_abilities === '') {
            alert("minden adatot meg kell adni!")
        }
        console.log(hero);

    })