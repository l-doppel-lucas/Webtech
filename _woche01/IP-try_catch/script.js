

try{ 
    
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://ip-api.io/json/178.197.231.224');
    xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        let response = JSON.parse(xhr.ResponseText);
        console.log(response);
        if (response.city){
            throw new Error("Kein Valides JSON!");
        }
    }
};
    xhr.send(); 
}catch (e){
    console.log("JSON: " + e);
}
