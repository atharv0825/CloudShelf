import React, { useEffect } from 'react';


const MyFiles = () => {




    return (
        <div class="container my-5">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card" style="background-image: url('https://picsum.photos/id/1/800/600');">
                        <h3>Random Card 1</h3>
                        <p>This is a randomly generated card.</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card" style="background-image: url('https://picsum.photos/id/2/800/600');">
                        <h3>Random Card 2</h3>
                        <p>This is a randomly generated card.</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card" style="background-image: url('https://picsum.photos/id/3/800/600');">
                        <h3>Random Card 3</h3>
                        <p>This is a randomly generated card.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card" style="background-image: url('https://picsum.photos/id/4/800/600');">
                        <h3>Random Card 4</h3>
                        <p>This is a randomly generated card.</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card" style={{ "background-image": url('https://picsum.photos/id/5/800/600');" }}>
                        <h3>Random Card 5</h3>
                        <p>This is a randomly generated card.</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card" style="background-image: url('https://picsum.photos/id/6/800/600');">
                        <h3>Random Card 6</h3>
                        <p>This is a randomly generated card.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyFiles;
