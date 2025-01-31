import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { AiFillCaretLeft } from "react-icons/ai";


const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
    {/* <Link to="/">
            <AiFillCaretLeft />
    </Link> */}
         <div className="flex  h-screen justify-center gap-40 py-5 ">
   <div className='border-solid border-2 border-slate-400 rounded-md max-h-fit mt-16 px-3 '>
    <h1 className="text-center text-xl mt-10 font-bold">SignUp</h1>
   <form onSubmit={handleSubmit()}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label htmlFor="" className="text-xl">Name</label>
        <br />
        <input className="mb-5 focus:outline-none px-2 py-2 w-96 border-solid border-2  rounded	" {...register("email")} />
      </div>
      <div>
        <label htmlFor="" className="text-xl">Email</label>
        <br />
        <input className="mb-5 focus:outline-none px-2 py-2 w-96 border-solid border-2  rounded	" {...register("email")} />
      </div>
      <div>
        <label htmlFor="" className="text-xl">Password</label>
        <br />
        <input className="focus:outline-none px-2 py-2 w-96 border-solid border-2 rounded	" {...register("pasword")} />
      </div>
      <input className="btn mt-5 bg-black hover:bg-black text-white w-96 mb-2" type="submit" value="Login" />
    </form>
    <div>
      <Link className='text-black'>
      Forgot Password ?
      </Link>
    </div>
    <p className="mt-5 text-black text-center">New to Doctors Portal?<Link className="text-teal-500" to="/login">Create new account</Link></p>
     <div className="divider">OR</div>
    <Link className="btn mt-4 bg-white hover:bg-white text-black w-96 border-slate-500"   to="/signup">CONTINUE WITH GOOGLE</Link>
    <div className="flex gap-5 mt-5 justify-center">
    </div>
   </div>
    </div>
  </div>
  );
};

export default SignUp;