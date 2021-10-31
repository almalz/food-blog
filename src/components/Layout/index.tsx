import Navbar, { NavbarItem } from '../Navbar'

export type LayoutProps = {
  children: React.ReactNode
}

const navbatItems: Array<NavbarItem> = [
  {
    label: `Recettes`,
  },
  {
    label: `Blog`,
  },
  {
    label: `Equipements`,
  },
  {
    label: `Profil`,
  },
]

const Layout: React.FC = ({ children }) => (
  <div>
    <Navbar items={navbatItems} />
    {children}
  </div>
)

export default Layout
