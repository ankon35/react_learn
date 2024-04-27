
import './App.css'
import ContactHeader from './component/ConatctHeader/ContactHeader'
import ContactForm from './component/ContactForm/ContactForm'
import Navigation from './component/Navigation/Navigation'

function App() {
  

  return (
    <div>
      <Navigation />
      <main 
      className='main_container'>
      <ContactHeader />
      <ContactForm />
      </main>
    </div>
  )
}

export default App
