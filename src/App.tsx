import CompImg from './ComponenteImg';
import HocComponent from './HocPattern';
import './index.css'

function App() {
  const api = "https://dog.ceo/api/breed/labrador/images/random/20";
 const CompHocImg = HocComponent(CompImg, api);
  return (
    <div className="grid">
    <CompHocImg/>
    </div>
  )
}
export default App
