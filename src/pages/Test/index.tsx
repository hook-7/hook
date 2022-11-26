
import './index.less'
import {useEffect, useState} from "react";
import { Button } from 'antd';




const size = 1000
let clickInit = {y:0,x:0,index:0}
let xy = [{ x: 10, y: 10, h: 50, w: 50, Style: "rgb(200, 0, 0)" }]
export default () => {
    
    const [arr, setArr] = useState(false)
    const [action, setAction]  =  useState(0)
    
    const move =(u: { clientX: any; clientY: any; nativeEvent: { offsetY: any; offsetX: any; }; })=>{     
        if(!arr){
            console.log("move");
            return
        }
        
        setAction(action+1)
        xy[xy.length-1 ].y =  u.nativeEvent.offsetY - clickInit.y 
        xy[xy.length -1].x =  u.nativeEvent.offsetX - clickInit.x 
    }
    const down=(u: { nativeEvent: { offsetY: number; offsetX: number; }; })=>{
        let index = 0
        for (const item of xy) {
            if (u.nativeEvent.offsetY > item.y && u.nativeEvent.offsetY < item.y + item.h && u.nativeEvent.offsetX > item.x && u.nativeEvent.offsetX < item.x + item.w) {
                setArr(true)
                clickInit.x = u.nativeEvent.offsetX - item.x
                clickInit.y = u.nativeEvent.offsetY - item.y
                // xy.splice(index,1)
                xy = xy.filter(i => i != item)
                xy.push(item)
                console.table(xy);
                // break
            }
            index++
        }
   
    }

    const up=()=>{
        setArr(false)
    }
    useEffect(()=>{
        const canvas = document.getElementById('canvas');
        if(canvas){
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, size, size)
            //绘制矩形
            for(const item of xy){
                ctx.fillStyle = item.Style;
                ctx.fillRect(item.x, item.y, item.w, item.h);
            }
            xy.flatMap
        
        }
    },[action])

    return (<div>
        <Button type='primary' onClick={() => { 
            xy.push({
                x: 10, y: 10, h: 50, w: 50,
                Style: `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255) })`
            })
            setAction(action+1)
    }}>add</Button>
        <Button type='primary' onClick={() => {
           xy= xy.filter(i=>i!=xy[clickInit.index])
            setAction(action + 1)
        }}>pop</Button>
        <canvas id={"canvas"} 
            height={size*0.75} 
            width={size} 
            onMouseMove={move}
            onMouseUp={up}
            onMouseDown={down}
            onMouseOut={()=>setArr(false)}>
        </canvas>
        </div>)
}