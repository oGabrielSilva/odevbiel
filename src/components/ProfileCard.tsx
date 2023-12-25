import { AppContext } from '@/context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { Tooltip } from '@nextui-org/react';
import ButtonCloseCards from './ButtonCloseCards';

export default function ProfileCard() {
  const { strings, currentCard } = useContext(AppContext);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!cardRef.current) {
      const { current } = cardRef;
      if (currentCard !== 'P') {
        current.style.transform = 'translateX(100vw)';
        setTimeout(() => {
          current.style.display = 'none';
        }, 400);
      } else {
        setTimeout(() => {
          current.style.display = '';
        }, 400);
        setTimeout(() => {
          current.style.transform = 'translateX(0)';
        }, 500);
      }
    }
  }, [currentCard]);

  return (
    <div className="c-card" ref={cardRef}>
      <ButtonCloseCards />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '1rem 0',
          textAlign: 'justify',
        }}
      >
        <div>
          <Image
            draggable="false"
            style={{
              borderRadius: '100%',
              border: '8px solid var(--variant)',
              objectFit: 'cover',
            }}
            src="/profile0.jpg"
            alt="Gabriel"
            width={150}
            height={150}
          />
        </div>
        <div>
          <h3 style={{ fontWeight: 400, textAlign: 'justify' }}>
            {strings.aboutMeTitle}{' '}
            <span style={{ color: 'var(--text-variant)' }}>{strings.me}</span>{' '}
            {strings.aboutMeTitle2}
          </h3>
          <p style={{ marginTop: '1rem' }}>{strings.aboutMeBody}</p>
          <p style={{ marginTop: '1rem' }}>{strings.aboutMeBody2}</p>
          <p style={{ marginTop: '1rem' }}>
            {strings.accessResume}{' '}
            <Link
              style={{ color: '#517ff4' }}
              target="_blank"
              href="/resume.pdf"
            >
              {strings.here}.
            </Link>
          </p>
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid var(--variant)',
          paddingTop: '1rem',
          marginTop: '0.5rem',
          display: 'flex',
          justifyContent: 'space-evenly',
          fontSize: '1.5em',
        }}
      >
        <Tooltip content="GitHub" color="invert">
          <Link
            className="hover-b"
            href="https://github.com/oGabrielSilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </Link>
        </Tooltip>
        <Tooltip content="Twitter" color="invert">
          <Link
            className="hover-b"
            href="https://twitter.com/odev_gabriel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </Link>
        </Tooltip>
        <Tooltip content="Instagram" color="invert">
          <Link
            className="hover-b"
            href="https://www.instagram.com/odev_gabriel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </Link>
        </Tooltip>
        <Tooltip content="Email" color="invert">
          <Link
            className="hover-b"
            href="mailto:gabriel04gh1.gh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope"></i>
          </Link>
        </Tooltip>
        <Tooltip content="LinkedIn" color="invert">
          <Link
            className="hover-b"
            href="https://www.linkedin.com/in/ogabriel-henrique/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}
