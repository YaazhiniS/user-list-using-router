import  { useState } from 'react';
import Names from './Names';
import NameList from './Namelist';

const NavandFetch = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItem = (iterid) => {
    setSelectedItem(iterid);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Names onItemSelected={handleItem} />
      <div style={{ flex: 1, padding: '20px' }}>
        <NameList selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default NavandFetch;