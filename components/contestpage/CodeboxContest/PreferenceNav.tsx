import { SetStateAction, useState } from "react";

type PreferenceNavProps = {
  lang: string; 
  setLang: React.Dispatch<SetStateAction<string>>;
  langid: number; 
  setlangid: React.Dispatch<SetStateAction<number>>;
  time:string
};

const PreferenceNav: React.FC<PreferenceNavProps> = ({ lang, setLang ,langid,setlangid,time}) => {

  return (
    <div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
      <div className='flex justify-around items-center text-white'>
        <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark  hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
          <div className='flex items-center px-1 py-5'>
            <select 
              value={lang}
              onChange={(e) =>{
                if(e.target.value=="54"){
                  setlangid(0);
                }else{
                  setlangid(1);
                }
                setLang(e.target.value)}} 
              id="tags"
              className="language-select text-black w-20"
            >
              <option value="54">C++</option>
              <option value="62">Java</option>
            </select>
          </div>
        </button>
      </div>
    </div>
  );
};
export default PreferenceNav;
