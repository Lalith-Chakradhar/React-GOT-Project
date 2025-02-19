import { useEffect, useState } from 'react';
import got from '../data';
import './App.css';
import AllCards from './components/AllCards';
import AllButtons from './components/AllButtons';
import Header from './components/Header';

function App() {
  
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {

    if(selectedFilter !=='' || searchText !== '')
    {
      if(selectedFilter !=='')
      {
        let allHousesData = got.houses;

        let selectedHouseData = allHousesData.filter((house) => house.name === selectedFilter);
        let gotData = selectedHouseData.reduce((peopleData, houseData) => {
          let peopleInEachHouse = houseData.people;
          
          peopleInEachHouse.forEach(person => peopleData.push(person));

          return peopleData;
        },[]);

        setData(gotData);
      }

      if(searchText !== '')
      {

        setSelectedFilter('');
        let allHousesData = got.houses;

        let search = new RegExp(searchText, 'ig');

        let gotData = allHousesData.reduce((peopleData, houseData) => {
          let peopleInEachHouse = houseData.people;
          
          peopleInEachHouse.forEach(person => peopleData.push(person));

          return peopleData;
        },[]);

        gotData = gotData.filter((person)=> person.name.match(search));

        setData(gotData);
      }
      
    }
    else
    {
      let allHousesData = got.houses;

      let gotData = allHousesData.reduce((peopleData, houseData) => {
        let peopleInEachHouse = houseData.people;
        
        peopleInEachHouse.forEach(person => peopleData.push(person));

        return peopleData;
      },[]);

      setData(gotData);
    }
  }

  useEffect(()=>{

    fetchData();

  },[]);

  useEffect(()=>{

    fetchData();

  }, [searchText, selectedFilter]);

  return (
    <div className='h-screen w-full'>
        <Header searchText={searchText} setSearchText={setSearchText} />
        <AllButtons selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
        <AllCards data={data}/>
    </div>
  )
}

export default App
