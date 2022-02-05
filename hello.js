const sayHello = () => console.log("Hello, World from JS File.");
sayHello();

/*
// adding event listener to a button using callback
<button class="btn">Click Me</button>

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let name = "Jone Doe";
    console.log(name.toUpperCase());
})
*/

function addName(time, name)
{
    return new Promise((resolve, reject) =>
    {
        if (name)
        {
            setTimeout(() =>
            {
                console.log(name)
                resolve();
            }, time)
        }
        else
        {
            reject(`No such ${name}`);
        }
    })
}

/*
let users = [
    { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
    { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
    { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
  ];


//using .map()
let singleUser = users.map(user => {
    //add first name and last name to make full name
    let fullName = `${user.firstName} ${user.lastName}`;
    return (
       `<h3 class="name">${fullName}</h3>
        <p class="age">${user.age}</p>`);
});
*/

let users = [
    { firstName: "Susan", age: 14 },
    { firstName: "Daniel", age: 16 },
    { firstName: "Bruno", age: 56 },
    { firstName: "Jacob", age: 15 },
    { firstName: "Sam", age: 64 },
    { firstName: "Dave", age: 56 },
    { firstName: "Neils", age: 65 }
];

  
// for young people
const youngPeople = users.filter((person) => {
    return person.age <= 15;
})

youngPeople.forEach((p) => {
    console.log(p.firstName, p.age);
});


// find sam
const sam = users.find((u) => u.firstName == "Sam");
console.log(sam.firstName);

  addName(2000, 'Joel')
    .then(()=>addName(2000, 'Victoria'))
    .then(()=>addName(2000, 'John'))
    .then(()=>addName(2000, 'Doe'))
    .then(()=>addName(2000, 'Sarah'))
      .catch((err) => console.log(err))
    
/*
fetch("https://type.fit/api/quotes")
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

*/
    //above fetch in async way
const fetchData = async () => {
    try{
        const quotes = await fetch("https://type.fit/api/quotes");
        const response = await quotes.json();
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

fetchData();

console.log("I being logged before fetch");