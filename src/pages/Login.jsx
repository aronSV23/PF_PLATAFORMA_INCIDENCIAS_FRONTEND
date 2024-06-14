import { useMutation } from "@tanstack/react-query"
import { useContext, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"

export const Login = () => {
  const { loginUser, isAutenticated } = useContext(UserContext)
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => navigate('/dashboard'),
    onError: (error) => alert(error.response.data.message),
  });

  const handleSubmit = async e => {
    e.preventDefault();
    let [inputCorreo, inputContraseña] = e.target;

    loginMutation.mutate({
      contraseña: inputContraseña.value,
      correo: inputCorreo.value,
    });
  };

  useEffect(()=>{
    if(isAutenticated) navigate("/")
  },[isAutenticated])

  return (
    <div className="flex justify-center content-center items-center font-NotoSans flex-col py-[27px] px-[72px] w-screen min-h-screen">
      <div className="w-[473.83px] flex flex-col gap-6  h-[544.37px] rounded-3xl border-[#BDBDBD] border-[1px] p-14 ">
        <header className="flex flex-col gap-4">
          <div className="flex items-center  text-[16px] leading-[24.52px] font-semibold content-center gap-3 text-[#F0402C]">
            <h2 className="text-4xl text-gray-600">Resident Report</h2>
          </div>
          <h2 className="w-[318.88px] text-[18px] leading-[24.52px] text-[#333333] font-semibold py-2">
            Login
          </h2>
        </header>
        <main>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 " placeholder="Email" required />
              </div>
            </label>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 " placeholder="Password" required />
              </div>
            </label>
            <button type="submit" className="w-full bg-[#2F80ED] h-[40px] rounded-lg text-[16px] leading-[21.79px] font-semibold text-white hover:bg-[#1161c9] ">
              Login
            </button>
          </form>
          <div className="flex w-full justify-center gap-1 text-center items-center  text-[14px] leading-[19.07px] pt-8 font-normal">
            <h4 className="text-[#828282]">
              Don’t have an account yet?
            </h4>
            <NavLink to='/register' className="text-blue-400 underline">Register</NavLink>
          </div>
        </main>
      </div>
      <footer className="pt-2 px-1 pb-12 flex justify-between w-[473.83px] text-[14px] leading-[19.07px] text-[#828282]">
        <p className="font-normal">created by <span className="underline font-semibold">aronSV</span></p>
        <p className="font-normal">devChallenges.io</p>
      </footer>
    </div>
  )
}
