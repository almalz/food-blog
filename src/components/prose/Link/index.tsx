import { HTMLAttributeAnchorTarget } from 'markdown-to-jsx/node_modules/@types/react'

export type LinkProps = {
  children: React.ReactNode
  href?: string
  target?: HTMLAttributeAnchorTarget
  referrerpolicy?: ReferrerPolicy
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  target,
  referrerpolicy,
}) => (
  <a
    className={`no-underline font-semibold text-link hover:font-bold cursor-pointer transition`}
    href={href}
    target={target}
    referrerPolicy={referrerpolicy}
  >
    {children}
  </a>
)

export default Link
