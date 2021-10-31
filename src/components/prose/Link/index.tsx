import { HTMLAttributeAnchorTarget } from 'markdown-to-jsx/node_modules/@types/react'

export type LinkProps = {
  children: React.ReactNode
  href?: string
  target?: HTMLAttributeAnchorTarget
  referrerpolicy?: ReferrerPolicy
  className?: string
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  target,
  referrerpolicy,
  className,
}) => (
  <a
    className={`${className} text-opacity-75 no-underline font-semibold text-link-light hover:text-link-regular hover:text-opacity-100 cursor-pointer transition`}
    href={href}
    target={target}
    referrerPolicy={referrerpolicy}
  >
    {children}
  </a>
)

export default Link
