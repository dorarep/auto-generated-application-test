import React, { useState } from 'react';
import { MVV } from '../types/index';
import { convertToMVV } from '../services/openaiAPI';

const MVVConversion: React.FC = () => {
  const [businessIdea, setBusinessIdea] = useState<string>('');
  const [mvv, setMvv] = useState<MVV | null>(null);

  const handleIdeaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessIdea(event.target.value);
  };

  const handleIdeaSubmission = async (event: React.FormEvent) => {
    event.preventDefault();
    const mvv = await convertToMVV(businessIdea);
    setMvv(mvv);
  };

  return (
    <div>
      <form onSubmit={handleIdeaSubmission}>
        <label>
          Business Idea:
          <input type="text" value={businessIdea} onChange={handleIdeaChange} />
        </label>
        <button type="submit">Convert to MVV</button>
      </form>
      {mvv && (
        <div>
          <h2>Mission: {mvv.mission}</h2>
          <h3>Vision: {mvv.vision}</h3>
          <p>Values: {mvv.values.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default MVVConversion;