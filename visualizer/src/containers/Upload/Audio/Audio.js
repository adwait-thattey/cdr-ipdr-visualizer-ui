import React, { useState } from 'react';
import styles from './Audio.module.scss';
import { Typography } from 'antd';
import Button from '../../../components/Button/Button';
import axios from '../../../services/axios';

const { Title } = Typography;

const AudioUpload =  () => {

    const [media, setMedia] = useState(null);

    const handleUpload = async () => {
        if (!media) return;
        const data = new FormData();
        data.append("file", media);

        const res = await axios.post("/upload", data);
        console.log(res);
    }

    const handleChange = (e) => {
        setMedia(e.target.files[0])
    }

    return (
        <div className={styles.container}>
        <div className={styles.element}>
            <Title level={4}>Upload Audio</Title>

            <input type="file" name="file" onChange={handleChange} />
            <Button text="Upload" onClick={() => handleUpload()}/>
        </div>
        </div>
    );
};

export default AudioUpload;
