import React from 'react';

interface IUseClickOutside {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  nodeRef: React.RefObject<HTMLDivElement>
}

export default function useClickOutside (): IUseClickOutside {
  const [show, setShow] = React.useState(false);
  const nodeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutSide (e: MouseEvent): void {
      if (
        nodeRef.current != null &&
        !nodeRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    }
    document.addEventListener('click', handleClickOutSide);
    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, []);

  return {
    show,
    setShow,
    nodeRef
  };
}
