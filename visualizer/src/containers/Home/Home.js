import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Modal } from 'antd';

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const cdrData = [{from: 1, to: 2, frequency: 5, calls: []}, 
    {from: 1, to: 3, frequency: 5, calls: []}, 
    {from: 2, to: 3, frequency: 5, calls: []}, 
    {from: 2, to: 3, frequency: 5, calls: []}
]

const ipdrData = [
    {from: 1, service: 1, records: 3}, 
    {from: 1, service: 2, records: 2}, 
    {from: 2, service: 3, records: 4}, 
]

const usersData = [
    {
        id: 1,
        name: "Brijesh",
        phone_numbers: ["1234567890", "0987654321", "3628292838"] 
    },
    {
        id: 2,
        name: "Adwait",
        phone_numbers: ["1234567890", "0987654321", "3628292838"] 
    },
    {
        id: 3,
        name: "Parth",
        phone_numbers: ["1234567890", "0987654321", "3628292838"] 
    },
    {
        id: 4,
        name: "Riya",
        phone_numbers: ["1234567890", "0987654321", "3628292838"] 
    }
]

const servicesData = [
    {
        id: 1,
        name: "WhatsApp",
        port: 5432
    },
    {
        id: 2,
        name: "Messenger",
        port: 8000
    },
    {
        id: 3,
        name: "Telegram",
        port: 8001
    }
]

const Home = () => {
<<<<<<< HEAD
    const [showFilterModal, setShowFilterModal] = useState(false);
    // Modal to showcase the pop up modal on hovering the node
    const [hoverModal, setHoverModal] = useState([false, null]);


    // Modal to showcase the detailed side panel
    const [detailPanel, setDetailPanel] = useState([false, null]);


    const [cdr, setCdrData] = useState(cdrData);
    const [ipdr, setIpdr] = useState(ipdrData);
    const [users, setUsers] = useState(usersData);
    const [services, setServices] = useState(servicesData);


    const handleFilterModal = (status) => setShowFilterModal(status)


    useEffect(() => {
        window.d3.selectAll('.node').on('mouseenter', d => {
            setHoverModal([true, d]);
        });

        window.d3.selectAll('.node').on('click', d => {
            setDetailPanel([true, d]);
        });

        window.d3.selectAll('.node').on('mouseleave', d => {
            setHoverModal([false, null]);
        });
    }, []);

    useEffect(() => {
        var G = new window.jsnx.Graph();
        // G.addNode(1, { count: 12, color: getRandomColor() });
        // G.addNode(2, { count: 8, color: getRandomColor() });
        // G.addNode(3, { count: 15, color: getRandomColor() });
        // G.addEdge(3, 1, { edge_labels: "node1" });
        // G.addEdge(3, 2, { edge_labels: "node2" });


        for (let ele of users) {
            const { id } = ele;
            G.addNode(id, { type: "user", color: getRandomColor(), value: id + 15 })
        }

        window.jsnx.draw(G, {
            element: '#demo-canvas',
            withLabels: true,
            nodeAttr: {
                r: function(d) {
                    return d.data.value < 5 ? 15 : d.data.value;
                }
            },
            nodeStyle: {
                fill: (d) => d.data.color 
            }
        });
    }, [cdr, ipdr, users, services]);

    const hoverDiv = () => {
        const { x, y } = hoverModal[1];
        return (
            <></>
            // <div className={styles.hoverModal} style={{ left: x + 100, top: y - 10 }}>{hoverModal[1].node}</div>
        )
    }

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

            <div className={styles.networkWrapper}>
                <div className={styles.graphCanvas} id="demo-canvas"></div>
                <div className={styles.sidepanelWrapper}>

                </div>
            </div>

            {hoverModal[0] && hoverDiv()}
        </>
    )
=======
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleFilterModal = (status) => setShowFilterModal(status);

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
      <SearchBar onFilterClick={() => handleFilterModal(true)} />
      <div className={styles.graphCanvas} id="demo-canvas"></div>
    </>
  );
>>>>>>> 48dc97d0ae076292dad6048ac5bc4aa1c74659f4
};

export default Home;
