import { parseHeight, parseWeight } from "../../helpers/helpers";
import { ActionsHeroes, Hero, MyTeam, Powerstat } from "../../types/interfaces";
import { types } from "../../types/types";

export const heroesReducer = (state:MyTeam, action:ActionsHeroes) => {

    const { type, payload } = action;
    const { powerstats, appearance, alignment, heroes } = state;

    const { alignment: alignmentByPayload } = payload.biography;
    const { height, weight } = payload.appearance;

    const powerstatsFormat: any = [
        {power: "Intelligence", value: payload.powerstats.intelligence},
        {power: "Strength", value: payload.powerstats.strength},
        {power: "Speed", value: payload.powerstats.speed},
        {power: "Durability", value: payload.powerstats.durability},
        {power: "Power", value: payload.powerstats.power},
        {power: "Combat", value: payload.powerstats.combat}
    ]

    switch(type){
        case types.add_team:
            return {
                heroes: [
                    ...heroes, 
                    payload
                ],
                alignment: {
                    bad: alignmentByPayload === "bad" ? alignment.bad + 1 : alignment.bad,
                    good: alignmentByPayload === "good" ? alignment.good + 1 : alignment.good,
                },
                powerstats: powerstats.map((powerstat:Powerstat) => {
                    const newValue = powerstatsFormat.find( (stat:Powerstat) => stat.power === powerstat.power).value
                    return {...powerstat, value: powerstat.value + parseInt(newValue)}
                }),
                appearance: {
                    height: appearance.height + parseHeight(height[1]),
                    weight: appearance.weight + parseWeight(weight[1])
                }
            }

        case types.remove_team:
            return {
                heroes: heroes.filter( (hero:Hero) => hero.id !== payload.id ),
                alignment: {
                    bad: alignmentByPayload === "bad" ? alignment.bad - 1 : alignment.bad,
                    good: alignmentByPayload === "good" ? alignment.good - 1 : alignment.good,
                },
                powerstats: powerstats.map((powerstat:Powerstat) => {
                    const newValue = powerstatsFormat.find( (stat:Powerstat) => stat.power === powerstat.power).value
                    return {...powerstat, value: powerstat.value - parseInt(newValue)}
                }),
                appearance: {
                    height: appearance.height - parseHeight(height[1]),
                    weight: appearance.weight - parseWeight(weight[1])
                }
            }
            
        default:
            return state;
    }
}