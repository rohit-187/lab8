let student = {name:"Rohit",
    age:20,
    enrolled:true,
    courses:["science","math","english"],
    info: function(){return this.name + this.age + this.enrolled + this.courses}}
    
    console.log(student.name + student.age)

    person = student.info()


    console.log(person)

    const myJson = JSON.stringify(student)

    console.log(myJson)

    const obj = JSON.parse('{"name":"Rohit","age":20,"enrolled":true,"courses":["science","math","english"]}')

    console.log(obj)

    let {name, courses} = student

    let scores = [85, 92, 78, 90]

    let [score1,score2] = scores

    console.log(score1,score2)

    let grad = {graduationYear:2025}

    const newStudent = {...student,...grad}

    
