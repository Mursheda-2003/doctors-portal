import img from "../../assets/images/chair.png"
import "./Banner.css"
const Banner = () => {
  return (
   <div className="bg-img">
     <div className=" flex flex-cols-1 max-w-7xl mx-auto gap-12 ">
      <div className="mt-20 ">
        <h1 className="text-black font-bold">Your New Smile Starts <br /> Here</h1>
        <p className="text-black mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <button className="btn btn-info text-white mt-6">GET STARTED</button>
      </div>
      <div>
        <img className="mt-20" src={img}alt="" />
      </div>
    </div>

    <div className="flex justify-center gap-6 max-w-7xl mx-auto mt-20">
    <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title">Opening Hours</h2>
    <p>Lorem Ipsum is simply dummy text of the pri</p>
  </div>
</div> 
<div className="card bg-black text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title">Visit our location</h2>
    <p>Brooklyn, NY 10036, United States</p>
  </div>
</div>
<div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title">Contact us now</h2>
    <p>+000 123 456789</p>
  </div>
</div>
    </div>
   </div>
  );
};

export default Banner;