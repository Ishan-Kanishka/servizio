import {Lock, MailIcon, User} from 'lucide-react';
import {useState} from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  // state for login or register
  const [state, setState] = useState ('login');
  const {login, register} = useAuth ();

  // state for input value
  const [data, setData] = useState ({
    name: '',
    email: '',
    password: '',
  });

  // handle change input value
  const onChangeHandler = e => {
    setData (prev => ({...prev, [e.target.name]: e.target.value}));
  };

  // handle submit form
  const handleSubmit = e => {
    e.preventDefault ();
    if (state === 'login') {
      const success = login (data.email, data.password);
      // alert ('Login successful');
      notify ('Login Successful');
      if (!success) {
        alert ('Invalid email or password');
      }
    } else {
      register (data.name, data.email, data.password);
    }
    console.log (data);
  };

  const notify = message => {
    if (!('Notification' in window)) {
      alert ('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      new Notification (message);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission ().then (permission => {
        if (permission === 'granted') {
          new Notification (message);
        }
      });
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="w-full sm:w-[350px] text-center border border-green-800/60 rounded-2xl px-8 bg-green-100 ">
        <h1 className="text-green-900 text-3xl mt-10 font-medium">
          {state === 'login' ? 'Login' : 'Register'}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 pb-6">
          Please {state === 'login' ? 'sign in' : 'sign up'} to continue
        </p>
        {state !== 'login' &&
          <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            {/* User Icon */}
            <User className="text-zinc-500 dark:text-zinc-400" size={16} />
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              required
            />
          </div>}
        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
          {/* Mail Icon */}
          <MailIcon className="text-zinc-500 dark:text-zinc-400" size={16} />
          <input
            type="email"
            placeholder="Email id"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
          {/* Lock Icon */}
          <Lock className="text-zinc-500 dark:text-zinc-400" size={16} />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="mt-5 text-left">
          <a className="text-sm text-emerald-500" href="#">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-2 w-full h-11 rounded-full text-white font-bold bg-green-500 hover:opacity-90 transition-opacity"
        >
          {state === 'login' ? 'Login' : 'Create Account'}
        </button>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 mb-11">
          {state === 'login'
            ? "Don't have an account? "
            : 'Already have an account? '}
          <button
            type="button"
            className="text-green-900"
            onClick={() =>
              setState (prev => (prev === 'login' ? 'register' : 'login'))}
          >
            {state === 'login' ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
