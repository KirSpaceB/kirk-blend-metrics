//Zagjs Inports
import * as tagsInput from "@zag-js/tags-input"
import { useMachine, normalizeProps } from "@zag-js/react"

// Headless Imports
import { Fragment, useState } from "react"
import { Combobox } from "@headlessui/react"

// This component integrates a Zag input tags component with a Combobox input component.
// The main issue is that the dropdown functionality from the combobox does not interact well with the zagjs component.
const ZagJsInput1 = ({onChange, selected, ...props}: {onChange?:() => void, selected:{id:number;name:string}[]}) => {
  //Zagjs
  const [state, send] = useMachine(
    tagsInput.machine({
      id: "1",
      value: ["React", "Vue"],
    }),
  )

  const api = tagsInput.connect(state, send, normalizeProps)

  const handleInputChange = (e) => {
    if(onChange) onChange(e); // Trigger onChange from Combobox
    api.inputProps.onChange(e); // Trigger onChange from Zagjs
  }

  console.log("selected in zagjs component", selected)
  console.log("props from Combobox", props)
  console.log("props from Zagjs", api.inputProps)

  return (
    <div {...api.rootProps} className='py-2.5 border flex-wrap border-gray-200 rounded-[5px] bg-white flex items-center min-w-[44px] w-full px-[14px]'
    >
      {api.value.map((value, index) => (
        <div key={index}>
          <div {...api.getTagProps({ index, value })} className='m-1 px-2 inline-flex items-center gap-x-1 bg-gray-400 text-base text-gray-900'>
            {/* We can use div instead of span */}
            <span>{value}</span>
            {/* Remove class to see error */}
            <button {...api.getTagDeleteTriggerProps({ index, value })} 
            // className='bg-red-500 w-10 h-10'
            >
              &#x2715;
            </button>
          </div>
        </div>
      ))}
      {/* This is where you want to move your input for new tags */}
      <input
        value={selected}
        //
        //value={selected[0].name} will throw an error
        className='flex-grow h-full' 
        type="text" placeholder="Add tag..." 
        {...props}
        {...api.inputProps}
        onChange={handleInputChange} // use the consolidated handler here
      />
    </div>
  )
}

const people3 = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]
export function ShareWindowInput() {
  // Causes c.some error
  // const [selectedPerson, setSelectedPerson] = useState('');

  const [selectedPerson, setSelectedPerson] = useState(people3)
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people3
      : people3.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  const props = { multiple: true } as unknown as { multiple?: false };
  
  // Were passing filtered people to Zagjs component
  console.log("Filtered people", filteredPeople)

  return (
    // Added value and onChange and passed them down as props into ZagJsInput
    <Combobox value={selectedPerson} onChange={(person) => setSelectedPerson(person.name)} {...props}>
      {/* Render a `Fragment` instead of an `input` */}
      <Combobox.Input
        as={Fragment}
        onChange={(event) => setQuery(event.target.value)}
      >

        <ZagJsInput1 selected={filteredPeople}/> 

      </Combobox.Input>
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person.id} value={person}>
            {person.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}