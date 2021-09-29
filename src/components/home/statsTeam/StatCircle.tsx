import { Circle } from 'rc-progress';

interface Props {
    value: number,
    name: string
}

export const StatCircle: React.FC<Props> = ({value, name}) => {

    const percentage = (num: number) => {
        return (num / 600) * 100
    }

    return (
        <div className="progress-circle_container">
            <p className="progress-circle_name">{name}</p>
            <div className="progress-circle">
                <p className="progress-circle_title">{value}</p>
                <Circle className="progress-circle_circle" percent={percentage(value) === 0 ? 0.1 : percentage(value)} strokeWidth={10} trailWidth={10} strokeColor="#4C22B0" />
            </div>
        </div>
    )
}
