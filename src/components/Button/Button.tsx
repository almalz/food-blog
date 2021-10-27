export interface Props {
  label?: string
  variant?: 'solid' | 'outline' | 'text'
  onClick?: () => void
  color?: 'primary' | 'secondary'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button: React.FC<Props> = ({
  children,
  label,
  variant = 'primary',
  onClick,
  color = 'primary',
  loading = false,
  icon,
  iconPosition,
}) => (
  <button className="bg-primary-medium text-blue-500">
    {label}
    {children}
  </button>
)

export default Button
