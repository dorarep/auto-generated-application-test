import React, { useState } from 'react';
import { BusinessIdea } from '../types/index';

const MVVForm: React.FC = () => {
  const [businessIdea, setBusinessIdea] = useState<BusinessIdea>({ idea: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessIdea({ ...businessIdea, idea: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/businessIdea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(businessIdea),
    });
    const data = await response.json();
    // TODO: Handle the response data (MVV)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="businessIdeaInput">Business Idea:</label>
      <input
        type="text"
        id="businessIdeaInput"
        value={businessIdea.idea}
        onChange={handleChange}
      />
      <button type="submit">Convert to MVV</button>
    </form>
  );
};

export default MVVForm;