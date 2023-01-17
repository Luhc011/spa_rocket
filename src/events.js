import {
    toHome,
    toUniverse,
    toExplore
} from './elements.js'

export default function Events({controls}) {
    
    toHome.addEventListener('click', function(){
        controls.home()
    })
    
    toUniverse.addEventListener('click', function(){
        controls.universe()
    })
    
    toExplore.addEventListener('click', function(){
        controls.explorer()
    })

}
