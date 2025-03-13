
// import Layout from "./Layout";



import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import FetchDataExample from "./fetchingdata";
// import Greeting from "./Greeting";
import Multipleprops from "./multiplepros";
import ClickCounter from "./mouseevents";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;






// function App() {
//   return (
//     <Router>
//       <div>
//         {/* ✅ Wrap Routes inside <Routes> */}
//         <Routes>
//           {/* Main Layout Wrapper */}
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />

//             {/* Dashboard Nested Routes */}
//             <Route path="dashboard" element={<Dashboard />}>
//               <Route path="profile" element={<Profile />} />
//               <Route path="settings" element={<Settings />} />
//             </Route>
                  
//                     {/* ✅ Redirect /old-home → /home */}
//                           <Route path="/old-home" element={<Navigate to="/home" />} />

//                           {/* ✅ 404 Page for unknown routes */}
//                   <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                
            
//           </Route>
//         </Routes>

        {/* ✅ Move other components outside <Routes> */}
        {/* <FetchDataExample /> */}
        {/* <h1>This is a Props Example</h1> */}
        

        {/* <h1>This is a Multiple Arguments Props Example</h1>
        <Multipleprops name="Alice" age={25} city="New York" className="pink-text" />
        <Multipleprops name="John" age={30} city="London" className="green-text" />

        <h1>This is a Click Counter Example</h1>     
        <ClickCounter /> */}
//       </div>
//     </Router>
//   );
// }


