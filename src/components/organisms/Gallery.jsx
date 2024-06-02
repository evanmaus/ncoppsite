import React, { useState } from "react"

let imgs = {
  1: "src/assets/images/nature.jpg",
  2: "src/assets/images/rarar.jpg",
  3: "src/assets/images/dog.jpg",
  4: "src/assets/images/cat.jpg",
  5: "src/assets/images/aaron.jpg",
}

export default function Gallery() {
  const [order, setOrder] = useState([1, 2, 3, 4, 5])

  const arrange = (index) => {
    setOrder((prevOrder) => {
      let newOrder = [...prevOrder]
      const selected = newOrder.splice(index, 1)[0]
      newOrder.splice(2, 0, selected)

      newOrder = newOrder.map((item, idx) =>
        idx !== 2 ? newOrder[2] + (idx - 2) : item
      )

      if (newOrder[0] === 0) newOrder[0] = 5
      if (newOrder[4] === 6) newOrder[4] = 1

      return newOrder
    })
  }

  return (
    <div className="flex w-full h-auto py-16">
      <button className="w-1/12 h-auto" onClick={() => arrange(0)}>
        <img
          src={imgs[order[0]]}
          className="rounded w-11/12 h-auto m-auto hover:w-full"
        ></img>
      </button>
      <button className="w-2/12 h-auto" onClick={() => arrange(1)}>
        <img
          src={imgs[order[1]]}
          className="rounded-xl w-11/12 h-auto m-auto hover:w-full"
        ></img>
      </button>
      <button className="w-6/12 h-auto" onClick={() => arrange(2)}>
        <img
          src={imgs[order[2]]}
          className="rounded-3xl w-11/12 h-auto m-auto"
        ></img>
      </button>
      <button className="w-2/12 h-auto" onClick={() => arrange(3)}>
        <img
          src={imgs[order[3]]}
          className="rounded-xl w-11/12 h-auto m-auto hover:w-full"
        ></img>
      </button>
      <button className="w-1/12 h-auto" onClick={() => arrange(4)}>
        <img
          src={imgs[order[4]]}
          className="rounded w-11/12 h-auto m-auto hover:w-full"
        ></img>
      </button>
    </div>
  )
}
