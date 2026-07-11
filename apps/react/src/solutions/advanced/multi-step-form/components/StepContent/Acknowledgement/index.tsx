import IconThankYou from '@resource/advanced/multi-step-form/images/icon-thank-you.svg';

const Acknowledgement = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 sm:justify-center sm:h-100 sm:mt-8 sm:max-w-[450px] sm:w-full">
      <img src={IconThankYou} className="w-[80px] pb-6 sm:pb-8" />
      <h1 className="text-[32px] leading-[36px] text-[#022959] font-bold pb-6">Thank you!</h1>
      <p className="text-[#9699AA] leading-[160%] ">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Acknowledgement;
