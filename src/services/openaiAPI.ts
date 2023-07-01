```typescript
import axios from 'axios';
import { MVV } from '../types/index';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${OPENAI_API_KEY}`
};

export const convertToMVV = async (businessIdea: string): Promise<MVV> => {
  const prompt = `Convert the following business idea into a Mission, Vision, and Values framework: ${businessIdea}`;

  const data = {
    'prompt': prompt,
    'max_tokens': 200
  };

  const response = await axios.post(OPENAI_API_URL, data, { headers: headers });

  const mvv: MVV = {
    mission: response.data.choices[0].text.split('\n')[0],
    vision: response.data.choices[0].text.split('\n')[1],
    values: response.data.choices[0].text.split('\n')[2]
  };

  return mvv;
};
```