import './Definition.css'

const Definition = (props) => {
    return (
        <blockquote className='definition'>
            {props.def}
        </blockquote>
    )
}

export default Definition