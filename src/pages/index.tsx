import { useState } from 'react';
import MVVForm from '../components/MVVForm';
import MVVDisplay from '../components/MVVDisplay';

export default function Home() {
  const [mvv, setMvv] = useState(null);

  const handleMVVChange = (newMVV) => {
    setMvv(newMVV);
  };

  return (
    <div>
      <h1>Welcome to the Business Idea Support Application</h1>
      <MVVForm onMVVChange={handleMVVChange} />
      {mvv && <MVVDisplay mvv={mvv} />}
    </div>
  );
}