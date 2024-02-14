import PropTypes from 'prop-types'
import { options } from './constants'
import classNames from 'classnames'

import "./Card.css"
import "../main.css"
export const Card = ({
                       // eslint-disable-next-line react/prop-types
  children="So I decided to go with a catppuccin kinda style design, hope this looks good. Also I am trying to make these with pure css, and not using tailwind, lets see how well it goes"
}) => {
  return <div
      className={classNames('card')}>
    <h1 className={"title jetbrains-mono"}>
        CATPPUCCIN CARD
    </h1>
    <hr/>
    <h1 className={"subtitle jetbrains-mono"}>
      Catppuccin mocha card for ya all
    </h1>
    <hr/>
    <h1 className={"body jetbrains-mono"}>
    {children}
    </h1>
    <h1 className={"bottom jetbrains-mono"}>
      yellowhatpro :)
    </h1>
  </div>
}

Card.prototype = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

export default Card
