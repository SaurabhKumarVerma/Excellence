import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Todo() {
    const [state, setstate] = useState("")
    const [item, setitem] = useState([])


    const addItem = () => {
        if (!state) {

        }
        else {

            setitem([...item, state])
            setstate('')

        }
    }
    return (
        <>
            <div className="container-sm">
                
                <div className="row  d-flex justify-content-center align-self-center mt-auto p-5">
                
                    <div className="col-sm-6 mt-auto p-5">
                    <h3 className="p-1">Todo App</h3>
                        <input type="text" placeholder="Enter Todo's" value={state} onChange={(e) => setstate(e.target.value)} />
                        <button className="mx-3 " onClick={addItem}>Add todos</button>
                    </div>

                    <div >
                    <br />
                        {
                            item.map((ele, ind) => {
                                // <br />
                                return (
                                    <div className="row d-flex justify-content-center " key={ind}>
                                        <div className="col-sm-6">
                                            <br />
                                            <div className="card" style={{boxSizing:'border-box',width:"56%",background:"blur",marginBottom:"0%"}}>
                                                <div className="card-body">
                                                    <p className="card-text d-flex justify-content-center">{ele}</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                )
                            })
                        }
                </div>

                </div>
                <br />


            </div>
        </>
    )
}
