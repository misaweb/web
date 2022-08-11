import Image from 'next/image';
import React from 'react';
import profilePic from '../../images/profile.jpg';
import styles from './Home.module.scss';

export const Home: React.FC = () => (
  <div>
    <div className="flex flex-col md:flex-row">
      <div className={`w-100 md:w-1/2 flex items-center justify-center flex-col ${styles.leftBlock} mb-8`}>
        <Image
          alt="Michaela Somolová"
          className="h-full w-32 sm:ml-8 sm:pr-8"
          src={profilePic as unknown as string}
        />
        <div className="text-theme-blue text-center text-xl">
          <p className="uppercase">
            Expert na architekturu lidských procesů s důrazem na
          </p>
          <p>
            vysokou kvalitu
          </p>
          <p className="text-theme-yellow">
            &
          </p>
          <p>
            datový monitoring
          </p>
          <p className="text-theme-yellow">
            &
          </p>
          <p>
            finanční efektivnost
          </p>
        </div>
      </div>
      <div className="w-100 md:w-1/2 sm:p-4 md:p-8">
        <div className="text-theme-blue text-center uppercase font-bold">
          <h1 className="text-4xl sm:text-6xl">Vítám vás</h1>
          <p className="text-lg sm:text-xl">Bude mi potěšením přidat ruku k dílu a splnit vaše podnikatelské cíle!</p>
        </div>
      </div>
    </div>
  </div>
);
