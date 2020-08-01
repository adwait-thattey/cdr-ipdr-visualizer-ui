import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Modal } from 'antd';
import SidePanel from '../../components/SidePanel/Sidepanel';

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const getNodeData = async () => new Promise((res, rej) => {
    setTimeout(() => {
        res({
            name: "Brijesh Bumrela",
            address: "Death Valley",
            phone_numbers: [
                { number: "1234567890", imsi: "1234567890abcdfg" }, 
                { number: "1234567890", imsi: "1234567890hijkml" }
            ],
            devices: [
                { imei: "efunewfiun32", mac: "80:20:42:41:41" }, 
                { imei: "efunewfiun32", mac: "80:20:42:11:90" }
            ],
        })
    }, 1000);
})


const cdrData = [{from: 1, to: 2, frequency: 5, calls: []}, 
    {from: 1, to: 3, frequency: 5, calls: []}, 
    {from: 2, to: 3, frequency: 5, calls: []}, 
    {from: 2, to: 3, frequency: 5, calls: []}
]

const ipdrData = [
    {from: 1, service: 1, records: 3}, 
    {from: 2, service: 3, records: 2}, 
    {from: 1, service: 3, records: 4}, 
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
        var G = new window.jsnx.Graph();
        // G.addNode(1, { count: 12, color: getRandomColor() });
        // G.addNode(2, { count: 8, color: getRandomColor() });
        // G.addNode(3, { count: 15, color: getRandomColor() });
        // G.addEdge(3, 1, { edge_labels: "node1" });
        // G.addEdge(3, 2, { edge_labels: "node2" });


        // User nodes
        for (let ele of users) {
            const { id } = ele;
            G.addNode(id, { type: "user", color: "orange", value: id + 15 })
        }

        // Service nodes
        for (let ele of services) {
            const { id } = ele;
            const newId = id + 100
            G.addNode(newId, { type: "user", color: "blue", value: newId })
        }

        // CDR edges
        for (let ele of cdr) {
            const { from, to, frequency } = ele;
            G.addEdge(from, to, { frequency, color: 'blue' });
        }

        // IPDR edges
        for (let ele of ipdr) {
            const { from, service } = ele;
            G.addEdge(from, service + 100);
        }

        window.jsnx.draw(G, {
            element: '#demo-canvas',
            withLabels: true,
            nodeAttr: {
                r: function(d) {
                    return d.data.value > 100 ? 15 : d.data.value;
                }
            },
            nodeStyle: {
                fill: (d) => d.data.color 
            }
        });


        window.d3.selectAll('.node').on('mouseenter', d => {
            setHoverModal([true, d]);
        });

        window.d3.selectAll('.node').on('click', async(d) => {
            const nodeData = await getNodeData(d.node);
            const updatedData = { id: d.node, ...nodeData }
            setDetailPanel([true, updatedData]);
        });


        window.d3.selectAll('.node').on('mouseleave', d => {
            setHoverModal([false, null]);
        });

    }, [cdr, ipdr, users, services]);

    console.log(detailPanel)

    const hoverDiv = () => {
        const { x, y } = hoverModal[1];
        return (
            <div className={styles.hoverModal} style={{ left: x + 100, top: y - 10 }}>{hoverModal[1].node}</div>
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
                    {<SidePanel data={detailPanel[1]}/>}
                </div>
            </div>

            {hoverModal[0] && hoverDiv()}
        </>
    )
};

export default Home;