import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './comps/Sidebar';
import Home from './pages/Home';
import Contact from './pages/Contacts';
import Products from './pages/Products';
import About from './pages/About';
import Course from './pages/Course';
import CourseEnroll from './pages/CourseEnroll';
import MainLay from './comps/MainLay';

function App() {
	return (
		<Router>
			<Sidebar />
			<Switch>
				<Route path="/" exact component={MainLay} />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/products" exact component={Products} />
				<Route path="/course/:id" exact component={Course} />
				<Route path="/course/:id/enroll" exact component={CourseEnroll} />
			</Switch>
		</Router>
	);
}

export default App;
