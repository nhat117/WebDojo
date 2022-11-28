import { Close } from "@mui/icons-material";
import React, { useState } from "react";

const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center justify-center"
  );

  const handleClose = () => {
    setAnnounceStyle(`${announceStyle} hidden`);
  };

  return (
    <div className={announceStyle}>
      <h2>Hurry up's it 40% off now </h2>
      <Close onClick={handleClose} className='cursor-pointer' />
    </div>
  );
};

export default Announce;
