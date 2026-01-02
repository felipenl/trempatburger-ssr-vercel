import MenuCategories from '@components/carta/categories'
import MenuSidebar from '@components/carta/sidebar'
import type { MetaFunction } from 'react-router'
import info from '@assets/contact-info.json'

export const meta: MetaFunction = () => [
  { title: info.pages.menu.title },
  { name: 'description', content: info.pages.menu.description },
]

function Menu() {
  return (
    <div className="menu-page">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[12rem_1fr]">
          <MenuSidebar />
          <MenuCategories />
        </div>
      </div>
    </div>
  )
}

export default Menu
