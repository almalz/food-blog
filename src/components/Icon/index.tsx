import Spinner from './Spinner'
import Search from './Search'
import ArrowRight from './ArrowRight'

export type IconType = 'spinner' | 'arrow-right' | 'search'

export type IconProps = {
  color: string
  className?: string
}

export type Props = IconProps & { variant: IconType }

const Icon: React.FC<Props> = ({ variant, color, className }) => {
  switch (variant) {
    case 'spinner':
      return <Spinner color={color} className={className} />
    case 'search':
      return <Search color={color} className={className} />
    case 'arrow-right':
      return <ArrowRight color={color} className={className} />
    default:
      return null
  }
}

export default Icon
