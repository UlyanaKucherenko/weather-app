import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = (e: Event) => {
    if (!ref.current || ref.current.contains(e.target as Node)) {
      return;
    }

    callback();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, callback]);
};
