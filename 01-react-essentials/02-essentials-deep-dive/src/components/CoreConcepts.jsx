import CoreConcept from "./CoreConcept"
import Section from "./Section"
import { CORE_CONCEPTS } from "../data"


export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title='Core Concepts'>
      <ul>
        {CORE_CONCEPTS.map(concept => <CoreConcept key={concept.title} {...concept}/>)}
      </ul>
    </Section>
  )
}

