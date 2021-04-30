import Header from './Header'
import Faq from './Faq'
import Footer from './Footer'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import SaltForm from './SaltForm'



const App = () => {

  return (
      <BrowserRouter>
        <div className="container">
          <Header />
            <Switch>
              <Route exact path="/" component={SaltForm}/>
              <Route exact path="/faq" component={Faq}/>
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App