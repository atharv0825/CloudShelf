import React, { useEffect } from 'react';
import './myfile.css';  

const MyFiles = () => {

    useEffect(() => {
        const panels = document.querySelectorAll('.myfiles-panel');

        const handleClick = (event) => {
            panels.forEach(panel => panel.classList.remove('myfiles-active'));
            event.currentTarget.classList.add('myfiles-active');
        };

        panels.forEach(panel => {
            panel.addEventListener('click', handleClick);
        });

        // Cleanup function to remove event listeners when component unmounts
        return () => {
            panels.forEach(panel => {
                panel.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <div>
            <div className="myfiles-container">
                <div 
                    className="myfiles-panel myfiles-active"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }}
                >
                    <h3>Explore The World</h3>
                </div>
                <div 
                    className="myfiles-panel"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }}
                >
                    <h3>Wild Forest</h3>
                </div>
                <div 
                    className="myfiles-panel"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')` }}
                >
                    <h3>Sunny Beach</h3>
                </div>
                <div 
                    className="myfiles-panel"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')` }}
                >
                    <h3>City on Winter</h3>
                </div>
                <div 
                    className="myfiles-panel"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }}
                >
                    <h3>Mountains - Clouds</h3>
                </div>
            </div>
        </div>
    );
}

export default MyFiles;
