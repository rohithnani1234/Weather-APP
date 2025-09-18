function getWeather() {
    let city = document.getElementById("city")
    showWeather(city.value)
}
async function showWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8e488da3efmsh7c1485897faea07p1b5c9ajsn808693f6f308',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        if(!response){
            throw new Error("wether not supported")
        }
        const result = await response.json();
        getdata(result)
    } catch (error) {
        console.error(error);
    }
}
function getdata(result){
    let item=document.getElementById("div")
    item.innerHTML=
    `<p>city: ${result.name}</p>
    <p>temparature: ${result.main.temp}</p>
    `
}