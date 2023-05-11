import './style.css'
import Attribution from './components/Attribution';
import Rating from './components/Rating';
import Thanks from './components/Thanks';

const app = document.getElementById('app');

app.innerHTML += Rating;
app.innerHTML += Attribution;
app.innerHTML += Thanks;