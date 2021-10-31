import Link from '../prose/Link'

type NavbarItem = {
  label: string
  href?: string
  isActive?: boolean
}

export type NavbarProps = {
  items: Array<NavbarItem>
}

const Navbar: React.FC<NavbarProps> = ({ items }) => (
  <nav className="inline-flex">
    {items.map((item) => (
      <div className="mx-4">
        <Link href={item.href}>{item.label}</Link>
      </div>
    ))}
  </nav>
)

export default Navbar
