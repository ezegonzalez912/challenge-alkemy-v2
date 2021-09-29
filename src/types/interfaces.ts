import { types } from './types'

export interface Hero {
    id: string,
    name: string,
    powerstats: Powerstats,
    biography: Biography,
    appearance: Appearance,
    work: Work,
    connections: Connections,
    image: Image
}

export interface Powerstats {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat: string
}

export interface Biography {
    ["full-name"]: string,
    ["alter-egos"]: string,
    aliases: string[],
    ["place-of-birth"]: string,
    ["first-appearance"]: string,
    publisher: string,
    alignment: string
}

export interface Appearance {
    gender: string,
    race: string,
    height: string[],
    weight: string[],
    ["eye-color"]: string,
    ["hair-color"]: string
}

export interface Work {
    occupation: string,
    base: string
}

export interface Connections {
    ["group-affiliation"]: string,
    relatives: string
}

export interface Image {
    url: string
}

export interface Powerstat {
    power: string,
    value: number
}

export interface MyTeam {
    heroes: Hero[],
    alignment: {
        bad: number,
        good: number 
    },
    powerstats: Powerstat[],
    appearance: {
        height: number,
        weight: number
    }
}

export interface User {
    token: string | null
}

export interface ResHeroByName {
    data: {
        results: Hero[]
        response: string
    }
}

export type ActionsAuth = {type: string, payload: string | null}
    
export type ActionsHeroes = {type: string, payload: Hero}