const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");

const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   
};
 

   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
