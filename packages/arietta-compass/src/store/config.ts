import Conf from 'conf';

import { ConfigSchema } from '@/types/config';
import { LanguageModel, ModelTokens } from '@/types/models';

export const schema: ConfigSchema = {
  apiBaseUrl: {
    default: '',
    type: 'string',
  },
  diffChunkSize: {
    default: ModelTokens[LanguageModel.GPT3_5] - 512,
    type: 'number',
  },
  emoji: {
    default: 'emoji',
    type: 'string',
  },
  githubToken: {
    default: '',
    type: 'string',
  },
  locale: {
    default: '',
    type: 'string',
  },
  maxLength: {
    default: 100,
    type: 'number',
  },
  modelName: {
    default: LanguageModel.GPT3_5,
    type: 'string',
  },
  openaiToken: {
    default: '',
    type: 'string',
  },
  prompt: {
    default: '',
    type: 'string',
  },
};

export const config = new Conf({
  projectName: 'arietta-compass',
  schema,
});
