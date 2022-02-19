
import React, { useState } from 'react';
import TopicsList from './TopicsList';
import { FaReact, FaRuler, FaGlobe,FaMedal,FaSearchengin,FaBullhorn,FaDollarSign, } from "react-icons/fa";
import { BiText } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";

function FirstChallange() {

    const [topics, setTopics] = useState([
        { icon: <FaReact/>, title: 'The TLD', body: 'Does the domain extension match the language of th domain name?', id: 1},
        { icon: <FaRuler/>, title: 'Domain Length', body: 'Is the domain short enough to remember?', id: 2},
        { icon: <FaGlobe/>, title: 'Language', body: 'How complex is the actual domain name?', id: 3},
        { icon: <FaMedal/>, title: 'International Regognition', body: 'Can the domain name be used on an international scale?', id: 4},
        { icon: <FaSearchengin/>, title: 'Search Engine', body: 'Does the Domain follow search engine guidlines?', id: 5},
        { icon: <FaBullhorn/>, title: 'Advertaizing Potencial', body: 'Could th domain be used for advertizing campaigns?', id: 6},
        { icon: <FaDollarSign/>, title: 'Sales Opportunities', body: 'Can the domain name be used ona a international scale?', id: 7},
        { icon: <BiText />, title: 'Typo susceptibility', body: 'How high is the risk of mistyping the domain name? ', id: 8},
        { icon: <HiLightBulb />, title: 'Business potencial', body: 'Can the domain be used as your company address?', id: 9}
    ]);
  return (
    <div>
      <TopicsList topics = { topics } titleOfTopics = "FrirstChallange" />
    </div>
  )
}

export default FirstChallange;