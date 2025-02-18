import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Button } from "@/components/ui/button";
import Score from './pages/Score'; // Import the Score component
import Message from './components/Message';

function App() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/score');
  };

  return (
    <>
  
      <h1 className='font-bold text-3xl mb-4'>QuizWhirl</h1>
      <p className='text-gray-400 mb-4'>
        Test your knowledge and compete with others!
      </p>
    

      <div className="flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Quiz Time</CardTitle>
          </CardHeader>

          <CardContent>
            <h2 className='text-xl'>What is the Capital of France?</h2>
            <div className='m-4 flex items-center justify-center'>
              <Button variant="outline" className='m-2'>London</Button>
              <Button variant="destructive" className='m-2'>Berlin</Button>
              <Button variant="outline" className='m-2'>Paris</Button>
              <Button variant="outline" className='m-2'>Madrid</Button>
            </div>
          </CardContent>

          <CardFooter className='flex justify-center'>
            <p>Question {1} of {3}</p>
          </CardFooter>
        </Card>
      </div>

      <Button className='m-4' onClick={handleGoToDashboard}>Go to Dashboard</Button>
    </>
  );
}

// Wrap the App component with BrowserRouter and define routes
export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </Router>
  );
}