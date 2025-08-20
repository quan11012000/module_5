import useClock from '../../hooks/useClock';
import "./Clock.css"

function Clock() {
    const [time,apm] = useClock();
    return (
        <div id="Clock-style">
            {time}<span>{apm}</span>
        </div>
    )
}
export default Clock;
