
import PropTypes from 'prop-types'

export default function Button({state,setState}) {
  return (
    <button disabled={state ? true: false} onClick={() =>{
        console.log("clicked")
        setState(!state)
    } } >Click Me</button>
  )
}
Button.propTypes = {
  state: PropTypes.bool.isRequired ,
  setState: PropTypes.func.isRequired
}