

const prayerList = document.getElementById("prayers");
const startButton = document.getElementById("startBtn");
const roundsInput = document.getElementById("rounds");

let jsonData;


fetch('prayer.json')
.then(response => response.json())
.then(function(data){
    jsonData = data;
    getPrayers(jsonData);
});


function getPrayers(jsonData){
    let out = "";
    out += `<option value ="">เลือกบทสวด</option>`;

    jsonData.forEach(function(prayer){
        out += `<option value ="${prayer.nameprayer}">${prayer.nameprayer}</option>`
    })
    prayerList.innerHTML = out;
}


startButton.addEventListener('click',function(){
    const selectedPrayer = prayerList.value;
    const rounds = parseInt(roundsInput.value);
    if(selectedPrayer === "" || isNaN(rounds) || rounds < 1) {
        alert("Please select a valid prayer and enter a valid number of rounds.");
        return;
    }

    displayPrayers(rounds); // Call function to display prayers
});

// Function to display prayers based on the number of rounds

function displayPrayers(rounds) {
    let output = "";
    // Repeat prayers based on the number of rounds entered

    for (let i = 0; i < rounds; i++) {
        jsonData.forEach(function(prayer){
            output += `<p>${prayer.nameprayer}</p>`;
        })
    }
}

function roundNumber() {
    const input = document.getElementById('numberInput').value;
    const number = parseFloat(input);

    if (!isNaN(number)) {
      const rounded = Math.round(number);
      document.getElementById('result').textContent = `Rounded number: ${rounded}`;
    } else {
      document.getElementById('result').textContent = 'Please enter a valid number.';
    }
  }
/* 


// Function to display prayers based on the number of rounds
function displayPrayers(rounds) {
    let output = "";
    // Repeat prayers based on the number of rounds entered
    for (let i = 0; i < rounds; i++) {
        jsonData.forEach(function(prayer) {
            output += `<p>${prayer.nameprayer}</p>`; // Display each prayer as a paragraph
        });
    }
    prayerResults.innerHTML = output; // Display the prayer data in the "prayerResults" div
}
    */
