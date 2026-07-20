import ProfileCard from "./components/ProfileCard";


function App() {
  return (
    <>
        <ProfileCard 
          name='Mit'
          age ={20}
          profession = 'Student'
          city = 'Porbandar'
        />

        <ProfileCard 
          name='Ronaldo'
          age ={43}
          profession = 'Footballer'
          city = 'Portugal'
        />

        <ProfileCard 
          name='M. s. Dhoni'
          age ={45}
          profession = 'Cricketer'
          city = 'Porbandar'
        />

        <ProfileCard 
          name='Annie January'
          age ={32}
          profession = 'Ex Super 7 Member'
          city = 'New York'
        />

        <ProfileCard 
          name='Jon Snow'
          age ={39}
          profession = 'Lord Commander'
          city = 'Castle Black'
        />
    </>
  );
}

export default App
