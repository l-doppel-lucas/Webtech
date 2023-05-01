let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ip-api.io/json/8.8.8.8');
xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        try {
            var json = JSON.parse(xhr.responseText);
            console.log(json.city);
        } catch(error) {
            console.log('Error reading response from server.');
            return false;
        }
    }else{
        console.log('Request failed.  Returned status of ' + xhr.status);
        return false;
    }
};
xhr.send(); 
