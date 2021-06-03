import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from "./Components/Footer";



function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'resume', description: 'Portraits of people in my life' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            
            
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
