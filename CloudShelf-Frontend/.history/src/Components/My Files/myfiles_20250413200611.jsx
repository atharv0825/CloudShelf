import React, { useEffect } from 'react';
import styles from './myfile.module.css';  // <- this time module import

const MyFiles = () => {

    useEffect(() => {
        const panels = document.querySelectorAll(`.${styles.myfilesPanel}`);

        const handleClick = (event) => {
            panels.forEach(panel => panel.classList.remove(styles.myfilesActive));
            event.currentTarget.classList.add(styles.myfilesActive);
        };

        panels.forEach(panel => {
            panel.addEventListener('click', handleClick);
        });

        return () => {
            panels.forEach(panel => {
                panel.removeEventListener('click', handleClick);
            });
        };
    }, []);



    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
}

export default MyFiles;
