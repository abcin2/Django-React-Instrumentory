import React, { useState, useEffect } from 'react'
// import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
// import { Link } from 'react-router-dom'

function ExampleListPage({ match, history }) {

    // let exampleId = match.params.id;
    const [examples, setExamples] = useState([]);
    // const [example, setExample] = useState(null);

    useEffect(() => {
        getExamples()
        // getExample()
    }, [])
// }, [exampleId])


    let getExamples = async () => {
        let response = await fetch('http://localhost:8000/api/');
        let data = await response.json()
        console.log(data)
        setExamples(data)
    }

    // let getExample = async () => {
    //     if (exampleId === 'new') return
    //     let response = await fetch(`http://localhost:8000/api/examples/${exampleId}/`);
    //     let data = await response.json()
    //     setExample(data)
    // }

    // let updateExample = async () => {
    //     fetch(`http://localhost:8000/api/examples/${exampleId}/update/`, {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(example)
    //     })
    // }

    // let createExample = async () => {
    //     fetch('http://localhost:8000/api/examples/create/', {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(example)
    //     })
    // }

    // let deleteExample = async () => {
    //     fetch(`http://localhost:8000/api/examples/${exampleId}/delete/`, {
    //         method: "DELETE",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     history.push('/')
    // }

    // let handleSubmit = () => {
    //     updateExample()
    //     history.push('/')
    // }

  return (
    <div>
        Examples:
        <br />
        {/* can use map function to map multiple pieces of data with html tags */}
        { examples }
    </div>
  )
}

export default ExampleListPage