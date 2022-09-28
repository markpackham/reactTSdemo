import styles from "./select.module.css"

type SelectOptions = {
    label: string
    value: string
}

type SelectProps = {
    options: SelectOptions[]
    value?: SelectOptions
    onChange: (value: SelectOptions | undefined)=> void
}

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