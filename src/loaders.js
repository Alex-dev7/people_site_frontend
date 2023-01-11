// our BASE_URL
const URL = 'https://people-api-5abz.onrender.com'

export const peopleLoader = async () => {
    const response = await fetch(URL + '/people')
    const data = await response.json()
    return data
}


export const personLoader = async ({params}) => {
    const response = await fetch(URL + "/people/" + params.id)
    const person = await response.json()
    return person
}