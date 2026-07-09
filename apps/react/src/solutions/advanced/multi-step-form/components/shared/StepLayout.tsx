type StepLayoutProps = {
  children: React.ReactNode;
  header: string;
  description: string;
};

const StepLayout = ({ children, header, description }: StepLayoutProps) => {
  return (
    <div>
      <h1 className="text-[24px] text-(--color-primary-blue-950) sm:text-[32px] font-bold leading-9 pb-3">
        {header}
      </h1>
      <p className="pb-8 leading-4.5 font-normal text-[16px] text-(--neutral-grey-500)">
        {description}
      </p>
      {children}
    </div>
  );
};

export default StepLayout;