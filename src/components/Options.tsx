import React from 'react';
import { Link } from 'react-router-dom';

const Options: React.FC = () => {
  return (
    <div>
      <h1>Options Page</h1>
      <p>This is the options page content.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Options;
