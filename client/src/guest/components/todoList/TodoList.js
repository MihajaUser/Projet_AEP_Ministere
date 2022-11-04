import ProgressBar from 'react-bootstrap/ProgressBar';
import App from './App';


function TodList() {
  return (
    <div>
      <ProgressBar now={20} />
      <App />
    </div>
  );
}
export default TodList;