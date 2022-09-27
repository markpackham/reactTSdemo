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

}