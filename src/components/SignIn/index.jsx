import React from "react";

const SignIn = () => {
  return (
    <div>
      <form className="flex flex-col gap-3">
        {/* Phone */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M21 15.46v3.59a2.91 2.91 0 0 1-3.18 2.9 17.85 17.85 0 0 1-7.79-3.09 17.47 17.47 0 0 1-5.44-5.44 17.85 17.85 0 0 1-3.09-7.79A2.91 2.91 0 0 1 4.42 3h3.59a2.91 2.91 0 0 1 2.91 2.52 11.88 11.88 0 0 0 .61 2.54 2.91 2.91 0 0 1-.65 3.05l-1.52 1.52a14.94 14.94 0 0 0 5.44 5.44l1.52-1.52a2.91 2.91 0 0 1 3.05-.65 11.88 11.88 0 0 0 2.54.61 2.91 2.91 0 0 1 2.52 2.91Z" />
          </svg>
          <input type="text" className="grow" placeholder="+998 90 123 45 67" />
        </label>
        {/* Email */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        {/* Password */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" className="grow" placeholder="********" />
        </label>
        <div>
          <a href="/" className="text-blue-400">
            Parolni unutdingizmi?
          </a>
        </div>
        <div>
          <button className="p-2 border-2 border-gray-800 w-full rounded text-gray-800 hover:bg-gray-800 hover:text-white hover:border-slate-400 transition-colors duration-300">KIRISH</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
