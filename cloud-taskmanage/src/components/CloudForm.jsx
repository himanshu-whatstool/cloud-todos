import { useState } from "react"
import { UseTodo } from "../Context"

function CloudForm() {

  const [todo, setTodo] = useState("")
  const { addTodo } = UseTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <section>
      <form onSubmit={add} className="flex">
        <input value={todo} type="text" placeholder="Write.." onChange={(e) => setTodo(e.target.value)} className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Add</button>
      </form>
    </section>
  )
}

export default CloudForm





