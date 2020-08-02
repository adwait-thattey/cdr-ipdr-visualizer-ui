import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Modal } from 'antd';
import SidePanel from '../../components/SidePanel/Sidepanel';
import Filter from '../Filter/Filter';
import CustomPopup from '../../components/CustomPopup/CustomPopup';
import { getFilteredData } from '../../services/filters';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getNodeData = async () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res({
        name: 'Brijesh Bumrela',
        address: 'Death Valley',
        phone_numbers: [
          { number: '7985641784', imsi: '9878ARUSNCJA1234' },
          { number: '9898784515', imsi: '7878AQNSANWJ1234' },
        ],
        devices: [
          { imei: 'AYDBWTAJRK23', mac: '80:20:42:41:41' },
          { imei: 'QEUSMSGFYS98', mac: '80:20:42:11:90' },
        ],
      });
    }, 1000);
  });

const cdrData = [
  { from: 1, to: 2, frequency: 5, calls: [] },
  { id: 50, from: 1, to: 3, frequency: 5, calls: [] },
  { id: 51, from: 2, to: 3, frequency: 5, calls: [] },
  { id: 52, from: 2, to: 3, frequency: 5, calls: [] },
  { id: 53, from: 3, to: 6, frequency: 5, calls: [] },
  { id: 54, from: 4, to: 6, frequency: 3, calls: [] },
  { id: 55, from: 5, to: 6, frequency: 5, calls: [] },
];

const ipdrData = [
  { id: 70, from: 1, service: 1 + 50000, records: 3 },
  { id: 71, from: 2, service: 3 + 50000, records: 2 },
  { id: 72, from: 1, service: 3 + 50000, records: 4 },
];

const usersData = [
  {
    id: 1,
    name: 'Brijesh',
    phone_numbers: ['1234567890', '0987654321', '3628292838'],
  },
  {
    id: 2,
    name: 'Adwait',
    phone_numbers: ['1234567890', '0987654321', '3628292838'],
  },
  {
    id: 3,
    name: 'Parth',
    phone_numbers: ['1234567890', '0987654321', '3628292838'],
  },
  {
    id: 4,
    name: 'Riya',
    phone_numbers: ['1234567890', '0987654321', '3628292838'],
  },
  {
    id: 5,
    name: 'Shlok',
    phone_numbers: ['1234567890', '0987654321', '3628292838'],
  },
  {
    id: 6,
    name: 'Ram',
    phone_numbers: ['1234567890', '0987654321', '3628292838'],
  },
];

const servicesData = [
  {
    id: 1 + 50000,
    name: 'WhatsApp',
    port: 5432,
  },
  {
    id: 2 + 50000,
    name: 'Messenger',
    port: 8000,
  },
  {
    id: 3 + 50000,
    name: 'Telegram',
    port: 8001,
  },
];

const initialFilters = {
  cdr: true,
  ipdr: true,

  location_lat: null,
  location_long: null,
  radius: null,

  time_start: null,
  time_end: null,

  duration_min: null,
  duration_max: null,

  frequency_min: null,
  frequency_max: null,

  user_id: null,
  exclude_these_user_id: false,

    
  cell_id: null,
  exclude_these_cell_id: false,

  
  phone_number: null,
  exclude_these_phone_number: false,


  user_id: null,
  exclude_these_user_id: false,
};

