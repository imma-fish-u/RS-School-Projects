import { Position } from "components/Pages/Tree/types";
import { useEffect, useState } from "react"

const useDraggable = (activeToy: string) => {
  const [position, setPosition] = useState<Position>({x: 0, y: 0})

  useEffect(() => {
    const handle = document.getElementById(activeToy) as HTMLElement;
    console.log(handle)
    handle?.addEventListener("mousedown", function(e) {
      e.preventDefault()
      handle.style.pointerEvents = "none"
      console.log(handle)
      document.body.addEventListener("mousemove", move)
      document.body.addEventListener("mouseup", () => {
        document.body.removeEventListener("mousemove", move)
        handle.style.pointerEvents = "initial"
      })
    })

    return () => {
      document.body.removeEventListener("mousedown", move)
      document.body.removeEventListener("mouseup", move)
      document.body.removeEventListener("mousemove", move)
    }
  }, [activeToy])

  function move(e: MouseEvent) {
    const pos = {
      x: e.clientX,
      y: e.clientY,
    }
    setPosition(pos)
  }

  return {
    position
  }
}

export default useDraggable