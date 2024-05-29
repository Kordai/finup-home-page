import axios from 'axios';
import OpenAI from "openai";
//sk-proj-3voBvNzW0gYQgh1O6saPT3BlbkFJgHYdTBl2DuKViBCAXnzK
const OPENAI_API_KEY = 'sk-proj-iuyuynpNRRjJyc2u1dvKT3BlbkFJwbPtggxRbPU0mWwMTBpL'


const openai = new OpenAI({
    organization: 'org-VxvUKowKFUfuYAd31crCkhv2',
    project: 'proj_U51ESK8E88wHz5elCv0YAgDD',
    apiKey: OPENAI_API_KEY,
    baseURL: 'https://api.openai.com/v1/',
    dangerouslyAllowBrowser: true
});

// const instance = axios.create({
//     baseURL: "https://test.finup.kz/",
//     headers: { 
//         'Content-Type': 'application/json; charset=UTF-8',
//         'Authorization': 'Bearer ' + OPENAI_API_KEY,
//         'OpenAI-Organization': 'org-VxvUKowKFUfuYAd31crCkhv2',
//         'OpenAI-Project': 'proj_U51ESK8E88wHz5elCv0YAgDD'
//      }

// });


const ConnectToChatGPT = {   
    async checkAssistent() {
        console.log('start');
        const myAssistant = await openai.beta.assistants.retrieve(
          "asst_wPA40ncT1J2QOvTnIBMC5OzA"
        );
        return myAssistant
      },
      async threadNew() {
        const emptyThread = await openai.beta.threads.create();
        return emptyThread
      },
      async newMessageCreate(threadId, newMessage) {
        const threadMessages = await openai.beta.threads.messages.create(
            threadId,
          { role: "user", content: newMessage }
        );
        return threadMessages
      },
      async newRunBusinessAssistent(threadId) {
        const run = await openai.beta.threads.runs.create(
            threadId,
          { assistant_id: "asst_wPA40ncT1J2QOvTnIBMC5OzA" }
        );
      return run
      },
      async retrieveRun(threadId, runId) {
        const run = await openai.beta.threads.runs.retrieve(
            threadId,
            runId
        );
        return run
      },
      async getMessage(threadId, mesId) {
        const message =  await openai.beta.threads.messages.list(
            threadId
          );
        return message;
      }

   
}

export default ConnectToChatGPT;