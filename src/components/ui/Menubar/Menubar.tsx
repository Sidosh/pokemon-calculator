import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => (
    <div className="row w-100">
        <div className="col-4">
            <Link to="/dmgcalc">
                <button className="btn w-100 bg-primary text-white">
                    Rechner
                </button>
            </Link>
        </div>
        <div className="col-4">
            <Link to="/draftplanner">
                <button className="btn w-100 bg-secondary text-white">
                    Draftplaner
                </button>
            </Link>
        </div>
        <div className="col-4">
        </div>
    </div>
)

export default Menubar