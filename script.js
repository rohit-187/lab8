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
    
