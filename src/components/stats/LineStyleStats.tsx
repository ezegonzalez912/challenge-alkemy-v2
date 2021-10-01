import { Line } from 'rc-progress';

interface Props {
    value: string,
    title: string
}

export const LineStyleStats: React.FC<Props> = ({value, title}) => {

    const valueCheck:number = parseInt(value)

    return (
        <div className="hero-stats-list_item" title={value.toString()}>
            <p>{title}</p>
            <Line percent={valueCheck} strokeWidth={10} trailWidth={10} strokeColor="#4C22B0" />
        </div>
    )
}
