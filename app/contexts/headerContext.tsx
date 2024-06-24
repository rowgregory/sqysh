'use client'

import { createContext, useReducer, useContext } from 'react'

const initialState = {
  toggleNavigation: false
}

export const HeaderContext = createContext({
  toggleNavigation: false,
  setToggleNavigation: (toggle: boolean) => toggle
})

const headerReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_TOGGLE_NAVIGATION':
      return {
        ...state,
        toggleNavigation: action.payload
      }
    default:
      return { ...state }
  }
}

export const HeaderProvider = (props: any) => {
  const [state, dispatch] = useReducer(headerReducer, initialState)

  const setToggleNavigation = (toggleNavigation: boolean) =>
    dispatch({ type: 'SET_TOGGLE_NAVIGATION', payload: toggleNavigation })

  return (
    <HeaderContext.Provider
      value={{
        toggleNavigation: state.toggleNavigation,
        setToggleNavigation
      }}
      {...props}
    />
  )
}

export const useHeaderContext = () => useContext(HeaderContext)
