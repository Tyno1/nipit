import React from 'react';

export const ConversationPill = props => {
  return (
    <>
      <div
        className="p-2 mt-3"
        style={{
          color: 'white',
          borderRadius: '5px',
          paddingRight: '10px !important',
          width: '140px',
          textAlign: props.who == 'NIPIT' ? "start" : "end",
          background: `${props.who == 'NIPIT' ? '#58030e' : '#9dc067'}`,
        }}
      >
        {props.message}
        {props.children}
      </div>
    </>
  );
};
