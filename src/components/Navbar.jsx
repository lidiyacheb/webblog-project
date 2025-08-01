import React, {useState} from 'react';
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const kategorien = ["Alles", "Technik", "Kunst", "Musik", "Sport"];

    const [istOffen, setIstOffen] = useState(false);

    const dropdownUmschalten = () => setIstOffen(!istOffen);

    return (
        <div className="dropdown">
            <button onClick={dropdownUmschalten} className="dropbtn">
                Kategorien <FaChevronDown style={{ marginLeft: "5px" }} />
            </button>
            {istOffen && (
                <ul className="dropdown-content">
                    {kategorien.map((kat, idx) => (
                        <li key={idx} className="dropdown-item">
                            {kat}
                        </li>
                    ))}
                </ul>
            )
            }

        </div>
    );
};

export default Navbar;