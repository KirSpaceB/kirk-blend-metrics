import { Dispatch, ReactNode, SetStateAction, createContext,useState } from "react";
interface IAvatarEditorImageContext {
  children: ReactNode;
}
interface IAvatarEditorImageCreateContext {
  imageVal:string,
  setImageVal: Dispatch<SetStateAction<string>>
}

export const AvatarEditorImageContext = createContext<IAvatarEditorImageCreateContext>
(
  {
    imageVal: '',
    setImageVal: () => {}
  }
);


export const AvatarEditorImageContextProvider = ({children}: IAvatarEditorImageContext) => {
  const [imageVal, setImageVal] = useState(''); // Match initial state

  return (
    <AvatarEditorImageContext.Provider value={{imageVal, setImageVal}}>
      {children}
    </AvatarEditorImageContext.Provider>
  )

}