import dynamic from 'next/dynamic';
import React from 'react';
import { baseUrl } from '../../url';

const PdfViewer = dynamic(
  () => import('../PdfViewer'),
  { ssr: false },
);

export const Resume: React.FC = () => (
  <div>
    <p className="text-theme-blue w-3/4 mx-auto leading-loose">
      Hledám projekt, kde neschází intelektuální výzva, zdravé morální ovzduší ani pozitivní přesah podnikatelské činnosti na společnost.
      Když se to všechno takto sejde, mé pracovní odhodlání je velmi intenzivní a vytrvalé.
    </p>

    <div className="flex my-8">
      <a className="mx-auto bg-theme-yellow p-4 rounded text-dark-blue hover:bg-theme-blue focus:bg-theme-blue" href="/resume.pdf">
        Download Resume
      </a>
    </div>

    <div className="hidden lg:block">
      <PdfViewer url={`${baseUrl}/resume.pdf`} pageNumber={1} width={1000} />
    </div>
  </div>
);
