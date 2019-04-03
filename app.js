
//Firebase INIT
var config = {
    apiKey: "AIzaSyBVT3T1tUZPzyo1_njynxyrl0gNezbp1I0",
    authDomain: "trainhomework-c1cc2.firebaseapp.com",
    databaseURL: "https://trainhomework-c1cc2.firebaseio.com",
    projectId: "trainhomework-c1cc2",
    storageBucket: "trainhomework-c1cc2.appspot.com",
    messagingSenderId: "687164626726"
  };
  firebase.initializeApp(config);

let db = firebase.firestore()
//Grab after sbmt button is pushed
document.querySelector('#sbmt').addEventListener('click', 
e => {
    e.preventDefault()
    let train = document.querySelector('#train-name').value
    let destination = document.querySelector('#dst').value
    let firtime = document.querySelector('#firstT').value
    let frequency = document.querySelector('#freq').value
    let id = db.collection('trains').doc().id

    console.log(train)
    console.log(destination)
    console.log(firtime)
    console.log(frequency)
//Create database for the submitted train information
    db.collection('trains').doc(id).set({
        trains: train, 
        Location: destination, 
        First: firtime, 
        Interval: frequency
    })
    document.querySelector('#train').value = '' 
    document.querySelector('#dst').value = ''
    document.querySelector('#firstT').value = ''
    document.querySelector('#freq').value = ''
})
//grab my data and append to the chart (NOT WORKING)
db.collection('users').onSnapshot(({ docs }) => {
  document.querySelector('#disp').innerHTML = ''
  docs.forEach(doc => {
    console.log(doc.data())
    let { train, destination, firtime } = doc.data()
    let inputs = document.createElement('div')
    inputs.innerHTML = `
    <tbody>
      <tr>               
        <td>${train}</td>
        <td>${destination}</td>
        <td>${firtime}</td>
      </tr>
    `
    document.querySelector('#disp').append(inputs)
  })
})
