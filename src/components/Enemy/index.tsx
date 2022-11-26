import { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import style from './index.less'

const Cannon =(props: {bottom:number,left:number,root:any,div:any})=>{
    
    const [bottom, setBottom] = useState<any>(props.bottom) 
    useEffect(()=>{
       let timeOut =  setTimeout(()=>{
            setBottom(bottom-1)
            if(bottom <0 && props.div.parentNode){
                props.root.unmount()
                props.div.parentNode.removeChild(props.div);            
            }
        },10)
    return ()=>{
       clearTimeout(timeOut)  
    }
    },[bottom])

    return <div className={style.enemy} style={{bottom:bottom-50,left:props.left+50}}></div>
}

const fall = (id: string,left: any,bottom: any)=>{
    const div = document.createElement('div')
    const container = document.getElementById(id);
    if(container){
        const root = createRoot(container?.appendChild(div));
        root.render(<Cannon left={left} bottom={bottom} root={root} div={div}/>)
    }
}

export default fall