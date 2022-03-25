import React from 'react';
import { Link } from 'react-router-dom';

import './_footer.scss';

const Section = ({ links }) => {
  return (
    <section>
      <ul>
        {links.map(object => {
          return (
            <li key={object.name}>
              <Link to={object.link}>{object.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Section;