const Home = () => {
  // Modal to showcase the pop up modal on hovering the node
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Modal to showcase the pop up modal on hovering the node
  const [hoverModal, setHoverModal] = useState([false, null]);

  // Sidepanel to showcase the detailed side panel
  const [detailPanel, setDetailPanel] = useState([false, null]);

  const [cdr, setCdrData] = useState(cdrData);
  const [ipdr, setIpdr] = useState(ipdrData);
  const [users, setUsers] = useState(usersData);
  const [services, setServices] = useState(servicesData);

  // Filters state
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterModal = (status) => setShowFilterModal(status);

  const handleFilters = async (newFilterState) => {
    setFilters(newFilterState);
    setShowFilterModal(false);
    try {
      const updatedData = await getFilteredData(newFilterState);
      setAllValues(updatedData);
    } catch (e) {
      console.log(e);
    }
  };

  const setAllValues = (updatedData) => {
    const { cdr, ipdr, users, services } = updatedData;
    setCdrData(cdr);
    setIpdr(ipdr);
    setUsers(users);
    setServices(services);
  };

  const handleHighLightNode = (node, checked) => {
    const selectedNode = users.find(ele => ele.id === node.id);
    selectedNode.highlighted = checked;

    // Need to update details panel for it to rerender
    setDetailPanel((prev) => ([true, { ...prev[1], highlighted: checked }]))

    const otherNodes = users.filter(ele => ele.id !== node.id);
    setUsers([ ...otherNodes, selectedNode ])
  }

  const handleRemoveNode = (node) => {
    const selectedNode = users.find(ele => ele.id === node.id);
    selectedNode.removed = true;

    setDetailPanel([false, null])

    const otherNodes = users.filter(ele => ele.id !== node.id);
    setUsers([ ...otherNodes, selectedNode ])
  }

  useEffect(() => {
      var G = new window.jsnx.Graph();
      // G.addNode(1, { count: 12, color: getRandomColor() });
      // G.addNode(2, { count: 8, color: getRandomColor() });
      // G.addNode(3, { count: 15, color: getRandomColor() });
      // G.addEdge(3, 1, { edge_labels: "node1" });
      // G.addEdge(3, 2, { edge_labels: "node2" });
      // User nodes
      for (let ele of users) {
        if (ele.removed) {
          continue;
        }
        const { id, ...rest } = ele;
        G.addNode(id, { type: 'user', color: 'orange', value: id, ...rest });
      }

      // Service nodes
      for (let ele of services) {
        if (ele.removed) {
          continue;
        }
        const { id, ...rest } = ele;
        G.addNode(id, { type: 'service', color: 'aqua', value: id, ...rest });
      }

      // CDR edges
      for (let ele of cdr) {
        const { from, to, frequency, id } = ele;
        if (users.find(user => (user.id === from || user.id === to) && user.removed)) {
          continue;
        }
        G.addEdge(from, to, { frequency, color: 'blue', id });
      }

      // IPDR edges
      for (let ele of ipdr) {
        const { from, service, id } = ele;
        if (users.find(user => user.id === from && user.removed)) {
          continue;
        }
        G.addEdge(from, service, { id });
      }

      window.jsnx.draw(G, {
        element: '#demo-canvas',
        withLabels: true,
        nodeAttr: {
            r: d => d.data.type === "service" ? 35 : 20
        },
        layoutAttr: {
            charge: -120,
            linkDistance: 160,
        },
        nodeStyle: {
            fill: d => d.data.highlighted ? 'red' : d.data.color,
        },
        labels: d => {
            return d.data.name;
        },
        stickyDrag: true,
      });


      window.d3.selectAll('.node').on('mouseenter', (d) => {
        setHoverModal([true, d]);
      });

      window.d3.selectAll('.node').on('click', async (d) => {
          const nodeData = await getNodeData(d.node);
          const updatedData = { id: d.node, ...nodeData, type: d.data.type, ...d.data };
          setDetailPanel([true, updatedData]);
      });

      window.d3.selectAll('.node').on('mouseleave', (d) => {
          setHoverModal([false, null]);
      });

    }, [cdr, ipdr, users, services]);

    const hoverDiv = () => {
        const { x, y } = hoverModal[1];
        return (
            <CustomPopup
                data={{ id: hoverModal[1].node, name: hoverModal[1].data.name }}
                x={x}
                y={y}
            />
        );
    };

    return (
        <>
            <Modal
                title="Apply Filters"
                visible={showFilterModal}
                onCancel={() => handleFilterModal(false)}
                footer={null}
            >
                <Filter updateChange={handleFilters} modalChange={handleFilterModal}/>
            </Modal>
            <SearchBar onFilterClick={() => handleFilterModal(true)} />

            <div className={styles.networkWrapper}>
                <div className={styles.graphCanvas} id="demo-canvas"></div>
                <div className={styles.sidepanelWrapper}>
                {<SidePanel removeNode={handleRemoveNode} data={detailPanel[1]} highLightNode={handleHighLightNode}/>}
                </div>
            </div>

            {hoverModal[0] && hoverDiv()}
        </>
    );
};

export default Home;
