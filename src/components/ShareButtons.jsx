import React from 'react';

const ShareButtons = ({ advice }) => {
  const shareText = encodeURIComponent(advice);

  return (
    <div style={{ marginTop: '10px' }}>
      <a
        href={`https://twitter.com/intent/tweet?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.btn}
      >
        Compartir en X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://api.adviceslip.com&quote=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.btn}
      >
        Compartir en Facebook
      </a>
    </div>
  );
};

const styles = {
  btn: {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'blue',
    fontWeight: 'bold',
  }
};

export default ShareButtons;
