var brand = "mala practica";
let counter = 100;
const token = "abc123";

console.log(token);
counter = 200;
console.log(counter);

// comentario de una linea

/*
    Este es un comentario multilinea
*/

// Interporlacion
let Interporlacion = `El valor de counter es ${counter}`
// manera de imprimir
console.log(Interporlacion);
console.log("El valor de counter es: ", counter);
console.log("El valor de counter es: "+ counter);

const persons = [{
        "firstName": "Néhémie",
        "lastName": "Stuehmeyer",
        "age": 55,
        "gender": "Male"
      }, {
        "firstName": "Célestine",
        "lastName": "Atmore",
        "age": 65,
        "gender": "Male"
      }, {
        "firstName": "Méghane",
        "lastName": "Wallhead",
        "age": 39,
        "gender": "Male"
      }, {
        "firstName": "Dù",
        "lastName": "Quarmby",
        "age": 13,
        "gender": "Male"
      }, {
        "firstName": "Ruò",
        "lastName": "McNea",
        "age": 19,
        "gender": "Male"
      }, {
        "firstName": "Kuí",
        "lastName": "Greene",
        "age": 80,
        "gender": "Male"
      }, {
        "firstName": "Nadège",
        "lastName": "Dies",
        "age": 11,
        "gender": "Male"
      }, {
        "firstName": "Laurélie",
        "lastName": "Lissemore",
        "age": 92,
        "gender": "Male"
      }, {
        "firstName": "Tán",
        "lastName": "Heys",
        "age": 76,
        "gender": "Male"
      }, {
        "firstName": "Marie-hélène",
        "lastName": "Salazar",
        "age": 83,
        "gender": "Female"
      }, {
        "firstName": "Yè",
        "lastName": "Leser",
        "age": 21,
        "gender": "Male"
      }, {
        "firstName": "Solène",
        "lastName": "Eshmade",
        "age": 40,
        "gender": "Female"
      }, {
        "firstName": "Kallisté",
        "lastName": "McDougald",
        "age": 84,
        "gender": "Genderqueer"
      }, {
        "firstName": "Marie-hélène",
        "lastName": "Oliff",
        "age": 50,
        "gender": "Male"
      }, {
        "firstName": "Fèi",
        "lastName": "Phillimore",
        "age": 68,
        "gender": "Female"
      }, {
        "firstName": "Anaïs",
        "lastName": "Brookes",
        "age": 73,
        "gender": "Male"
      }, {
        "firstName": "Magdalène",
        "lastName": "Ivantsov",
        "age": 20,
        "gender": "Male"
      }, {
        "firstName": "Valérie",
        "lastName": "Gillatt",
        "age": 72,
        "gender": "Male"
      }, {
        "firstName": "Chloé",
        "lastName": "Checci",
        "age": 59,
        "gender": "Male"
      }, {
        "firstName": "Åke",
        "lastName": "Bodycombe",
        "age": 52,
        "gender": "Male"
      }, {
        "firstName": "Célia",
        "lastName": "Phettis",
        "age": 63,
        "gender": "Male"
      }, {
        "firstName": "Maïly",
        "lastName": "Lethley",
        "age": 57,
        "gender": "Genderqueer"
      }, {
        "firstName": "Méghane",
        "lastName": "Aleshkov",
        "age": 62,
        "gender": "Male"
      }, {
        "firstName": "Börje",
        "lastName": "Wasling",
        "age": 84,
        "gender": "Polygender"
      }, {
        "firstName": "Laurélie",
        "lastName": "Ceschini",
        "age": 99,
        "gender": "Female"
      }, {
        "firstName": "Aimée",
        "lastName": "Menear",
        "age": 34,
        "gender": "Female"
      }, {
        "firstName": "Irène",
        "lastName": "Lewsie",
        "age": 72,
        "gender": "Genderfluid"
      }, {
        "firstName": "Michèle",
        "lastName": "Keinrat",
        "age": 81,
        "gender": "Female"
      }, {
        "firstName": "Maëlle",
        "lastName": "Lemarie",
        "age": 20,
        "gender": "Genderqueer"
      }, {
        "firstName": "Mélinda",
        "lastName": "Londing",
        "age": 37,
        "gender": "Male"
      }, {
        "firstName": "Cécile",
        "lastName": "Draisey",
        "age": 36,
        "gender": "Genderqueer"
      }, {
        "firstName": "Laurélie",
        "lastName": "Newvell",
        "age": 69,
        "gender": "Male"
      }, {
        "firstName": "Stévina",
        "lastName": "Sibbs",
        "age": 13,
        "gender": "Male"
      }, {
        "firstName": "Lorène",
        "lastName": "Wallworth",
        "age": 63,
        "gender": "Male"
      }, {
        "firstName": "Kallisté",
        "lastName": "Geffen",
        "age": 72,
        "gender": "Polygender"
      }, {
        "firstName": "Loïs",
        "lastName": "Stoate",
        "age": 29,
        "gender": "Male"
      }, {
        "firstName": "Cécilia",
        "lastName": "Jirka",
        "age": 8,
        "gender": "Female"
      }, {
        "firstName": "Sòng",
        "lastName": "Withrington",
        "age": 90,
        "gender": "Female"
      }, {
        "firstName": "Östen",
        "lastName": "O'Bradain",
        "age": 39,
        "gender": "Female"
      }, {
        "firstName": "Françoise",
        "lastName": "Gilmore",
        "age": 66,
        "gender": "Male"
      }, {
        "firstName": "Lài",
        "lastName": "Babidge",
        "age": 17,
        "gender": "Male"
      }, {
        "firstName": "Desirée",
        "lastName": "Pocock",
        "age": 16,
        "gender": "Female"
      }, {
        "firstName": "Åke",
        "lastName": "Bickers",
        "age": 19,
        "gender": "Male"
      }, {
        "firstName": "Gérald",
        "lastName": "Innocent",
        "age": 80,
        "gender": "Agender"
      }, {
        "firstName": "Géraldine",
        "lastName": "Kleszinski",
        "age": 4,
        "gender": "Female"
      }, {
        "firstName": "Séréna",
        "lastName": "Apthorpe",
        "age": 93,
        "gender": "Female"
      }, {
        "firstName": "Béatrice",
        "lastName": "Guarin",
        "age": 54,
        "gender": "Male"
      }, {
        "firstName": "Eléa",
        "lastName": "Beswick",
        "age": 39,
        "gender": "Female"
      }, {
        "firstName": "Miléna",
        "lastName": "Desantis",
        "age": 100,
        "gender": "Male"
      }, {
        "firstName": "Maïly",
        "lastName": "Cordeux",
        "age": 65,
        "gender": "Female"
      }, {
        "firstName": "Stévina",
        "lastName": "Luca",
        "age": 74,
        "gender": "Male"
      }, {
        "firstName": "Kù",
        "lastName": "Flament",
        "age": 30,
        "gender": "Female"
      }, {
        "firstName": "Salomé",
        "lastName": "Dorken",
        "age": 6,
        "gender": "Polygender"
      }, {
        "firstName": "Erwéi",
        "lastName": "Mongenot",
        "age": 24,
        "gender": "Male"
      }, {
        "firstName": "Gérald",
        "lastName": "Grime",
        "age": 46,
        "gender": "Male"
      }, {
        "firstName": "Méghane",
        "lastName": "Sherewood",
        "age": 53,
        "gender": "Polygender"
      }, {
        "firstName": "Bérangère",
        "lastName": "Osband",
        "age": 22,
        "gender": "Male"
      }, {
        "firstName": "Björn",
        "lastName": "Beddis",
        "age": 74,
        "gender": "Female"
      }, {
        "firstName": "Maëlle",
        "lastName": "Ponsford",
        "age": 80,
        "gender": "Male"
      }, {
        "firstName": "Thérèse",
        "lastName": "Janata",
        "age": 3,
        "gender": "Male"
      }, {
        "firstName": "Maïté",
        "lastName": "Dennis",
        "age": 83,
        "gender": "Male"
      }, {
        "firstName": "Vénus",
        "lastName": "Dimic",
        "age": 89,
        "gender": "Agender"
      }, {
        "firstName": "Eliès",
        "lastName": "Rippingall",
        "age": 51,
        "gender": "Male"
      }, {
        "firstName": "Maéna",
        "lastName": "St. Hill",
        "age": 94,
        "gender": "Male"
      }, {
        "firstName": "Fèi",
        "lastName": "Neeves",
        "age": 89,
        "gender": "Male"
      }, {
        "firstName": "Pål",
        "lastName": "Driuzzi",
        "age": 25,
        "gender": "Male"
      }, {
        "firstName": "Andréanne",
        "lastName": "Caskey",
        "age": 61,
        "gender": "Female"
      }, {
        "firstName": "Gaétane",
        "lastName": "Kuhne",
        "age": 56,
        "gender": "Female"
      }, {
        "firstName": "Andrée",
        "lastName": "Faulkes",
        "age": 59,
        "gender": "Female"
      }, {
        "firstName": "Françoise",
        "lastName": "McGavigan",
        "age": 82,
        "gender": "Male"
      }, {
        "firstName": "Bérangère",
        "lastName": "Gritland",
        "age": 72,
        "gender": "Male"
      }, {
        "firstName": "Mélanie",
        "lastName": "Preble",
        "age": 16,
        "gender": "Genderfluid"
      }, {
        "firstName": "Eléa",
        "lastName": "De Blase",
        "age": 42,
        "gender": "Male"
      }, {
        "firstName": "Andréa",
        "lastName": "Shorthouse",
        "age": 100,
        "gender": "Female"
      }, {
        "firstName": "Gwenaëlle",
        "lastName": "Murford",
        "age": 4,
        "gender": "Female"
      }, {
        "firstName": "Magdalène",
        "lastName": "Checklin",
        "age": 1,
        "gender": "Male"
      }, {
        "firstName": "Amélie",
        "lastName": "Jedrys",
        "age": 60,
        "gender": "Male"
      }, {
        "firstName": "Mélodie",
        "lastName": "Fowden",
        "age": 49,
        "gender": "Female"
      }, {
        "firstName": "Daphnée",
        "lastName": "Dallman",
        "age": 56,
        "gender": "Female"
      }, {
        "firstName": "Esbjörn",
        "lastName": "Oselton",
        "age": 22,
        "gender": "Genderfluid"
      }, {
        "firstName": "Léana",
        "lastName": "Berryman",
        "age": 47,
        "gender": "Agender"
      }, {
        "firstName": "Océane",
        "lastName": "Tenant",
        "age": 18,
        "gender": "Female"
      }, {
        "firstName": "Maïly",
        "lastName": "Lorek",
        "age": 33,
        "gender": "Male"
      }, {
        "firstName": "Mårten",
        "lastName": "O'Neil",
        "age": 97,
        "gender": "Female"
      }, {
        "firstName": "Mélodie",
        "lastName": "Stallon",
        "age": 41,
        "gender": "Male"
      }, {
        "firstName": "Stévina",
        "lastName": "Urion",
        "age": 83,
        "gender": "Male"
      }, {
        "firstName": "Marie-ève",
        "lastName": "Gerholz",
        "age": 35,
        "gender": "Male"
      }, {
        "firstName": "Léana",
        "lastName": "Whyteman",
        "age": 36,
        "gender": "Male"
      }, {
        "firstName": "Simplifiés",
        "lastName": "Dhennin",
        "age": 74,
        "gender": "Female"
      }, {
        "firstName": "Salomé",
        "lastName": "Romero",
        "age": 54,
        "gender": "Female"
      }, {
        "firstName": "Eléa",
        "lastName": "Worsham",
        "age": 48,
        "gender": "Female"
      }, {
        "firstName": "Dù",
        "lastName": "A'field",
        "age": 30,
        "gender": "Female"
      }, {
        "firstName": "Åslög",
        "lastName": "Hampton",
        "age": 87,
        "gender": "Genderqueer"
      }, {
        "firstName": "Léonore",
        "lastName": "Abbyss",
        "age": 15,
        "gender": "Female"
      }, {
        "firstName": "Maï",
        "lastName": "Davidoff",
        "age": 78,
        "gender": "Female"
      }, {
        "firstName": "Simplifiés",
        "lastName": "Leyman",
        "age": 95,
        "gender": "Male"
      }, {
        "firstName": "Intéressant",
        "lastName": "McCaughren",
        "age": 77,
        "gender": "Genderqueer"
      }, {
        "firstName": "Lóng",
        "lastName": "Van der Kruijs",
        "age": 59,
        "gender": "Genderqueer"
      }, {
        "firstName": "Aloïs",
        "lastName": "Salsberg",
        "age": 85,
        "gender": "Male"
      }, {
        "firstName": "Cléopatre",
        "lastName": "Arch",
        "age": 21,
        "gender": "Female"
      }];

console.table(persons);