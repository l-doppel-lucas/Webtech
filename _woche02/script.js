
    let divPromise = document.getElementById('nav');
    let url = 'nav.html';

    fetch(url)
    .then((response) => {
        //console.log(response);
        response.text().then((text) => {
            //console.log(text);
            divPromise.innerHTML = text;
        });
    });
