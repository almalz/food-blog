import Icon, { IconType } from '../Icon'
import * as theme from '../../../tailwind.config'

const colors = theme.theme.extend.colors

export type ButtonProps = {
  label?: string
  variant?: 'solid' | 'outline' | 'text'
  onClick?: () => void
  color?: 'primary' | 'secondary'
  disabled?: boolean
  loading?: boolean
  iconType?: IconType
  iconPosition?: 'left' | 'right'
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  variant = 'solid',
  onClick,
  color = 'primary',
  loading,
  disabled,
  iconType,
  iconPosition,
}) => (
  <button
    className={`
      inline-flex items-center px-4 py-2 text-medium rounded-md transition east-in-out
      ${
        variant === 'solid' &&
        `bg-${color}-regular text-${color}-text hover:bg-${color}-dark active:ring active:ring-${color}-regular active:ring-offset-2`
      }
      ${
        variant === 'outline' &&
        `bg-transparent text-${color}-regular border-2 border-${color}-regular hover:bg-${color}-lighter active:ring active:ring-${color}-regular active:ring-offset-2`
      }
      ${
        variant === 'text' &&
        `bg-transparent text-${color}-regular hover:bg-${color}-lighter`
      }
      ${
        loading
          ? 'cursor-wait'
          : disabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer'
      }
    `}
    onClick={onClick}
    disabled={disabled}
  >
    {iconPosition === 'left' && iconType && (
      <Icon
        className="-ml-1 mr-3"
        variant={loading ? 'spinner' : iconType}
        color={
          variant === 'solid'
            ? colors.white
            : color === 'primary'
            ? colors.primary.regular
            : colors.secondary.regular
        }
      />
    )}
    {label}
    {children}
    {iconPosition === 'right' && iconType && (
      <Icon
        className="-mr-1 ml-3"
        variant={loading ? 'spinner' : iconType}
        color={
          variant === 'solid'
            ? colors.white
            : color === 'primary'
            ? colors.primary.regular
            : colors.secondary.regular
        }
      />
    )}
  </button>
)

export default Button
