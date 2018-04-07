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
    <span class="anchor" id={id} />
    <section>
      <h2 class="section-header">{header}</h2>
      {children}
    </section>
  </div>
);

export default {
  Root,
  Section,
  Text,
};
