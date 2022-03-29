import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><ImLinkedin/></a>
        <a href='https://github.com' target="_blank"><BsGithub/></a>
        <a href='https://dribbble.com' target="_blank"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials