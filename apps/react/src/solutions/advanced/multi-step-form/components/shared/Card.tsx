import clsx from 'clsx';

type CardProps = {
  children?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};

const Card = ({ children, isActive, onClick, className }: CardProps) => {
  return (
    <div
      className={clsx(
        'px-4 py-3.75 border  rounded-lg transition hover:border-[#473dff]  cursor-pointer',
        isActive ? 'border-[#473dff]! bg-[#f0f5ff]' : 'border-[#D6D9E6] hover:bg-white',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
