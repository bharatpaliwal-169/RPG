import React,{useState} from 'react'

const Plain = () => {
  const [option,setOptions] = useState({ length : 0,isCap : false,isNum : false,isSpecial : false,isSmall:false})
  return (
    <div className='my-3 mx-3'>
      
      <label>HIII</label>
      <input type="checkbox" class="appearance-none checked:bg-blue-500 indeterminate:bg-gray-300" />
    </div>
  )
}

const generatePswd = (options) => {
  var password = "";
  var small = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var special = "!@#$%^&*()+-<>./";
  var input = "";
  if(options.isCap){
    input += caps;
  } 
  if(options.isSmall){
    input += small;
  }
  if(options.isNum){
    input += nums;
  }
  if(options.isSpecial){
    input += special;
  }

  for(var i=0;i<options.length;i++){
    var char = Math.floor(Math.random() * input.length + 1);
    password += input.charAt(char);
  }

  return password;
}
export default Plain;



// var pass = '';
//             var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//                     'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
//             for (let i = 1; i <= 8; i++) {
//                 var char = Math.floor(Math.random()
//                             * str.length + 1);
                  
//                 pass += str.charAt(char)
//             }
              
//             return pass;