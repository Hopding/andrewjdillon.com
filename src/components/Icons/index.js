import React from 'react';

// These icons come from:
//  https://materialdesignicons.com/

const iconContainerStyle = {
  width: '50px',
  height: '50px',
  pointerEvents: 'auto',
  borderRadius: '50%',
  borderWidth: '4px',
  borderColor: '#fff',
  borderStyle: 'solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px',
};

const iconStyle = size => ({
  width: `${size}px`,
  height: `${size}px`,
  padding: '5px',
});

// name: "file-document-box"
const Resume = ({ color }) => (
  <svg style={iconStyle(35)} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
    />
  </svg>
);

// name: "linkedin"
const LinkedIn = ({ color }) => (
  <svg
    style={{ ...iconStyle(40), marginLeft: '1px', marginBottom: '2px' }}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
    />
  </svg>
);

// name: "email"
const Email = ({ color }) => (
  <svg style={iconStyle(37)} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
    />
  </svg>
);

// name: "github-circle"
const GitHub = ({ color }) => (
  <svg style={iconStyle(40)} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
);

// name: "pencil"
const Pencil = ({ color }) => (
  <svg style={iconStyle(38)} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
    />
  </svg>
);

const enhance = Component => ({ href, download, color }) => (
  <a href={href} download={download}>
    <div style={iconContainerStyle}>
      <Component color={color} />
    </div>
  </a>
);

export default {
  Resume: enhance(Resume),
  LinkedIn: enhance(LinkedIn),
  Email: enhance(Email),
  GitHub: enhance(GitHub),
  Pencil: enhance(Pencil),
};
