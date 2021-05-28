import React, { createContext, useContext, useState } from 'react'

export const TimersContext = createContext();

export default function TimersProvider({ children, data, setData }) {
   const [update, setUpdate] = useState(true)
   const [edit, setEdit] = useState(null)
   const [animKey, setAnimKey] = useState(0)
   const [label, setLabel] = useState('')
   const [callModal, setCallModal] = useState(false);
   const [menu, callMenu] = useState(false);

   return (
      <TimersContext.Provider
         value={{
            update,
            setUpdate,
            data,
            setData,
            animKey,
            setAnimKey,
            edit,
            setEdit,
            callModal,
            setCallModal,
            menu,
            callMenu,
            label,
            setLabel,
         }}
      >
         { children }
      </TimersContext.Provider>
   )
}

export function useTimersContext() {
   const contextData = useContext(TimersContext)
   const { data, setData } = contextData

   const contextUpdate = useContext(TimersContext)
   const { update, setUpdate } = contextUpdate

   const contextEdit = useContext(TimersContext)
   const { edit, setEdit } = contextEdit
   
   const contextLabel = useContext(TimersContext)
   const { label, setLabel } = contextLabel

   const contextModal = useContext(TimersContext)
   const { callModal, setCallModal } = contextModal

   const contextMenu = useContext(TimersContext)
   const {menu, callMenu} = contextMenu
   
   const contextAnim = useContext(TimersContext)
   const {animKey, setAnimKey} = contextAnim
   
   return { update, setUpdate, data, setData, animKey, setAnimKey, edit, setEdit, label, setLabel, callModal, setCallModal, menu, callMenu } 
}