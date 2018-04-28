import React from 'react';

import './index.css';

const Root = ({ children }) => (
  <div className="sections-container">
    <div className="sections-wrapper">{children}</div>
  </div>
);

const Text = ({ children }) => <p className="section-text">{children}</p>;

const Section = ({ id, header, children }) => (
  <div>
    <span className="anchor" id={id} />
    <section>
      <h1 className="section-header">{header}</h1>
      {children}
    </section>
  </div>
);

const Header2 = ({ children }) => (
  <h2 className="section-header">{children}</h2>
);

const Header3 = ({ children }) => (
  <h3 className="section-header">{children}</h3>
);

export default {
  Root,
  Section,
  Text,
  Header2,
  Header3,
};
