import { useState } from 'react';

const Problem1 = () => {
    const [inputData, setInputData] = useState([])
    const [displayData, setDisplayData] = useState([...inputData])

    const [show, setShow] = useState('all');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const status = form.status.value.toLowerCase();
        const newData = { name, status, id: inputData.length }
        const newInputData = [...inputData, newData]
        setInputData(newInputData);
        setDisplayData(newInputData.sort())
        form.reset()
    }
    
    const handleClick = (val) => {
        // const array = inputData;
        setShow(val);
        if (show === 'active') {
            const active = inputData.filter(data => data.status === "active")
            setDisplayData(active)
        }
        else if (show === 'completed') {
            const completed = inputData.filter(data => data.status === "completed")
            setDisplayData(completed)
        }
        else {
            setDisplayData(inputData)
        }
    }


    return (

        <div className="container">
            <div className="mt-5 row justify-content-center">
                <h4 className='mb-5 text-center text-uppercase'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="mb-4 row gy-2 gx-3 align-items-center">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="mb-3 nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} onClick={() => handleClick('all')}>All __ please Double Click</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`}  onClick={() => handleClick('active')}>Active __ please Double Click</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} onClick={() => handleClick('completed')}>Completed __ please Double Click</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                    displayData.map(data => <tr key={data.id}>
                                        <th>{data.name}</th>
                                        <th>{data.status}</th>
                                    </tr>)
                               
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;