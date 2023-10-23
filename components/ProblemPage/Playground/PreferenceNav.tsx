import { SetStateAction, useState } from "react";

type PreferenceNavProps = {
  lang: string; // Add the lang prop here
  setLang: React.Dispatch<SetStateAction<string>>; // Add the setLang prop if needed
};

const PreferenceNav: React.FC<PreferenceNavProps> = ({ lang, setLang }) => {
  // ... existing code ...

  return (
    <div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full '>
      <div className='flex items-center text-white'>
        <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
          <div className='flex items-center px-1'>
            <select 
              value={lang}
              onChange={(e) => setLang(e.target.value)} // Use the setLang function here
              id="tags"
              className="language-select text-black"
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>
          </div>
        </button>
      </div>
    </div>
  );
};
export default PreferenceNav;
