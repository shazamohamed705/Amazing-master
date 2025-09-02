import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Gallery from './Components/Gallery/Gallery';
import Questions from './Components/Questions/Questions';
import Articles from './Components/Articles/Articles';
import Info from './Components/Info/Info';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Report from './Components/Report/Report';
import ReportResult from './Components/ReportResult/ReportResult'
import TransportOrder from './Components/TransportOrder/TransportOrder';
import Appointment from './Components/Appointment1/Appointment'; // ← ضيفي الاستيراد الجديد

let routes = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'Questions', element: <Questions /> },
      { path: 'articles', element: <Articles /> },
      { path: 'report', element: <Report /> },
      { path: 'report-result', element: <ReportResult /> }, // ← ضيفي هذا السطر
      { path: 'info', element: <Info /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
            { path: 'appointment', element: <Appointment /> }, // ← هنا مسار صفحة الحجز
      { path: 'transport-order', element: <TransportOrder /> },

    ]
  }
]);

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
