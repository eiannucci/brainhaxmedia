import React from 'react';

export const FileDownload = () => {
  const handleDownload = () => {
    const resumeUrl = 'https://brainhaxmedia.com/resume/elijah-iannucci.pdf';

    // Open the resume URL in a new browser tab
    window.open(resumeUrl, '_blank');
  };

  return (
    <div onClick={handleDownload}>
      <div className={'btn btn-primary'}><span>Open Resume</span></div>
    </div>
  );
};