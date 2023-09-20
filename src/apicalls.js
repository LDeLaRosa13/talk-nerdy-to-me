function getPhrase() {
  return fetch('https://techy-api.vercel.app/api/json')
  .then(response => {
    if(!response.ok) {
      throw new Error (`${response.status}`)
    }
    return response.json()
  })
}

export {
  getPhrase
}