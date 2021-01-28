import Form from "./components/form";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
	return (
		<div className='container p-3'>
			<div className='row'>
				<div className='col-md-8 mx-auto p-0 card'>
					<h1 className='mb-1 display-1 text-center'>Personal Information</h1>
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
