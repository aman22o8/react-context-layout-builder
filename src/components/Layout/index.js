// Write your code here
import Body from '../Body'
import './index.css'

const Layout = () => (
  <div className="layout_container">
    <div className="header_container">
      <h1 className="heading">Header</h1>
    </div>
    <Body />
    <div className="header_container">
      <h1 className="heading">Footer</h1>
    </div>
  </div>
)

export default Layout
