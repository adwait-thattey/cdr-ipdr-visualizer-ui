import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar'
import { Modal } from 'antd';

const Home = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);

    const   handleFilterModal = (status) => setShowFilterModal(status)

    // useEffect(() => {
    //     var G = new window.jsnx.Graph();
    //     G.addNode(1, { count: 12 });
    //     G.addNode(2, { count: 8 });
    //     G.addNode(3, { count: 15 });
    //     G.addNode(4, { count: 15 });
    //     G.addNode(5, { count: 15 });
    //     G.addNode(6, { count: 15 });
    //     G.addNode(7, { count: 15 });
    //     G.addNode(8, { count: 15 });
    //     G.addNode(9, { count: 15 });
    //     G.addNode(10, { count: 15 });
    //     G.addNode(11, { count: 15 });
    //     G.addNode(12, { count: 15 });
    //     G.addNode(13, { count: 15 });
    //     G.addNode(14, { count: 15 });
    //     G.addNode(15, { count: 15 });
    //     G.addNode(16, { count: 15 });
    //     G.addNode(17, { count: 15 });
    //     G.addNode(18, { count: 15 });
    //     G.addEdgesFrom([
    //         [1, 2],
    //         [1, 3],
    //         [1, 4],
    //         [1, 5],
    //         [1, 6],
    //         [1, 7],
    //         [1, 8],
    //         [1, 9],
    //         [1, 10],
    //         [1, 11],
    //         [1, 12],
    //         [1, 13],
    //         [1, 14],
    //         [1, 15],
    //         [1, 16],
    //         [1, 17]
    //     ]);

    //     window.jsnx.draw(G, {
    //         element: '#demo-canvas',
    //         withLabels: true,
    //         nodeAttr: {
    //             r: function(d) {
    //             // `d` has the properties `node`, `data` and `G`
    //                 return d.data.count;
    //             }
    //         }
    //     });

    //     window.d3.selectAll('.node').on('mouseover', d => {
    //         console.log(d);
    //     });
    // }, []);

    return (
        <>
            <Modal
                title="Basic Modal"
                visible={showFilterModal}
                onCancel={() => handleFilterModal(false)}
                footer={null}
            >
                <h1>HI There</h1>
            </Modal>
            <SearchBar onFilterClick={() => handleFilterModal(true)}/>
            <div className={styles.graphCanvas} id="demo-canvas"></div>
        </>
    )
};

export default Home;
