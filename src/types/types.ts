interface Types {
    login: string,
    logout: string,
    add_team: string,
    remove_team: string
}

export const types:Types = {
    login: "[AUTH] LOGIN",
    logout: "[AUTH] LOGOUT",
    add_team: "[TEAM] ADD HERO",
    remove_team: "[TEAM] REMOVE TEAM"
}