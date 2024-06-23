import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    },1000 );
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="success">
        <div className="successcontainer">
        <h1>You have reserved Successfully</h1>
        <br></br>
          <h1 className="counter">Redirecting to Home in {countdown} seconds...</h1>
            <br></br>
          <h1><Link className=".btngroup" to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link></h1>
        </div>
      </section>
    </>
  );
};

export default Success;