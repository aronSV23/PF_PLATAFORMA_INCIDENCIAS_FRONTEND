import { useMutation } from "@tanstack/react-query"
import { useContext, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"


export const Register = () => {

  const { registerUser, isAutenticated } = useContext(UserContext)
  const navigate = useNavigate()

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => navigate('/dashboard'),
    onError: (error) => alert(error.response.data.message),
  });

  const handleSubmit = async e => {
    e.preventDefault();
    let [inputUsername, inputNombre, inputCorreo, inputContraseña, inputDni] = e.target;
    registerMutation.mutate({
      nombre_completo: inputNombre.value,
      nombre_usuario: inputUsername.value,
      contraseña: inputContraseña.value,
      correo: inputCorreo.value,
      dni: inputDni.value
    });
  };

  useEffect(() => {
    if (isAutenticated) navigate("/")
  }, [isAutenticated])


  return (
    <div className="flex justify-center content-center items-center font-NotoSans flex-col py-[27px] px-[72px] w-screen min-h-screen">
      <div className="w-[473.83px] flex flex-col gap-6  h-[634.3px] rounded-3xl border-[#BDBDBD] border-[1px] p-14 ">
        <header className="flex flex-col gap-4">
          <div className="flex text-4xl items-center  leading-[24.52px] font-semibold content-center gap-3 text-[#F0402C]">
            <h2 className=" text-gray-600">Resident Report</h2>
          </div>
          <h2 className="w-[318.88px] text-[18px] leading-[24.52px] text-[#333333] font-semibold">
            Únete al equipo y ayudanos a mejorar
          </h2>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre_usuario" className="block mb-2 text-sm font-medium text-gray-900">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                </div>
                <input
                  type="text"
                  id="nombre_usuario" name="nombre_usuario"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 "
                  placeholder="Nombre de usuario" required />
              </div>
            </label>
            <label htmlFor="nombre_completo" className="block mb-2 text-sm font-medium text-gray-900">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>

                </div>
                <input
                  type="text"
                  id="nombre_completo" name="nombre_completo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 "
                  placeholder="Nombre Completo" required />
              </div>
            </label>
            <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  title="Ingrese un correo valido (@)"
                  type="email"
                  id="correo" name="correo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 "
                  placeholder="correo" required />
              </div>
            </label>
            <label htmlFor="contraseña" className="block mb-2 text-sm font-medium text-gray-900">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <input pattern="(?=.*[A-Z]).{8,}"
                  title="La contraseña debe tener al menos una letra mayúscula y un mínimo de 8 caracteres."
                  type="password" id="contraseña" name="contraseña"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 "
                  placeholder="Contraseña" required />
              </div>
            </label>
            <label htmlFor="dni" className="block mb-2 text-sm font-medium text-gray-900">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                  </svg>
                </div>
                <input pattern=".{8,}"
                  title="El DNI debe tener un mínimo de 8 caracteres."
                  type="text"
                  id="dni" name="dni"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 "
                  placeholder="DNI" required />
              </div>
            </label>
            <button type="submit" className="w-full bg-[#2F80ED] h-[38px] rounded-lg text-[16px] leading-[21.79px] font-semibold text-white hover:bg-[#1161c9] ">
            Únete ahora
            </button>
          </form>
          <div className="flex w-full justify-center pt-8 gap-1 text-center items-center  text-[14px] leading-[19.07px] font-normal">
            <h4 className="text-[#828282]">
              Ya eres miembro?
            </h4>
            <NavLink to='/login' className="text-blue-400 underline">Login</NavLink>
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
