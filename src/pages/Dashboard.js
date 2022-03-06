import './Dashboard.css';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

function Dashboard() {

    let history = useNavigate()

    let {user, logoutUser} = useContext(AuthContext);

    const [availableLength, setAvailableLength] = useState(0);
    const [loanedLength, setLoanedLength] = useState(0);
    const [brokenLength, setBrokenLength] = useState(0);
    const [listLength, setListLength] = useState(0);

    const toInventory = () => {
        history('/full_inventory')
    }

  return (
    <div id="dashboard-full-page">
        <div className="page">
            <h1>Your Dashboard</h1>
            <div className="card dashboard-graphs">
                <div className="circle-graphs">
                    <div className="graph-link">
                        <a className="graph" href="/available_instruments/"><div className="graph"><canvas height="240" width="240" id="available-canvas">{ availableLength }/{ listLength }</canvas></div></a>
                        <p>Available Instruments</p>
                    </div>
                    <div className="graph-link">
                        <a className="graph" href="/loaned_instruments/"><div className="graph"><canvas height="240" width="240" id="loaned-canvas">{ loanedLength }/{ listLength }</canvas></div></a>
                        <p>Loaned Instruments</p>
                    </div>
                    <div className="graph-link">
                        <a className="graph" href="/broken_instruments/"><div className="graph"><canvas height="240" width="240" id="broken-canvas">{ brokenLength }/{ listLength }</canvas></div></a>
                        <p>Broken Instruments</p>
                    </div>
                </div>
            </div>
            <button onClick={toInventory} className="button-primary">Full Inventory</button>
            {user ? (
                <p onClick={logoutUser}>Logout</p>
            ): <p>Login</p>}

            {user && <p>Hello {user.username}</p>}
        </div>
    </div>
  )
}

export default Dashboard