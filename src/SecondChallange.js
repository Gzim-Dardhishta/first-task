import React,{ useState } from 'react'
import UpdatesCard from './UpdatesCard';
import { BsPersonCircle } from 'react-icons/bs';

function SecondChallange() {

  const [newCard, setNewCard] = useState([
    { publishedDate: '3.3.0(14.05.2018)', types: 'New', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share premissions re-design and optimatizion',button: 'Download', id: 1},
    { publishedDate: '3.3.0(14.05.2018)', types: 'New', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share premissions re-design and optimatizion',button: 'Download', id: 2},
    { publishedDate: '3.3.0(14.05.2018)', types: 'New', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share premissions re-design and optimatizion',button: 'Download', id: 3}
  ]);

  const[fixCard, setFixCard] = useState([
    { publishedDate: '3.1.0(20.05.2015)', types: 'Fix', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Introducing Host CLoud Drive - virtual drive funcionality New Share options and menegment New, more user frindly design Sync optimizations Vaarious performance improvments and bug fixes ',button: 'Download', id: 1},
    { publishedDate: '3.1.0(20.05.2015)', types: 'Fix', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Introducing Host CLoud Drive - virtual drive funcionality New Share options and menegment New, more user frindly design Sync optimizations Vaarious performance improvments and bug fixes ',button: 'Download', id: 2},
    { publishedDate: '3.1.0(20.05.2015)', types: 'Fix', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Introducing Host CLoud Drive - virtual drive funcionality New Share options and menegment New, more user frindly design Sync optimizations Vaarious performance improvments and bug fixes ',button: 'Download', id: 3}
  ]);

  const[improvmentCard, setImprovmentCard] = useState([
    { publishedDate: '3.1.0(20.05.2015)', types: 'Improvement', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',button: 'Download', id: 1},
    { publishedDate: '3.1.0(20.05.2015)', types: 'Improvement', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',button: 'Download', id: 2},
    { publishedDate: '3.1.0(20.05.2015)', types: 'Improvement', photo: <BsPersonCircle/>, name: 'Kevin Joe', info: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',button: 'Download', id: 3}
  ]);


  const cardStyle = {

    title: {
      width: '50%',
      marginLeft: 'auto',
      marginTop: '100px'
    },

    cardPosition: {
      display: "flex",
      justifyContent: 'space-around',
      width: '80%',
    },

    cardBorder: {
      border: '1px solid lightgray',
      borderRadius: '25px',
      marginBottom: '40px',
      height: '400px',
      width: '380px',
    },

    cardInfo: {
      margin: '30px',
    },

    publishDate: {
      fontWeight: '400',
      marginBottom: '30px'
    },

    new: {
      padding: '5px 30px 5px 30px',
      backgroundColor: 'rgb(1, 200, 83)',
      borderRadius: '5px',
      marginRight: '25px'
    },

    fix: {
      padding: '5px 30px 5px 30px',
      backgroundColor: 'rgb(41, 98, 255)',
      borderRadius: '5px',
      marginRight: '25px'
    },

    improvment: {
      color: 'white',
      padding: '5px 30px 5px 30px',
      backgroundColor: 'rgb(195, 91, 255)',
      borderRadius: '5px',
      marginRight: '25px'
    },

    photo: {
      fontSize: '25px',
      position: 'relative',
      top: '5px',
      marginRight: '25px'
    },

    name: {
      fontWeight: '400',
      fontSize: '18px'
    },

    info: {
      color: 'lightgray',
      fontSize: '17px',
      marginTop: '30px',
      height: '80px'
    },

    download: {
      position: 'relative',
      top: '60px',
      color: 'rgb(72, 121,255)',
      padding: '20px 50px',
      border: '1px solid rgb(72, 121,255)',
      borderRadius: '30px',
      backgroundColor: 'white',
    }
  }

  return (
    <div>
        <UpdatesCard newCard = { newCard } fixCard = { fixCard } improvmentCard = { improvmentCard } cardStyle = {cardStyle}  title = "SecondChallange"/>
    </div>
  )
}

export default SecondChallange