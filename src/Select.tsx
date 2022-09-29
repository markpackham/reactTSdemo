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
  } & (SingleSelectProps | MultipleSelectProps)

export function Select({value, onChange, options}:SelectProps){
    return (
        <div className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        </div>
    )
}