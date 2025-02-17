const building = document.getElementById('building');
const elevator1 = document.getElementById('elevator');
const elevator2 = document.getElementById('elevator1');
const elevator3 = document.getElementById('elevator2');
const call = document.getElementById('call');

let elevatorObj = {
  elevator1: 1, 
  elevator2: 1, 
  elevator3: 1, 
}

for (let i = 20; i > 0; i--) {
  let floor = document.createElement('div');
  floor.className = 'floor';
  floor.innerHTML = `<span>Floor ${i}</span> <button onclick="callElevator(${i})">Call</button>`;
  call.appendChild(floor);
}

function callElevator(floor) {
  let distance = Math.abs(floor - elevatorObj.elevator1)
  let k = "elevator1";
  for (let key in elevatorObj) {
    if (Math.abs(floor - elevatorObj[key]) < distance) {
      distance = Math.abs(floor - elevatorObj[key])  
      k = key
    }
  }
  elevatorObj[k] = floor 
  console.log(elevatorObj);
  

  let floorHeight = building.clientHeight / 20;

  let newPosition1 = (elevatorObj.elevator1 - 1) * floorHeight;
  let newPosition2 = (elevatorObj.elevator2 - 1 )* floorHeight;
  let newPosition3 = (elevatorObj.elevator3 - 1) * floorHeight;

  elevator1.style.bottom = newPosition1 + 'px';
  elevator2.style.bottom = newPosition2 + 'px';
  elevator3.style.bottom = newPosition3 + 'px';


}