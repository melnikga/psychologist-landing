
import React from 'react';

const GradientBlob: React.FC = () => {
  return (
    <div className="absolute -top-6 -left-6 w-[24vw] h-[24vw] opacity-70 animate-blob-animation">
      <div className="absolute inset-0 bg-gradient-radial bg-[#D37EC9] to-transparent rounded-full filter blur-3xl" ></div>
    </div>
  );
};

export default GradientBlob;