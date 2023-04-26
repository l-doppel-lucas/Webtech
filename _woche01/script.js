console.log('test');
// alert('test');
console.warn('test');
console.error('test');
console.info('test');

let json = '[{"price": 675, "name": "Hans"}, {"price": 123, "name": "Peter"}]';

try{ 
    let product = JSON.parse(json);
    if (!product[0].name){
        throw new Error("Unvollständige Daten: Keine Produktnummer");
    }
    console.log(product);
} catch (e) {
    console.log("JSON: " + e);
}