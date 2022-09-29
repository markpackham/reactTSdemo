import { useEffect, useRef, useState } from "react"
import styles from "./select.module.css"

export type SelectOption = {
    label: string
    value: string | number
  }
  
  type MultipleSelectProps = {
    multiple: true
    value: SelectOption[]
    onChange: (value: SelectOption[]) => void
  }
  
  type SingleSelectProps = {
    multiple?: false
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
  }
  
  type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
  } 

export function Select({value, onChange, options}:SelectProps){
  const [isOpen, setIsOpen] = useState(false)

    return (
        <div
        onBlur={()=> setIsOpen(false)}
        onClick={()=> setIsOpen(prev => !prev)}
        tabIndex={0} 
        className={styles.container}
        >
        <span className={styles.value}>{value?.label}</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        
        <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map(option => (
          <li key={option.label} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>

        </div>
    )
}