import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="bg-gradient-to-r h-screen text-center from-sky-200 via-blue-200 to-indigo-200 flex flex-col items-center justify-center min-h-[628px]">
          <div className="flex-grow flex items-center justify-around max-w-5xl mx-auto gap-x-40">
            <div className="text-gray-700 max-w-md">
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 animate-text">
                Bienvenido a <span className="text-gray-600">Resident Report</span>
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                Cree un reporte de las insidencias y siga el proceso de esta
              </p>
              <Link
                to="/login"
                className="px-6 py-3 bg-gradient-to-r from-sky-400 to-indigo-400 text-white rounded-full hover:bg-gradient-to-l hover:from-indigo-400 hover:to-sky-400 transition-colors duration-300 shadow-md shadow-sky-300/50"
              >
                Ingresa un nuevo reporte
              </Link>
            </div>
            
          </div>
        </div>
      );
}
