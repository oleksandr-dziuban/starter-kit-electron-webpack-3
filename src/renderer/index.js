import '../../static/css/normalize.css';
import '../../static/css/typography.css';
import '../../static/css/index.css';
import iconPath from '../../static/icons/starter-kit.svg';

/**
 * Example page rendering
 */
const init = () => {
  const appRootNode = document.getElementById('app');

  if(!appRootNode) return;

  appRootNode.innerHTML = `
    <main>
      <img src="${iconPath}" alt='Starter Kit Icon' />
      <h1>You are ready to build an application</h1>
    </main>
  `;
};

// Init example page rendering
init();
