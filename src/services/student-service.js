const DBstudents = [
  {id: "1", first_name: "Leanne", last_name: "Graham", phone_number: "1-770-736-8031 x56442", address: "Kulas Light, Apt. 556", city: "Gwenborough", gpa: "B"},
  {id: "2", first_name: "Ervin", last_name: "Howell", phone_number: "010-692-6593 x09125", address: "Victor Plains, Suite 879", city: "Wisokyburgh", gpa: "B+"},
  {id: "3", first_name: "Clementine", last_name: "Bauch", phone_number: "1-463-123-4447", address: "Douglas Extension, Suite 847", city: "McKenziehaven", gpa: "A+"},
  {id: "4", first_name: "Patricia", last_name: "Lebsack", phone_number: "493-170-9623 x156", address: "Hoeger Mall, Apt. 692", city: "South Elvis", gpa: "C-"},
  {id: "5", first_name: "Chelsey", last_name: "Dietrich", phone_number: "(254)954-1289", address: "Skiles Walks, Suite 351", city: "Roscoeview", gpa: "C-"},
  {id: "6", first_name: "Dennis", last_name: "Schulist", phone_number: "1-477-935-8478 x6430", address: "Norberto Crossing, Apt. 950", city: "South Christy", gpa: "A"},
  {id: "7", first_name: "Kurtis", last_name: "Weissnat", phone_number: "210.067.6132", address: "Rex Trail, Suite 280", city: "Howemouth", gpa: "B"},
  {id: "8", first_name: "Nicholas", last_name: "Runolfsdottir V", phone_number: "586.493.6943 x140", address: "Ellsworth Summit, Suite 729", city: "Aliyaview", gpa: "A+"},
  {id: "9", first_name: "Clementina", last_name: "DuBuque", phone_number: "024-648-3804", address: "Kattie Turnpike, Suite 198", city: "Lebsackbury", gpa: "A-"},
  {id: "10", first_name: "Yost", last_name: "Sons", phone_number: "(775)976-6794 x41206", address: "Dayna Park, 449", city: "Bartholomebury", gpa: "C"},
  {id: "11", first_name: "Maxime", last_name: "Nienow", phone_number: "76495-3109", address: "", city: "USA", gpa: "A+"},
  {id: "12", first_name: "Conrad", last_name: "Miles", phone_number: "23505-1337", address: "Telly Rd, 895", city: "Tulsa", gpa: "B+"},
  {id: "13", first_name: "Leopoldo", last_name: "Corker", phone_number: "(254)954-1283", address: "E Hills, 128", city: "Troy", gpa: "B+"},
];

export const GetStudents = () =>
  new Promise((resolve, reject) => {
    resolve(DBstudents);
  });

export const AddStudent = (student) =>
  new Promise((resolve, reject) => {
    DBstudents.push(student);
    resolve(true);
});

export const DeleteStudent = (studentId) => 
  new Promise ((resolve, reject) => {
    const found = DBstudents.findIndex(student => student.id === studentId); 
    DBstudents.splice(found, 1);
    resolve(true);
  });