import reactImage from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)]

  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function CoreConcept({title, description, image}){
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function CoreConceptList() {
  const listOfConcepts = []

  CORE_CONCEPTS.forEach(concept => {
    listOfConcepts.push(
      // es posible utilizar el operador ... porque las propiedades
      // del objeto tienen el mismo nombre que las props en el componente
      <CoreConcept {...concept} key={concept.title}/>
    )
  })

  return (
    listOfConcepts
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConceptList/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
