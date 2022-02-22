import React,{ useState } from 'react'
import UpdatesCard from './UpdatesCard';
import { BsPersonCircle } from 'react-icons/bs';

function SecondChallange() {

  const [cards, setCards] = useState([
    { class: 'new', publishedDate: '3.3.0(14.05.2018)', types: 'New', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share premissions re-design and optimatizion',button: 'Download', id: 1},
    { class: 'fix', publishedDate: '3.1.0(20.05.2015)', types: 'Fix', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Introducing Host CLoud Drive - virtual drive funcionality New Share options and menegment New, more user frindly design Sync optimizations Vaarious performance improvments and bug fixes ',button: 'Download', id: 1},
    { class: 'improvement', publishedDate: '3.1.0(20.05.2015)', types: 'Improvement', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',button: 'Download', id: 1},
    { class: 'new', publishedDate: '3.3.0(14.05.2018)', types: 'New', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share premissions re-design and optimatizion',button: 'Download', id: 2},
    { class: 'fix', publishedDate: '3.1.0(20.05.2015)', types: 'Fix', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Introducing Host CLoud Drive - virtual drive funcionality New Share options and menegment New, more user frindly design Sync optimizations Vaarious performance improvments and bug fixes ',button: 'Download', id: 2},
    { class: 'improvement', publishedDate: '3.1.0(20.05.2015)', types: 'Improvement', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',button: 'Download', id: 2},
    { class: 'new', publishedDate: '3.3.0(14.05.2018)', types: 'New', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share premissions re-design and optimatizion',button: 'Download', id: 3},
    { class: 'fix', publishedDate: '3.1.0(20.05.2015)', types: 'Fix', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Introducing Host CLoud Drive - virtual drive funcionality New Share options and menegment New, more user frindly design Sync optimizations Vaarious performance improvments and bug fixes ',button: 'Download', id: 3},
    { class: 'improvement', publishedDate: '3.1.0(20.05.2015)', types: 'Improvement', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',button: 'Download', id: 3}
  ]);

  return (
    <div className='cards'>
        <UpdatesCard cards = {cards}  title = "SecondChallange"/>
    </div>
  )
}

export default SecondChallange