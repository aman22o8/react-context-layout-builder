// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body_container">
          {showLeftNavbar && (
            <div className={`leftnavbar_container  `}>
              <h1 className="body_heading">Left Navbar menu</h1>
              <ul className="list_items_main">
                <li className="list_items_heading">Item 1</li>
                <li className="list_items_heading">Item 2</li>
                <li className="list_items_heading">Item 3</li>
                <li className="list_items_heading">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className={`middle `}>
              <h1 className="body_heading">Content</h1>
              <p className="list_items_heading">
                Lorem ipsum bhgy bfrvf gbbk fdbokpfm sdpdsokvs osvpvkdvpsdvok
                vfofvjosv vsoivjvios vsovvisoiv vcced cqdqcqc ddvperib bpgyrnk;
                g;krtnkm dbirjg pvwogkvgok{' '}
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className={`rightnavbar_container `}>
              <h1 className="body_heading">Right Navbar menu</h1>
              <p className="addbar">Ad 1</p>
              <p className="addbar">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
