import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.css'

const HomeRoute = () => (
  <>
    <Header />
    <div className="main">
      <Sidebar />
      <h1>Home</h1>
    </div>
  </>
)

export default HomeRoute
