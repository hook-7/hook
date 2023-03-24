import enemyStyle from '../Enemy/index.less'
import loopStyle from './index.less'


const replacePX = (px: string) => {
    return +px.replace("px", "")
}

const getStyle = (el: Element) => {
    const style = getComputedStyle(el)
    return [style.top, style.bottom, style.left, style.right].map(i => replacePX(i))
}

export default () => {
    // console.log(loopStyle.cannon);
    // console.log(enemyStyle.enemy);
    
    let cannons = document.getElementsByClassName(loopStyle.cannon)
    let enemys = document.getElementsByClassName(enemyStyle.enemy)
    if (enemys.length && cannons.length) {

        for (let i = 0; i < cannons.length; i++) {
            const cs = getStyle(cannons[i])
            for (let j = 0; j < enemys.length; j++) {
                const es = getStyle(enemys[j])
                if (cs[1] > es[1] && cs[2] > es[2] ){
                    console.log("~~~~~~~~~~~~~");
                    
                    cannons[i].parentNode?.removeChild(cannons[i])
                    enemys[j].parentNode?.removeChild(enemys[j])
                    return
                }
            }
        }
        // console.log(getComputedStyle(cannons[0]).left);
        // console.log(getComputedStyle(enemys[0]).left);
    }


}