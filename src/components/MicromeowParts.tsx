import React from "react";

export const renderMPattern = (color: string) => (
    <>
      <g id="mPattern" transform="translate(2,1)" fill={color} opacity={0.8}>
        <rect width="1.25" height="1" x="2" />
        <rect width="0.25" height="1" x="1" y="1" />
        <rect width="0.25" height="1" x="2" y="1" />
      </g>
      <use xlinkHref="#mPattern" transform="translate(8,0) scale(-1,1)" />
    </>
  );
  
  export const renderBodyFurTip = (color: string) => (
    <g id="furTip" fill={color} stroke={color} opacity={0.3}>
      <rect x="3" width="2" height="0.5" opacity={0.7} />
      <rect x="5.5" y="1" width="1.5" height="0.75" />
      <rect x="1" y="1" width="4" height="0.5" opacity={0.7} />
      <rect x="1" y="1" width="3" height="0.75" opacity={0.5} />
    </g>
  );
  
  export const renderArmFurTip = (color: string) => (
    <g id="furTip" fill={color} stroke={color} opacity={0.3}>
      <rect x="3" width="0.5" height="0.75" opacity={0.7} />
      <rect x="2" width="0.25" height="0.75" opacity={0.7} />
    </g>
  );
  
  export const renderShortTail = () => (
    <>
      <rect x="2" y="2" width="1" height="1" />
      <rect x="3" y="2" width="1" height="1" />
    </>
  );
  
  export const renderShortTailShade = () => (
    <>
      <rect x="3" y="3" width="1" height="1" />
    </>
  );
  
  export const renderLongTail = () => (
    <>
      <rect x="2" y="1" width="1" height="4" />
      <rect x="1" y="5" width="2" height="1" />
      <rect y="6" width="2" height="1" />
    </>
  );
  
  export const renderLongTailShade = () => (
    <>
      <rect x="2" width="1" height="1" />
      <rect x="3" y="1" width="1" height="5" />
      <rect x="2" y="6" width="1" height="1" />
      <rect y="7" width="2" height="1" />
    </>
  );
  