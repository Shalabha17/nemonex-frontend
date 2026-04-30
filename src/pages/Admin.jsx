import { useEffect, useState } from "react";
import "../styles/Admin.css";

function Admin() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.href = "/nx-panel-portal";
  }
  const handleDelete = async(id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if(!confirmDelete) return;
      const token = localStorage.getItem("token"); 

    try{
        await fetch(`https://nemonex-backend.onrender.com/api/contact/${id}`,{
            method:"DELETE",
                headers: {
               Authorization: `Bearer ${token}`, 
       },});
        //remove from UI instantly
        setContacts((prev)=>prev.filter((c)=>c._id!==id));
    } catch (err){
        console.log(err);
    }

  };

   useEffect(() => {
  const token = localStorage.getItem("token");

  fetch("https://nemonex-backend.onrender.com/api/contact", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Unauthorized or error");
      }
      return res.json();
    })
    .then((data) => {
      setContacts(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}, []);
    const filteredContacts = contacts.filter((c) => {
    const matchesSearch =
    
  (c.name?.toLowerCase().includes(search.toLowerCase()) || "") ||
  (c.email?.toLowerCase().includes(search.toLowerCase()) || "");
  const matchesFilter =
    filter === "All" || c.service === filter;

  return matchesSearch && matchesFilter;
});
   if (loading) {
  return <h2 className="loading">Loading messages...</h2>;
}
 const serviceCounts = contacts.reduce((acc, c) => {
  acc[c.service] = (acc[c.service] || 0) + 1;
  return acc;
}, {});
  return (
  <div className="admin-container">
     <div className="admin-header">
    <h1 className="admin-title">Nemonex Admin Panel</h1>
    <div className="header-right">
      <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
    </div>
    
    </div>

    {filteredContacts.length === 0 ? (
       <p className="empty">No matching results 🔍</p>  
    ) : (

      <>
        {/*  CONTROLS */}
        <div className="controls">
          <h2>Total Messages: {filteredContacts.length}</h2>
          <div style={{ marginTop: "10px", fontSize: "14px" }}>
             <p>Software: {serviceCounts["Software Development"] || 0}</p>
             <p>Hardware: {serviceCounts["Hardware Projects"] || 0}</p>
             <p>Marketing: {serviceCounts["Digital Marketing"] || 0}</p>
          </div>

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Software Development</option>
            <option>Hardware Projects</option>
            <option>Digital Marketing</option>
            <option>Project Discussion</option>
          </select>
        </div>

        {/*  GRID */}
        <div className="grid">
           {filteredContacts.map((c) => {
  const isNew =
    new Date() - new Date(c.createdAt) < 3600000; // 1 hour

  return (
    <div
      className="contact-card"
      key={c._id}
      style={{
        border: isNew ? "2px solid #22c55e" : "",
      }}
    >
      <h3>{c.name}</h3>
      <p><span>Email:</span> {c.email}</p>
      <p><span>Service:</span> {c.service}</p>
      <p><span>Message:</span> {c.message}</p>

      <p className="date">
        {new Date(c.createdAt).toLocaleString()}
      </p>

      <button
        onClick={() => handleDelete(c._id)}
        className="delete-btn">
      
        Delete
        </button>
        </div>
     );
   })}
             
          
        </div>
      </>

    )}

  </div>
);

             
}

export default Admin;