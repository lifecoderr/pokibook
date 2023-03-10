import './Layout.css';

import Header from '@components/Header';

const Layout = ({ children }) => {
  return (
    <div className='layout'>

      <Header />
      <main>
        {children}
      </main>

    </div>

  )
}

export default Layout