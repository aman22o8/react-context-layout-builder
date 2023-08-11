// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showRightNavbar,
        showLeftNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const mychangecontent = () => {
        onToggleShowContent()
      }
      const mychangeleft = () => {
        onToggleShowLeftNavbar()
      }
      const mychangeright = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configuration_container">
          <h1 className="confriguation_heading">Layout</h1>
          <ul className="list_container">
            <li className="each_list">
              <input
                onChange={mychangecontent}
                checked={showContent}
                type="checkbox"
                id="content"
              />
              <label className="list_heading" htmlFor="content">
                Content
              </label>
            </li>
            <li className="each_list">
              <input
                checked={showLeftNavbar}
                onChange={mychangeleft}
                value="left navbar"
                type="checkbox"
                id="leftnavbar"
              />
              <label className="list_heading" htmlFor="leftnavbar">
                Left Navbar
              </label>
            </li>
            <li className="each_list">
              <input
                checked={showRightNavbar}
                onChange={mychangeright}
                value="right navbar"
                type="checkbox"
                id="rightnavbar"
              />
              <label className="list_heading" htmlFor="rightnavbar">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
