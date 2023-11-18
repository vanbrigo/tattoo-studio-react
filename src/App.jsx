
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body'

export default function App() {
  return <div className='appDesign'>
    <Header/>
    <Body />
  </div>
}


