import {
    REPOSITORIES_API_POINT
} from "../constants"

export async function retrieveUserRepos(name){
    const parsedRepository = REPOSITORIES_API_POINT.replace("%s", name)

    const data = await fetch(parsedRepository)
    return await data.json()
}
