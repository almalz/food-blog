import Link from '../prose/Link'

export type NavbarItem = {
  label: string
  href?: string
  isActive?: boolean
}

export type NavbarProps = {
  items: Array<NavbarItem>
}

const Navbar: React.FC<NavbarProps> = ({ items }) => (
  <nav className="inline-flex w-full">
    <div className="w-20 h-10 bg-primary-regular cursor-pointer">Logo</div>
    <div className="flex-grow flex items-center justify-end">
      {items.map((item) => (
        <div className="mx-4">
          <Link href={item.href}>{item.label}</Link>
        </div>
      ))}
    </div>
  </nav>
)

export default Navbar
