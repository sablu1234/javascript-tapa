console.log("Learn Object Destructing...");

const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subject': ['Math', 'English', 'EVS'],
    'parents': {
        'father': 'Brown Williamson',
        'mother': 'Sophia',
        'email': 'john-parents@abcde.com'
    },
    'address': {
        'steet': '65/2, brooklyn road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    }
}

const {name, age, meal="bread"} = student;
// const {address:{city}} = student;
console.log(name, age, meal);//John Williamson Carterton

const {subject, numbersOfSubjects = subject.length } = student;

console.log(numbersOfSubjects);// 3

// alias name=> variable create with stadard
const {std: standard} = student;

// console.log(std);

const {address} = student;
const {address: {zip}} = student;
console.log(zip);


function sendEmail({parents: {email}=student }){
    console.log(`Sent an email to ${email}`);
}

sendEmail(student);



// Object destructuring
const getStudent = () => {
   return {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Math', 'English', 'EVS'],
    'parents': {
        'father': 'Brown Williamson',
        'mother': 'Sophia',
        'email': 'john-parents@abcde.com'
    },
    'address': {
        'steet': '65/2, brooklyn road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    }
   }
}

const {name: anotherName, subjects: anotherSubs} = getStudent();

console.log(anotherName, anotherSubs);




// destructuring in loop
const students = [
    {
        'name': 'William',
        'grade': 'A'
    },
    {
        'name': 'Tom',
        'grade': 'A+'
    },
    {
        'name': 'Bob',
        'grade': 'B'
    }
]

for(let {name, grade} of students){
    console.log(name,grade);
}




// Optional Chaining

const employe = {
    salary: {
        bonus: 300
    }
};

console.log(employe.department);// undefined

// console.log(employe.department.name); //Error   
// const name = employe.department && employe.department.name
const names = employe.department?.name;
console.log(names)