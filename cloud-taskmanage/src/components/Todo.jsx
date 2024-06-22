import { useEffect, useState } from "react"
import Spinner from "../Basetool/Spinner"

export const Todolist = () => {
  return (
    <section>
      <TodoApi />
    </section>
  )
}

export const TodoApi = () => {

  const [todo, setTodo] = useState([])
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)


  const fetchApi = async () => {
    setLoading(true);
    const apiUrl = "https://dummyjson.com/todos"
    try {
      const response = await fetch(apiUrl)
      const result = await response.json()
      // console.log("todo", result);
      setTodo(result.todos)
      todo = result.todos
      
      setLoading(false);
    } catch (error) {
      console.log("Api isn't responded");
    } finally {
      setLoading(false)
    }
  }

  const fetchProduct = async () => {
    const productApi = `https://fakestoreapi.com/products`
    try {
      const responsepro = await fetch(productApi)
      const resultpro = await responsepro.json()
      setProduct(resultpro)
    } catch (error) {
      console.log("Api isn't responded");
    }
  }

  useEffect(() => { fetchApi(), fetchProduct() }, [])

  return (
    <section className="container mt-4">
      <table className="table" style={{ fontSize: '14px' }}>
        <thead style={{ background: '#616874', color: '#000' }} >
          <tr>
            <th style={{ width: '75vw' }}>Todos</th>
            <th style={{ width: '25vw' }}>Todo UserID</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? <Spinner />
              :
              todo?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.todo}</td>
                    <td>{item.userId}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </table >
      <div className="row">
        {
          product?.map((prodata) => {
            return (

              <div className="col-12 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" key={prodata.id} >

                <div className="card mt-4" style={{ width: '20rem', alignItems: 'center', height: 'auto' }} >
                  < img src={prodata.image} style={{ height: '180px' }} className="img-fluid" />
                  <div className="card-body">
                    <h6 className="card-title" style={{ fontWeight: 600 }}>{prodata.title}</h6>
                    <i><h6 className="float-end border border-gray p-2 rounded-md">INR {prodata.price}</h6></i>
                    <Description prodata={prodata} />
                    <div className="d-flex justify-between mt-2 fw-bold">
                      <p>{prodata.rating.rate}</p>
                      <p>{prodata.rating.count}</p>
                    </div>
                    <button className="btn btn-sm border border-black"><i className="bi bi-arrow-left-circle"></i></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div >
    </section >
  )
}

export const Description = ({ prodata }) => {
  const [readmore, setReadmore] = useState(false)
  const handleReadmore = () => setReadmore(!readmore)

  return (
    <section>
      {
        prodata.description?.length > 55 &&
        <p className="card-text fw-semibold">
          {
            !readmore && <span>{`${prodata.description?.substring(0, 55)} ...`}</span>
          }
          {
            readmore && <span>{`${prodata.description}`}</span>
          }
          <span className="hand" style={{ color: '#ff0000' }} onClick={() => handleReadmore()}>{readmore ? "Read less" : "Read more"}</span>
        </p>
      }
      {
        prodata.description?.length < 55 && <p className="card-text">{`${prodata.description}`}</p>
      }
    </section>
  )
}
