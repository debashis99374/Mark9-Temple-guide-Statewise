import React from "react";
import "./styles.css";
import { useState } from "react";

var statePedia = {
  Orissa: [
    {
      name: "Jagannath temple",
      description:
        "The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu - one of the trinity of supreme divinity in Hinduism, Puri is in the state of Odisha on the eastern coast of India. The present temple was rebuilt from the tenth century onwards, on the site of pre existing temples in the compound but not the main Jagannatha temple, and begun by Anantavarman Chodaganga, the first king of the Eastern Ganga dynasty.",
      rating: "4.5/5"
    },
    {
      name: "Konark temple",
      description:
        "Dedicated to the Hindu Sun God Surya, what remains of the temple complex has the appearance of a 100-foot (30 m) high chariot with immense wheels and horses, all carved from stone. Once over 200 feet (61 m) high,[1][5] much of the temple is now in ruins, in particular the large shikara tower over the sanctuary; at one time this rose much higher than the mandapa that remains. The structures and elements that have survived are famed for their intricate artwork, iconography, and themes, including erotic kama and mithuna scenes. Also called the Surya Devalaya, it is a classic illustration of the Odisha style of Architecture or Kalinga architecture.",
      rating: "4.3/5"
    },
    {
      name: "Lingaraj temple",
      description:
        "The Lingaraja temple is the largest temple in Bhubaneswar. The central tower of the temple is 180 ft (55 m) tall. The temple represents the quintessence of the Kalinga architecture and culminating the medieval stages of the architectural tradition at Bhubaneswar.[4] The temple is believed to be built by the kings from the Somavamsi dynasty, with later additions from the Ganga rulers. The temple is built in the Deula style that has four components namely, vimana (structure containing the sanctum), jagamohana (assembly hall), natamandira (festival hall) and bhoga-mandapa (hall of offerings), each increasing in the height to its predecessor. The temple complex has 50 other shrines and is enclosed by a large compound wall.",
      rating: "4.4/5"
    }
  ],
  Kolkata: [
    {
      name: "Kali ghat",
      description:
        "Kalighat Kali Temple is a Hindu temple in Kalighat, Kolkata, West Bengal, India dedicated to the Hindu goddess Kali. It is one of the Shakti Peethas. Kalighat was a Ghat sacred to Kali on the old course of the Hooghly river in the city of Kolkata.",
      rating: "4.3/5"
    },
    {
      name: "Birla mandir",
      description:
        "Birla Mandir in Kolkata, India, is a Hindu temple on Asutosh Chowdhury Avenue, Ballygunge, built by the industrialist Birla family. It is dedicated to Vishnu avatars such as Rama and Krishna.",
      rating: "4.2/5"
    },
    {
      name: "Lake kalibari",
      description:
        "Lake Kalibari is a Kali temple located at Southern Avenue in Kolkata, West Bengal, India. The official name of the temple is Sree Sree 108 Karunamoyee Kalimata Mandir after the name presiding deity Karunamoyee. The temple is managed by the Sree Sri Karunamoyee Kalimata Trust.",
      rating: "4/5"
    }
  ],
  Mumbai: [
    {
      name: "Sidhi Vinayak temple",
      description:
        "The Shree Siddhivinayak Ganapati Mandir is a Hindu temple dedicated to Lord Shri Ganesh. It is located in Prabhadevi, Mumbai, Maharashtra, India. It was originally built by Laxman Vithu and Deubai Patil on 19 November 1801. It is one of the richest temples in India.",
      rating: "4.3/5"
    },
    {
      name: "Shree mahalaxmi temple",
      description:
        "The Mahalaxmi Temple is one of the most famous temples of the city of Mumbai, India. It is dedicated to Mahalakshmi the central deity of Devi Mahatmyam. The temple was built in 1831 by Dhakji Dadaji, a Hindu merchant. ",
      rating: "4.1/5"
    },
    {
      name: "Babulnath mandir",
      description:
        "Babulnath Mandir is an ancient Shiva mandir in Mumbai, India. Situated on a small hillock near Girgaum Chowpatty, it is one of oldest mandirs in the city, Shiva in the form of the Lord of the Babul tree is the main deity in this temple.",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [statetour, setTour] = useState("Orissa");
  function stateClickHandler(abb) {
    setTour(abb);
  }
  return (
    <div id="div-1">
      <h1>TempleGuide-statewise</h1>

      <div id="div-2">
        {Object.keys(statePedia).map((abb) => (
          <button id="Bttn" onClick={() => stateClickHandler(abb)}>
            {abb}
          </button>
        ))}
      </div>

      <div id="div-3">
        <ul>
          {statePedia[statetour].map((place) => (
            <li key={place.name}>
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.description} </div>
              <div style={{ fontSize: "larger" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <h3>About-:</h3>
        <p>
          This is a simple programe that showcase the famous temples of three
          states <strong>"orissa","kolkata","Mumbai"</strong> and gives them
          rating based on their <strong>"Darshan"</strong> system
        </p>
      </footer>
    </div>
  );
}
