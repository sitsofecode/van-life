import { redirect } from "react-router-dom"

export const requireAuth = async (request) => {
    const url = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("token")

    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must log in first.&redirectTo=${url}`)
        response.body = true
        throw response
    }
    return null
}