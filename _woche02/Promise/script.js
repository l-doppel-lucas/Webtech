
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

    url = 'https://ip-api.io/json/8.8.8.8';

    fetch(url).then(res => res.json()).then((data)=>{
        console.log(data);
    })
