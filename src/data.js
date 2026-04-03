import capybara from "./images/capybara.jpg";
import cat from "./images/cat.jpg";
import dog from "./images/dog.jpg";
import duck from "./images/duck.jpg";
import owl from "./images/owl.jpg";
import rabbit from "./images/rabbit.jpg";

/*
Purpose: Stores the pet data used by the application.
Each pet object includes:
- id: unique identifier
- name: pet name
- animal: animal type used for searching
- specialty: short description
- image: local image path
*/

const pets = [
  {
    id: 1,
    name: "Mr. Unimpressed",
    animal: "Capybara",
    specialty: "Being unimpressed by everything",
    image: capybara
  },
  {
    id: 2,
    name: "Sir Hoots-A-Lot",
    animal: "Bird",
    specialty: "Counting how many licks it takes",
    image: owl
  },
  {
    id: 3,
    name: "Waddles",
    animal: "Bird",
    specialty: "Swimming and migrating",
    image: duck
  },
  {
    id: 4,
    name: "Brian",
    animal: "Dog",
    specialty: "Judging every move you make",
    image: dog
  },
  {
    id: 5,
    name: "Mittens",
    animal: "Cat",
    specialty: "Sleeping in sunny spots and chatching mice",
    image: cat
  },
  {
    id: 6,
    name: "Bonnie",
    animal: "Rabbit",
    specialty: "Eating cords and carrots",
    image: rabbit
  }
];

export default pets;