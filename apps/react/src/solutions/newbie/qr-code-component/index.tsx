import '@resource/newbie/qr-code-component/css/index.css';
import QrImage from '@resource/newbie/qr-code-component/images/image-qr-code.png';

import { Helmet } from 'react-helmet-async';

const QrCodeComponent = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | QR code component</title>
        <meta name="description" content="Frontend Mentor QR Code solution built with React." />
      </Helmet>
      <div className="bg-(--fem-slate-300) fem-qr-code w-full min-h-screen flex">
        <div className="font-outfit text-(--fem-slate-900) w-80 p-4 rounded-[20px] text-center bg-white m-auto shadow-[0_25px_25px_0_rgba(0,0,0,0.0477)]">
          <img src={QrImage} alt="QR Image" className="rounded-[10px]" />
          <h1 className="text-[22px]/[120%] pt-6 pb-4 font-bold">
            Improve your front-end skills by building projects
          </h1>
          <p className="pb-6 font-normal text-(--fem-slate-500) text-[15px]/[140%] tracking-[0.2px]">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </>
  );
};

export default QrCodeComponent;
