import { useRouter, NextRouter } from 'next/router'

import Link from '../prose/Link'
import LocaleSwitcher from '../LocalSwitcher'

export type NavbarItem = {
  label: string
  href?: string
  isActive?: boolean
}

export type NavbarProps = {
  items: Array<NavbarItem>
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const router: NextRouter = useRouter()

  return (
    <nav className="inline-flex w-full">
      <div className="w-20 h-10 bg-primary-regular cursor-pointer">Logo</div>
      <div className="mx-10 flex-grow flex items-center justify-end">
        {items.map((item, i) => (
          <div key={i} className="mx-4">
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}
        {router && <LocaleSwitcher />}
      </div>
    </nav>
  )
}

export default Navbar
