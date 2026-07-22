const data = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  projects: [
    {
      id: 1,
      title: "Project A",
      tags: ["web", "react"]
    },
    {
      id: 2,
      title: "Project B",
      tags: ["backend", "nodejs"]
    }
  ],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Python", "SQL"]
  }
};


for(let x in data.skills.frontend){

    console.log(x);

}