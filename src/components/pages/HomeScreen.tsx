import { MyTeam } from '../feectures/MyTeam'
import { StatsCard } from '../cards/StatsCard'

export const HomeScreen = () => {
    
    return (
        <div className="home_screen">
            <MyTeam />
            <StatsCard />
        </div>
    )
}
