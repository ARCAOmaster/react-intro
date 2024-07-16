import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeleteSVG} from './delete.svg'
import './TodoIcons.css'

const icons = {
    check: (color)=> <CheckSVG fill = {color}/>,
    delete: (color)=> <DeleteSVG fill={color}/>
}

function TodoIcon({type, color, onClick}) {
    return (

        <span className={`icon-${type}`}  onClick = {onClick}>
            {icons[type](color)}
        </span>
    )
}

export { TodoIcon };