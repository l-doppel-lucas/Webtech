let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ip-api.io/json/8.8.8.8');
xhr.send(); 
xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        let response = JSON.parse(xhr.responseText);
        console.log(response.city);
        try{ 
            if (!response.city){
                throw new Error("Kein Valides JSON!");
            }
        }
        catch (err){
            console.log("JSON: " + err);
        }
    }
};