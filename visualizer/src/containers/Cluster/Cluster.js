import React, { useEffect, useState } from 'react';
import styles from './Cluster.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Modal } from 'antd';
import Filter from '../Filter/Filter';
import CustomPopup from '../../components/CustomPopup/CustomPopup';
import { getClusterInfo } from '../../services/clusters';
import SidePanel from '../../components/SidePanel/Sidepanel';


const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


const edgeColors = {
  5: 'green',
  10: 'yellow',
  20: 'red'
}

const colors = [];
for (let i = 0; i < 100; i++) {
  colors.push(getRandomColor());
}


const userListsData = [
  {
    id: 1,
    users_list: [1],
    name: 'Watchlist 1',
    to_display: true,
    raw_data: 'user_id,125',
  },
];

const cdrData = [
  { id: 49, from: 1, to: 2, frequency: 5, calls: [68, 70, 73] },
];

const ipdrData = [
  { id: 70, from: 1, service: 1 + 50000, records: 3, calls: [21] },
];

const detailedCdrData = [
  {
    id: 68,
    timestamp: '2020-08-01T18:56:41+05:30',
    from_number: '9447774476',
    to_number: '9876543211',
    duration: 471,
    call_type: 'Outgoing',
    imei: null,
    imsi: null,
    cell_id: null,
    location_lat: null,
    location_long: null,
  }
];

const detailedIpdrData = [
  {
    id: 21,
    start_time: '2019-03-30T19:02:41+05:30',
    duration: 523,
    private_ip: null,
    private_port: null,
    public_ip: null,
    public_port: null,
    destination_ip: null,
    destination_port: 5432,
    from_number: null,
    imei: null,
    imsi: null,
    cell_id: null,
    location_lat: null,
    location_long: null,
    upload_data_volume: null,
    download_data_volume: null,
  },
];

const usersData = [
  {
    id: 1,
    name: 'Brijesh',
    phone_numbers: ['1234567890', '0987654321', '3628292838'],
  },
];

