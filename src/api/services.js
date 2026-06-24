import client from './client'

export const ingestRepo = (repoUrl) => {
  return client.post(
    '/api/ingest/uri',
    null,
    {
    params: { q: repoUrl },
    }
  )
}

// export const askQuestion = (question, namespace = 'default') => {
//   return client.get('/api/chat/stream', {
//     question,
//     namespace,
//   })
// }

export const askQuestionStream = (question, namespace = 'default') => {
  return new EventSource(
    `/api/chat/stream?question=${encodeURIComponent(question)}&namespace=${encodeURIComponent(namespace)}`
  )
}
