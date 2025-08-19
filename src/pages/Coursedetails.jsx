import React, { useEffect, useState} from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import API from "../services/api";

function Coursedetails() {
  const { id } = useParams();
  const navigate = useNavigate()
  console.log(id);
  const [course, setCourse] = useState(null);
  const [loading,setLoading] = useState(false);

  //check login status from "user" in localstorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  const fetchCourse = async () => {
    try {
      const res = await API.get(`/course/view/${id}`);
      setCourse(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(course);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  //BookNow
  const handleBookNow =async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post(
        `/booking/create/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`, 
          },
        }
      );

      if (res.data.booking) {
        alert("Booking succesful!");
        navigate("/mybooking");
      } else {
        alert(res.data.message || "Booking failed");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
    
  };

  if (!course) {
    return <div className='text-center my-5'>Loading...</div>;
  }

  return (
    <>
        <img src="https://pninfosys.org/bannerFinal.jpg" alt="" className='w-100' style={{height:"200px"}} />
      <div className="container my-5">
        {" "}
        {/* my-5 = margin top aur bottom */}
        <div className="row">
          <div className="col-md-5">
            <img
              src={course?.image.url}
              alt={course?.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7">
            <h2>{course?.title}</h2>
            <p>{course?.description}</p>
            <p>
              <strong>Price:</strong> ₹{course?.price}
            </p>

            <button 
            className="btn btn-success"
            onClick={handleBookNow}
            disabled={loading}
            >
            {loading ? "Booking..." : isLoggedIn ? "Book Now" : "Login to Book"}
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Coursedetails