const servicesData = [
  {
    id: 1 + 50000,
    name: 'WhatsApp',
    port: 5432,
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
};

const Home = () => {
    // Modal to showcase the pop up modal on hovering the node
    const [showFilterModal, setShowFilterModal] = useState(false);

    // Modal to showcase the pop up modal on hovering the node
    const [hoverModal, setHoverModal] = useState([false, null]);

    // Sidepanel to showcase the detailed side panel
    const [detailPanel, setDetailPanel] = useState([false, null]);

    const [cdr, setCdrData] = useState([]);
    const [ipdr, setIpdr] = useState([]);
    const [users, setUsers] = useState([]);
    const [services, setServices] = useState([]);

    // Filters state
    const [filters, setFilters] = useState(initialFilters);

    // Users list
    const [watchLists, setWatchLists] = useState(userListsData);



    const [nodes, setNodes] = useState([])
    const handleFilterModal = (status) => setShowFilterModal(status);

    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);


    const [communityMaxNode, setCommunityMaxNode] = useState({});


    const getCommunities = () => {
        return {
            '8272891221': [0, 3],
            '8272891222': [0, 9],
            '8272891223': [1, 3],
            '8272891224': [0, 1],
            '8272891225': [0, 3],
            '8272891226': [0, 9],
            '8272891227': [1, 3],
            '8272891228': [0, 1],
        }
    }

    useEffect(() => {
        async function fetchData() {

            try {
                const communityObj = await getClusterInfo(filters);

                const maxValues = {}

                for (let key in communityObj) {
                  if (!maxValues[communityObj[key][0]]) {
                    maxValues[communityObj[key][0]] = 0
                  }
                  maxValues[communityObj[key][0]] = Math.max(maxValues[communityObj[key][0]], communityObj[key][1])
                }


                console.log("MAXVALUES", maxValues);
                setCommunityMaxNode(maxValues)
                setNodes(communityObj)
            } catch(e) {
                console.log(e);
            }

        }
        fetchData();
    }, [filters]);

  const getUserNodes = (apiData, type) => {
      const users = new Set()
      apiData.forEach(data => {
        users.add(data.from);
        // For IPDR check is required
        if (type === "cdr") users.add(data.to);
      })
      return users;
  }

  const getServiceNodes = (apiData) => {
      const services = new Set()
      apiData.forEach(data => {
          services.add(data.to);
      })
      return services;
  }

//   const getUserInfo = async (userIds) => await getUserData(userIds);

  const getEdgeColor = (node) => {
        return 'red'
  }

  const handleFilters = async (newFilterState) => {
    setFilters(newFilterState);
    setShowFilterModal(false);
    try {
        const communityObj = getCommunities(newFilterState);
        setNodes(communityObj)
    } catch (e) {
      console.log(e);
    }
  };

  const setAllValues = (cdr, ipdr, users, services) => {
    setCdrData(cdr);
    setIpdr(ipdr);
    setUsers([...users]);
    setServices(services);
  };

  const handleHighLightNode = (node, checked) => {
    const selectedNode = users.find((ele) => ele.id === node.id);
    selectedNode.highlighted = checked;

    // Need to update details panel for it to rerender
    setDetailPanel((prev) => [true, { ...prev[1], highlighted: checked }]);

    const otherNodes = users.filter((ele) => ele.id !== node.id);
    setUsers([...otherNodes, selectedNode]);
  };

  const handleRemoveNode = (node) => {
    const selectedNode = users.find((ele) => ele.id === node.id);
    selectedNode.removed = true;

    setDetailPanel([false, null]);

    const otherNodes = users.filter((ele) => ele.id !== node.id);
    setUsers([...otherNodes, selectedNode]);
  };

  const handleUserListSelect = (checked, id) => {
    const watchList = watchLists.find(user => user.id === id);
    const otherWatchLists = watchLists.filter(user => user.id !== id);
    if (!watchList) throw new Error('watchList not found');
    watchList.selected = checked;
    
    setWatchLists([...otherWatchLists, { ...watchList }])
  };

  const getNodeColor = (node) => {
      return colors[node.data.comm_index];
  }

  useEffect(() => {
    var G = new window.jsnx.Graph();
    // G.addNode(1, { count: 12, color: getRandomColor() });
    // G.addNode(2, { count: 8, color: getRandomColor() });
    // G.addNode(3, { count: 15, color: getRandomColor() });
    // G.addEdge(3, 1, { edge_labels: "node1" });
    // G.addEdge(3, 2, { edge_labels: "node2" });
    // User nodes
    for (let ele in nodes) {
        if (selectedCommunity !== null) {
            if (nodes[ele][0] === selectedCommunity) {
                G.addNode(ele, { comm_index: nodes[ele][0], influence: nodes[ele][1] });
            }
        }
        else {
            G.addNode(ele, { comm_index: nodes[ele][0], influence: nodes[ele][1] });
        }
    }



    window.jsnx.draw(G, {
      element: '#demo-canvas',
      withLabels: true,
      nodeAttr: {
        r: (d) => {
          if (d.data.influence === communityMaxNode[d.data.comm_index]) return 20;
          return d.data.influence + 10
        },
      },
      layoutAttr: {
        charge: -120,
        linkDistance: 160,
      },
      nodeStyle: {
        fill: (d) => getNodeColor(d),
      },
      labels: (d) => {
        let name = d.data.name;
        if (name && name.length > 6) {
          name = name.slice(0, 6) + '...';
        }
        return name;
      },
      edgeStyle: {
        fill: d => getEdgeColor(d)
      },
      stickyDrag: true,
    });

    window.d3.selectAll('.node').on('mouseenter', (d) => {
      setHoverModal([true, d]);
    });

    window.d3.selectAll('.node').on('click', (d) => {
        if (selectedCommunity === d.data.comm_index) setSelectedCommunity(null)
        else setSelectedCommunity(d.data.comm_index);
        setSelectedNode(d)
        setHoverModal([false, null]);
    });

    window.d3.selectAll('.node').on('mouseleave', (d) => {
      setHoverModal([false, null]);
    });
  }, [nodes, selectedCommunity]);


  const getAllCdrsFromUserNode = (node) => {
    
    const nodes = [];
    
    cdr.filter(ele => ele.from === node || ele.to === node).forEach(node => {
      nodes.push(...node.calls)
    })

    return nodes;
  }

  const hoverDiv = () => {
    const event = window.d3.event;

    if (event) {
      const x = window.d3.event.pageX;
      const y = window.d3.event.pageY;

      return (
        <CustomPopup
          data={{ id: hoverModal[1].node, name: hoverModal[1].node }}
          x={x}
          y={y}
        />
      );
    } else {
      return <></>;
    }
  };


  return (
    <>
      <Modal
        title="Apply Filters"
        visible={showFilterModal}
        onCancel={() => handleFilterModal(false)}
        footer={null}
      >
        <Filter updateChange={handleFilters} modalChange={handleFilterModal} />
      </Modal>

      <div className={styles.fullContainer}>
        <SearchBar
          wishlists={watchLists}
          updateWishList={handleUserListSelect}
          onFilterClick={() => handleFilterModal(true)}
          header="Clusters"
        />

        <div className={styles.networkWrapper}>
          <div className={styles.graphCanvas} id="demo-canvas"></div>
          <div className={styles.sidepanelWrapper}>
            {
              <SidePanel
                data={selectedNode}
                cluster={true}
              />
            }
          </div>
        </div>

        {hoverModal[0] && hoverDiv()}
      </div>
    </>
  );
};

export default Home;
