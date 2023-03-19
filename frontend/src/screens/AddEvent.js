//import React, { useState } from "react";
//import { useDispatch } from "react-redux";
//import { addEventAction } from "./../actions/eventActions";
// import {addEventAction} from './../actions/eventActions';

// function AddEvent() {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [link, setLink] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [location, setLocation] = useState("");
//   const [image, setImage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addEventAction(title, description, link, date, time, location, image));
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <h1 className="text-center">Add Event</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="title"
//                 placeholder="Enter title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 className="form-control"
//                 id="description"
//                 rows="3"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label htmlFor="link">Link</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="link"
//                 placeholder="Enter link"
//                 value={link}
//                 onChange={(e) => setLink(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="date">Date</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="date"
//                 placeholder="Enter date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="time">Time</label>
//               <input
//                 type="time"
//                 className="form-control"
//                 id="time"
//                 placeholder="Enter time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="location">Location</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="location"
//                 placeholder="Enter location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="image">Image</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="image"
//                 placeholder="Enter image"
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

//export default AddEvent;
