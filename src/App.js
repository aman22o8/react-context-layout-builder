import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeft: true, showRight: true}

  onToggleShowContent = () => {
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prev => ({showRight: !prev.showRight}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prev => ({showLeft: !prev.showLeft}))
  }

  render() {
    const {showLeft, showRight, showContent} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar: showLeft,
          showRightNavbar: showRight,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
