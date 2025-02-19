import { useEffect, useState } from 'react';
import got from '../data';
import './App.css';
import Card from './components/Card';

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
       <header className=' h-36 bg-blue-500 flex flex-col items-center justify-evenly mb-6'>
        <h1 className='text-white text-2xl font-bold'>👑 Peoples of GOT</h1>
        <input type='text' className='w-64 p-2 text-sm outline-none rounded-sm' value={searchText} placeholder='Search the people of GOT' onChange={(e) => setSearchText(e.target.value)}/>
       </header>

       <main>
        <section className='flex flex-wrap gap-2 justify-center mb-16'>
          <button className={`${selectedFilter === 'Starks' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Starks')}>Starks</button>
          <button className={`${selectedFilter === 'Lannisters' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Lannisters')}>Lannisters</button>
          <button className={`${selectedFilter === 'Baratheons' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Baratheons')}>Baratheons</button>
          <button className={`${selectedFilter === 'Targaryens' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Targaryens')}>Targaryens</button>
          <button className={`${selectedFilter === 'Greyjoys' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Greyjoys')}>Greyjoys</button>
          <button className={`${selectedFilter === 'Tyrells' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Tyrells')}>Tyrells</button>
          <button className={`${selectedFilter === 'Tullys' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Tullys')}>Tullys</button>
          <button className={`${selectedFilter === 'Redwyne' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Redwyne')}>Redwyne</button>
          <button className={`${selectedFilter === 'Freys' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Freys')}>Freys</button>
          <button className={`${selectedFilter === 'Arryns' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Arryns')}>Arryns</button>
          <button className={`${selectedFilter === 'Dothrakis' ? 'bg-white text-black border border-black' : 'bg-black text-white'} px-4 py-1 rounded-md`} onClick={()=> setSelectedFilter('Dothrakis')}>Dothrakis</button>
        </section>

        <section className='flex flex-wrap gap-10 w-3/4 mx-auto justify-center'>
          {(data) && (
            data.map((gotCharacter,index)=>{
             return <Card key={index} gotCharacter = {gotCharacter}/>
            })
          )}
        </section>
       </main>
    </div>
  )
}

export default App
