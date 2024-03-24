// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import SideBar from "./components/Sidebar/SideBar";
// // import SideBarAlt1 from "./components/SidebarAlt1/SideBarAlt1"; // Import alternative sidebar components
// // import SideBarAlt2 from "./components/SidebarAlt2/SideBarAlt2";
// // import SideBarAlt3 from "./components/SidebarAlt3/SideBarAlt3";
// // import SideBarAlt4 from "./components/SidebarAlt4/SideBarAlt4";
// import ITSidebar from "./components/Sidebar/ITSidebar";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Users from "./pages/Users";
// import UsersList from "./pages/UserList";
// import Attendence from "./pages/Messages";
// import FileManager from "./pages/FileManager";
// import ReviewList from "./pages/ReviewList";
// import Form from "./pages/Form/Form";
// import Saved from "./pages/Saved";
// import Setting from "./pages/Setting";
// import Login from "./components/Login/Login";
// import Navbar from "./components/Navbar/Navbar";
// import './App.css';

// function App() {
//   const [isLoggedIn, setLoggedIn] = useState(false);
//   const [department, setDepartment] = useState('');

//   useEffect(() => {
//     // Check if user is logged in using data from local storage
//     const storedDepartment = localStorage.getItem("department");
//     const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setDepartment(storedDepartment);
//     setLoggedIn(loggedIn);
//     // console.log('deepartment' + storedDepartment);
//   }, []);

//   const handleLogin = () => {
//     // Simulate a login action and set login status to true in local storage
//     setLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "true");
//   };

//   const departmentSidebarMap = {
//     'MD': <SideBar />,
//     // 'Finance': <SideBarAlt1 />,
//     // 'HR': <SideBarAlt2 />,
//     // 'Marketing': <SideBarAlt3 />,
//     // 'Sales': <SideBarAlt4 />,
//     'IT': <ITSidebar />
//     // Add more departments and corresponding sidebar components as needed
//   };

//   return (
//     <Router>
// {/* { departmentSidebarMap[department] ?(
//             isLoggedIn ?
//              ( */}

//       {isLoggedIn ? (
//         departmentSidebarMap[department] ?
//          (

//           <>
//             <Navbar />
//             {departmentSidebarMap[department]}
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/users" element={<Users />} />
//               <Route path="/userlist" element={<UsersList />} />
//               <Route path="/messages" element={<Attendence />} />
//               <Route path="/analytics" element={<ReviewList />} />
//               <Route path="/file-manager" element={<FileManager />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/saved" element={<Saved />} />
//               <Route path="/settings" element={<Setting />} />
//               <Route path="*" element={<>not found</>} />
//             </Routes>
//           </>
//         ) : (
//           <div>Invalid department</div>
//         )
//       ) : (
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           {/* Add a redirect if already logged in */}
//           <Route path="/login" element={<Navigate to="/" />} />
//           {/* Add other routes for non-logged-in state if needed */}
//         </Routes>
//       )}
//     </Router>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import ITSidebar from "./components/Sidebar/ITSidebar";
import HRSidebar from "./components/Sidebar/HRSidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddUser from "./pages/AddUser";
import UsersList from "./pages/UserList";
import Attendence from "./pages/Attendence";
import FileManager from "./pages/FileManager";
import ReviewList from "./pages/ReviewList";
import Form from "./pages/Form/Form";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ApplyLeave from "./pages/ApplyLeave";
import AdminSettings from "./pages/AdminSettings";
import LeaveApprovalPage from "./pages/LeavesApproval";
import AddCandidate from "./pages/AddCandidate";
import CandidateList from "./pages/CandidateList"
import Visitor from "./pages/Visitor"
import ViewVisitor from "./pages/ViewVisitor"
import ReceptionSidebar from "./components/Sidebar/ReceptionSidebar"
import ClientDataForm from "./pages/ClientDataForm";
import SalesSidebar from "./components/Sidebar/SalesSidebar";
import ClientsList from "./pages/ClientsList";
import InterviewAssignList from './pages/InterviewAssignedList';
import FinalCandidateList from "./pages/FinalCandidateList";
import Operation from "./components/Sidebar/Operation";
import MDSidebar from "./components/Sidebar/DirectorSidebar";
import Calling from "./pages/Calling";
import MDBData from './pages/MDBData';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [department, setDepartment] = useState("");
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {

    // Check if user is logged in using data from local storage.

    const storedDepartment = localStorage.getItem("department");
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setLoggedIn(loggedIn);
    setDepartment(storedDepartment);
    setLoading(false);
    // Delay for loading simulation
  }, []);

  const handleLogin = () => {
    // Simulate a login action and set login status to true in local storage

    setTimeout(() => {
      window.location.reload();
    }, 1000);
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const departmentSidebarMap = {
    OPERATIONS: <Operation />,
    IT: <ITSidebar />,
    HR: <HRSidebar />,
    RECEPTION: <ReceptionSidebar />,
    SALES: <SalesSidebar />,
    MD: <MDSidebar />
    // Add more departments and corresponding sidebar components as needed
  };

  return (
    <Router>
      {isLoading ? (
        <div>Loading...</div>
      ) : isLoggedIn && department in departmentSidebarMap ? (
        <>
          <Navbar />
          {departmentSidebarMap[department]}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/AddUsers" element={<AddUser />} />
            <Route path="/userlist" element={<UsersList />} />
            <Route path="/messages" element={<Attendence />} />
            <Route path="/analytics" element={<ReviewList />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/form" element={<Form />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/attendence" element={<Attendence />} />
            <Route path="/applyleave" element={<ApplyLeave />} />
            <Route path="/leaveapproval" element={<LeaveApprovalPage />} />
            <Route path="/AddCandidate" element={<AddCandidate />} />
            <Route path="/candidateList" element={<CandidateList />} />
            <Route path="/visitor" element={<Visitor />} />
            <Route path="/seevisitor" element={<ViewVisitor />} />
            <Route path="/client/form" element={<ClientDataForm />} />
            <Route path="/clients/list" element={<ClientsList />} />
            <Route path="/InterviewAssignList" element={<InterviewAssignList />} />
            {/* <Route path="/final/candidate/list" element={<InterviewAssignList />} /> */}
            <Route path="/final/candidate/list" element={<FinalCandidateList/>} />
            <Route path="/mdb" element={<MDBData/>} />


            <Route path="/adminsettings" element={<AdminSettings />} />
            <Route path="/calling" element={<Calling/>} />
            <Route path="*" element={<>not found</>} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          {/* Add a redirect if already logged in */}
          <Route path="/login" element={<Navigate to="/" />} />
          {/* Add other routes for non-logged-in state if needed */}
        </Routes>
      )}
    </Router>
  );
}

export default App;
