import { useEffect, useState } from "react"


export const MyFunc = () => {
  const [cart, setCart] = useState([])

  const fetchProduct = async () => {
    const prodApi = "https://dummyjson.com/carts"
    try {
      const resp = await fetch(prodApi)
      const res = await resp.json()
      // console.log("data", res);
      setCart(res.carts)

    } catch (error) {
      console.log("product is not responded", error);
    }
  }
  useEffect(() => { fetchProduct() }, [])
  console.log(cart);


  return (
    <section className="container mt-4">
      {
        cart.map((item) => {
          return (
            <section key={item.id}>
              <p>{item.title}</p>
            </section>
          )
        })
      }
    </section>
  )
}








