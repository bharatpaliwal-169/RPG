import React,{useState} from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [opt,setOpt] = useState({pswdLength:0,isCap:false,isNum : false,isSpecial : false,isSmall:false})
  const [Res,setRes] = useState(null)
  const handleGenerate = () => {
    var password = "";
    var small = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var nums = "0123456789";
    var special = "!@#$%^&*()+-<>./";
    var input = "";
    if(opt.isCap){
      input += caps;
    } 
    if(opt.isSmall){
      input += small;
    }
    if(opt.isNum){
      input += nums;
    }
    if(opt.isSpecial){
      input += special;
    }
  
    for(var i=0;i<opt.pswdLength;i++){
      var char = Math.floor(Math.random() * input.length + 1);
      password += input.charAt(char);
    }
    console.log(password);
    setRes(password);
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(Res);
    const notify = toast("Copied to Clipboard!!");
    notify;
  }

  return (
    <div className='pl-10 flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow'>
      
      <label className='p-2' htmlFor="pswdLength">Select length of your password (0 - 20)</label>
      <input type="range" min={3} max={20} name="pswdLength" id="pswdLength" value={opt.pswdLength} onChange={(e)=> setOpt({...opt,pswdLength:e.target.value})} />
      
      <label className='p-2' htmlFor="capital">Add Capitals (A - Z)
        <input type="checkbox" name="capital" id="capital" value={opt.isCap} onChange={(e) => setOpt({...opt,isCap: e.target.checked})} />
      </label>

      <label className='p-2' htmlFor="small">Add Smalls (a - Z)
        <input type="checkbox" name="small" id="small" value={opt.isSmall} onChange={(e) => setOpt({...opt,isSmall: e.target.checked})} />
      </label>
      
      <label className='p-2' htmlFor="num">Add numbers (0 - 9)
        <input type="checkbox" name="num" id="num" value={opt.isNum} onChange={(e) => setOpt({...opt,isNum: e.target.checked})} />
      </label>

      <label className='p-2' htmlFor="special">Add Specials
        <input type="checkbox" name="special" id="special" value={opt.isSpecial} onChange={(e) => setOpt({...opt,isSpecial: e.target.checked})} />
      </label>

      <button className='py-2 px-4 w-50 bg-indigo-600 hover:bg-indigo-700  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ' onClick={handleGenerate}>
        Generate
      </button>

      <span className='bg-slate-300 p-5 border m-2 select-all'>
        {Res}
      </span>
      <button onClick={handleCopy}
        className='bg-orange-200 lg-rounded'
      >
        Copy
      </button>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Main;