import styles from './styles.module.css';
import './index.css';
import Navbar from './components/home/Navbar';
import HomePage from './components/home/HomePage';

function App() {
	return (
		<div className={styles.app + 'App'}>	
			<Navbar />
			<HomePage />
		</div>
	);
}

export default App;
