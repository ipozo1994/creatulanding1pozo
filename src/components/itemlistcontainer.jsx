import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    fontSize: '1.4rem',
  },
};

export default ItemListContainer;
