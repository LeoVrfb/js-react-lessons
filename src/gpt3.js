const openai = require('openai');
openai.api_key = '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';

async function generateText(prompt) {
    const completions = await openai.complete({
      engine: 'davinci',
      prompt: prompt,
      maxTokens: 100,
      n: 1,
      stop: ['\n']
    });
    return completions.choices[0].text.trim();
  }

  module.exports = { generateText };

  
