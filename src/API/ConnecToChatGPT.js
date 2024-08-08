import OpenAI from "openai";


const openai = new OpenAI({
    organization: 'org-VxvUKowKFUfuYAd31crCkhv2',
    project: 'proj_U51ESK8E88wHz5elCv0YAgDD',
    apiKey: OPENAI_API_KEY,
    baseURL: 'https://api.openai.com/v1/',
    dangerouslyAllowBrowser: true
});

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