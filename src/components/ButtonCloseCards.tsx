import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';

export default function ButtonCloseCards() {
  const { setCardsEvent } = useContext(AppContext);

  return (
    <button
      onClick={() => setCardsEvent('OFF')}
      className="hover-b"
      style={{
        fontSize: '2em',
        cursor: 'pointer',
        background: 'transparent',
        position: 'absolute',
        top: '1rem',
        right: '1rem',
      }}
    >
      <i className="bi bi-x-lg"></i>
    </button>
  );
}
