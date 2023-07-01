import { OpenAI } from 'openai';
import { MVV } from '../types/index';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export const openaiAPI = {
  async convertIdeaToMVV(idea: string): Promise<MVV> {
    const gpt3Response = await openai.complete({
      engine: 'davinci',
      prompt: `Convert the following business idea into a mission, vision, and values framework:\n\n${idea}`,
      max_tokens: 200,
    });

    const mvv = gpt3Response.data.choices[0].text.trim();

    return {
      mission: mvv.split('\n')[0],
      vision: mvv.split('\n')[1],
      values: mvv.split('\n')[2],
    };
  },
};