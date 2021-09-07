import { FaArrowRight } from 'react-icons/fa'

export enum TypesButton {
  primary = 'primary'
}

type Props = {
  onClick: (event: React.FormEvent) => void
  type: TypesButton
  text: string
}

const Button: React.FC<Props> = ({ onClick, type, text }) => (
  <button
    onClick={onClick}
    type="button"
    className={`c-button c-button--${type}`}
  >
    {text}
    <span>
      <FaArrowRight />
    </span>
  </button>
)

export default Button
