/* eslint-disable react/prop-types */


const iter = [
  { id: 1, name: 'Adhitya' },
  { id: 2, name: 'Vishnu' },
  { id: 3, name: 'Rishi' },
];

const Names = ({ onItemSelected }) => {
  return (
    <div >
      <h3>Items</h3>
      <ul >
        {iter.map(item => (
          <li key={item.id}>
            <button 
              onClick={() => onItemSelected(item.id)} >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Names;
