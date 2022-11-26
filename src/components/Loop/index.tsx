import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import style from './index.less'
import fall from '@/components/Enemy'
import inspect from '@/components/Loop/intersection'

const replacePX = (px: string) => {
    return +px.replace("px", "")
}

const getStyle = (el: Element) => {
    const style = getComputedStyle(el)
    return [style.top, style.bottom, style.left, style.right].map(i => replacePX(i))
}

const Item = (props: any) => {

    return <div key={props.id} id={props.id} className={style.text}>{props.say}</div>
}

const Cannon = (props: { bottom: number, left: number, root: any, div: any }) => {

    const [bottom, setBottom] = useState<any>(props.bottom)
    useEffect(() => {
        setTimeout(() => {
            setBottom(bottom + 1)
            if (bottom > 600) {
                props.root.unmount()
                if (props.div.parentNode) {
                    props.div.parentNode.removeChild(props.div);
                }
            }
        }, 10)
    }, [bottom])

    return <div className={style.cannon} style={{ bottom: bottom +100, left: props.left + 50 }}></div>
}

const fire = (id: string, left: any, bottom: any) => {
    const div = document.createElement('div')
    const container = document.getElementById(id);
    if (container) {
        const root = createRoot(container?.appendChild(div));
        root.render(<Cannon left={left} bottom={bottom} root={root} div={div} />)
    }
}

let key: any = {}
export default (props: any) => {

    const text = props.text

    const id = new Date().toDateString()

    let [cut, setCut] = useState(0)
    let ls = document.getElementsByClassName(style.text)

    useEffect(() => {
        let timer = setInterval(() => {
            const div = document.createElement('div')
            const container = document.getElementById(id);
            const root = createRoot(container?.appendChild(div));
            root.render(<Item key={cut} id={cut} say={text[cut % text.length]}></Item>)
            setCut(++cut)
            setTimeout(() => {
                //删除
                root.unmount()
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
            }, 4990 * 2);
        }, 5000 / 2)

        return () => {
            clearInterval(timer)
        }
    }, [props])

    useEffect(() => {
        let timer = setInterval(() => {
            // inspect()
            for (const k in key) {
                if (key[k]) {
                    controller(k)
                }
            }
            if (ls.length) {
                ls[0].style.color = "red"
           
                 
            }

        }, 30)
        let timer2 = setInterval(() => {
                fall(id,Math.floor(Math.random()*1500),700)

        }, 1000)

        return () => {
            clearInterval(timer)
            clearInterval(timer2)
        }
    }, [])

    const controller = (key: any) => {
        const target = document.getElementById(style.aircraft)
        const iid = document.getElementById(id)
        if (target && iid) {

            let dom = window.getComputedStyle(target)
            let left = Number(dom.left.replace("px", ""))
            let bottom = Number(dom.bottom.replace("px", ""))
            const w = Number(window.getComputedStyle(iid).width.replace("px", ""))
            const h = Number(window.getComputedStyle(iid).height.replace("px", ""))
            const w_unit = h / 50
            const h_unit = h / 50


            // console.table(getStyle(target));
            if (key == "ArrowRight" || key == "d") {
                if (left + w_unit >= w - 100) {
                    return
                }
                target.style.left = left + w_unit + "px"


            } else if (key == "ArrowLeft" || key == "a") {
                if (left <= 0) {
                    return
                }
                target.style.left = left - w_unit + "px"

            } else if (key == "ArrowDown" || key == "s") {
                if (bottom <= 0) {
                    return
                }
                target.style.bottom = bottom - h_unit + "px"
            } else if (key == "ArrowUp" || key == "w") {
                if (bottom + h_unit >= h - 100) {
                    return
                }
                target.style.bottom = bottom + h_unit + "px"
            } else if (key == " ") {

                fire(id, left,bottom)

            }
            // console.log(key);
        }


    }

    return (
        <div>
            <div className={style.bc} id={id} tabIndex={0} onKeyDown={(k) => {key[k.key] = true}} onKeyUp={(k) => {key[k.key] = false }}>
                <div id={style.aircraft}>
                    <img src={require('@/assets/aircraft.jpg')} alt="" />
                </div>
            </div>
        </div>

    )
}