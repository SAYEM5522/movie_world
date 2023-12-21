import React, { memo, useState } from 'react';

const  ImageInput = ({ onChange }) => {
  const [formData, setFormData] = useState([{ image: '', name: '' }]);

  const handleInputChange = (index, key, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][key] = value;
    setFormData(updatedFormData);
    onChange(updatedFormData);
  };
  const handleAddField = () => {
    setFormData([...formData, { image: '', name: '' }]);
  };

  return (
    <div className='w-full'>
      {formData.map((item, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Image url.."
            value={item.image}
            onChange={(e) => handleInputChange(index, 'image', e.target.value)}
            className="mr-2 rounded-md  w-full p-2 border border-gray-300"
          />
          <input
            type="text"
            placeholder="Name.."
            value={item.name}
            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            className="mr-2 rounded-md mt-2 w-full p-2 border border-gray-300"
          />
        </div>
      ))}
      <button
        onClick={handleAddField}
        className="bg-black text-white py-2 px-5 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default memo(ImageInput)