import "./style/style.css";
import SantaImg from './images/santa.png'
import treeImg from "./images/tree.png";
import PrticalBg from "./components/PrticalBg";
function App() {
	return (
		<>
			<PrticalBg />
			<div className="Christmas-tempelate">
				<div className="main-section">
					<div className="santa-image">
						<img src={SantaImg} alt="" />
					</div>

					<div className="trees-image">
						<img src={treeImg} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
