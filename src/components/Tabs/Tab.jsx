import { useState } from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ tab1Active, tab2Active, tab3Active, showLastTab }) => {
    // Estado inicial basado en los props
    const [activeTab, setActiveTab] = useState(
        tab1Active ? 0 : tab2Active ? 1 : (tab3Active ? 2 : 0)
    );

    // Función para cambiar la pestaña activa
    const toggleActive = (index) => {
        setActiveTab(index);
    };

    return (
        <nav>
            <ul className="flex justify-between items-center bg-primary-darkBlue-300 min-w-[223px]">
                {/* Pestaña 1 */}
                <li
                    className={`cursor-pointer text-white text-sm h-10 ${!showLastTab ? 'min-w-[97px]' : 'min-w-[55px]'} flex justify-center items-center ${activeTab === 0 ? 'border-b-2 border-system-successColor font-bold' : 'border-none'} ${!tab1Active ? 'border-none' : '' } `}
                    onClick={() => toggleActive(0)} // Al hacer clic, activa la pestaña 1
                >
                    Tab 1
                </li>

                {/* Pestaña 2 */}
                <li
                    className={`cursor-pointer text-white text-sm h-10 ${!showLastTab ? 'min-w-[97px]' : 'min-w-[55px]'} flex justify-center items-center ${activeTab === 1 || tab2Active ? 'border-b-2 border-system-successColor font-bold' : 'border-none'}`}
                    onClick={() => toggleActive(1)} // Al hacer clic, activa la pestaña 2
                >
                    Tab 2
                </li>

                {/* Pestaña 3 */}
                {showLastTab && (
                    <li
                        className={`cursor-pointer text-white text-sm h-10 min-w-[55px] flex justify-center items-center ${activeTab === 2  || tab3Active ? 'border-b-2 border-system-successColor font-bold' : 'border-none'}`}
                        onClick={() => toggleActive(2)} // Al hacer clic, activa la pestaña 3
                    >
                        Tab 3
                    </li>
                )}
            </ul>
        </nav>
    );
};

Tab.propTypes = {
    tab1Active: PropTypes.bool,
    tab2Active: PropTypes.bool,
    tab3Active: PropTypes.bool,
    showLastTab: PropTypes.bool,
};