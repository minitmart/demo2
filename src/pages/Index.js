import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Nittany Energy's Demo Website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Us</Link></h2>
          <p>
            A family owned business locally owned and operating in Central Pennsylvania.
          </p>
        </div>
      </header>
      <p> Welcome to our website!
      </p>
    </article>
  </Main>
);

export default Index;
