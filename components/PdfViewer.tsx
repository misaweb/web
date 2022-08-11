import React from 'react';

import { Document, Page } from 'react-pdf';

const PdfViewer = ({ url, pageNumber, width }: { pageNumber: number, url: string, width: number }) => (
  <Document file={url}>
    <Page
      pageNumber={pageNumber}
      width={width}
    />
  </Document>
);

export default PdfViewer;
