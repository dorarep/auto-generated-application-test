Shared Dependencies:

1. **Exported Variables**
   - `openaiAPI`: Exported from `src/services/openaiAPI.ts` and used in `src/pages/api/businessIdea.ts` to interact with the OpenAI API.
   - `MVVForm`: Exported from `src/components/MVVForm.tsx` and used in `src/pages/index.tsx` to render the form for inputting business ideas.
   - `MVVDisplay`: Exported from `src/components/MVVDisplay.tsx` and used in `src/pages/index.tsx` to display the converted MVV framework.

2. **Data Schemas**
   - `BusinessIdea`: Defined in `src/types/index.ts` and used in `src/pages/api/businessIdea.ts` and `src/components/MVVForm.tsx` to type-check the business idea data.
   - `MVV`: Defined in `src/types/index.ts` and used in `src/pages/api/businessIdea.ts`, `src/components/MVVForm.tsx`, and `src/components/MVVDisplay.tsx` to type-check the MVV data.

3. **DOM Element IDs**
   - `businessIdeaInput`: Used in `src/components/MVVForm.tsx` for the input field of the business idea.
   - `mvvDisplay`: Used in `src/components/MVVDisplay.tsx` to display the MVV framework.

4. **Message Names**
   - `convertToMVV`: Used in `src/pages/api/businessIdea.ts` as the API endpoint for converting business ideas to MVV.

5. **Function Names**
   - `handleSubmit`: Defined in `src/components/MVVForm.tsx` to handle the form submission.
   - `convertIdeaToMVV`: Defined in `src/pages/api/businessIdea.ts` to convert the business idea to MVV using the OpenAI API.
   - `displayMVV`: Defined in `src/components/MVVDisplay.tsx` to display the MVV framework.