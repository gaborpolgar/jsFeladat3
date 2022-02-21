document.getElementById('apply').addEventListener('click', () => {
    let text = document.getElementById('string').value;
    let result = '';
    if (text === '') {
        alert('átalakítandó szöveg megadása kötelező!');
    }
    let upper = document.forms['form']['manipulation'].value;
    console.log(upper);
    if (upper === '') {
        alert('átalakítás típusának kiválasztása kötelező!');
    }
    if (upper === 'uppercase') {
        result = text.toUpperCase();
    } else {
        result = text.toLowerCase();
    }
    console.log(result);
    document.getElementById('result').innerText = result;
})

/*document.getElementById('apply').addEventListener('click', () => {
    let text = document.getElementById('string').value;
    console.log(text);
    if (document.getElementById('lowercase').value != '') {
        let result = text.toLowerCase();
    } else if (document.getElementById('uppercase').value !== '') {
        let result = text.toUpperCase();
    } else {
        alert('átalakítás típusának kiválasztása kötelező!')
    }
    if (text = '') {
        alert('átalakítandó szöveg megadása kötelező!')
    }
    console.log(result);
    document.getElementById('result').innerText = result;
})*/