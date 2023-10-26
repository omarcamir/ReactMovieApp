// import React, { useEffect, useState } from 'react'
// import "./MovieDetails.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay , faHeart } from '@fortawesome/free-solid-svg-icons';
// import { useParams } from 'react-router-dom';
// import axios from "axios";

// function MovieDetails() {

//     const param = useParams();
//     console.log(param)
//     const [details, setDetails] = useState([]);
//     const getDetails = async ()=>{
//         const response = await axios.get(`https://api.themoviedb.org/3/${param.media_type}/${param.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`)
//         setDetails(response.data.results)
//       }
      
//       useEffect(() => {
//         getDetails()
//       }, []);

//       const imageUrl = `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`;

//       const coverStyle = {
//         backgroundImage: `url(${imageUrl})`,
//       };
//   return (
//     <div className="movie-details">
//         <div className="cover w-100" 
//         style={coverStyle} >
//         </div>
//         <div className="content position-absolute w-100">
//             <div className="container py-5">
//                 <div className="row w-100">
//                     <div className="col-sm-12 col-md-4">
//                         <img className='w-100 d-block' src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="" />
//                     </div>
//                     <div className="col-sm-12 col-md-8">
//                         <div className="details d-flex flex-column justify-content-between text-color py-4 w-100">
//                             <h6>2020</h6>
//                             <h2>The Gentleman</h2>
//                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam impedit incidunt libero sed deserunt ad deleniti consequuntur molestias veritatis adipisci! Laudantium, ut possimus dicta a ex quaerat autem ducimus hic porro, quo voluptates et eius architecto quia inventore, molestiae esse. Earum cumque amet et laboriosam, facilis fugit placeat nisi eaque?</p>
//                             <div className="row justify-content-between align-items-center mt-5 w-100 py-3">
//                                 <div className="col-md-12 col-lg-4">
//                                     <div className="trailer d-flex align-items-center pe-">
//                                     <div className="circle  border border-2 border-light d-flex justify-content-center align-items-center">
//                                     <FontAwesomeIcon className='text-center fs-3 icon-link-hover' icon={faPlay} />
//                                     </div>
//                                     <p className='ms-2 fw-bold text-capitalize'>Watch The Trailer</p>
//                                 </div>
//                                 </div>
//                                 <div className="col-md-12 col-lg-8">
//                                     <ul className="d-sm-block d-md-flex justify-content-around align-items-center ps-0 mb-0">
//                                         <li className='mx-3 ps-sm-4'>2h 36min</li>
//                                         <li className='mx-3 ps-sm-4'>Biography, lorem, Historical</li>
//                                         <li className='mx-3 ps-sm-4'>July 18, 2020</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className=" black-details d-flex justify-content-start justify-content-md-between align-items-center flex-wrap">
//                             <div className="col-md-12 col-lg-8">
//                                 <div className="d-flex">
//                                     <p className='rate m-5 px-3'><span className=" fs-1 fw-bold">8.4</span> <sub className='fw-bold'>IMDb</sub></p>
//                                     <div className="d-flex flex-column justify-content-center">
//                                         <p className='text-muted'>status</p>
//                                         <p className='text-dark fw-bold'>Released</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-12 col-lg-4">
//                                 <div className="d-flex justify-content-center justify-content-lg-end align-items-center">
//                                     <button className='btn btn-dark fs-2 px-4 mx-2'>+</button>
//                                     <button className='btn btn-light fs-2 px-4 mx-2'>
//                                     <FontAwesomeIcon icon={faHeart} />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default MovieDetails