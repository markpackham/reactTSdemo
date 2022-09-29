import { useEffect, useRef, useState } from "react"
import styles from "./select.module.css"

export type SelectOption = {
    label: string
    value: string | number
  }
    
  type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
  } 

export function Select({value, onChange, options}:SelectProps){
  const [isOpen, setIsOpen] = useState(false)

  function clearOptions(){
    onChange(undefined)
  }

  function selectOption(option: SelectOption){
    onChange(option)
  }

  function isOptionSelected(option: SelectOption){
    return option === value
  }

    return (
        <div
        onBlur={()=> setIsOpen(false)}
        onClick={()=> setIsOpen(prev => !prev)}
        tabIndex={0} 
        className={styles.container}
        >
        <span className={styles.value}>{value?.label}</span>
        <button 
        onClick={(e =>{
          e.stopPropagation()
          clearOptions()
        })} 
        className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        
        <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map(option => (
          <li 
          onClick={e =>{
            e.stopPropagation()
            selectOption(option)
            setIsOpen(false)
          }}
          key={option.label} 
          className={`${styles.option} ${
            isOptionSelected(option) ? styles.selected : ""}`}>
            {option.label}
          </li>
        ))}
      </ul>

        </div>
    )
}