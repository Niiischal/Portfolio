import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './skills.css'

const Skills = () => {
  return (
    <section>
        <h5>What Skills I got</h5>
        <h2>My Experience</h2>

        <div className="container experience">
            <div className="frontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className='details'>
                    <BsFillPatchCheckFill className='icons'/>
                    <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced.</small>
                    </div>
                    </article>
                    <article className='details'>
                    <BsFillPatchCheckFill className='icons'/>
                    <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate.</small>
                    </div>
                    </article>
                    <article className='details'>
                    <BsFillPatchCheckFill className='icons'/>
                    <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Intermediate.</small>
                    </div>
                    </article>
                    <article className='details'>
                    <BsFillPatchCheckFill className='icons'/>
                    <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Beginner.</small>
                    </div>
                    </article>
                    <article className='details'>
                    <BsFillPatchCheckFill className='icons'/>
                    <div>
                    <h4>Tailwind</h4>
                    <small className='text-light'>Beginner.</small>
                    </div>
                    </article>
                    <article className='details'>
                    <BsFillPatchCheckFill className='icons'/>
                    <div>
                    <h4>React</h4>
                    <small className='text-light'>Intermediate.</small>
                    </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
