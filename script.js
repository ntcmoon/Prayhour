

const prayerList = document.getElementById("prayers");

let jsonData;


fetch('prayer.json')
.then(response => response.json())
.then(function(data){
    jsonData = data;
    getPrayers(jsonData);
});

function getPrayers(jsonData){
    let out = "";
    out += `<option value ="">Choose a prayer</option>`;

    jsonData.forEach(function(prayer){
        out += `<option value ="${prayer.nameprayer}">${prayer.nameprayer}</option>`
    })
    prayerList.innerHTML = out;
}