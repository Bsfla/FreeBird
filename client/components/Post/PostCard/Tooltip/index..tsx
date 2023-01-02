import { useRef, useEffect, MouseEvent } from 'react';
import { Wrapper } from './style';

interface Props {
  setIsOpenOption: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tooltip = ({ setIsOpenOption }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpenOption(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <div className="rect" />
      <div className="option" ref={ref}>
        <span className="edit">수정</span>
        <span className="delete">삭제</span>
      </div>
    </Wrapper>
  );
};

export default Tooltip;
