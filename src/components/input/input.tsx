export enum TypesButton {
  primary = 'primary'
}

type Props = {
  fieldName: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  messageError: string
  placeholder: string
}

const Button: React.FC<Props> = ({
  fieldName,
  onChange,
  value,
  placeholder,
  messageError
}) => (
  <div className="c-input">
    <label className="u-hide-element" htmlFor={fieldName}>
      Usuário
    </label>
    <input
      id={fieldName}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      aria-describedby={`${fieldName}_error`}
    />
    <span id={`${fieldName}_error`} role="alert">
      {messageError}
    </span>
  </div>
)

export default Button
