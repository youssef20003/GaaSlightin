export interface Iprofile {
    _id: string
    userName: string
    displayName: string
    profileImage: string
    createdAt: string
    updatedAt: string
    bio: string
    company: string
    location: string
    portfolio: string
    repositories: [{
        id: number
        name: string
        about: string
        forks: number
        stars: number
        topics: string[]
    }]
    __v: number
}