import React from 'react';

const StarButton = () => (
  <div className="star-button-container">
    <small>Leave a star on Github if this repository was useful :)</small>
    <a
      class="github-button"
      href="https://github.com/AndreyElyan"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Andrey Elyan on GitHub"
    >
      Star
    </a>
  </div>
);

export default StarButton;
