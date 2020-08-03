import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Modal, Dropdown, Menu, Button as AiButton } from 'antd';
import SidePanel from '../../components/SidePanel/Sidepanel';
import Filter from '../Filter/Filter';
import CustomPopup from '../../components/CustomPopup/CustomPopup';
import { getFilteredData, getUserData, getCdrData, getServiceInfo, getWatchLists, getIpdrData } from '../../services/filters';
import Button from '../../components/Button/Button';
import Circle from '../../components/Circle/Circle';


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
for (let i = 0; i < 10; i++) {
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

const FilterButtons = ({
  onFilterClick,
  wishlists,
  updateWishList,
  selectedUserList,
}) => {
  const genDropD = (wishlists) => {
    return (
      <Menu>
        {wishlists &&
          wishlists.map((wishlist) => (
            <Menu.Item>
              <a href="#" onClick={() => updateWishList(wishlist.id)}>
                {wishlist.name}
              </a>
            </Menu.Item>
          ))}
      </Menu>
    );
  };

  const menu = genDropD(wishlists);
  return (
    <div className={styles.buttons}>
      <Button text="Filter" onClick={onFilterClick} />
      <Dropdown overlay={menu} placement="topCenter">
        <AiButton className={styles.dropdownbtn} size="large">
          {(selectedUserList && selectedUserList.name) || 'Watch Lists'}
        </AiButton>
      </Dropdown>
    </div>
  );
};

const Home = () => {
  // Modal to showcase the pop up modal on hovering the node
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Modal to showcase the pop up modal on hovering the node
  const [hoverModal, setHoverModal] = useState([false, null]);

  // Sidepanel to showcase the detailed side panel
  const [detailPanel, setDetailPanel] = useState([false, null]);

  const [cdr, setCdrData] = useState([]);
  const [detailedCdr, setDetailedCdr] = useState(detailedCdrData);
  const [ipdr, setIpdr] = useState(ipdrData);
  const [detailedIpdr, setDetailedIpdr] = useState(detailedIpdrData);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState(servicesData);

  // Filters state
  const [filters, setFilters] = useState(initialFilters);

  // Users list
  const [watchLists, setWatchLists] = useState(userListsData);


  const handleFilterModal = (status) => setShowFilterModal(status);


  useEffect(() => {
    async function fetchData() {

      try {
        const updatedData = await getFilteredData(filters);
        const { cdrData, ipdrData } = updatedData;
    

        const userIdsFromCdr = getUserNodes(cdrData, "cdr");
        const userInfoOne = await getUserInfo(userIdsFromCdr);


        const userIdsFromIpdr = getUserNodes(ipdrData, "ipdr");
        const userInfoTwo = await getUserInfo(userIdsFromIpdr)

        const serviceNodes = getServiceNodes(ipdrData);
        const getServices = await getServiceInfo(serviceNodes);


        // { id: 49, from: 1, to: 2, calls: [68, 70, 73] },

        const finalUserList = [...userInfoOne, ...userInfoTwo]

        cdrData.forEach(data => {
          const { from, to, calls } = data;
          finalUserList.forEach(user => {
            if (user.id === from || user.id === to) {
                if (!user.count) user.count = 0
                if (!user.calls) user.calls = []
                user.count += calls.length;
                user.calls = [...user.calls, ...calls]
            }
          })
        })


        ipdrData.forEach(data => {
          const { from, calls } = data;
          finalUserList.forEach(user => {
            if (!user.count) user.count = 0
            if (user.id === from) {
                user.count += calls.length;
            }
            if (!user.calls) user.calls = []
            user.calls = [...user.calls, ...calls]
          })
        })


        const watchLists = await getWatchLists();
        const watchListWithColor = watchLists.map((list, index) => ({ ...list, color: colors[index % colors.length], selected: false }))
        setWatchLists(watchListWithColor);

        setAllValues(cdrData, ipdrData, finalUserList, getServices)
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

  const getUserInfo = async (userIds) => await getUserData(userIds);

  const getEdgeColor = (node) => {

    const frequency = node.data.frequency;

    if (frequency < 10) return "green";
    if (frequency < 20) return "yellow";
     return "red";
  }

  const handleFilters = async (newFilterState) => {
    setFilters(newFilterState);
    setShowFilterModal(false);
    try {
      const updatedData = await getFilteredData(newFilterState);
      const { cdrData } = updatedData;
      const userIds = getUserNodes(cdrData);
      const userInfo = await getUserInfo(userIds);
      setAllValues(cdrData, [], userInfo, [])
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

    // const selected = window.d3.selectAll(".node").attr("fill", (d) => {
    //   console.log(d);
    //   return "#000";
    // })

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
      let color = "orange";
      // if (node.data.count > 6) color = "red";
      // else if (node.data.count > 3) color = "green";
      // else color = "yellow";
      // for (let list of watchLists) {
      //   if (!list.selected) continue;
      //   if (list.users_list.includes(node.node)) {
      //     return list.color;
      //   }
      // }
      if (node.data.type === "service") return 'blue';

      return node.data.highlighted ? 'brown' : color;
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
      const { from, to, calls } = ele;
      if (
        users.find(
          (user) => (user.id === from || user.id === to) && user.removed,
        )
      ) {
        continue;
      }
      G.addEdge(from, to, { frequency: calls.length, });
    }

    // IPDR edges
    for (let ele of ipdr) {
      const { from, to, calls } = ele;

      if (users.find((user) => (user.id === from || user.id === to) && user.removed)) {
        continue;
      }
      G.addEdge(from, to, { ...ele, frequency: calls.length });
    }

    window.jsnx.draw(G, {
      element: '#demo-canvas',
      nodeAttr: {
        r: (d) => (d.data.type === 'service' ? 20 : 10),
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

    window.d3.selectAll('.node').on('click', async (d) => {

      const updatedData = {
        id: d.node,
        ...d.data,
        type: d.data.type,
      };

      if (d.data.type === "service") {
        const ipdrs = getAllIpdrsFromUserNode(d.node)
        const detailedIPdrs = await getIpdrData(ipdrs);
        setDetailedIpdr(detailedIPdrs);

      } else {
        const cdrs = getAllCdrsFromUserNode(d.node)
        const detailedCdrs = await getCdrData(cdrs);
        setDetailedCdr(detailedCdrs);
      }


      setDetailPanel([true, updatedData]);
    });

    window.d3.selectAll('.node').on('mouseleave', (d) => {
      setHoverModal([false, null]);
    });
  }, [cdr, ipdr, users, services, watchLists]);


  const getAllCdrsFromUserNode = (node) => {
    
    const nodes = [];
    
    cdr.filter(ele => ele.from === node || ele.to === node).forEach(node => {
      nodes.push(...node.calls)
    })

    return nodes;
  }

  const getAllIpdrsFromUserNode = (node) => {
    
    const nodes = [];
    
    ipdr.filter(ele => ele.from === node || ele.to === node).forEach(node => {
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
          data={{ id: hoverModal[1].node, name: hoverModal[1].data.name }}
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
          header="Visualize"
          showClusterButton={true}
          />
        
        {/* <SearchBar
          wishlists={userLists}
          updateWishList={handleUserListSelect}
          onFilterClick={() => handleFilterModal(true)}
          selectedUserList={selectedUserList}
        /> */}
        {/* <Header
          title="Visualize"
          onFilterClick={() => handleFilterModal(true)}
          child={
            <FilterButtons
              wishlists={watchLists}
              updateWishList={handleUserListSelect}
              onFilterClick={() => handleFilterModal(true)}
              // selectedUserList={selectedUserList}
            />
          }
        /> */}
          <div className={styles.mark}>
            <h4>Calls Greater than 8 <Circle color="red"/></h4>
            <h4>Calls Greater than 6 <Circle color="green"/></h4>
            <h4>Calls Greater than 4 <Circle color="yellow"/></h4>
          </div>
        <div className={styles.networkWrapper}>
          
          <div className={styles.graphCanvas} id="demo-canvas"></div>
          <div className={styles.sidepanelWrapper}>
            {
              <SidePanel
                removeNode={handleRemoveNode}
                data={detailPanel[1]}
                highLightNode={handleHighLightNode}
                cdr={cdr}
                ipdr={ipdr}
                detailedCdr={detailedCdr}
                detailedIpdr={detailedIpdr}
                servicesData={servicesData}
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
